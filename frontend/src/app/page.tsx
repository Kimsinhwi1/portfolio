import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/api";

export default async function HomePage() {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* 히어로 섹션 */}
      <section className="py-24 md:py-32">
        <p className="text-blue-400 font-mono text-sm mb-4">Hi, I&apos;m</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          sini
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-400 mt-3">
          Full-Stack Developer
        </h2>
        <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
          실제 운영되는 트레이딩 봇부터 AI 운세 서비스, 2D 게임까지 —
          아이디어가 떠오르면 직접 만드는 개발자입니다.
        </p>
        <div className="mt-8 flex gap-4">
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
          <a
            href="https://github.com/Kimsinhwi1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-gray-600 text-gray-300 rounded hover:border-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* 숫자로 보는 성과 */}
      <section className="pb-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { number: "9+", label: "Projects Built" },
          { number: "3", label: "Languages" },
          { number: "1", label: "Live Trading Bot" },
          { number: "5+", label: "Frameworks Used" },
        ].map((stat) => (
          <div key={stat.label} className="text-center p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <div className="text-3xl font-bold text-blue-400">{stat.number}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* 뭘 하는 사람인지 */}
      <section className="pb-16">
        <h2 className="text-2xl font-bold text-white mb-8">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <div className="text-2xl mb-3">🌐</div>
            <h3 className="text-lg font-semibold text-white mb-2">Web Development</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Next.js와 FastAPI로 풀스택 웹 서비스를 구축합니다.
              AI API 연동, 결제 시스템, 다국어 지원까지 실제 서비스 수준의 개발 경험이 있습니다.
            </p>
          </div>
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <div className="text-2xl mb-3">🤖</div>
            <h3 className="text-lg font-semibold text-white mb-2">AI & Automation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Claude API를 활용한 AI 서비스 개발과 ML 기반 트레이딩 봇을 운영합니다.
              SNS 자동화, 데이터 파이프라인 등 자동화 시스템을 구축합니다.
            </p>
          </div>
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <div className="text-2xl mb-3">🎮</div>
            <h3 className="text-lg font-semibold text-white mb-2">Game Development</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Unity 6로 2D 액션 RPG와 농장 시뮬레이션 게임을 개발합니다.
              전투 시스템, 적 AI, 레벨 디자인 등 게임 시스템 전반을 다룹니다.
            </p>
          </div>
        </div>
      </section>

      {/* 주요 프로젝트 */}
      <section className="pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-blue-400 hover:text-blue-300">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* 기술 스택 - 카테고리별로 정리 */}
      <section className="pb-20">
        <h2 className="text-2xl font-bold text-white mb-8">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">Languages</h3>
            <div className="space-y-2">
              {[
                { name: "Python", level: 85 },
                { name: "TypeScript / JavaScript", level: 75 },
                { name: "C#", level: 65 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full">
                    <div
                      className="h-1.5 bg-blue-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "FastAPI", "Unity 6", "Tailwind CSS", "Prisma"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded text-sm text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">Tools & Services</h3>
            <div className="flex flex-wrap gap-2">
              {["Supabase", "Vercel", "Render", "Git / GitHub", "Claude API", "XGBoost"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded text-sm text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 text-center">
        <div className="p-10 bg-gray-900 border border-gray-800 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            함께 일하고 싶으시다면
          </h2>
          <p className="text-gray-400 mb-6">
            프로젝트 제안, 협업, 채용 관련 문의를 환영합니다.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
