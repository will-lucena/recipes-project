import { Recipe } from '@/models/recipe'

const mockResponseA = new Recipe({
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
})

const mockResponseB = new Recipe({
  imgUrl:
    'https://raw.githubusercontent.com/will-lucena/recipes-project/main/assets/images/image-omelette.jpeg',
  title: 'Mac and Cheese',
  description:
    'Mac and cheese—also called macaroni and cheese or mac n cheese in American English—is a dish of cooked macaroni pasta and a cheese sauce, most commonly cheddar. It can also incorporate other ingredients, such as breadcrumbs, meat and vegetables.',
  preparationTime: {
    total: 'Approximately 20 minutes',
    preparation: '15 minutes',
    cooking: '5 minutes',
  },
  ingredients: [
    'Macaroni pasta',
    'Cheese sauce (e.g. cheddar)',
    'Breadcrumbs (optional)',
    'Meat (optional)',
    'Vegetables (optional)',
  ],
  instructions: [
    'Boil the macaroni pasta in a large pot of salted water until al dente.',
    'Drain the pasta and return it to the pot.',
    'Add the cheese sauce to the pot and stir until the pasta is well coated.',
    'If using, add the meat and vegetables to the pot and stir until well combined.',
    'Transfer the mac and cheese to a baking dish and sprinkle with breadcrumbs.',
    'Bake in a preheated oven at 180°C (350°F) for 20 minutes, or until the top is golden and the sauce is bubbling.',
    'Serve hot.',
  ],
  nutrition: {
    calories: 300,
    fat: 20,
    carbs: 30,
    protein: 15,
  },
  slug: 'mac-and-cheese',
})

type RecipesDb = {
  [key: string]: Recipe
}

const mockDb: RecipesDb[] = [
  {
    'simple-omelette': mockResponseA,
  },
  { 'mac-and-cheese': mockResponseB },
]

export const mockDatabase = {
  get: (slug: string) => mockDb.find((recipe) => recipe[slug])?.[slug],
  getAll: () => mockDb.map((recipe) => Object.values(recipe)[0]),
  set: (slug: string, recipe: Recipe) => {
    mockDb.push({ [slug]: recipe })
  },
}

export const mockBigmac = {
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
