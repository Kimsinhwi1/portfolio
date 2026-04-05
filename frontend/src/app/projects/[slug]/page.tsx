import Link from "next/link";
import { getProject } from "@/lib/api";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/projects"
        className="text-blue-400 hover:text-blue-300 text-sm"
      >
        &larr; Back to Projects
      </Link>

      <h1 className="text-3xl font-bold text-white mt-4">{project.title}</h1>

      <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
        <span>{project.status}</span>
        <span>&middot;</span>
        <span>{project.startDate}</span>
        <span>&middot;</span>
        <span>{project.category}</span>
      </div>

      {/* 기술 스택 */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-sm px-3 py-1 bg-gray-800 text-blue-400 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* 설명 */}
      <section className="mt-8">
        <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
      </section>

      {/* 도전과 배움 */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-white mb-3">Challenges & Learnings</h2>
        <p className="text-gray-400 leading-relaxed">{project.challenges}</p>
      </section>

      {/* 링크들 */}
      <div className="mt-8 flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-600 text-gray-300 rounded hover:border-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
