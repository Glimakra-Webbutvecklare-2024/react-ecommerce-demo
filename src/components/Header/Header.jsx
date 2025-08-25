import React from 'react';
import Nav from '../Nav/Nav'; // Ensure Nav is imported correctly
// import './Header.css';

const Header = () => {
  return ( 
    <header className='py-8 px-4 text-center sticky top-0 flex justify-between items-center'>
      <div>
        <img src="/SVG/Logotype-XARA.svg" className='w-52' />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
