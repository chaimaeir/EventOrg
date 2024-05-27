import React, { useState } from 'react';
import EventForm from '../components/shared/EventForm';
import ProfileNavbar from '../components/shared/ProfileNavbar';
import { IoAddCircleOutline } from "react-icons/io5";

function ProviderProfile() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <div>
      <ProfileNavbar />
      <div className='flex flex-col mx-28 mt-10 border rounded-t-2xl  shadow-lg py-5 px-9'>
        <div className='mx-10 mt-5 flex items-center justify-start'>
          <div className='flex justify-center gap-3'>
            <div className='min-h-[100px] border rounded-[50%] min-w-[100px] bg-black'></div>
            <div className='m-3'>
              <h2 className='font-semibold text-3xl'>Oumaima kadir</h2>
              <p className='text-[17px] text-gray-700'>beni mellal, morocco</p>
            </div>
          </div>
        </div>
        {!isFormVisible && (
          <div className='m-20 flex items-center justify-center text-[90px]  cursor-pointer'>
            <IoAddCircleOutline
              onClick={() => setIsFormVisible(true)}
            />
          </div>
        )}
        {isFormVisible && <EventForm />}
      </div>
      
    </div>
  );
}

export default ProviderProfile;
