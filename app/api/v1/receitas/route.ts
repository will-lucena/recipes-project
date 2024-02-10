import { Recipe } from '@/models/recipe'
import { mockDatabase } from '@/utils/mocks'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET(req: NextApiRequest, res: NextApiResponse<Recipe>) {
  const recipes = mockDatabase.getAll()

  if (recipes) {
    return new NextResponse(JSON.stringify(recipes), {
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
