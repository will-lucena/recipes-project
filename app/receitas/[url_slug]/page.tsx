import { getRecipe } from '@/services/recipes.service'
import RecipePage from './content'

export default async function Page({
  params,
}: {
  params: { url_slug: string }
}) {
  let recipe = await getRecipe(params.url_slug)
  return <RecipePage {...recipe} />
}
