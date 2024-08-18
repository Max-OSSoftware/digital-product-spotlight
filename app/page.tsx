"use client"

import Spline from '@splinetool/react-spline'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCheck, LucideIcon } from 'lucide-react'
import { ReactElement } from 'react'

export default function Home() {
  return (
    <main className='flex min-h-screen h-fit flex-col items-center justify-center relative'>
      
      <section id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
        <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-black md:text-6xl animate__animated animate__fadeInUp animate__slow'>DMX | AI</h1>
            <h2 className='text-md md:text-2xl animate__animated animate__fadeInUp animate__slow'>The Ultimate Technology Solution</h2>
          </div>
          <p className='max-w-md text-sm md:text-base text-zinc-700 animate__animated animate__fadeInUp animate__slow'>
            We specialize in an ultimate technology that transforms written content into engaging web presentations.
             Our AI-driven platforms empower businesses and creators to effortlessly convert text into dynamic visual content, saving time and enhancing communication.
          </p>
          <div className='w-full flex items-center justify-center md:justify-start gap-4'>
            <button className='w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-900 hover:text-white transition-colors animate__animated animate__fadeInUp animate__slow'>Join Watchlist</button>
            <button className='w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors animate__animated animate__fadeInUp animate__slow'>Contact</button>
          </div>
        </div>

        <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
          <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode'/>
        </div>
      </section>
    
    </main>
  )
}





