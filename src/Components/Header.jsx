import React, { useState, useEffect } from 'react';
import Hamburger from '../assets/Icons/Hamburger';
import Cross from '../assets/Icons/Cross';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // Debounce resize handler to improve performance
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      // Close mobile menu when resizing to desktop
      if (window.innerWidth >= 640) {
        setShowNav(false);
      }
    };

    // Set initial value
    handleResize();

    const debouncedResize = debounce(handleResize, 250);
    window.addEventListener('resize', debouncedResize);
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  const handleClick = () => {
    setShowNav(prev => !prev);
  };

  // Simple debounce function
  function debounce(func, wait) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  }

  // Navigation items to avoid repetition
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Experience', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  return (
    <>
      {isMobile ? (
        <div className='flex justify-between px-[2%] items-center py-4 relative'>
          <div>
            <h1 className='font-Greatvibes text-2xl sm:text-5xl font-bold'>Anupa Baral</h1>
          </div>
          <div>
            <button 
              onClick={handleClick}
              aria-label={showNav ? 'Close menu' : 'Open menu'}
            >
              {showNav ? <Cross /> : <Hamburger />}
            </button>
          </div>
          {showNav && (
            <nav className='absolute top-full left-0 w-full bg-gray-400 text-white animate-slidein z-50'>
              <ul className='list-none flex flex-col items-center gap-5 py-5'>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className='block py-2 px-4' onClick={() => setShowNav(false)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      ) : (
        <header className='sticky top-0 flex justify-between bg-black text-white py-4 px-[5%] z-40'>
          <div>
            <h1 className='font-Greatvibes text-2xl sm:text-5xl font-bold'>Anupa Baral</h1>
          </div>
          <nav>
            <ul className='flex justify-between gap-5'>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className='hover:text-gray-300 transition-colors'>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;