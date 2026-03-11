from sqlalchemy.orm import Session
from fastapi import HTTPException
import models
from auth import hash_password,verify_password


def create_user(db: Session, user):

    existing = db.query(models.User).filter(models.User.email == user.email).first()

    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    new_user = models.User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


def login_user(db,email,password):

    user=db.query(models.User).filter(models.User.email==email).first()

    if not user:
        return None

    if not verify_password(password,user.password):
        return None

    return user