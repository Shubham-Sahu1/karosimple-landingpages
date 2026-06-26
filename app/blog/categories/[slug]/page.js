import { sanityClient } from '@/lib/sanity'
import { postsByCategoryQuery, singleCategoryQuery, allCategoriesQuery } from '@/lib/queries'
import BlogListContainer from '@/components/blog/BlogListContainer'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MarketingNav } from '@/components/layout/MarketingNav'
import { MarketingFooter } from '@/components/layout/MarketingFooter'

export const revalidate = 3600

// Pre-render all category pages at build time
export async function generateStaticParams() {
  const categories = await sanityClient.fetch(allCategoriesQuery)
  return categories.map((cat) => ({ slug: cat.slug ? cat.slug.replace(/^\//, '') : '' }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const category = await sanityClient.fetch(singleCategoryQuery, { slug })
  if (!category) return { title: 'Category Not Found | Karo Simple Blog' }

  return {
    title: `${category.title} | Karo Simple Blog`,
    description: category.description || `All posts in ${category.title}`,
  }
}

export default async function CategoryPage({ params }) {
  const { slug } = await params
  const [category, posts, categories] = await Promise.all([
    sanityClient.fetch(singleCategoryQuery, { slug }),
    sanityClient.fetch(postsByCategoryQuery, { categorySlug: slug }),
    sanityClient.fetch(allCategoriesQuery),
  ])

  if (!category) notFound()

  return (
    <>
      <MarketingNav />
      <main style={{ width: '100%', paddingTop: '100px', paddingBottom: '80px', minHeight: '80vh', maxWidth: '1200px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px', boxSizing: 'border-box' }}>
        {/* Back link */}
        <Link href="/blog" style={{ color: '#3DAA72', textDecoration: 'none', display: 'inline-block', marginBottom: '30px', fontWeight: 'bold' }}>← All Posts</Link>

        {/* Category Header */}
        <section style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>{category.title}</h1>
          {category.description && <p style={{ color: '#CBD5E1', marginBottom: '10px' }}>{category.description}</p>}
          <p style={{ color: '#6B7A99', fontSize: '0.9rem' }}>{posts.length} {posts.length === 1 ? 'post' : 'posts'}</p>
        </section>

        {/* Main Feed Container (Search & Pagination) */}
        <BlogListContainer initialPosts={posts} categories={categories} activeCategorySlug={slug} />
      </main>
      <MarketingFooter />
    </>
  )
}
