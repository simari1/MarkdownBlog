import React from "react";
import Head from "next/head";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
};

const Layout = ({ children, title, description }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "My Blog - sima"}</title>
        <meta
          name="description"
          content={
            description ||
            "Next.jsで構築されたsimaのブログ。技術的な備忘録と学びを記録しています。"
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <div className="min-h-screen bg-black text-gray-100 flex flex-col">
        {/* ヘッダー */}
        <header className="bg-gray-900 py-4 px-6 shadow-md">
          <h1 className="text-2xl font-bold text-blue-400">
            <Link href="/">📝 simaのブログ</Link>
          </h1>
        </header>

        {/* メインコンテンツ */}
        <main className="flex-1 px-6 py-8 max-w-4xl mx-auto">{children}</main>

        {/* フッター */}
        <footer className="bg-gray-900 py-4 px-6 text-sm text-gray-400 text-center">
          © 2025 sima. Powered by Next.js
        </footer>
      </div>
    </>
  );
};

export default Layout;
