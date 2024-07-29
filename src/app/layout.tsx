import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import clsx from 'clsx'

const inter = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pooja Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className='bg-slate-900
      text-slate-100'
    >
      
      <body 
        className={clsx(inter.className, "relative min-h-screen")}
      >
        <Header />
        {children}
        <Footer/>
        <div 
          className='absolute inset-0 -z-50 max-h-screen 
          background-gradient'
        >
        </div>
        <div 
          className="absolute pointer-events-none 
          inset-0 -z-40 h-full 
          bg-[url('/noisetexture.jpg')] opacity-20
          mix-blend-soft-light "
         >
         </div>
      </body>
    </html>
  )
}
