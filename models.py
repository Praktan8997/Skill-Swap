from sqlalchemy import Column,Integer,String,ForeignKey
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password = Column(String(200), nullable=False)


class Skill(Base):
    __tablename__ = "skills"

    id = Column(Integer,primary_key=True,index=True)
    name = Column(String(100),unique=True)


class UserOfferSkill(Base):
    __tablename__ = "user_offer_skills"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    skill_id = Column(Integer, ForeignKey("skills.id"), nullable=False, index=True)


class UserWantSkill(Base):
    __tablename__ = "user_want_skills"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    skill_id = Column(Integer, ForeignKey("skills.id"), nullable=False, index=True)