import Link from 'next/link'
import Image from 'next/image'

export default function BlogCard({ post }) {
  const cleanPostSlug = post.slug ? post.slug.replace(/^\//, '') : ''

  return (
    <article style={{
      display: 'flex',
      flexDirection: 'column',
      height: '340px', // Locked uniform card height
      backgroundColor: '#1E293B',
      border: '1px solid rgba(51, 65, 85, 0.6)',
      borderRadius: '24px', // Highly rounded corners matching your sketch
      padding: '16px', // Padded frame surrounding the image/content
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      boxSizing: 'border-box',
      justifyContent: 'space-between'
    }}>
      {/* Cover Image Wrapper with Inset Padding and Rounded Corners */}
      <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '16px', overflow: 'hidden', flexShrink: 0 }}>
        {post.categories?.length > 0 && (
          <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 10, display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {post.categories.slice(0, 1).map((cat) => {
              const cleanCatSlug = cat.slug ? cat.slug.replace(/^\//, '') : ''
              return (
                <Link key={cat.slug} href={`/blog/categories/${cleanCatSlug}`} style={{ textDecoration: 'none' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    fontSize: '0.65rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#3DAA72',
                    backgroundColor: 'rgba(15, 23, 42, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '9999px',
                    cursor: 'pointer'
                  }}>
                    {cat.title}
                  </span>
                </Link>
              )
            })}
          </div>
        )}

        {post.coverImage?.asset?._ref ? (
          <Link href={`/blog/${cleanPostSlug}`} style={{ display: 'block', width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
            <Image
              src={`https://cdn.sanity.io/images/ttsw6vso/production/${post.coverImage.asset._ref
                .replace('image-', '')
                .replace('-jpg', '.jpg')
                .replace('-png', '.png')
                .replace('-webp', '.webp')}`}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </Link>
        ) : (
          <div style={{ width: '100%', height: '100%', backgroundColor: '#111A2E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontWeight: '500', fontSize: '0.85rem' }}>
            No cover image
          </div>
        )}
      </div>

      {/* Title & Excerpt Content */}
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, marginTop: '12px', justifyContent: 'space-between', overflow: 'hidden' }}>
        {/* Title */}
        <h2 style={{ fontSize: '1.15rem', fontWeight: 'bold', lineHeight: '1.3', margin: '0 0 6px 0', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis' }}>
          <Link href={`/blog/${cleanPostSlug}`} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
            {post.title}
          </Link>
        </h2>

        {/* Excerpt and Read More inline side-by-side at bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto' }}>
          <p style={{
            color: '#94A3B8',
            fontSize: '0.82rem',
            lineHeight: '1.45',
            margin: 0,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            flexGrow: 1,
            marginRight: '12px'
          }}>
            {post.excerpt || 'Read the full article to learn more.'}
            <span style={{ color: '#6B7A99' }}>......</span>
          </p>
          <Link href={`/blog/${cleanPostSlug}`} style={{ color: '#3DAA72', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 'bold', whiteSpace: 'nowrap', flexShrink: 0 }}>
            Read More
          </Link>
        </div>
      </div>
    </article>
  )
}
