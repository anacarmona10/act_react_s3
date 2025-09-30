import Link from 'next/link'
import React from 'react'

export default function layout({ children }) {
  return (
    <>
        <html>
            <body>
                <nav>
                    <h1>Sección de productos</h1>
                    <Link href="/blog">  Ropa   </Link>
                    <Link href="/contacto">  Electrónicos   </Link>
                </nav>
                <main>{children}</main>
            </body>
        </html>
    </>
  )
}