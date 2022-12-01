
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'


const NavBar = () => {

    return (
        <div className='bg-transparent'>
           <div className='bg-orange-500 flex justify-evenly h-32 '> 
               <Link className='text-white-600/75 text-lg  font-semibold underline-offset-2'> Home </Link>
               <Link  className='text-white-600/75 text-lg  font-semibold'> Services </Link>
               <Link  className='text-white-600/75 text-lg  font-semibold'> About </Link>
               <Link  className='text-white-600/75 text-lg  font-semibold'> Gallery</Link>
               <Link  className='text-white-600/75 text-lg  font-semibold'> Testimonials </Link>
               <Link  className='text-white-600/75 text-lg  font-semibold'> Contact-Us </Link>
           </div>
         </div>
    )
}

export default NavBar;