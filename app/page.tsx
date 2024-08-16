"use client"

import Spline from '@splinetool/react-spline'
import Image from 'next/image'
import Link from 'next/link'
import infoCards from './libs/InfoCards'
import { CheckCheck, LucideIcon } from 'lucide-react'
import { ReactElement } from 'react'
import pricingCards from './libs/PricingCards'

export default function Home() {
  return (<>
    <main className='flex min-h-screen h-fit flex-col items-center justify-center relative'>
      
      <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
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
      </header>

      <section id="upcoming-release" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8 mt-8 mb-8">
        <div className='absolute -z-10 h-full w-full overflow-hidden'>
          <Image src="/whirl.svg" fill className="absolute object-cover w-full overflow-visible sm:rotate-90" alt="Background Whirl"/>
        </div>
        <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
          <h3 className='text-2xl md:text-3xl font-bold animate__animated animate__fadeInUp animate__slow'>Coming Soon!</h3>
          
          {/* Cards Container */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {/* Card 1 */}
            <div className="flex flex-col p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
              <h4 className="text-xl font-bold mb-4 animate__animated animate__fadeInUp animate__slow">Upcoming AI Features</h4>
              <p className="text-sm text-zinc-900 mb-4 animate__animated animate__fadeInUp animate__slow">Experience cutting-edge AI tools that simplify content creation, enhance creativity, and automate workflows.</p>
              <button className="bg-fuchsia-700 rounded text-white p-2 text-sm transition-colors hover:bg-fuchsia-800 animate__animated animate__fadeInUp animate__slow">Discover More</button>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
              <h4 className="text-xl font-bold mb-4 animate__animated animate__fadeInUp animate__slow">Integration Updates</h4>
              <p className="text-sm text-zinc-900 mb-4 animate__animated animate__fadeInUp animate__slow">Seamlessly integrate our tools with your existing platforms, ensuring smooth operations and enhanced functionality.</p>
              <button className="bg-fuchsia-700 rounded text-white p-2 text-sm transition-colors hover:bg-fuchsia-800 animate__animated animate__fadeInUp animate__slow">Learn More</button>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {/* Card 1 */}
            <div className="flex flex-col p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
              <h4 className="text-xl font-bold mb-4 animate__animated animate__fadeInUp animate__slow">Upcoming AI Features</h4>
              <p className="text-sm text-zinc-900 mb-4 animate__animated animate__fadeInUp animate__slow">Experience cutting-edge AI tools that simplify content creation, enhance creativity, and automate workflows.</p>
              <button className="bg-fuchsia-700 rounded text-white p-2 text-sm transition-colors hover:bg-fuchsia-800 animate__animated animate__fadeInUp animate__slow">Discover More</button>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
              <h4 className="text-xl font-bold mb-4 animate__animated animate__fadeInUp animate__slow">Integration Updates</h4>
              <p className="text-sm text-zinc-900 mb-4 animate__animated animate__fadeInUp animate__slow">Seamlessly integrate our tools with your existing platforms, ensuring smooth operations and enhanced functionality.</p>
              <button className="bg-fuchsia-700 rounded text-white p-2 text-sm transition-colors hover:bg-fuchsia-800 animate__animated animate__fadeInUp animate__slow">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8 mt-8 mb-8">
        <div className='absolute -z-10 h-full w-full overflow-hidden'>
          <Image src="/whirl.svg" fill className="absolute object-cover w-full overflow-visible sm:rotate-90" alt="Background Whirl"/>
        </div>
        <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
          <h3 className='text-2xl md:text-3xl font-bold animate__animated animate__fadeInUp animate__slow'>Content Creation Technology</h3>
          <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
            {infoCards.map((infoCard) => {
              return (
                <InfoCard key={infoCard.id} Icon={infoCard.icon} title={infoCard.title}>
                <p className="text-sm sm:text-base text-center md:text-left">{infoCard.bodyText}</p>
              </InfoCard>
              )
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8 mt-8 mb-8">
        <div className='absolute -z-10 h-full w-full overflow-hidden'>
          <Image src="/whirl.svg" fill className="absolute object-cover w-full overflow-visible sm:rotate-90" alt="Background Whirl"/>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center h-fit w-full max-w-7xl'>
            {pricingCards.map((pricingCard) => {
              return (
                <PricingCard oneliner={pricingCard.oneliner} title={pricingCard.title} price={pricingCard.price} benefits={pricingCard.benefits} key={pricingCard.id}/>
              )
            })}
        </div>
      </section>
    </main>

    <footer className="w-full h-64 bg-gradient-to-b from-fuchsia-700 to-blue-800 flex items-center justify-center p-8 mt-8">
      <p className="text-white text-center animate__animated animate__fadeInUp animate__slow">© 2024 DMX | DMX AI - All Rights Reserved</p>
    </footer>
  </>
  )
}

interface IInfoCardProps {
  title: string;
  Icon: LucideIcon;
  children: ReactElement<any, any>
}

function InfoCard({ title, Icon, children }: IInfoCardProps) {
  return (
    <div className='w-full h-80 flex flex-col justify-around items-center p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
      <div className="p-4 bg-fuchsia-700 rounded-full">
        <Icon />
      </div>
      <div>
        <h3 className='text-lg font-bold sm:text-xl animate__animated animate__fadeInUp animate__slow'>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  )
}

interface IPricingCardProps {
  title: string;
  price: number;
  benefits: string[]
  oneliner: string;
}
function PricingCard({ title, price, benefits, oneliner }: IPricingCardProps) {
  return (
    <div className='h-fit w-full flex flex-col p-8 gap-4 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
      <div className='flex flex-col gap-2'>
        <div>
          <h6 className='text-2xl animate__animated animate__fadeInUp animate__slow'>{title}</h6>
          <p className='text-sm text-zinc-700 animate__animated animate__fadeInUp animate__slow'>{oneliner}</p>
        </div>
        <p className='text-4xl font-bold animate__animated animate__fadeInUp animate__slow'>
          ${price} <span className='text-sm font-normal text-zinc-700'>/ Month</span>
        </p>
      </div>
      <button className='bg-fuchsia-700 rounded text-white p-2 text-sm transition-colors hover:bg-fuchsia-900 animate__animated animate__fadeInUp animate__slow'>Try 7 days free!</button>
      <div className='flex flex-col w-full gap-4'>
        {benefits.map((benefit, i) => {
          return (
            <p key={i} className='text-sm text-zinc-700 flex items-center gap-2 animate__animated animate__fadeInUp animate__slow'>
              <span>
                <CheckCheck />
              </span>
              {benefit}
            </p>
          )
        })}
      </div>
    </div>
  )
}
