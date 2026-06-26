# Karo Simple — Sanity CMS Integration V2
## Blog Pages on karosimple.in
### Developer Handoff Document (AI-Ready)

---

**Project:** karosimple.in — Marketing Website  
**Phase:** V2 — Connecting Sanity CMS to Next.js  
**Prerequisite:** V1 must be complete — Studio live at karosimple-studio.vercel.app, schemas defined, seed data verified  

**Sanity Project ID:** ttsw6vso  
**Sanity Dataset:** production  
**Blog base route:** /blog  
**Category route:** /blog/categories/[slug]  

---

> **Important for AI reading this document:** The developer has confirmed there is no existing data fetching pattern in the marketing site yet. All fetch patterns introduced in this document are the first and should be treated as the project standard going forward. All files are JavaScript (.js or .jsx), never .ts or .tsx. Do not add TypeScript to any file.

---

## Phase Plan Overview

| Phase | What Gets Built | Deliverable |
|---|---|---|
| Phase 1 | Sanity client + GROQ queries | `src/lib/sanity.js` + `src/lib/queries.js` |
| Phase 2 | Blog listing page | `/blog/page.js` |
| Phase 3 | Single post page | `/blog/[slug]/page.js` |
| Phase 4 | Category listing page | `/blog/categories/[slug]/page.js` |
| Phase 5 | Revalidation webhook | `/api/revalidate/route.js` |
| Phase 6 | Sanity webhook registration | Dashboard config (no code) |
| Phase 7 | Shared blog components | `BlogCard`, `CategoryBadge`, `PortableTextRenderer` |
| Phase 8 | Verification checklist | Manual QA steps |

---

## Folder Structure Decision

Since there is no blog route yet, create it at `src/app/blog/`. This sits inside the marketing site's App Router and keeps things clean without adding nesting complexity. If the project already has a `src/marketing/` separation, mirror that pattern — but the relative structure inside remains identical.

Final folder structure for all blog-related files:

```
src/
  lib/
    sanity.js              ← Sanity client config
    queries.js             ← All GROQ queries in one place
  app/
    blog/
      page.js              ← /blog listing
      [slug]/
        page.js            ← /blog/[slug] single post
      categories/
        [slug]/
          page.js          ← /blog/categories/[slug] filtered listing
    api/
      revalidate/
        route.js           ← Webhook endpoint for instant revalidation
  components/
    blog/
      BlogCard.jsx         ← Post card used on listing and category pages
      CategoryBadge.jsx    ← Pill badge showing category name
      PortableTextRenderer.jsx  ← Renders Sanity rich text body
```

---

## Phase 1 — Sanity Client and GROQ Queries

### Step 1.1 — Install Dependencies

Run this in the root of the marketing Next.js project:

```bash
npm install @sanity/client @portabletext/react
```

Only two packages. Do not install next-sanity, sanity, or any other Sanity package for the marketing site. Those are for the Studio project only.

### Step 1.2 — Create the Sanity Client

Create `src/lib/sanity.js`:

```js
import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'ttsw6vso',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
```

**Why useCdn: true** — For public blog content, CDN caching is correct. It means pages load faster because responses are served from Sanity's global edge network. The webhook in Phase 5 handles cache busting when Chandan publishes new content.

### Step 1.3 — Create GROQ Queries File

Create `src/lib/queries.js`:

```js
// All posts — used on /blog listing page
// Returns only fields needed for cards, not the full body
export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt,
    "author": author->{ name, "photo": photo.asset->url },
    "categories": categories[]->{ title, "slug": slug.current }
  }
`

// Single post by slug — used on /blog/[slug]
// Returns full body and SEO fields
export const singlePostQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    excerpt,
    body,
    coverImage,
    publishedAt,
    "author": author->{ name, role, bio, "photo": photo.asset->url },
    "categories": categories[]->{ title, "slug": slug.current },
    seo
  }
`

// All post slugs — used in generateStaticParams to pre-render posts at build time
export const allPostSlugsQuery = `
  *[_type == "post"]{ "slug": slug.current }
`

// Posts by category slug — used on /blog/categories/[slug]
export const postsByCategoryQuery = `
  *[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt,
    "author": author->{ name, "photo": photo.asset->url },
    "categories": categories[]->{ title, "slug": slug.current }
  }
`

// All categories — used to populate category nav and generateStaticParams
export const allCategoriesQuery = `
  *[_type == "category"] | order(title asc) {
    title,
    "slug": slug.current,
    description
  }
`

// Single category by slug — used to get category title for page heading
export const singleCategoryQuery = `
  *[_type == "category" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    description
  }
`
```

> **Note for AI:** Every query uses `"slug": slug.current` to flatten the slug object into a plain string. This means throughout the codebase, `post.slug` is always a string like `"how-to-get-more-reviews"` — never an object. Do not destructure `.current` anywhere outside this file.

---

## Phase 2 — Blog Listing Page

### Step 2.1 — Create `/blog/page.js`

This is the main blog listing at karosimple.in/blog. It is a React Server Component — no `"use client"` directive.

```js
import { sanityClient } from '@/lib/sanity'
import { allPostsQuery, allCategoriesQuery } from '@/lib/queries'
import BlogCard from '@/components/blog/BlogCard'
import CategoryBadge from '@/components/blog/CategoryBadge'
import Link from 'next/link'

// ISR — rebuild this page from Sanity every 3600 seconds (1 hour)
// The webhook in Phase 5 will also trigger instant revalidation on publish
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
    <main>
      {/* Page Header */}
      <section>
        <h1>Blog</h1>
        <p>Tips on reviews, reputation, and growing your local business.</p>
      </section>

      {/* Category Filter Nav */}
      {categories.length > 0 && (
        <nav aria-label="Blog categories">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/blog/categories/${cat.slug}`}>
              <CategoryBadge label={cat.title} />
            </Link>
          ))}
        </nav>
      )}

      {/* Post Grid */}
      {posts.length === 0 ? (
        <p>No posts yet. Check back soon.</p>
      ) : (
        <div>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  )
}
```

> **Styling note for AI:** Do not add inline styles or hardcoded Tailwind classes to this file. Antigravity or Shubham will add Tailwind classes after the structure is confirmed working. Keep layout elements semantic — `<main>`, `<section>`, `<nav>`, `<div>` — so classes can be dropped in cleanly.

---

## Phase 3 — Single Post Page

### Step 3.1 — Create `/blog/[slug]/page.js`

```js
import { sanityClient } from '@/lib/sanity'
import { singlePostQuery, allPostSlugsQuery } from '@/lib/queries'
import PortableTextRenderer from '@/components/blog/PortableTextRenderer'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export const revalidate = 3600

// Pre-render all known post slugs at build time
// Any slug not in this list is rendered on demand and cached
export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(allPostSlugsQuery)
  return slugs.map((s) => ({ slug: s.slug }))
}

// Dynamic SEO metadata per post
export async function generateMetadata({ params }) {
  const post = await sanityClient.fetch(singlePostQuery, { slug: params.slug })
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
  const post = await sanityClient.fetch(singlePostQuery, { slug: params.slug })

  if (!post) notFound()

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <article>
      {/* Cover Image */}
      {post.coverImage?.asset?._ref && (
        <div>
          {/* Use next/image with Sanity image URL — see image helper note below */}
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
      <header>
        <h1>{post.title}</h1>

        {/* Categories */}
        {post.categories?.length > 0 && (
          <div>
            {post.categories.map((cat) => (
              <a key={cat.slug} href={`/blog/categories/${cat.slug}`}>
                {cat.title}
              </a>
            ))}
          </div>
        )}

        {/* Meta */}
        <div>
          {post.author?.name && <span>By {post.author.name}</span>}
          <time dateTime={post.publishedAt}>{formattedDate}</time>
        </div>
      </header>

      {/* Post Body */}
      <section>
        <PortableTextRenderer value={post.body} />
      </section>
    </article>
  )
}
```

> **Image helper note for AI:** The raw `_ref` string from Sanity looks like `image-abc123-1200x630-jpg`. The string replacement above converts it to a usable CDN URL. This is intentional and correct for this project. Do not replace it with `@sanity/image-url` unless Shubham explicitly asks for it — keep dependencies minimal.

---

## Phase 4 — Category Listing Page

### Step 4.1 — Create `/blog/categories/[slug]/page.js`

```js
import { sanityClient } from '@/lib/sanity'
import { postsByCategoryQuery, singleCategoryQuery, allCategoriesQuery } from '@/lib/queries'
import BlogCard from '@/components/blog/BlogCard'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 3600

// Pre-render all category pages at build time
export async function generateStaticParams() {
  const categories = await sanityClient.fetch(allCategoriesQuery)
  return categories.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({ params }) {
  const category = await sanityClient.fetch(singleCategoryQuery, { slug: params.slug })
  if (!category) return { title: 'Category Not Found | Karo Simple Blog' }

  return {
    title: `${category.title} | Karo Simple Blog`,
    description: category.description || `All posts in ${category.title}`,
  }
}

export default async function CategoryPage({ params }) {
  const [category, posts] = await Promise.all([
    sanityClient.fetch(singleCategoryQuery, { slug: params.slug }),
    sanityClient.fetch(postsByCategoryQuery, { categorySlug: params.slug }),
  ])

  if (!category) notFound()

  return (
    <main>
      {/* Back link */}
      <Link href="/blog">← All Posts</Link>

      {/* Category Header */}
      <section>
        <h1>{category.title}</h1>
        {category.description && <p>{category.description}</p>}
        <p>{posts.length} {posts.length === 1 ? 'post' : 'posts'}</p>
      </section>

      {/* Filtered Post Grid */}
      {posts.length === 0 ? (
        <p>No posts in this category yet.</p>
      ) : (
        <div>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  )
}
```

---

## Phase 5 — Revalidation Webhook API Route

This is what makes instant publishing work. When Chandan hits Publish in Sanity Studio, Sanity calls this endpoint, and Next.js immediately clears the cache for the affected pages.

### Step 5.1 — Create `/api/revalidate/route.js`

```js
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

// Secret token to verify the request actually comes from Sanity
// Set this in Vercel environment variables as SANITY_REVALIDATE_SECRET
const REVALIDATE_SECRET = process.env.SANITY_REVALIDATE_SECRET

export async function POST(request) {
  try {
    // Verify the secret token
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')

    if (secret !== REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    // Parse the Sanity webhook payload
    const body = await request.json()
    const { _type, slug } = body

    if (_type === 'post') {
      // Revalidate the specific post page and the blog listing
      revalidatePath('/blog')
      if (slug?.current) {
        revalidatePath(`/blog/${slug.current}`)
      }
    }

    if (_type === 'category') {
      // Revalidate the blog listing (category nav) and all category pages
      revalidatePath('/blog')
      if (slug?.current) {
        revalidatePath(`/blog/categories/${slug.current}`)
      }
    }

    return NextResponse.json({ revalidated: true, type: _type })
  } catch (err) {
    return NextResponse.json({ message: 'Revalidation failed', error: err.message }, { status: 500 })
  }
}
```

### Step 5.2 — Add Environment Variable in Vercel

1. Go to the marketing site's Vercel project (karosimple.in)
2. Settings → Environment Variables
3. Add a new variable:
   - Name: `SANITY_REVALIDATE_SECRET`
   - Value: generate a random string — use `openssl rand -hex 32` in terminal or any random string generator
   - Environment: Production + Preview
4. Copy this secret value — you will need it in Phase 6

---

## Phase 6 — Register Webhook in Sanity Dashboard

This is a dashboard configuration step, no code needed.

1. Go to sanity.io/manage and open the Karo Simple Blog project
2. Click **API** in the top nav
3. Click **Webhooks** → **Add webhook**
4. Fill in the form:

| Field | Value |
|---|---|
| Name | karosimple-marketing-revalidate |
| URL | https://karosimple.in/api/revalidate?secret=YOUR_SECRET |
| Dataset | production |
| Trigger on | Create, Update, Delete |
| Filter | `_type == "post" \|\| _type == "category"` |
| HTTP method | POST |
| HTTP Headers | Content-Type: application/json |
| Secret | leave blank (secret is in the URL query param) |

5. Replace `YOUR_SECRET` in the URL with the actual value of `SANITY_REVALIDATE_SECRET` from Step 5.2
6. Click Save
7. Publish a test post draft in Studio and confirm the webhook fires — Sanity shows delivery logs in the webhook detail page

---

## Phase 7 — Shared Blog Components

### Step 7.1 — BlogCard.jsx

Create `src/components/blog/BlogCard.jsx`:

```jsx
import Link from 'next/link'
import CategoryBadge from './CategoryBadge'

export default function BlogCard({ post }) {
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-IN', {
        year: 'numeric', month: 'short', day: 'numeric',
      })
    : null

  return (
    <article>
      {/* Cover thumbnail */}
      {post.coverImage?.asset?._ref && (
        <Link href={`/blog/${post.slug}`}>
          <img
            src={`https://cdn.sanity.io/images/ttsw6vso/production/${post.coverImage.asset._ref
              .replace('image-', '')
              .replace('-jpg', '.jpg')
              .replace('-png', '.png')
              .replace('-webp', '.webp')}`}
            alt={post.title}
            style={{ width: '100%', height: 'auto' }}
          />
        </Link>
      )}

      {/* Categories */}
      {post.categories?.length > 0 && (
        <div>
          {post.categories.map((cat) => (
            <Link key={cat.slug} href={`/blog/categories/${cat.slug}`}>
              <CategoryBadge label={cat.title} />
            </Link>
          ))}
        </div>
      )}

      {/* Title */}
      <h2>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>

      {/* Excerpt */}
      {post.excerpt && <p>{post.excerpt}</p>}

      {/* Meta */}
      <div>
        {post.author?.name && <span>{post.author.name}</span>}
        {formattedDate && <time dateTime={post.publishedAt}>{formattedDate}</time>}
      </div>

      {/* Read more */}
      <Link href={`/blog/${post.slug}`}>Read more →</Link>
    </article>
  )
}
```

### Step 7.2 — CategoryBadge.jsx

Create `src/components/blog/CategoryBadge.jsx`:

```jsx
export default function CategoryBadge({ label }) {
  return (
    <span>{label}</span>
  )
}
```

> Styling note: CategoryBadge is intentionally minimal. Add Tailwind classes here to match the design system — navy/green pill style consistent with the marketing site's light theme inner pages.

### Step 7.3 — PortableTextRenderer.jsx

Create `src/components/blog/PortableTextRenderer.jsx`:

```jsx
'use client'

import { PortableText } from '@portabletext/react'

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null
      const url = `https://cdn.sanity.io/images/ttsw6vso/production/${value.asset._ref
        .replace('image-', '')
        .replace('-jpg', '.jpg')
        .replace('-png', '.png')
        .replace('-webp', '.webp')}`
      return (
        <figure>
          <img src={url} alt={value.alt || ''} style={{ width: '100%', height: 'auto' }} />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      )
    },
  },
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    normal: ({ children }) => <p>{children}</p>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
}

export default function PortableTextRenderer({ value }) {
  if (!value) return null
  return <PortableText value={value} components={components} />
}
```

> Note: This component is marked `'use client'` because `@portabletext/react` requires a browser environment. It is the only client component in the blog. All page files (`page.js`) remain server components.

---

## Phase 8 — Verification Checklist

Go through every item before considering V2 complete. Each item must be tested in the browser, not assumed from code review.

### Local Testing (run npm run dev)

- [ ] `localhost:3000/blog` loads with no errors
- [ ] Blog listing page shows all seed posts from Sanity
- [ ] Category nav appears and links to `/blog/categories/[slug]`
- [ ] Clicking a post card navigates to the correct `/blog/[slug]` URL
- [ ] Single post page renders title, author, date, categories, and body
- [ ] Rich text body renders headings, paragraphs, and links correctly
- [ ] Images in post body render without broken image icons
- [ ] Cover image on post page renders correctly
- [ ] `/blog/categories/review-tips` (or your seed category slug) shows only posts in that category
- [ ] A slug that does not exist returns a 404 page, not a crash

### Production Testing (after Vercel deploy)

- [ ] `karosimple.in/blog` loads correctly
- [ ] `karosimple.in/blog/[seed-post-slug]` loads correctly
- [ ] `karosimple.in/blog/categories/[seed-category-slug]` loads correctly
- [ ] Browser tab title shows the correct SEO title for each page
- [ ] Publish a new post in Sanity Studio — within 5 seconds it appears on the live blog (webhook test)
- [ ] Check Sanity webhook delivery log — confirm 200 response, no errors
- [ ] Open DevTools → Network tab — confirm pages are served as HTML (not client-fetched JSON)

### SEO Check

- [ ] `<title>` tag is correct on /blog, /blog/[slug], and /blog/categories/[slug]
- [ ] `<meta name="description">` is populated on post pages using seo.metaDescription or excerpt fallback
- [ ] `<meta property="og:title">` and `og:description` are present on post pages
- [ ] View page source on a post — confirm the post title and body text appear in raw HTML (confirms SSR/SSG is working, not client rendering)

---

## Environment Variables Summary

Add these to Vercel (marketing site project) before deploying:

| Variable | Value | Where to Get It |
|---|---|---|
| `SANITY_REVALIDATE_SECRET` | Random string you generated | You created this in Phase 5 |

No other environment variables are needed. The Sanity project ID and dataset are hardcoded in `sanity.js` because they are not sensitive — they are public identifiers.

---

## What is NOT in V2 scope

The following are intentionally excluded to keep this phase focused:

- Blog search functionality
- Pagination (fine for launch, add when post count exceeds 20)
- Author profile pages at `/blog/authors/[slug]`
- Related posts section
- Social share buttons
- Comment system
- RSS feed
- Sitemap entries for blog posts (add via next-sitemap config after V2 is stable)

These can each be a small V3 addition after launch.

---

## V2 Complete — Handoff Confirmation

When all Phase 8 checklist items are checked, V2 is done. The blog is live, Chandan can publish independently, pages are pre-rendered for SEO, and the webhook ensures instant updates.

**Next after V2:** Add blog routes to the next-sitemap config so Google discovers all posts automatically.

---

*Karo Simple — Sanity CMS Integration V2 | For developer/AI handoff use only*
