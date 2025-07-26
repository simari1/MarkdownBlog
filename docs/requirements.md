# 1. 背景と目的

- このアプリケーションは、管理者が Markdown 形式の記事を手動で追加し、静的にビルドされたブログとして公開できる Web サイトを提供します。
- 対象ユーザーは、日々の記録・技術メモ・創作などを発信したい個人開発者・執筆者です。

# システムアーキテクチャ

```mermaid
graph TD
    A[訪問者] -->|アクセス| B[フロントエンド Next.js]
    B <-->|ビルド時読み込み| C[Markdown記事 (.md)]
    D[管理者] -->|記事追加| C
```

# 2. 機能要件

2.1 記事一覧ページ（トップページ）
すべての記事の一覧をカード形式で表示

表示項目：タイトル、サムネイル（任意）、日付、簡単な抜粋

ページ遷移：記事カードクリックで詳細ページへ

## 2.2 記事詳細ページ

Markdown 記事の全文を HTML として表示

表示項目：タイトル、日付、本文、タグ（任意）

## 2.3 ファイル構造

posts/ ディレクトリ配下に .md ファイルを格納

記事ファイルは FrontMatter 形式を使用（title, date, tags, summary）

## 2.4 記事読み込み処理

ライブラリ：gray-matter, remark, rehype

Next.js の getStaticProps / getStaticPaths を使用して静的ページ生成

## 2.5 レスポンシブ対応

Tailwind CSS により PC / スマホ両対応

フォントサイズ、余白、画像サイズを自動調整

# 3. 非機能要件

フロントエンド：Next.js (React), TypeScript, Tailwind CSS

記事管理：Git による Markdown ファイルの追加・変更

デプロイ：Vercel / Azure Static Web Apps / GitHub Pages

記事構文：Markdown（.md）、FrontMatter

SEO 対応：next/head によるタイトル・OGP 設定

表示高速化：静的生成（SSG）

コメント機能：未対応（将来的に外部サービスで追加可能）

# 4. 制約事項

データベース：使用しない（すべての記事は .md ファイル）

CMS：使用しない（GUI 投稿機能なし）

ログイン機能：管理画面なし（Git 操作のみ）

検索機能：未実装（タグ表示による絞り込みは将来的に）

# 5. ユースケース

5.1 管理者が新しい記事を追加する
posts/ ディレクトリに新しい .md ファイルを作成

FrontMatter でタイトル・日付・タグ・summary を記述

Markdown 本文を記載

GitHub へコミット＆Push

## 5.2 訪問者が記事を閲覧する

- トップページで一覧表示

- 記事カードをクリック

- 詳細ページで全文を閲覧

# 6. ページ一覧

パス 内容
/ 記事一覧ページ（トップ）
/posts/[slug] 記事詳細ページ
/about 著者プロフィール・サイト紹介（任意）

# 7. モジュール構成

7.1 Post モジュール
getAllPosts: すべての記事メタ情報を取得

getPostBySlug: 指定された Slug の記事データ取得

parseMarkdown: Markdown→HTML 変換

extractFrontMatter: gray-matter で FrontMatter 抽出

## 7.2 記事カードコンポーネント

表示項目：タイトル、日付、抜粋、サムネイル（任意）

クリックで /posts/[slug] に遷移
