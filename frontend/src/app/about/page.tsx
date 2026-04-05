export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-8">About Me</h1>

      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>
          안녕하세요. 웹, 게임, AI 분야에서 다양한 프로젝트를 만들어온 개발자입니다.
        </p>
        <p>
          암호화폐 자동매매 봇을 실제 운영하면서 백엔드와 데이터 처리를 경험했고,
          AI 운세 서비스를 만들면서 풀스택 개발을 익혔습니다.
          Unity로 2D 게임을 개발하며 게임 시스템 설계도 공부하고 있습니다.
        </p>
        <p>
          이 포트폴리오 사이트는 직접 설계하고 구현한 프로젝트입니다.
          모든 코드를 이해하고 설명할 수 있는 것을 목표로 만들었습니다.
        </p>
      </div>

      {/* 스킬 그리드 */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-white mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">Languages</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Python</li>
              <li>TypeScript / JavaScript</li>
              <li>C#</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">Frameworks</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Next.js / React</li>
              <li>FastAPI</li>
              <li>Unity 6</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">Tools</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Supabase</li>
              <li>Git / GitHub</li>
              <li>Vercel / Render</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
