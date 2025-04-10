const CMS_URL = process.env.NEXT_PUBLIC_CMS_API_URL;
const CMS_TOKEN = process.env.CMS_TOKEN;

export const getBlogs = async () => {
  const response = await fetch(
    `${CMS_URL}/api/blogs?sort=publishedAt:desc&populate=*`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CMS_TOKEN}`,
      },
    },
  );
  return (await response.json()).data ?? null;
};

export const getBlog = async (slug: string) => {
  const response = await fetch(
    `${CMS_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CMS_TOKEN}`,
      },
    },
  );
  return (await response.json()).data[0] ?? null;
};

export async function fetchBlogSlugs() {
  const blogs = await getBlogs();
  return blogs.map((blog: any) => `/blogs/${blog.attributes.slug}`);
}
