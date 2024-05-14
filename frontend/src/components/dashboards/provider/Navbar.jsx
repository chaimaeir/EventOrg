import React from 'react';
import { IoIosNotifications } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => (
  <header className="bg-white text-gray-800 p-4 shadow-sm z-10 ">
    <div className="flex items-center justify-between">
      <div className="flex gap-6">
        <h1 className='ml-5 text-2xl font-semibold '>PROVIDER</h1>
        <input type="text" placeholder="Search..." className="rounded-full py-1 px-2 bg-gray-100 border-gray-500 focus:outline-none focus:border-blue-500 text-gray-800 w-[400px] " />
      </div>
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 bg-blue-500 flex items-center justify-center rounded-full mr-2">U</div>
        <IoIosNotifications className='text-4xl' />
        <MdMenuOpen className='text-5xl' />    
      </div>
    </div>
  </header>
);

export default Navbar;
