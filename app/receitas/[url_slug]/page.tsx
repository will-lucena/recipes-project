import { getRecipe } from '@/services/recipes.service'
import { notFound } from 'next/navigation'
import RecipePage from './content'

export default async function Page({
  params,
}: {
  params: { url_slug: string }
}) {
  let recipe
  try {
    recipe = await getRecipe(params.url_slug)
  } catch (error) {
    return notFound()
  }
  return <RecipePage {...recipe} />
}
