import { getRecipe } from '@/services/recipes.service'
import RecipePage from './content'
import './desktop.css'
import './mobile.css'

export default async function Page({
  params,
}: {
  params: { url_slug: string }
}) {
  let recipe = await getRecipe(params.url_slug)

  console.log(recipe)

  return <RecipePage {...recipe} />
}
