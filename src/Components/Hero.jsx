import React from 'react'
import Anupa from '/assets/anupa1.png'

const Hero = () => {
  return (
    <section className='flex-1 sm:flex justify-between  h-auto sm:h-[90vh] pt-10  sm:pt-0 items-center text-white'>
        <div className='flex flex-col gap-5 w-full sm:w-[50%]'>
            <h1 className='text-3xl sm:text-7xl font-bold'>I'm a Frontend Developer</h1>
            <p >I have a year of experience building websites and desgining software. I love to work on web application using technologies like React, Tailwind.</p>
            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-3 rounded-md w-fit'>Portfolio</button>

        </div>
        <div className=''>
            <img className='rounded-full w-[500px]'  src={Anupa} alt="Anupa" />
        </div>
    </section>
  )
}

export default Hero