import React from "react";
import ThemeToggle from "./ThemeToggle";
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
      <div className="min-h-screen flex flex-col">
        {/* ヘッダー */}
        <header className="bg-gray-900 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 shadow-md w-full">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">
              <Link href="/">📝 simaのブログ</Link>
            </h1>
            <div className="flex items-center">
              <nav className="flex space-x-6">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/admin"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Admin
                </Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* メインコンテンツ */}
        <main className="flex-1">{children}</main>

        {/* フッター */}
        <footer className="bg-gray-900 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-gray-400 text-center w-full">
          <div className="max-w-4xl mx-auto">
            © 2025 sima. Powered by Next.js
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
