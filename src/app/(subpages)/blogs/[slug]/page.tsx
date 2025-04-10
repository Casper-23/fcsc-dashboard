import { type Metadata } from "next";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { sanitize } from "isomorphic-dompurify";

import { getBlogs, getBlog } from "@/network/cmsHandlers";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog: any) => ({
    params: { slug: blog.attributes.slug },
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlog(params.slug);
  if (!blog)
    return {
      title: "Blog not found | Scalenow",
      description: "Blog cannot be found. Please check the url and try again",
    };

  return {
    title: blog.attributes.meta_title,
    description: blog.attributes.meta_description,
  };
}

const Blog = async ({ params }: Props) => {
  const blog = await getBlog(params.slug);
  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="p-5">
      <Markdown className="markdown-blogs min-h-screen" rehypePlugins={[rehypeRaw]}
      
      >
        {sanitize(blog.attributes.content)}
      </Markdown>
      </div>
  );
};

export default Blog;


