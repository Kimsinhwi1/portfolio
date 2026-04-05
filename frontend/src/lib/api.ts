import { Project } from "@/types";

// 백엔드 API 주소 - 개발 시 localhost, 배포 시 환경변수로 변경
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// 전체 프로젝트 목록 가져오기
export async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${API_URL}/api/projects`, {
    cache: "no-store", // 항상 최신 데이터
  });
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

// slug로 프로젝트 하나 가져오기
export async function getProject(slug: string): Promise<Project> {
  const res = await fetch(`${API_URL}/api/projects/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Project not found");
  return res.json();
}

// 문의 폼 전송
export async function submitContact(data: {
  name: string;
  email: string;
  message: string;
}): Promise<{ success: boolean; message: string }> {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to send message");
  return res.json();
}
