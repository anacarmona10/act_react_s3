import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
      <h2> <Link href="/blog/noticia1">Nuevo Samsung, ¿Mejor que lo que podría ser el iphone 17?</Link></h2>
      <h2> <Link href="/blog/noticia2">That level again sacó nuevos niveles ¡Más difíciles que los anteriores!. Conozca las pistas de cada uno</Link></h2>
      <h2><Link href="/blog/noticia3">Harry Potter tendrá nueva colaboración con la tecnología, descubra cómo puede hacer que su vida mugle sea más mágica</Link></h2>
    </>
  )
}
