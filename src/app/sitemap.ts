import fs from "fs";
import path from "path";
import { getBlogs } from "@/network/cmsHandlers";
import { MetadataRoute } from "next";
import { ProductsCategoryJsonData as productData } from "@/components/Products/ProductsData";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000/";

const staticPaths = [
  { path: "/", priority: 1.0, changefreq: "daily" },
  { path: "/blogs", priority: 0.8, changefreq: "weekly" },
  { path: "/career", priority: 0.7, changefreq: "monthly" },
  { path: "/company", priority: 0.7, changefreq: "monthly" },
  { path: "/contact", priority: 0.6, changefreq: "monthly" },
  { path: "/events", priority: 0.5, changefreq: "monthly" },
  { path: "/find-dealer", priority: 0.6, changefreq: "monthly" },
  { path: "/policy", priority: 0.5, changefreq: "yearly" },
  { path: "/private-policy", priority: 0.5, changefreq: "yearly" },
  { path: "/products", priority: 0.8, changefreq: "weekly" },
  { path: "/sustainability", priority: 0.7, changefreq: "monthly" },
];

const createUrl = (path: string) => new URL(path, BASE_URL).href;

// Generate URL List TXT
async function generateUrlListTxt(sitemapData: MetadataRoute.Sitemap) {
  try {
    // Extract just the URLs from the sitemap data
    const allUrls = sitemapData.map((item) => item.url);

    // Write URLs to file
    const outputPath = path.join(process.cwd(), "public", "urllist.txt");
    fs.writeFileSync(outputPath, allUrls.join("\n"));

    console.log(`URL list generated at ${outputPath}`);
    console.log(`Total URLs generated: ${allUrls.length}`);
  } catch (error) {
    console.error("Error generating URL list:", error);
  }
}

// Generate ROR XML
async function generateRorXml(sitemapData: MetadataRoute.Sitemap) {
  try {
    // Create XML content
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:ror="http://rorweb.com/0.1/">
  <channel>
    <title>Site Sitemap</title>
    <link>${BASE_URL}</link>
    ${sitemapData
      .map(
        (url) => `
    <item>
      <link>${url.url}</link>
      <ror:link>${url.url}</ror:link>
      <ror:updatePeriod>${url.changeFrequency}</ror:updatePeriod>
      <ror:priority>${url.priority}</ror:priority>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

    // Write XML to file
    const outputPath = path.join(process.cwd(), "public", "ror.xml");
    fs.writeFileSync(outputPath, xmlContent);

    console.log(`ROR XML generated at ${outputPath}`);
    console.log(`Total URLs in ROR XML: ${sitemapData.length}`);
  } catch (error) {
    console.error("Error generating ROR XML:", error);
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = (await getBlogs()) || [];
  const staticSitemap = staticPaths.map(({ path, priority, changefreq }) => ({
    url: createUrl(path),
    lastModified: new Date().toISOString(),
    priority,
    changefreq,
  }));

  const blogsSitemap = blogs.map((blog: any) => ({
    url: createUrl(`/blogs/${blog.attributes?.slug || ""}`),
    lastModified: new Date().toISOString(),
    priority: 0.7,
    changefreq: "weekly",
  }));

  const productSitemap = (productData || []).flatMap((product) =>
    (product.subCategories || []).flatMap((subCat) =>
      (subCat.products || []).map((subProduct) => ({
        url: createUrl(
          `products/${product.url?.toLowerCase() || ""}/${
            subProduct.url?.toLowerCase() || ""
          }`
        ),
        lastModified: new Date().toISOString(),
        priority: 0.6,
        changefreq: "weekly",
      }))
    )
  );

  // Combine all sitemaps
  const sitemapData = [...staticSitemap, ...productSitemap, ...blogsSitemap];

  // Generate additional files
  await generateUrlListTxt(sitemapData);
  await generateRorXml(sitemapData);

  return sitemapData;
}

// If you want to run these generations separately
export { generateUrlListTxt, generateRorXml };
