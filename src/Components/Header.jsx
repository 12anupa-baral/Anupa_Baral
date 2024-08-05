import React, { useState, useEffect } from 'react';
import Hamburger from '../assets/Icons/Hamburger';
import Cross from '../assets/Icons/Cross';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [showNav, setShowNav] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    setShowNav(!showNav);
  };

 

  return (
    <>
      {isMobile ? (
        <div className='flex justify-between px-[2%] items-center py-4'>
          <div>
            <h1 className='font-Greatvibes text-2xl sm:text-5xl font-bold'>Anupa Baral</h1>
          </div>
          <div>
            <button onClick={handleClick}><Hamburger /></button>
          </div>
          {showNav && (
            <nav className='absolute top-0 left-0 w-full bg-gray-400 text-white animate-slidein'>
              <div className='flex justify-end p-4'>
                <button onClick={handleClick}><Cross /></button>
              </div>
              <ul className='list-none flex flex-col items-center gap-5 py-5'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          )}
        </div>
      ) : (
        <header className='sticky top-0 flex justify-between bg-black text-white py-4 px-[5%]'>
          <div>
            <h1 className='font-Greatvibes text-2xl sm:text-5xl font-bold'>Anupa Baral</h1>
          </div>
          <nav className='flex justify-between gap-5'>
            <ul className='flex justify-between gap-5'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Experience</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
