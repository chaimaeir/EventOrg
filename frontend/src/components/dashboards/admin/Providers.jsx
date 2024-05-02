import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProviders, deleteProvider, updateProvider } from '../../../redux/actions/providerActions';
import Navbar from './Navbar';
import AdminSidebar from './AdminSidebar';
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import UpdateProviderForm from './forms/UpdateProviderForm';

function Providers() {
  const dispatch = useDispatch();
  const providers = useSelector((state) => state.providers.providers);
  const loading = useSelector((state) => state.providers.loading);
  const error = useSelector((state) => state.providers.error);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [confirmUpdate, setConfirmUpdate] = useState(null);
  const [showUpdateProviderForm, setShowUpdateProviderForm] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  useEffect(() => {
    dispatch(fetchProviders());
  }, [dispatch]);

  const handleDelete = (providerId) => {
    if (confirmDelete === providerId) {
      dispatch(deleteProvider(providerId));
      setConfirmDelete(null);
    } else {
      setConfirmDelete(providerId);
    }
  };

  const handleUpdate = (provider) => {
    if (confirmUpdate === provider._id) {
      dispatch(updateProvider(provider));
      setConfirmUpdate(null);
      setShowUpdateProviderForm(false);
    } else {
      setConfirmUpdate(provider._id);
      setSelectedProvider(provider);
      setShowUpdateProviderForm(true);
    }
  };

  const handleCancelUpdate = () => {
    setConfirmUpdate(null);
    setShowUpdateProviderForm(false);
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
                    Company name
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
                {providers.map((provider, index) => (
                  <tr
                    key={provider._id}
                    className="bg-white dark:bg-white-800 dark:border-gray-700 hover:bg-gray-200 "
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                      {provider.companyName}
                    </td>
                    <td className="px-6 py-4">{provider.email}</td>
                    <td className="px-6 py-4">{new Date(provider.registeredAt).toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleUpdate(provider)}
                        className="mr-2 font-medium text-green-600 dark:text-green-500 hover:underline cursor-pointer"
                      >
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(provider._id)}
                        className=" text-red-600 dark:text-red-500  cursor-pointer"
                      >
                        <MdOutlineDeleteOutline />
                      </button>
                      {confirmDelete === provider._id && (
                        <div className="absolute z-10 top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
                          <div className="bg-white p-4 rounded-md shadow-md text-center">
                            <p>Are you sure you want to delete this provider?</p>
                            <div className="mt-4">
                              <button onClick={() => handleDelete(provider._id)} className="bg-red-500 text-white px-4 py-2 mr-2 rounded-md hover:bg-red-600">Yes</button>
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
      {showUpdateProviderForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-md">
            <UpdateProviderForm provider={selectedProvider} onUpdate={handleUpdate} onCancel={handleCancelUpdate} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Providers;
