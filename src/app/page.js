import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
      <h1>Página de Inicio</h1>
      <p>Esta es la página de inicio</p>
      <div>
        <p>Aquí puedes navegar entre las páginas igual que en el Layout.</p>
        <Link href="/productos">    Ir a productos     </Link>
        <Link href="/blog">    Ir al blog    </Link>
        <Link href="/contacto">    Ir a contacto     </Link>
      </div>
    </>
  )
}
