import { sanityClient } from '@/lib/sanity'
import { singleAuthorQuery, postsByAuthorQuery, allAuthorSlugsQuery } from '@/lib/queries'
import BlogCard from '@/components/blog/BlogCard'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MarketingNav } from '@/components/layout/MarketingNav'
import { MarketingFooter } from '@/components/layout/MarketingFooter'

export const revalidate = 3600

// Pre-render all author pages at build time
export async function generateStaticParams() {
  const authors = await sanityClient.fetch(allAuthorSlugsQuery)
  return authors.map((a) => ({ slug: a.slug ? a.slug.replace(/^\//, '') : '' }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const author = await sanityClient.fetch(singleAuthorQuery, { slug })
  if (!author) return { title: 'Author Not Found | Karo Simple Blog' }

  return {
    title: `${author.name} - Author | Karo Simple Blog`,
    description: author.bio || `${author.name} is a ${author.role} at Karo Simple and writes articles for our blog.`,
  }
}

export default async function AuthorPage({ params }) {
  const { slug } = await params
  const [author, posts] = await Promise.all([
    sanityClient.fetch(singleAuthorQuery, { slug }),
    sanityClient.fetch(postsByAuthorQuery, { authorSlug: slug }),
  ])

  if (!author) notFound()

  return (
    <>
      <MarketingNav />
      <main style={{ width: '100%', paddingTop: '100px', paddingBottom: '80px', minHeight: '80vh', maxWidth: '1200px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px', boxSizing: 'border-box' }}>
        {/* Back link */}
        <div style={{ marginBottom: '30px' }}>
          <Link href="/blog" style={{ color: '#3DAA72', textDecoration: 'none', fontWeight: 'bold' }}>← All Posts</Link>
        </div>

        {/* Author Bio Banner */}
        <section style={{
          backgroundColor: '#1E293B',
          borderRadius: '16px',
          border: '1px solid #334155',
          padding: '40px',
          display: 'flex',
          gap: '30px',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '50px'
        }}>
          {author.photo ? (
            <Image
              src={author.photo}
              alt={author.name}
              width={120}
              height={120}
              className="rounded-full object-cover border-[3px] border-[#3DAA72]"
            />
          ) : (
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#3DAA72', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontWeight: 'bold', fontSize: '3rem' }}>
              {author.name.charAt(0)}
            </div>
          )}
          <div style={{ flex: '1 1 300px' }}>
            <span style={{ fontSize: '0.85rem', color: '#3DAA72', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{author.role}</span>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FFFFFF', margin: '5px 0 15px 0' }}>{author.name}</h1>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
              {author.bio || `${author.name} writes tips on reviews, reputation management, and growing local businesses.`}
            </p>
          </div>
        </section>

        {/* Posts List */}
        <section>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '30px' }}>
            Articles by {author.name} ({posts.length})
          </h2>

          {posts.length === 0 ? (
            <p style={{ color: '#CBD5E1' }}>No articles published yet.</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>
      </main>
      <MarketingFooter />
    </>
  )
}
