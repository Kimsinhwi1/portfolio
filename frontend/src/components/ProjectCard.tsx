import Link from "next/link";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block border border-gray-800 rounded-lg overflow-hidden hover:border-blue-500 transition-colors bg-gray-900"
    >
      {/* 프로젝트 이미지 영역 */}
      <div className="h-48 bg-gray-800 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm mt-1">{project.shortDescription}</p>

        {/* 기술 스택 배지 */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 bg-gray-800 text-blue-400 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-500">{project.status}</span>
          <span className="text-xs text-gray-500">{project.startDate}</span>
        </div>
      </div>
    </Link>
  );
}
