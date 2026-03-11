from pydantic import BaseModel, ConfigDict
from typing import List

class Signup(BaseModel):
    name: str
    email: str
    password: str

class UserResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    name: str
    email: str

class Login(BaseModel):
    email: str
    password: str

class LoginResponse(BaseModel):
    message: str
    user_id: int

class SkillSelection(BaseModel):
    user_id: int
    offer: List[str]
    want: List[str]

class SkillResponse(BaseModel):
    message: str