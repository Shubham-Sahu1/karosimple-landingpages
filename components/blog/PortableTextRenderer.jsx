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
