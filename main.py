from fastapi import FastAPI
from database import engine, Base

from routers import auth_router
from routers import skills_router
from routers import match_router

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(auth_router.router)
app.include_router(skills_router.router)
app.include_router(match_router.router)