import { Recipe } from '@/models/recipe'

export const mockResponse: Recipe = {
  imgUrl:
    'https://raw.githubusercontent.com/will-lucena/recipes-project/main/assets/images/image-omelette.jpeg',
  title: 'Simple Omelette Recipe',
  description:
    'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
  preparationTime: {
    total: 'Approximately 10 minutes',
    preparation: '5 minutes',
    cooking: '5 minutes',
  },
  ingredients: [
    '2-3 large eggs',
    'Salt, to taste',
    'Pepper, to taste',
    '1 tablespoon of butter',
    'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
  ],
  instructions: [
    'Crack the eggs into a bowl and beat them until the whites and yolks are combined.',
    'Season with a pinch of salt and pepper.',
    'Place a non-stick frying pan over a medium heat and add the butter.',
    'When the butter has melted and is bubbling, pour in the eggs.',
    'Let the eggs sit for a few seconds to set and cook.',
    'Using a spatula, gently draw the edges of the omelette into the centre.',
    'Tilt the pan to let any uncooked egg run to the edges.',
    'When the omelette is mostly set but still a little runny in the middle, take the pan off the heat and fold the omelette in half.',
    'Slide the omelette onto a plate and serve.',
  ],
  nutrition: {
    calories: 200,
    fat: 15,
    carbs: 3,
    protein: 13,
  },
  slug: 'simple-omelette',
}

type RecipesDb = {
  [key: string]: Recipe
}

const mockDb: RecipesDb[] = [
  {
    'simple-omelette': mockResponse,
  },
]

export const mockDatabase = {
  get: (slug: string) => mockDb.find((db) => db[slug])?.[slug] || null,
  getAll: () => Object.values(mockDb).map((db) => Object.values(db)),
}
