'use client';
import SmoothScroll from "@/components/SmoothScroll";
import Providers from "@/redux/provider";
import "@/styles/globals.css";
import {Inter} from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: "Carlos Duarte - Frontend Developer",
};

export default function App({ Component, pageProps }) {
  return (
    <>
     <Providers>
     <SmoothScroll>
     <div
       className={`${inter.variable} font-sans`}
      >
      <Component {...pageProps} />
      </div>
     </SmoothScroll>
     </Providers>
      
    </>
  )
}
