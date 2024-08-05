import React, { useState, useEffect } from 'react';
import Hamburger from '../assets/Icons/Hamburger';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className='flex justify-between px-[2%] items-center py-4'>
          <div>
            <h1 className='font-Greatvibes text-2xl sm:text-5xl font-bold'>Anupa Baral</h1>
          </div>
          <div>
            <Hamburger />
          </div>
        </div>
      ) : (
        <header className='sticky top-0 flex justify-between bg-black text-white py-4 px-[5%]'>
          <div>
            <h1 className='font-Greatvibes text-2xl sm:text-5xl font-bold'>Anupa Baral</h1>
          </div>
          <nav className='list-none flex justify-between gap-5 text-white'>
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
