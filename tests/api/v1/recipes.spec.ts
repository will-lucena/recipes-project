import { expect, test } from '@playwright/test'

test('load all recipes', async ({ request }) => {
  const response = await request.get('/api/v1/receitas')
  expect(response.status()).toBe(200)
  const body = await response.json()

  expect(body.length).toBeGreaterThan(0)
})
