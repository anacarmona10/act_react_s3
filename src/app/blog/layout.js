import React from 'react'

export default function layout({ children }) {
  return (
    <>
        <html>
            <body>
                <nav>
                    <h1>Sección de Blog</h1>
                </nav>
                <main>{children}</main>
            </body>
        </html>
    </>
  )
}