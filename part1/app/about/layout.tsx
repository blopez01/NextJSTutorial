import styles from './styles.module.css'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About page description',
}

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
    <nav>
        About Navbar
    </nav>
    <main className={styles.main}>
        {children}
    </main>
    </>
  )
}
