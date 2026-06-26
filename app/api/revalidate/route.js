import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

const REVALIDATE_SECRET = process.env.SANITY_REVALIDATE_SECRET

export async function POST(request) {
  try {
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')

    if (secret !== REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    const body = await request.json()
    const { _type, slug } = body

    if (_type === 'post') {
      revalidatePath('/blog')
      if (slug?.current) {
        revalidatePath(`/blog/${slug.current}`)
      }
    }

    if (_type === 'category') {
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
