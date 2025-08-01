import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { remark } from "remark";
import toc from "remark-toc";
import rehypeHighlight from "rehype-highlight";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import Layout from "@/components/layout";

type Props = {
  title: string;
  date: string;
  contentHtml: string;
};

export default function Post({ title, date, contentHtml }: Props) {
  return (
    <Layout title={title} description="Markdownで記事を静的生成しています。">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <header className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-tight">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">{date}</p>
        </header>
        <article
          className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:font-bold prose-p:leading-relaxed prose-ul:leading-relaxed prose-ol:leading-relaxed prose-li:text-gray-300 prose-code:text-gray-300 prose-a:text-blue-400 prose-strong:text-gray-300 text-gray-300 prose-img:mx-auto prose-img:max-w-full prose-img:h-auto"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDir = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDir);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, "") },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const fullPath = path.join(process.cwd(), "posts", `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark()
    .use(toc, {
      heading: "目次",
      maxDepth: 3,
      tight: true,
    })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeHighlight, {
      detect: true,
      ignoreMissing: true,
    })
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();
  return {
    props: {
      title: data.title || "無題",
      date: data.date || "不明",
      contentHtml,
    },
  };
};
