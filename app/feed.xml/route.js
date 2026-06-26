import { sanityClient } from '@/lib/sanity'
import { allPostsQuery } from '@/lib/queries'

export const revalidate = 3600 // Cache for 1 hour

export async function GET() {
  try {
    const posts = await sanityClient.fetch(allPostsQuery)
    const siteUrl = 'https://karosimple.in'

    const feedItemsXml = posts
      .map((post) => {
        const cleanSlug = post.slug ? post.slug.replace(/^\//, '') : ''
        const url = `${siteUrl}/blog/${cleanSlug}`
        const pubDate = new Date(post.publishedAt).toUTCString()
        const categoriesXml = post.categories
          ? post.categories.map((c) => `<category>${c.title}</category>`).join('')
          : ''

        return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${post.excerpt || ''}]]></description>
      ${categoriesXml}
    </item>`
      })
      .join('')

    const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Karo Simple Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Tips on getting more reviews, managing customer feedback, and growing your local business reputation.</description>
    <language>en-IN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${feedItemsXml}
  </channel>
</rss>`

    return new Response(rssXml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    return new Response(`Error generating feed: ${error.message}`, { status: 500 })
  }
}
