export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-blue-400 font-mono text-sm mb-2">About</p>
      <h1 className="text-3xl font-bold text-white mb-8">sini</h1>

      {/* 소개 */}
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>
          &quot;이걸 만들 수 있을까?&quot;라는 질문에 항상 &quot;일단 만들어보자&quot;로
          답하는 개발자입니다. 2025년 초부터 코딩을 시작해 약 3개월 만에
          8개 이상의 프로젝트를 완성했습니다.
        </p>
        <p>
          실제 돈이 오가는 <strong className="text-white">암호화폐 자동매매 봇</strong>을
          직접 개발하고 라이브로 운영하면서, 코드의 안정성과 에러 핸들링이
          얼마나 중요한지 체감했습니다.
          비트코인 시장 분석과 퀀트 전략을 다루는 <strong className="text-white">AI Money Lab</strong> 블로그도
          WordPress로 구축하여 운영하고 있습니다.
        </p>
        <p>
          AI 기반 운세 서비스, Shopify 앱, Unity 게임 등 분야를 가리지 않고
          아이디어를 실현해왔습니다. 프론트엔드부터 백엔드, DB, 배포까지
          전 과정을 직접 경험하며 풀스택 개발 역량을 쌓았습니다.
        </p>
      </div>

      {/* 타임라인 */}
      <section className="mt-14">
        <h2 className="text-xl font-bold text-white mb-6">Journey</h2>
        <div className="space-y-6 border-l-2 border-gray-800 pl-6">
          <div className="relative">
            <div className="absolute -left-[33px] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-950" />
            <div className="text-sm text-blue-400 mb-1">2025.02</div>
            <div className="text-white font-semibold">개발 시작</div>
            <p className="text-gray-400 text-sm mt-1">
              FateWeaver(AI 운세), Image Alt Optimizer(Shopify 앱), SNS 자동화 스크립트를 만들며
              Next.js, Python, API 연동의 기초를 익혔습니다.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-[33px] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-950" />
            <div className="text-sm text-blue-400 mb-1">2025.03</div>
            <div className="text-white font-semibold">본격 프로젝트 확장</div>
            <p className="text-gray-400 text-sm mt-1">
              Snowball Bot(자동매매 봇)을 개발하여 실제 Upbit 거래소에서 라이브 운영 시작.
              BladeAugment(2D 액션 RPG), Candle Run(트레이딩 게임) 등 다양한 분야에 도전했습니다.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-[33px] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-950" />
            <div className="text-sm text-blue-400 mb-1">2025.04</div>
            <div className="text-white font-semibold">포트폴리오 사이트 구축</div>
            <p className="text-gray-400 text-sm mt-1">
              지금 보고 계신 이 사이트를 Next.js + Python FastAPI로 직접 설계/구현했습니다.
              AI Money Lab 블로그를 WordPress로 구축하여 퀀트 전략 리서치를 공유하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 스킬 상세 */}
      <section className="mt-14">
        <h2 className="text-xl font-bold text-white mb-6">Skills</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-blue-400 font-semibold mb-3">Languages</h3>
            <div className="space-y-3">
              {[
                { name: "Python", detail: "FastAPI, 데이터 분석, ML(XGBoost), 자동화 스크립트" },
                { name: "TypeScript / JavaScript", detail: "Next.js, React, Node.js, Vanilla JS 게임 개발" },
                { name: "C#", detail: "Unity 6 게임 개발, ScriptableObject, Input System" },
              ].map((skill) => (
                <div key={skill.name} className="p-3 bg-gray-900 border border-gray-800 rounded">
                  <div className="text-white font-medium text-sm">{skill.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{skill.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-blue-400 font-semibold mb-3">Frameworks & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Next.js 15", "React", "FastAPI", "Unity 6",
                "Tailwind CSS", "Supabase", "WordPress",
                "Shopify App", "Prisma",
              ].map((tech) => (
                <div key={tech} className="px-3 py-2 bg-gray-900 border border-gray-800 rounded text-sm text-gray-300 text-center">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-blue-400 font-semibold mb-3">Tools & APIs</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Claude API", "XGBoost", "Git / GitHub",
                "Vercel", "Render", "Telegram Bot API",
                "Upbit API", "GraphQL", "WebSocket",
              ].map((tech) => (
                <div key={tech} className="px-3 py-2 bg-gray-900 border border-gray-800 rounded text-sm text-gray-300 text-center">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 외부 링크 */}
      <section className="mt-14">
        <h2 className="text-xl font-bold text-white mb-4">Links</h2>
        <div className="space-y-3">
          <a
            href="https://github.com/Kimsinhwi1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors"
          >
            <div>
              <div className="text-white font-medium">GitHub</div>
              <div className="text-gray-500 text-sm">소스 코드 및 프로젝트</div>
            </div>
            <span className="text-gray-500">→</span>
          </a>
          <a
            href="https://aipaylab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors"
          >
            <div>
              <div className="text-white font-medium">AI Money Lab</div>
              <div className="text-gray-500 text-sm">비트코인 시장 분석 · 퀀트 전략 연구 블로그</div>
            </div>
            <span className="text-gray-500">→</span>
          </a>
          <a
            href="https://blog.naver.com/pok_hera"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors"
          >
            <div>
              <div className="text-white font-medium">Naver Blog</div>
              <div className="text-gray-500 text-sm">개발 일지 및 기술 블로그</div>
            </div>
            <span className="text-gray-500">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
