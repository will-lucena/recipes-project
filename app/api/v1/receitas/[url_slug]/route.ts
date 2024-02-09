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

  return new NextResponse(null, {
    status: 404,
  })
}
