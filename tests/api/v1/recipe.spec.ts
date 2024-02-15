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
  const mockBigmac = {
    imgUrl:
      'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg',
    title: 'Big Mac',
    description:
      "The Big Mac is a hamburger sold by international fast food restaurant chain McDonald's. It was introduced in the Greater Pittsburgh area in 1967 and nationwide in 1968. It is one of the company's flagship products.",
    preparationTime: {
      total: '30 minutes',
      preparation: '15 minutes',
      cooking: '15 minutes',
    },
    ingredients: [
      '1 sesame seed hamburger bun',
      '1/2 cup of finely shredded lettuce',
      '1 slice of American cheese',
      '1/4 cup of finely diced white onion',
      '2 beef patties',
      '2 pickle slices',
      '1/4 cup of Big Mac sauce',
      '1/2 cup of shredded iceberg lettuce',
    ],
    instructions: [
      'Preheat a large skillet over medium heat.',
      'Toast the hamburger bun until golden brown.',
      'In a small bowl, combine the shredded lettuce and the Big Mac sauce.',
      'Place the bottom half of the hamburger bun on a work surface.',
      'Add the American cheese, diced onion, beef patties, and pickle slices.',
      'Top with the shredded lettuce and the top half of the hamburger bun.',
      'Serve immediately.',
    ],
    nutrition: {
      calories: 540,
      fat: 29,
      carbs: 45,
      protein: 25,
    },
  }

  const response = await request.post('/api/v1/receitas/big-mac', {
    data: mockBigmac,
  })
  expect(response.status()).toBe(200)
  const body = await response.json()
  expect(body).toEqual({ ...mockBigmac, slug: 'big-mac' })
})
