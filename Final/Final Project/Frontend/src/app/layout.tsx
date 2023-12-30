import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoThere } from '@/components/Route/GoThere'
import { BotPress } from '@/components/Bot/botpress'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Fahimul Bari',
    template: '%s | FB'
  },
  
  description: 'A Next Js Project For Final Lab Exam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoThere path='/profile' btnName='Profile'/><br />
        {children}
        <BotPress/>
      </body>
    </html>
  )
}
