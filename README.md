# Portfolio

Full-stack developer portfolio built with Next.js + Python FastAPI.

## Structure

```
frontend/   # Next.js (TypeScript, Tailwind CSS)
backend/    # Python FastAPI
```

## Setup

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
# API docs: http://localhost:8000/docs
```

### Frontend

```bash
cd frontend
npm install
npm run dev
# Open: http://localhost:3000
```

## Environment Variables

### Frontend
- `NEXT_PUBLIC_API_URL` - Backend API URL (default: `http://localhost:8000`)

### Backend
- `FRONTEND_URL` - Frontend URL for CORS (default: `http://localhost:3000`)

## Deployment
- Frontend: Vercel
- Backend: Render
