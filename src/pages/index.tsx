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
    <Layout title="" description="">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">📚 記事一覧</h1>

        {/* タグフィルター */}
        <TagFilter
          tags={allTags}
          selectedTag={selectedTag}
          onTagSelect={setSelectedTag}
        />

        {/* 絞り込まれた記事一覧 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
