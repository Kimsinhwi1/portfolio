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

      {/* 링크들 */}
      {(project.githubUrl || project.liveUrl) && (
        <div className="mt-4 flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
            >
              Live Demo →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-600 text-gray-300 text-sm rounded hover:border-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      )}

      {/* 프로젝트 이미지 */}
      <div className="mt-8 rounded-lg overflow-hidden border border-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full"
        />
      </div>

      {/* 개요 */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-white mb-3">Overview</h2>
        <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
      </section>

      {/* 핵심 기능 */}
      {project.features && project.features.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
          <div className="space-y-3">
            {project.features.map((feature, i) => (
              <div key={i} className="flex gap-3 p-3 bg-gray-900 border border-gray-800 rounded">
                <span className="text-blue-400 font-mono text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 아키텍처 */}
      {project.architecture && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-white mb-3">Architecture</h2>
          <div className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
            <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{project.architecture}</p>
          </div>
        </section>
      )}

      {/* 성과/결과 */}
      {project.results && project.results.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-white mb-4">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.results.map((result, i) => (
              <div key={i} className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
                <p className="text-gray-300 text-sm">{result}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 도전과 해결 - 상세 버전 */}
      {project.challengeDetails && project.challengeDetails.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-white mb-4">Challenges & Solutions</h2>
          <div className="space-y-4">
            {project.challengeDetails.map((item, i) => (
              <div key={i} className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
                <div className="flex gap-2 items-start mb-2">
                  <span className="text-red-400 text-sm font-semibold shrink-0">Problem</span>
                  <p className="text-gray-300 text-sm">{item.problem}</p>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-green-400 text-sm font-semibold shrink-0">Solution</span>
                  <p className="text-gray-400 text-sm">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-white mb-3">Challenges & Learnings</h2>
          <p className="text-gray-400 leading-relaxed">{project.challenges}</p>
        </section>
      )}
    </div>
  );
}
