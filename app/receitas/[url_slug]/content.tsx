'use client'

import { Recipe } from '@/models/recipe'
import { toJpeg } from 'html-to-image'
import Image from 'next/image'
import { RefObject, useCallback, useRef } from 'react'
import './desktop.css'
import './mobile.css'

export default function RecipePage(recipe: Recipe) {
  const fullpage = useRef<HTMLDivElement>(null)
  const ingredientsRef = useRef<HTMLDivElement>(null)
  const instructionsRef = useRef<HTMLDivElement>(null)
  const nutritionRef = useRef<HTMLDivElement>(null)

  const onClickDownload = useCallback(() => {
    ;[
      { current: fullpage, name: 'fullpage' },
      { current: ingredientsRef, name: 'ingredients' },
      { current: instructionsRef, name: 'instructions' },
      { current: nutritionRef, name: 'nutrition' },
    ].forEach((dependency) => print(dependency))
  }, [fullpage, ingredientsRef, instructionsRef, nutritionRef])

  function print(dependency: {
    current: RefObject<HTMLDivElement>
    name: string
  }) {
    if (dependency.current.current === null) {
      return
    }

    toJpeg(dependency.current.current, {
      cacheBust: true,
      backgroundColor: 'white',
    })
      .then((dataUrl) => {
        const link = document.createElement('a')
        console.log(dependency)
        link.download = `${dependency.name}.jpeg`
        link.href = dataUrl
        link.click()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const {
    imgUrl,
    title,
    description,
    ingredients,
    instructions,
    preparationTime,
    nutrition,
  } = recipe

  const nutritionalInfo = nutrition ? (
    <>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table>
        <tbody>
          {Object.entries(nutrition).map(([key, value]) => {
            return (
              <tr key={key}>
                <th>{capitalizeString(key)}</th>
                <td>{value}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  ) : (
    <p>Nutritional information is not available for this recipe.</p>
  )

  function capitalizeString(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <>
      <button onClick={onClickDownload}>Download</button>

      <main ref={fullpage}>
        <header>
          <Image
            src={imgUrl}
            alt="Omelette"
            style={{
              width: '100%',
              height: '100%',
            }}
            width={300}
            height={100}
            placeholder="empty"
          />
        </header>

        <section className="content">
          <h1>{title}</h1>

          <p>{description}</p>

          <section className="card">
            <p className="card__title">Preparation time</p>

            <ul>
              <li>
                <span>
                  <strong>Total:</strong>
                </span>
                <span>{preparationTime.total}</span>
              </li>
              <li>
                <span>
                  <strong>Preparation:</strong>
                </span>
                <span> {preparationTime.preparation}</span>
              </li>
              <li>
                <span>
                  <strong>Cooking:</strong>
                </span>
                <span> {preparationTime.cooking}</span>
              </li>
            </ul>
          </section>

          <div ref={ingredientsRef}>
            <h2>Ingredients</h2>

            <ul>
              {ingredients.map((ingredient, index) => {
                return (
                  <li key={index}>
                    <span> {ingredient}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <hr />

          <div ref={instructionsRef}>
            <h2>Instructions</h2>

            <ol>
              {instructions.map((instruction, index) => {
                return (
                  <li key={index}>
                    <span> {instruction}</span>
                  </li>
                )
              })}
            </ol>
          </div>

          <hr />

          <div ref={nutritionRef}>
            <h2>Nutrition</h2>

            {nutritionalInfo}
          </div>
        </section>
      </main>
    </>
  )
}
