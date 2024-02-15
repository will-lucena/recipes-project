import { expect, test } from '@playwright/test'

test('load [slug] recipe', async ({ request }) => {
  const response = await request.get('/api/v1/receitas/mac-and-cheese')
  expect(response.status()).toBe(200)
  const body = await response.json()
  expect(body.title).toEqual('Mac and Cheese')
})

test('receive not found on invalid [slug] recipe', async ({ request }) => {
  const response = await request.get('/api/v1/receitas/big-mac')
  expect(response.status()).toBe(404)
  const body = await response.json()
  expect(body).toBeNull()
})
