// All posts — used on /blog listing page
// Returns only fields needed for cards, not the full body
export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt,
    "author": author->{ name, "photo": photo.asset->url, "slug": slug.current },
    "categories": categories[]->{ title, "slug": slug.current }
  }
`

// Single post by slug — used on /blog/[slug]
// Returns full body and SEO fields
export const singlePostQuery = `
  *[_type == "post" && (slug.current == $slug || slug.current == "/" + $slug || "/" + slug.current == $slug)][0] {
    title,
    "slug": slug.current,
    excerpt,
    body,
    coverImage,
    publishedAt,
    "author": author->{ name, role, bio, "photo": photo.asset->url, "slug": slug.current },
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
  *[_type == "post" && ($categorySlug in categories[]->slug.current || "/" + $categorySlug in categories[]->slug.current)] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt,
    "author": author->{ name, "photo": photo.asset->url, "slug": slug.current },
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
  *[_type == "category" && (slug.current == $slug || slug.current == "/" + $slug || "/" + slug.current == $slug)][0] {
    title,
    "slug": slug.current,
    description
  }
`

// Related posts (excluding current, sharing categories)
export const relatedPostsQuery = `
  *[_type == "post" && slug.current != $currentSlug && count(categories[]->slug.current[@ in $categorySlugs]) > 0] | order(publishedAt desc)[0...3] {
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt,
    "author": author->{ name, "photo": photo.asset->url, "slug": slug.current },
    "categories": categories[]->{ title, "slug": slug.current }
  }
`

// Single author by slug
export const singleAuthorQuery = `
  *[_type == "author" && (slug.current == $slug || slug.current == "/" + $slug || "/" + slug.current == $slug)][0] {
    name,
    role,
    bio,
    "photo": photo.asset->url,
    "slug": slug.current
  }
`

// Posts written by author
export const postsByAuthorQuery = `
  *[_type == "post" && (author->slug.current == $authorSlug || author->slug.current == "/" + $authorSlug || "/" + author->slug.current == $authorSlug)] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt,
    "author": author->{ name, "photo": photo.asset->url, "slug": slug.current },
    "categories": categories[]->{ title, "slug": slug.current }
  }
`

// All author slugs
export const allAuthorSlugsQuery = `
  *[_type == "author"]{ "slug": slug.current }
`

