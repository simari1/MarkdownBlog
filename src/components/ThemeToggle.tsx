import React, { useEffect, useState } from 'react';

const THEME_KEY = 'theme-mode';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    // 初回マウント時にlocalStorageやOS設定からテーマを決定
    const saved = (localStorage.getItem(THEME_KEY) as 'light' | 'dark' | null);
    const system = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const initial = saved || system;
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(THEME_KEY, theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // サーバー側描画時や初回マウント前は何も表示しない
  if (!theme) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        border: '1px solid #ccc',
        background: 'var(--background)',
        color: 'var(--foreground)',
        cursor: 'pointer',
        marginLeft: '1rem',
      }}
    >
      {theme === 'light' ? '🌞 ライト' : '🌙 ダーク'}
    </button>
  );
}
