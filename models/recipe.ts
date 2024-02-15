export type RecipeType = {
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

export class Recipe {
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

  constructor({
    imgUrl,
    title,
    description,
    preparationTime,
    ingredients,
    instructions,
    nutrition,
    slug,
  }: RecipeType) {
    this.imgUrl = imgUrl
    this.title = title
    this.description = description
    this.preparationTime = preparationTime
    this.ingredients = ingredients
    this.instructions = instructions
    this.nutrition = nutrition
    this.slug = slug
  }

  static validate(recipe: RecipeType) {
    let errors = []
    if (!recipe.imgUrl) {
      errors.push('imgUrl')
    }
    if (!recipe.title) {
      errors.push('title')
    }

    if (!recipe.description) {
      errors.push('description')
    }

    if (!recipe.preparationTime) {
      errors.push('preparationTime')
    }

    if (!recipe.ingredients) {
      errors.push('ingredients')
    }

    if (!recipe.instructions) {
      errors.push('instructions')
    }

    if (!recipe.slug) {
      errors.push('slug')
    }

    if (errors.length > 1) {
      errors[errors.length - 1] += ' are required'
    } else if (errors.length > 0) {
      errors[errors.length - 1] += ' is required'
    }

    return errors
  }

  update(recipe: RecipeType) {
    this.imgUrl = recipe.imgUrl || this.imgUrl
    this.title = recipe.title || this.title
    this.description = recipe.description || this.description
    this.preparationTime = recipe.preparationTime || this.preparationTime
    this.ingredients = recipe.ingredients || this.ingredients
    this.instructions = recipe.instructions || this.instructions
    this.nutrition = recipe.nutrition || this.nutrition

    return this
  }
}
