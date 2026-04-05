// 프로젝트 데이터의 타입 정의 - 백엔드 projects.json과 구조가 동일
export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  category: string;
  featured: boolean;
  githubUrl: string | null;
  liveUrl: string | null;
  image: string;
  challenges: string;
  startDate: string;
  status: string;
  // 상세 페이지용 추가 필드
  features?: string[];
  architecture?: string;
  results?: string[];
  challengeDetails?: { problem: string; solution: string }[];
}
