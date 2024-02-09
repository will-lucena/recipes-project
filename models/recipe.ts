export type Recipe = {
  imgUrl: string
  title: string
  description: string
  preparationTime: {
    total: string
    preparation: string
    cooking: string
  }
  ingredients: string[]
  instructions: string[]
  nutrition?: {
    calories: number
    fat: number
    carbs: number
    protein: number
  }
  slug: string
}
