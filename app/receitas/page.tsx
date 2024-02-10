import { Recipe } from '@/models/recipe'
import { getRecipes } from '@/services/recipes.service'
import Link from 'next/link'

export default async function RecipesPage() {
  const recipes = await getRecipes()

  const recipesList = recipes.map((recipe: Recipe, index: number) => (
    <li key={index}>
      <Link href={`/receitas/${recipe.slug}`}>
        <h2>{recipe.title}</h2>
      </Link>
      <p>{recipe.description}</p>
    </li>
  ))

  return (
    <main>
      <h1>Receitas</h1>
      <ul>{recipesList}</ul>
    </main>
  )
}
