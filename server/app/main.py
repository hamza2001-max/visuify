from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.orm import Session
from .db.database import Base, engine, get_db
from .models.models import User
from .utils.auth import hash_password, create_access_token

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.post("/signup/")
def sign_up(username: str, email: str, password: str, db: Session = Depends(get_db)):
    user_exists = db.query(User).filter(User.email == email).first()
    if user_exists:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = hash_password(password)
    new_user = User(username=username, email=email, hashed_password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "User created successfully"}

@app.post("/login/")
def login(email: str, password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()
    if not user or not hash_password(password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}
