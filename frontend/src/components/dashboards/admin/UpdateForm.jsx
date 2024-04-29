import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const UpdateForm = ({ customer, onUpdate, onCancel }) => {
  const [name, setName] = useState(customer.username);
  const [email, setEmail] = useState(customer.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCustomer = {
      ...customer,
      username: name,
      email: email,
    };
    onUpdate(updatedCustomer);
  };

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 relative">
        Username
      </label>
      <div className="relative">
        <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" /> {/* Icon */}
        <input
          type="text"
          id="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10 py-2 pl-14" // Adjusted padding for the icon
          placeholder="Username"
        />
      </div>

      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 relative">
        Email
      </label>
      <div className="relative">
        <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" /> {/* Icon */}
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2 pl-10" // Adjusted padding for the icon
          placeholder="Email"
        />
      </div>

        <div className="mt-4 flex justify-between">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Update
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-700 dark:text-gray-400 font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
