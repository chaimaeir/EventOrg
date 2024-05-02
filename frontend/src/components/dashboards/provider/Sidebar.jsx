
import React from 'react';
import { MdDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { TiStarburstOutline } from "react-icons/ti";
import { TfiMoney } from "react-icons/tfi";
import { Link } from 'react-router-dom';




const Sidebar = () => (
  <div className="  h-screen bg-white flex flex-col col-span-1 p-2 pt-[90px]  shadow-md ">
      
        <div className='flex justify-center items-center gap-3 ml-2'>
            <MdDashboard  className='text-3xl pb-2'/>
            <Link className=" py-2 px-4 rounded-lg text-gray-800 mb-2 w-[200px] hover:bg-gray-300 hover:text-black">
              Dashboard
            </Link>
        </div>
        <div className='flex justify-center items-center gap-3 ml-2'>
            <IoIosPeople  className='text-3xl pb-2'/>
            <Link className="py-2 px-4 rounded-lg text-gray-800 mb-2 w-[200px] hover:bg-gray-300 hover:text-black">
              Custommers
            </Link>
        </div>
        <div className='flex justify-center items-center gap-3 ml-2'>
            <TiStarburstOutline  className='text-3xl pb-2'/>
            <Link className="py-2 px-4 rounded-lg text-gray-800 mb-2 w-[200px] hover:bg-gray-300 hover:text-black">
              Events
            </Link>
        </div>
        <div className='flex justify-center items-center gap-3 ml-2'>
            <TfiMoney  className='text-3xl pb-2'/>
            <Link className="py-2 px-4 rounded-lg text-gray-800 mb-2 w-[200px] hover:bg-gray-300 hover:text-black">
              Tansactions
            </Link>
        </div>
        <div className='flex justify-center items-center gap-3 ml-2'>
            <MdDashboard  className='text-3xl pb-2'/>
            <Link className="py-2 px-4 rounded-lg text-gray-800 mb-2 w-[200px] hover:bg-gray-300 hover:text-black">
              Bookings
            </Link>
        </div>
        
        
    
  </div>
);

export default Sidebar