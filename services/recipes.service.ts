export async function getRecipes() {
  const response = await fetch('/api/v1/receitas')
  return response.json()
}

export const getRecipe = async (url_slug: string) => {
  const response = await fetch(
    `http://localhost:3000/api/v1/receitas/${url_slug}`,
    {
      cache: 'no-cache',
    }
  )

  if (!response.ok) {
    throw new Error('Falha ao buscar a receita')
  }

  return response.json()
}
