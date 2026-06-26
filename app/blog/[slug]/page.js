import { sanityClient } from '@/lib/sanity'
import { singlePostQuery, allPostSlugsQuery, relatedPostsQuery } from '@/lib/queries'
import PortableTextRenderer from '@/components/blog/PortableTextRenderer'
import CommentSection from '@/components/blog/CommentSection'
import BlogCard from '@/components/blog/BlogCard'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MarketingNav } from '@/components/layout/MarketingNav'
import { MarketingFooter } from '@/components/layout/MarketingFooter'

export const revalidate = 3600

// Pre-render all known post slugs at build time
export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(allPostSlugsQuery)
  return slugs.map((s) => ({ slug: s.slug ? s.slug.replace(/^\//, '') : '' }))
}

// Dynamic SEO metadata per post
export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await sanityClient.fetch(singlePostQuery, { slug })
  if (!post) return { title: 'Post Not Found | Karo Simple Blog' }

  return {
    title: post.seo?.metaTitle || `${post.title} | Karo Simple Blog`,
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await sanityClient.fetch(singlePostQuery, { slug })

  if (!post) notFound()

  // Fetch related posts sharing category slugs
  const categorySlugs = post.categories ? post.categories.map((c) => c.slug) : []
  const relatedPosts = categorySlugs.length > 0
    ? await sanityClient.fetch(relatedPostsQuery, { currentSlug: post.slug, categorySlugs })
    : []

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  // Share links configuration
  const postUrl = `https://karosimple.in/blog/${slug}`
  const shareText = encodeURIComponent(`Check out this article: ${post.title}`)
  
  const twitterShare = `https://twitter.com/intent/tweet?url=${postUrl}&text=${shareText}`
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}`
  const whatsappShare = `https://api.whatsapp.com/send?text=${shareText}%20${postUrl}`

  return (
    <>
      <MarketingNav />
      <main style={{ width: '100%', paddingTop: '100px', paddingBottom: '80px', minHeight: '80vh', maxWidth: '800px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px', boxSizing: 'border-box' }}>
        {/* Back Link */}
        <div style={{ marginBottom: '20px' }}>
          <Link href="/blog" style={{ color: '#3DAA72', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Blog</Link>
        </div>

        <article>
          {/* Cover Image */}
          {post.coverImage?.asset?._ref && (
            <div style={{ marginBottom: '30px', borderRadius: '16px', overflow: 'hidden' }}>
              <img
                src={`https://cdn.sanity.io/images/ttsw6vso/production/${post.coverImage.asset._ref
                  .replace('image-', '')
                  .replace('-jpg', '.jpg')
                  .replace('-png', '.png')
                  .replace('-webp', '.webp')}`}
                alt={post.title}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          )}

          {/* Post Header */}
          <header style={{ marginBottom: '40px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '20px', color: '#FFFFFF' }}>{post.title}</h1>

            {/* Categories */}
            {post.categories?.length > 0 && (
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                {post.categories.map((cat) => (
                  <a key={cat.slug} href={`/blog/categories/${cat.slug.replace(/^\//, '')}`} style={{ color: '#3DAA72', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.85rem' }}>
                    {cat.title}
                  </a>
                ))}
              </div>
            )}

            {/* Meta */}
            <div style={{ color: '#CBD5E1', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              {post.author?.name && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', marginRight: '15px' }}>
                  {post.author.photo && (
                    <img
                      src={post.author.photo}
                      alt={post.author.name}
                      style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                  )}
                  {post.author.slug ? (
                    <Link href={`/blog/authors/${post.author.slug.replace(/^\//, '')}`} style={{ color: '#3DAA72', textDecoration: 'none', fontWeight: 'bold' }}>
                      By {post.author.name}
                    </Link>
                  ) : (
                    <span>By {post.author.name}</span>
                  )}
                </span>
              )}
              <time dateTime={post.publishedAt}>{formattedDate}</time>
            </div>
          </header>

          {/* Post Body */}
          <section style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#E2E8F0' }}>
            <PortableTextRenderer value={post.body} />
          </section>

          {/* Social Share Buttons */}
          <div style={{ borderTop: '1px solid #334155', borderBottom: '1px solid #334155', padding: '15px 0', margin: '45px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
            <span style={{ fontSize: '0.95rem', color: '#94A3B8', fontWeight: '500' }}>Share this article:</span>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href={twitterShare} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', backgroundColor: '#1E293B', border: '1px solid #334155', padding: '8px 16px', borderRadius: '8px', color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 'bold' }}>
                Twitter
              </a>
              <a href={facebookShare} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', backgroundColor: '#1E293B', border: '1px solid #334155', padding: '8px 16px', borderRadius: '8px', color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 'bold' }}>
                Facebook
              </a>
              <a href={linkedinShare} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', backgroundColor: '#1E293B', border: '1px solid #334155', padding: '8px 16px', borderRadius: '8px', color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 'bold' }}>
                LinkedIn
              </a>
              <a href={whatsappShare} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', backgroundColor: '#3DAA72', padding: '8px 16px', borderRadius: '8px', color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 'bold' }}>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div style={{ marginTop: '50px', borderTop: '1px solid #334155', paddingTop: '40px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '25px' }}>Related Articles</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
                {relatedPosts.map((rPost) => (
                  <BlogCard key={rPost.slug} post={rPost} />
                ))}
              </div>
            </div>
          )}

          {/* Comments Section */}
          <CommentSection postSlug={slug} />
        </article>
      </main>
      <MarketingFooter />
    </>
  )
}
