import React from 'react';
import Nav from '../Nav/Nav'; // Ensure Nav is imported correctly
// import './Header.css';

// Importing the logo from the assets folder in src
import Logo from '../../assets/Logotype-XARA.svg';

const Header = () => {
  return ( 
    <header className='py-2 px-4 fixed w-full top-0 flex justify-between items-center'>

      {/* 1. Imported from assets */}
      <img src={Logo} className='w-32' />

      {/* 2. From public */}
      {/* <img src="assets/images/SVG/Logotype-XARA.svg" className='w-32' /> */}
      <Nav />
    </header>
  );
};

export default Header;
