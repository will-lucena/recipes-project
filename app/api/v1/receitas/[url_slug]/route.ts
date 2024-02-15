import { Recipe } from '@/models/recipe'
import { mockDatabase } from '@/utils/mocks'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET(
  req: NextApiRequest,
  { params }: { params: { url_slug: string } },
  res: NextApiResponse<Recipe>
) {
  const recipe = mockDatabase.get(params.url_slug)

  if (recipe) {
    return new NextResponse(JSON.stringify(recipe), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return new NextResponse(JSON.stringify(null), {
    status: 404,
  })
}

export async function POST(req: NextApiRequest, res: NextApiResponse<Recipe>) {
  const json = await req.json()
  const hasErrors = Recipe.validate({
    ...json,
    slug: req.url?.split('/').pop(),
  })

  if (hasErrors.length > 0) {
    return new NextResponse(JSON.stringify({ error: hasErrors.join(', ') }), {
      status: 400,
    })
  }

  const recipe = new Recipe({ ...json, slug: req.url?.split('/').pop() })
  mockDatabase.set(recipe.slug, recipe)

  return new NextResponse(JSON.stringify(recipe), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
