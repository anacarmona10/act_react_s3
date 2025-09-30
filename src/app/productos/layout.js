import Link from 'next/link'
import React from 'react'

export default function layout({ children }) {
  return (
    <>
        <html>
            <body>
                <nav>
                    <h1>Sección de productos</h1>
                    <Link href="/productos/ropa">  Ropa   </Link>
                    <Link href="/productos/electronicos">  Electrónicos   </Link>
                </nav>
                <main>{children}</main>
            </body>
        </html>
    </>
  )
}