import json
from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

# FastAPI 앱 생성
app = FastAPI(title="Portfolio API")

# CORS 설정 - 프론트엔드에서 이 API를 호출할 수 있도록 허용
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 모든 도메인 허용 (배포 후 Vercel 도메인으로 제한 가능)
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

# 서버 시작 시 프로젝트 데이터를 한 번만 읽어서 메모리에 저장
DATA_PATH = Path(__file__).parent / "data" / "projects.json"
with open(DATA_PATH, "r", encoding="utf-8") as f:
    PROJECTS = json.load(f)


# --- 요청/응답 모델 ---

class ContactRequest(BaseModel):
    """문의 폼 데이터 검증용 모델"""
    name: str
    email: str
    message: str


# --- API 엔드포인트 ---

@app.get("/api/health")
def health_check():
    """서버 상태 확인용"""
    return {"status": "ok"}


@app.get("/api/projects")
def get_projects():
    """전체 프로젝트 목록 반환"""
    return PROJECTS


@app.get("/api/projects/{slug}")
def get_project(slug: str):
    """slug로 특정 프로젝트 하나를 찾아서 반환"""
    for project in PROJECTS:
        if project["slug"] == slug:
            return project
    raise HTTPException(status_code=404, detail="Project not found")


@app.post("/api/contact")
def submit_contact(data: ContactRequest):
    """문의 폼 수신 - 일단 로그만 남기고 성공 응답 (이메일 전송은 나중에 추가)"""
    print(f"[Contact] {data.name} ({data.email}): {data.message}")
    return {"success": True, "message": "Message received"}
