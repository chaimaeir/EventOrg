import React from 'react';
import { Link } from 'react-router-dom';
import logoEvorg from '../../../assets/images/logoEvorg.png';
import { MdDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa6";
import { BsCalendarEventFill } from "react-icons/bs";
import { BsChatFill } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";


const Sidebar = () => {
  return (
    <>
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-white w-64 shadow">
         {/* Logo */}
         <div className="p-4">
          <img src={logoEvorg} alt="Logo" className=" h-20 w-auto" />
        </div>

       
        <ul>
          <li>
            <Link to="/Dashboard" className="flex items-center px-4 py-2 text-gray-800 hover:bg-[#f4bc9b] hover:text-white hover:border hover:border-gray-400 hover:rounded-full">
            <MdDashboard className="mr-3" /> 
             Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Customers" className="flex items-center px-4 py-2 text-gray-800 hover:bg-[#f4bc9b] hover:text-white hover:border hover:border-gray-400 hover:rounded-full">
            <HiUsers className="mr-3" />
              Customers
            </Link>
          </li>
          <li>
            <Link to="/Events" className="flex items-center px-4 py-2 text-gray-800 hover:bg-[#f4bc9b] hover:text-white hover:border hover:border-gray-400 hover:rounded-full">
            <BsCalendarEventFill  className='mr-3'/>
              Events
            </Link>
          </li>

          <li>
            <Link to="/Chat" className="flex items-center px-4 py-2 text-gray-800 hover:bg-[#f4bc9b] hover:text-white hover:border hover:border-gray-400 hover:rounded-full">
            <BsChatFill className='mr-3' />
              Chat
            </Link>
          </li>
          <li>
            <Link to="/Payment" className="flex items-center px-4 py-2 text-gray-800 hover:bg-[#f4bc9b] hover:text-white hover:border hover:border-gray-400 hover:rounded-full">
            <MdOutlinePayments className='mr-3' />
              Transaction
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content
      <div className="flex-1 bg-gray-200">Main Content</div> */}
    </div>
    </>
  );
};

export default Sidebar;