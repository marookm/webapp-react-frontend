import React from 'react';
import './Navbar.css';

import Link from '@mui/material/Link';

const Navbar = () => {
  return (
    <div className="nav-container flex shadow-md p-5 items-center justify-between">
      <div className="nav-logo">
          <h1 className='font-bold text-5xl'>Data Visualization</h1>
          <p className='author-website'>Create by MOOK</p>
      </div>

      <ul className='flex nav-menu'>
        <li className='px-4 list-none'>
          <Link 
            href="/"
            className='no-underline hover:text-blue-700'
          >
            Visualize
          </Link>
        </li>

        <li className='px-4 list-none hover:text-blue-700'>
          <Link 
            href="/dataset"
            className='no-underline hover:text-blue-700'
          >
            Data Set
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;