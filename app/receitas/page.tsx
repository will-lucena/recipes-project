import { Recipe } from '@/models/recipe'
import { getRecipes } from '@/services/recipes.service'

export default async function RecipesPage() {
  const recipes = await getRecipes()

  const recipesList = recipes.map((recipe: Recipe, index: number) => (
    <div key={index}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  ))

  return (
    <div>
      <h1>Receitas</h1>
      {recipesList}
    </div>
  )
}
