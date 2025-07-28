---
title: "🧹 Git へコミット前のクリーンアップチェックリスト"
instruction: "GitHubにコードをアップロードする前のクリーンアップ処理を実行してください。動作確認は手動で実行します。"
---

✅ Lint / Format

- ESLint でコードチェック（next lint）
- Prettier で整形（VSCode で保存時に自動整形 or npx prettier --write .）
- Tailwind で使われてないクラスを確認（@apply と classnames の動的生成などが原因で残ってる場合）。tailwind.config.mjs を確認することで実施。

🧼 ファイルとコードの整理

- 不要な console.log や debug 関連の出力を削除
- 未使用 import や変数・関数を削除（VSCode でも自動検知できます）
- コメントアウトされた古いコードを消してスッキリ（保管するなら git stash もアリ）
- 型情報や Props などが使われてない場合 → TypeScript: Unused などで検知

📁 ファイル構成や命名

- components/, lib/, styles/ などのディレクトリが一貫性ある構造になっているか
- ファイル名がケバブ/キャメル/パスカルケースで混在していないか確認

🔖 Git まわり

- .gitignore に node_modules, .next, .DS_Store, \*.log, .env などが含まれてるか
- .eslintrc, .prettierrc, tailwind.config.ts など設定ファイルが適切に version 管理されているか

🔧 ビルドとパフォーマンス

- `npm run build` でビルドエラーがないか確認
- ビルド後の警告やエラーをチェック
- 不要な依存関係がないか（package.json の dependencies と devDependencies を確認）

🔒 セキュリティと環境変数

- 環境変数（.env ファイル）に機密情報が含まれていないか
- API キーやトークンがハードコードされていないか
- Cloudinary の設定が適切に管理されているか

📊 パフォーマンス最適化

- 不要な JavaScript や CSS が含まれていないか

🧪 動作確認（最低限）

- タグの絞り込みが意図どおりに切り替わるか
- Markdown 記事の一覧・詳細ページに大きなレイアウト崩れや未レンダーな部分がないか
- カラーやテーマの崩れがないか（ダークモード含む）
