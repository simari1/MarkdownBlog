import Link from "next/link";

export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  thumbnail: string | null;
};

type ArticleCardProps = {
  post: Post;
};

const ArticleCard = ({ post }: ArticleCardProps) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 hover:bg-gray-600">
      <Link href={`/posts/${post.slug}`} className="block">
        <h2 className="text-xl font-semibold text-blue-400 hover:text-blue-400 hover:underline mb-2">
          {post.title}
        </h2>
        <p className="text-xs text-gray-400 mb-2">{post.date}</p>
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          {post.summary}
        </p>
        <div className="flex flex-wrap gap-3">
          {post.tags.map((tag: string, idx: number) => (
            <span
              key={idx}
              className="bg-gray-700 text-gray-100 text-xs px-2 py-1 rounded-full hover:bg-gray-600 transition"
            >
              #{tag}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
