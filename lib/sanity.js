import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'ttsw6vso',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production, get fresh data in development
})
