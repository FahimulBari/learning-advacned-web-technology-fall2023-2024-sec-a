import styles from './page.module.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sales Dashboard',
  description: 'Generated by create next app',
}

export default function SalesLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className={styles.main}>
        {children}
      </main>
    )
  }