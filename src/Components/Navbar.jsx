import React from 'react';

import { Link } from 'react-router-dom';
import Home from './Home'; 

const Navbar = () => {
  return (

      <div className='bg-white h-16 flex justify-between  items-center'>
        <div className="logo flex space-x-2">
    
          <a  className='text-blue-300' href='https://www.twitter.com/pravalgautam001'>@pravalgautam001</a>
        </div>

        <div className="navigation flex  space-x-2 md:space-x-12">
          <Link to="/" className='text-black font-light hover:text-pink-300'>Home</Link>
          <Link to="/about" className='text-black font-light hover:text-pink-300'>About</Link>
          <Link to="/projects" className='text-black font-light hover:text-pink-300'>Projects</Link>
        </div>
      </div>
     
 
  );
};

export default Navbar;
