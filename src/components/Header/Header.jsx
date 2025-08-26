import React from 'react';
import Nav from '../Nav/Nav'; // Ensure Nav is imported correctly
// import './Header.css';

const Header = () => {
  return ( 
    <header className='py-2 px-4 text-center fixed w-full top-0 flex justify-between items-center'>
      <div>
        <img src="/SVG/Logotype-XARA.svg" className='w-32' />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
