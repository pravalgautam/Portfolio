import React from 'react';

import { Link } from 'react-router-dom';
import Home from './Home'; 

const Navbar = () => {
  return (

      <div className='bg-white h-16 flex justify-between  items-center'>
        <div className="logo">
          Dliver
        </div>

        <div className="navigation flex  space-x-14">
          <Link to="/" className='text-black font-light hover:text-pink-300'>Home</Link>
          <Link to="/about" className='text-black font-light hover:text-pink-300'>About</Link>
          <Link to="/projects" className='text-black font-light hover:text-pink-300'>Projects</Link>
        </div>
      </div>
     
 
  );
};

export default Navbar;
