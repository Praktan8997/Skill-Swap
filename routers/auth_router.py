from fastapi import APIRouter,Depends,HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
import schemas,crud

router=APIRouter()

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()



@router.post("/signup", response_model=schemas.UserResponse)
def signup(user:schemas.Signup,db:Session=Depends(get_db)):
    try:
        return crud.create_user(db,user)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Signup failed: {str(e)}")


@router.post("/login", response_model=schemas.LoginResponse)
def login(user:schemas.Login,db:Session=Depends(get_db)):
    try:
        db_user=crud.login_user(db,user.email,user.password)
        if not db_user:
            raise HTTPException(status_code=401,detail="Invalid credentials")
        return {"message":"login success","user_id":db_user.id}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Login failed: {str(e)}")