import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/api";

export default async function HomePage() {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* 히어로 섹션 */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Full-Stack Developer
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          웹, 게임, AI 프로젝트를 만드는 개발자입니다.
          Python, TypeScript, C#으로 아이디어를 현실로 만듭니다.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link
            href="/projects"
            className="px-6 py-2.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2.5 border border-gray-600 text-gray-300 rounded hover:border-gray-400 hover:text-white transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* 주요 프로젝트 */}
      <section className="pb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="pb-20">
        <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {["Python", "TypeScript", "C#", "Next.js", "FastAPI", "React", "Unity", "Supabase", "Tailwind CSS", "Git"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded text-gray-300"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </section>
    </div>
  );
}
