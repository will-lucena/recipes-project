import { mockBigmac } from '@/utils/mocks'
import { expect, test } from '@playwright/test'

test('load [slug] recipe', async ({ request }) => {
  const response = await request.get('/api/v1/receitas/mac-and-cheese')
  expect(response.status()).toBe(200)
  const body = await response.json()
  expect(body.title).toEqual('Mac and Cheese')
})

test('receive not found on invalid [slug] recipe', async ({ request }) => {
  const response = await request.get('/api/v1/receitas/undefined-recipe')
  expect(response.status()).toBe(404)
  const body = await response.json()
  expect(body).toBeNull()
})

test('post a new recipe', async ({ request }) => {
  const response = await request.post('/api/v1/receitas/big-mac', {
    data: mockBigmac,
  })
  expect(response.status()).toBe(200)
  const body = await response.json()
  expect(body).toEqual({ ...mockBigmac, slug: 'big-mac' })
})

test('receive bad request on invalid recipe', async ({ request }) => {
  const mockInvalidRecipe = {
    title: 'Big Mac',
    description:
      "The Big Mac is a hamburger sold by international fast food restaurant chain McDonald's. It was introduced in the Greater Pittsburgh area in 1967 and nationwide in 1968. It is one of the company's flagship products.",
  }

  const response = await request.post('/api/v1/receitas/big-mac', {
    data: mockInvalidRecipe,
  })
  expect(response.status()).toBe(400)
  const body = await response.json()
  expect(body).toEqual({
    error: 'imgUrl, preparationTime, ingredients, instructions are required',
  })
})

test('update a recipe', async ({ request }) => {
  const updatedBigmac = {
    imgUrl:
      'https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMac_832x472:1-3-product-tile-desktop?wid=763&hei=472&dpr=off',
  }

  const response = await request.put('/api/v1/receitas/big-mac', {
    data: updatedBigmac,
  })
  expect(response.status()).toBe(200)
  const body = await response.json()
  expect(body).toEqual({ ...mockBigmac, ...updatedBigmac, slug: 'big-mac' })
})
