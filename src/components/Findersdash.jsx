import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindersDash = () => {
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
      <div className="w-3/4 bg-[#FAF0E6] p-6 rounded-lg shadow-md mr-4">
        <h2 className="text-2xl font-bold mb-6 text-[#654321]">Welcome, Finder!</h2>
        <button
          onClick={handleRoleChange}
          className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white px-4 py-2 rounded hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300 mb-6"
        >
          Switch to Seeker Role
        </button>

        <h3 className="text-xl font-bold mb-4 text-[#654321]">Posted Documents</h3>
        <div className="space-y-4">
          {postedDocuments.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-4 rounded-lg shadow-sm border border-[#D2B48C] transition-all duration-300 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-[#654321]">{doc.docName}</h3>
              <p className="text-sm text-[#8B4513]">Type: {doc.docType}</p>
              <p className="text-sm text-[#8B4513]">Code: {doc.docCode}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => alert('Redirect to declare new document page')}
          className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white px-4 py-2 rounded mt-6 hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300"
        >
          Declare New Document
        </button>
      </div>

      {/* Right Div - Notifications */}
      <div className="w-1/4 bg-[#654321] p-6 rounded-lg shadow-md">
        <h3 className="text-white text-xl font-bold mb-6">Notifications</h3>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-[#D2B48C] p-4 rounded-lg text-[#654321] transition-all duration-300 hover:shadow-md"
            >
              <h4 className="font-semibold">{notification.itemName}</h4>
              <p className="text-sm">Claimed by: {notification.seekerName}</p>
              <p className="text-xs mt-2 italic">{notification.notice}</p>
              <button
                onClick={() => handleDeleteNotification(notification.id)}
                className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white px-3 py-1 rounded mt-2 hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300"
              >
                Delete
              </button>
            </div>
          ))}
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

export default FindersDash;