import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetRole = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      itemName: 'Passport',
      seekerName: 'John Doe',
      notice: 'Please submit this document to the nearest government establishment to claim your reward.',
    },
    {
      id: 2,
      itemName: 'Driver’s License',
      seekerName: 'Jane Smith',
      notice: 'Please submit this document to the nearest government establishment to claim your reward.',
    },
  ]);

  const [postedDocuments, setPostedDocuments] = useState([
    { id: 1, docName: 'Passport', docType: 'Travel Document', docCode: 'P123456' },
    { id: 2, docName: 'Driver’s License', docType: 'Identification', docCode: 'DL789012' },
  ]);

  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  const handleRoleChange = () => {
    setShowModal(true);
  };

  const confirmRoleChange = () => {
    setShowModal(false);
    navigate('/seeker-dashboard'); // Redirect to seeker dashboard (placeholder route)
  };

  const cancelRoleChange = () => {
    setShowModal(false);
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-[#D2B48C] to-[#F4A460] p-4">
      {/* Left Div - Document Status */}
      <div className="w-3/4 bg-[#FAF0E6] p-6 rounded-lg shadow-md mr-4 flex flex-col justify-center items-center">
        {/* Buttons Container - Centered */}
        <h1 className='text-3xl space-y-5'>Choose Role</h1><br />

        <div className="space-y-6"> {/* Increase spacing between buttons */}
          <button className="flex items-center px-8 py-4 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#A0522D] focus:ring-offset-2 hover:shadow-xl">
          <img width="50" height="50" src="https://img.icons8.com/fluency-systems-filled/50/FFFFFF/user-male-circle.png" alt="user-male-circle"/>



            <span className="font-semibold text-lg">Founder</span>
          </button>

          <button className="flex items-center px-8 py-4 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#A0522D] focus:ring-offset-2 hover:shadow-xl">
          <img width="50" height="50" src="https://img.icons8.com/fluency-systems-filled/50/FFFFFF/user-male-circle.png" alt="user-male-circle"/>


            <span className="font-semibold text-lg">Seeker</span>
          </button>
        </div>
      </div>
      {/* Right Div - Notifications */}
      <div className="w-1/4 bg-[#654321] p-6 rounded-lg shadow-md">
        <h3 className="text-white text-xl font-bold mb-6">SHAKA System</h3>
        <div className="space-y-4">
        <div class="max-w-4xl mx-auto p-6 bg-gradient-to-r from-[#F4A460] to-[#D2B48C] rounded-lg shadow-lg">
  <div class="text-center mb-8">
    <h2 class="text-3xl font-semibold text-[#3E2A47]">Find Your Lost Item</h2>
    <p class="text-lg text-[#3E2A47] mt-2">Whether it's an ID card, passport, or other documents, we help you retrieve them easily.</p>
  </div>

  </div>
</div>

        </div>
      

      {/* Role Change Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#FAF0E6] p-6 rounded-lg shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#654321]">Confirm Role Change</h3>
            <p className="mb-6 text-[#654321]">Are you sure you want to switch to the Seeker role?</p>
            <div className="flex space-x-4">
              <button
                onClick={confirmRoleChange}
                className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white px-4 py-2 rounded hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300"
              >
                Yes, Switch
              </button>
              <button
                onClick={cancelRoleChange}
                className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white px-4 py-2 rounded hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetRole;
