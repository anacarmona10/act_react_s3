import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
        <h1>Productos</h1>
        <ul>
          <li> <Link href="/productos/laptop">Laptop</Link>  </li>
          <li> <Link href="/productos/smartphone">Smarphone</Link> </li>
          <li> <Link href="/productos/tablet">Tablet</Link> </li>
        </ul>
    </>
  )
}
