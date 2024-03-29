'use client'

import omeletteImage from '@/assets/images/image-omelette.jpeg'
import { toJpeg } from 'html-to-image'
import Image from 'next/image'
import { RefObject, useCallback, useRef } from 'react'
import './desktop.css'
import './mobile.css'

export default function RecipePage() {
  const fullpage = useRef<HTMLDivElement>(null)
  const ingredients = useRef<HTMLDivElement>(null)
  const instructions = useRef<HTMLDivElement>(null)
  const nutrition = useRef<HTMLDivElement>(null)

  const onClickDownload = useCallback(() => {
    ;[
      { current: fullpage, name: 'fullpage' },
      { current: ingredients, name: 'ingredients' },
      { current: instructions, name: 'instructions' },
      { current: nutrition, name: 'nutrition' },
    ].forEach((dependency) => print(dependency))
  }, [fullpage, ingredients, instructions, nutrition])

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

  return (
    <>
      <button onClick={onClickDownload}>Download</button>

      <main ref={fullpage}>
        <header>
          <Image
            src={omeletteImage}
            alt="Omelette"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </header>

        <section className="content">
          <h1>Simple Omelette Recipe</h1>

          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <section className="card">
            <p className="card__title">Preparation time</p>

            <ul>
              <li>
                <span>
                  <strong>Total:</strong>
                </span>
                <span>Approximately 10 minutes</span>
              </li>
              <li>
                <span>
                  <strong>Preparation:</strong>
                </span>{' '}
                <span> 5 minutes</span>
              </li>
              <li>
                <span>
                  <strong>Cooking:</strong>
                </span>{' '}
                <span> 5 minutes</span>
              </li>
            </ul>
          </section>

          <div ref={ingredients}>
            <h2>Ingredients</h2>

            <ul>
              <li>
                <span> 2-3 large eggs </span>
              </li>
              <li>
                <span> Salt, to taste </span>
              </li>
              <li>
                <span> Pepper, to taste </span>
              </li>
              <li>
                <span> 1 tablespoon of butter or oil </span>
              </li>
              <li>
                <span>
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </span>
              </li>
            </ul>
          </div>
          <hr />

          <div ref={instructions}>
            <h2>Instructions</h2>

            <ol>
              <li>
                <span>
                  <strong>Beat the eggs:</strong>
                </span>{' '}
                In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffier texture.
              </li>
              <li>
                <span>
                  <strong>Heat the pan:</strong>
                </span>{' '}
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </li>
              <li>
                <span>
                  <strong>Cook the omelette:</strong>
                </span>{' '}
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </li>
              <li>
                <span>
                  <strong>Add fillings (optional):</strong>
                </span>{' '}
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </li>
              <li>
                <span>
                  <strong>Fold and serve:</strong>
                </span>{' '}
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </li>
              <li>
                <span>
                  <strong>Enjoy:</strong>
                </span>{' '}
                Serve hot, with additional salt and pepper if needed.
              </li>
            </ol>
          </div>

          <hr />

          <div ref={nutrition}>
            <h2>Nutrition</h2>

            <p>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>

            <table>
              <tbody>
                <tr>
                  <th>Calories</th>
                  <td>277kcal</td>
                </tr>
                <tr>
                  <th>Carbs</th>
                  <td>0g</td>
                </tr>
                <tr>
                  <th>Protein</th>
                  <td>20g</td>
                </tr>
                <tr>
                  <th>Fat</th>
                  <td>22g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  )
}
