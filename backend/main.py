from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base

from routers import auth_router
from routers import skills_router
from routers import match_router


app = FastAPI()


origins = ["*"]  # allow frontend requests

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



Base.metadata.create_all(bind=engine)

app.include_router(auth_router.router)
app.include_router(skills_router.router)
app.include_router(match_router.router)