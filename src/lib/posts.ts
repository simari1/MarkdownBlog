import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDir);

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(postsDir, filename);
    const content = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(content);

    return {
      slug,
      title: data.title || "無題",
      date: data.date || "不明",
      summary: data.summary || "",
      tags: data.tags || [],
      thumbnail: data.thumbnail || null,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
