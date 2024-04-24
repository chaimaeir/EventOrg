import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  return 
    (<nav className="flex justify-between bg-white text-grey py-4 px-8 w-[1200px]">
      <div className="flex">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-5 py-2 w-96 rounded-full bg-gray-200 text-black focus:outline-none focus:bg-gray-200"
          />
          <FaSearch className="absolute w-5 h-5 right-3 top-3 text-gray-400 pointer-events-none" />
        </div>
      </div>
      <div className="flex ">
        <div className="mr-4">
          <IoNotifications className="w-6 h-6 cursor-pointer" />
        </div>
        {/* Profile Pic */}
        <div className="relative">
          <button onClick={toggleDropdown} className="text-white focus:outline-none">
            <img
              className="h-8 w-8 rounded-full"
              src="https://via.placeholder.com/50"
              alt="Profile"
            />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                Profile
              </button>
              <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                Sign Out
              </button>
              <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                Settings
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;