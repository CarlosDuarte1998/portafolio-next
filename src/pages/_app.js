'use client';
import Providers from "@/redux/provider";
import "@/styles/globals.css";
import {Inter} from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
  return (
    <>
     <Providers>
     <div
       className={`${inter.variable} font-sans`}
      >
      <Component {...pageProps} />
      </div>
     </Providers>
      
    </>
  )
}
