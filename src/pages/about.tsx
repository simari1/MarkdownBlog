import Layout from "@/components/layout";

export default function About() {
  return (
    <Layout
      title="About - simaのブログ"
      description="simaのブログについて、著者の自己紹介やサイトの目的をご紹介します。"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">About</h1>

        {/* 自己紹介 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">
            👨‍💻 自己紹介（仕事）
          </h2>
          <div className="rounded-lg p-6 mb-6">
            <p className="text-lg leading-relaxed mb-4">
              はじめまして！simaと申します。現在、システムエンジニアとして活動しています。
            </p>
            <p className="text-lg leading-relaxed mb-4">
              私は新しい技術を学ぶことが大好きで、日々の開発を通じて得た知識や経験を共有することを大切にしています。
              このブログでは、勉強のために自分でブログを作りつつ、毎日のことなどを投稿していこうと思います。
            </p>
          </div>
        </section>

        {/* スキル */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">
            🛠️ システムエンジニアとしてのスキル
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                Frontend
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• React / Next.js</li>
                <li>• TypeScript / JavaScript</li>
                <li>• CSS: Bootstrap, Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                Backend
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• C# - ASP.Net, Blazor</li>
                <li>• Node.js 勉強中</li>
                <li>• Python 勉強中</li>
                <li>• SQL / NoSQL</li>
                <li>• API 開発</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">
                Others
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Git / GitHub</li>
                <li>• Azure DevOps</li>
                <li>• Azure</li>
                <li>• CI/CD</li>
                <li>• Agile / Scrum</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 経験 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">💼 経験</h2>
          <div className="rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-400">
                  クラウド基盤構築
                </h3>
                <p className="">
                  Azureを使用したクラウド基盤構築の経験があります。 Azure
                  DevOpsを使用したCI/CDの実施や、Azure Functions、Azure App
                  Service、Azure
                  Storageなどのサービスを使用した開発経験があります。 Azure
                  OpenAIを使用したAIアプリケーションの開発経験があります。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-yellow-400">
                  アプリ開発
                </h3>
                <p className="">
                  C#メインでのアプリ開発の経験があります。
                  Node.jsやPythonは個人で勉強しています。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-purple-400">
                  チーム開発
                </h3>
                <p className="">
                  Agile開発手法を用いたチーム開発の経験があります。
                  プラットフォームはAzure
                  DevOpsを利用してScrumで開発していました。
                  コードレビュー、ペアプログラミング、技術的な知識共有を通じて、チーム全体の技術レベル向上に貢献しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 興味・関心 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">
            🎯 興味・関心
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                🚀 セキュリティ
              </h3>
              <p className="">
                クラウド基盤を構築するときにいつもこれでいいのか？と自信を持てないことがあったため、セキュリティ周りを重点的に勉強しています。
                特にMicrosoft Defender for
                Cloudによるクラウド体制監視や運用監視について興味を持つようになりました。
              </p>
            </div>
            <div className="rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                🤝 AIエージェント
              </h3>
              <p className="">
                今までずっと環境構築の複雑さからFrontend技術に苦手意識がありましたが、AIエディタの支援により少しずつ勉強しています。
                現在はこのブログ作成を通して、とりあえずReactとNext.jsを個人で勉強しています。
                AI Agentを利用したアプリ開発も今後学習していきたいと思います。
              </p>
            </div>
          </div>
        </section>

        {/* 連絡先 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">
            📧 連絡先
          </h2>
          <div className="rounded-lg p-6">
            <p className="text-lg leading-relaxed mb-4">
              技術的な相談や、プロジェクトのご提案などございましたら、お気軽にお声がけください。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/simari1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                📦 GitHub
              </a>
              <a
                href="https://qiita.com/smr1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                🐦 Qiita
              </a>
            </div>
          </div>
        </section>

        {/* このブログについて */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">
            📝 このブログについて
          </h2>
          <div className="rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-purple-400">
                  技術構成
                </h3>
                <ul className="space-y-2">
                  <li>• Next.js (React)</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Markdown</li>
                  <li>• Cloudinary (画像管理)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-purple-400">
                  特徴
                </h3>
                <ul className="space-y-2">
                  <li>• 静的サイト生成 (SSG)</li>
                  <li>• レスポンシブデザイン</li>
                  <li>• ダークテーマ</li>
                  <li>• タグフィルター機能</li>
                  <li>• 画像アップロード機能</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
