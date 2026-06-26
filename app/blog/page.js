import { sanityClient } from '@/lib/sanity'
import { allPostsQuery, allCategoriesQuery } from '@/lib/queries'
import BlogListContainer from '@/components/blog/BlogListContainer'
import { MarketingNav } from '@/components/layout/MarketingNav'
import { MarketingFooter } from '@/components/layout/MarketingFooter'

// ISR — rebuild this page from Sanity every 3600 seconds (1 hour)
export const revalidate = 3600

export const metadata = {
  title: 'Blog | Karo Simple',
  description: 'Tips on getting more reviews, managing customer feedback, and growing your local business reputation.',
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    sanityClient.fetch(allPostsQuery),
    sanityClient.fetch(allCategoriesQuery),
  ])

  return (
    <>
      <MarketingNav />
      <main style={{ width: '100%', paddingTop: '100px', paddingBottom: '80px', minHeight: '80vh', maxWidth: '1200px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px', boxSizing: 'border-box' }}>
        {/* Page Header */}
        <section style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Blog</h1>
          <p style={{ color: '#CBD5E1' }}>Tips on reviews, reputation, and growing your local business.</p>
        </section>

        {/* Main Feed Container (Search & Pagination) */}
        <BlogListContainer initialPosts={posts} categories={categories} />
      </main>
      <MarketingFooter />
    </>
  )
}
