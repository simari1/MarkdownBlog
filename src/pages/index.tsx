import { getAllPosts } from "@/lib/posts";
import Layout from "@/components/layout";
import ArticleCard, { Post } from "@/components/articlecard";
import TagFilter from "@/components/tagfilter";
import { useState } from "react";

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}

export default function Home({ posts }: { posts: Post[] }) {
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <main className="max-w-4xl mx-auto px-6 py-8 text-gray-100 bg-black">
      <Layout title="" description="">
        <h1 className="text-4xl font-bold mb-8 text-center">📚 記事一覧</h1>

        {/* タグフィルター */}
        <TagFilter
          tags={allTags}
          selectedTag={selectedTag}
          onTagSelect={setSelectedTag}
        />

        {/* 絞り込まれた記事一覧 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </Layout>
    </main>
  );
}
