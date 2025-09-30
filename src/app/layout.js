import Link from 'next/link'
import React from 'react'

export default function layout({ children }) {
  return (
    <>
        <html>
            <body>
                <nav>
                    <Link href="/">  Inicio   </Link>
                    <Link href="/productos">  Productos   </Link>
                    <Link href="/blog">  Blog   </Link>
                    <Link href="/contacto">  Contacto   </Link>
                </nav>
                <main>{children}</main>
            </body>
        </html>
    </>
  )
}
