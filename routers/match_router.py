from fastapi import APIRouter,Depends,HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
import models

router=APIRouter()

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/matches/{user_id}")
def find_matches(user_id:int,db:Session=Depends(get_db)):
    try:
        user_wants=db.query(models.UserWantSkill.skill_id)\
            .filter(models.UserWantSkill.user_id==user_id)
        matches=db.query(models.User)\
            .join(models.UserOfferSkill)\
            .filter(models.UserOfferSkill.skill_id.in_(user_wants))\
            .filter(models.User.id != user_id)\
            .all()
        return [{"id": m.id, "name": m.name, "email": m.email} for m in matches]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Find matches failed: {str(e)}")