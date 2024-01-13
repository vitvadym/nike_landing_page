import { headerLogo } from '../assets/images';
import { navLinks } from '../constans';
import { hamburger, hamburger_close } from '../assets/icons';
import { useLayoutEffect, useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';

const Navbar = () => {
  // const [isActive, setIsActive] = useState(false);
  const [windowWidth, setWindowWith] = useState(0);

  const { isActive, ref } = useClickOutside(false);

  const handleWidth = () => {
    setWindowWith(window.innerWidth);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleWidth);

    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, []);

  return (
    <header className='container mx-auto py-8 '>
      <nav className='flex justify-between items-center p-3'>
        <a
          className='z-10'
          href='/'
        >
          <img
            src={headerLogo}
            alt='Logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link) => (
            <li
              className='leading-normal text-lg text-gray-600'
              key={link.label}
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <ul
          ref={ref}
          className={`flex flex-col items-center pt-[10vh] shadow-md ${
            isActive
              ? 'fixed left-0 top-0 w-[40%] h-full bg-slate-300 ease-linear duration-500 '
              : 'fixed left-[-100%]'
          }`}
        >
          {navLinks.map((link) => (
            <li
              className='leading-normal px-2 py-4 text-lg text-gray-600'
              key={link.label}
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block cursor-pointer'>
          {isActive ? (
            <img
              src={hamburger_close}
              alt='hamburger icon'
              width={25}
              height={25}
            />
          ) : (
            <img
              src={hamburger}
              alt='hamburger icon'
              width={25}
              height={25}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
