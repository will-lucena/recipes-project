'use client' // Error components must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // console.error(error)
  }, [error])
  return (
    <div>
      <h2>Receita não encotrada!</h2>

      <Link href={'/receitas'}>
        <h2>Voltar para a página de receitas</h2>
      </Link>
    </div>
  )
}
