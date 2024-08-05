import React from 'react'

const Header = () => {
  return (
    <header className='sticky top-0 flex justify-between bg-black text-white py-4 px-[5%]'>
        <div>
       <h1 className='font-Greatvibes text-5xl font-bold'>Anupa Baral</h1>
        </div>
        <nav className='list-none flex justify-between gap-5 text-white'>
        <li><a href="#"></a>Home</li>
        <li><a href="#"></a>About</li>
        <li><a href="#"></a>Portfolio</li>
        <li><a href="#"></a>Experience</li>
        <li><a href="#"></a>Contact</li>

        </nav>
    </header>
  )
}

export default Header