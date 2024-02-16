import { Recipe } from '@/models/recipe'
import { mockDatabase } from '@/utils/mocks'
import type { NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextApiResponse<Recipe>) {
  const recipes = mockDatabase.getAll()

  if (recipes) {
    return new NextResponse(JSON.stringify(recipes), {
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
