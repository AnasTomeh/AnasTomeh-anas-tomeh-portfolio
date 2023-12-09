import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeContextProvider from "@/context/ThemeContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anas Tomeh Portfolio',
  description: 'Anas Tomeh is a front-end engineer specializing in building responsive and well-structured web applications. Proficient in HTML, CSS, JavaScript, and React, Anas is also familiar with TypeScript, React Native, Next.js, Bootstrap, Tailwind, and React MUI. With a keen understanding of SEO best practices',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth ">

      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-10 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

      <ThemeContextProvider>

          <Header/>
          {children}
          <Footer/>
      </ThemeContextProvider>

      </body>
    </html>
  )
}
