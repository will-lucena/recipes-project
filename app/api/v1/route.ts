import { Recipe } from '@/models/recipe'
import { mockResponse } from '@/utils/mocks'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET(req: NextApiRequest, res: NextApiResponse<Recipe>) {
  return new NextResponse(JSON.stringify(mockResponse), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
