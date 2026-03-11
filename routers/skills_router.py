from fastapi import APIRouter,Depends,HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
import models,schemas

router=APIRouter()

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/skills", response_model=schemas.SkillResponse)
def add_skills(data:schemas.SkillSelection,db:Session=Depends(get_db)):
    try:
        for skill in data.offer:
            skill_obj=db.query(models.Skill).filter(models.Skill.name==skill).first()
            if not skill_obj:
                skill_obj=models.Skill(name=skill)
                db.add(skill_obj)
                db.flush()
            offer=models.UserOfferSkill(user_id=data.user_id,skill_id=skill_obj.id)
            db.add(offer)
        for skill in data.want:
            skill_obj=db.query(models.Skill).filter(models.Skill.name==skill).first()
            if not skill_obj:
                skill_obj=models.Skill(name=skill)
                db.add(skill_obj)
                db.flush()
            want=models.UserWantSkill(user_id=data.user_id,skill_id=skill_obj.id)
            db.add(want)
        db.commit()
        return {"message":"skills saved"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Add skills failed: {str(e)}")