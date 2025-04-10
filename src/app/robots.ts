import { MetadataRoute } from 'next'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000/'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: new URL('/sitemap.xml', BASE_URL).href,
  }
}