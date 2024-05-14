import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomers, deleteCustomer, updateCustomer} from '../../../redux/actions/AdminBackOffice/customerActions';
import Navbar from './Navbar';
import AdminSidebar from './AdminSidebar';
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import UpdateForm from './forms/UpdateForm';


function Customers() {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.customers);
  const loading = useSelector((state) => state.customers.loading);
  const error = useSelector((state) => state.customers.error);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [confirmUpdate, setConfirmUpdate] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
 

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleDelete = (customerId) => {
    if (confirmDelete === customerId) {
      dispatch(deleteCustomer(customerId));
      setConfirmDelete(null);
    } else {
      setConfirmDelete(customerId);
    }
  };

  const handleUpdate = (customer) => {
    if (confirmUpdate === customer._id) {
      dispatch(updateCustomer(customer));
      setConfirmUpdate(null);
      setShowUpdateForm(false);
    } else {
      setConfirmUpdate(customer._id);
      setSelectedCustomer(customer);
      setShowUpdateForm(true);
    }
  };

  const handleCancelUpdate = () => {
    setConfirmUpdate(null);
    setShowUpdateForm(false);
  };

 

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="w-full p-5">
        <Navbar />
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div className="overflow-x-auto shadow-md sm:rounded-lg bg-gray-300">
            <table className="w-full border text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-grey-700 uppercase bg-gray-200 ">
                <tr>
                  <th scope="col" className="p-4">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Registered At
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr
                    key={customer._id}
                    className="bg-white dark:bg-white-800 dark:border-gray-700 hover:bg-gray-200 "
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                      {customer.username}
                    </td>
                    <td className="px-6 py-4">{customer.email}</td>
                    <td className="px-6 py-4">{new Date(customer.registeredAt).toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleUpdate(customer)}
                        className="mr-2 font-medium text-green-600 dark:text-green-500 hover:underline cursor-pointer"
                      >
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(customer._id)}
                        className=" text-red-600 dark:text-red-500  cursor-pointer"
                      >
                        <MdOutlineDeleteOutline />
                      </button>
                      {confirmDelete === customer._id && (
                        <div className="absolute z-10 top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
                          <div className="bg-white p-4 rounded-md shadow-md text-center">
                            <p>Are you sure you want to delete this customer?</p>
                            <div className="mt-4">
                              <button onClick={() => handleDelete(customer._id)} className="bg-red-500 text-white px-4 py-2 mr-2 rounded-md hover:bg-red-600">Yes</button>
                              <button onClick={() => setConfirmDelete(null)} className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400">No</button>
                            </div>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {showUpdateForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-md">
            <UpdateForm customer={selectedCustomer} onUpdate={handleUpdate} onCancel={handleCancelUpdate} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Customers;
