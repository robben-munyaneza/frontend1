import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SeekerDash = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const [foundItems, setFoundItems] = useState([
    { id: 1, docName: 'Passport', docType: 'Travel Document', docCode: 'P123456', location: 'Kigali-Gahanga' },
    { id: 2, docName: 'Driver', docType: 'Identification', docCode: 'DL789012', location: 'Kigali -Gikondo' },
    { id: 3, docName: 'ID-card  ', docType: 'Identification', docCode: 'DL789012', location: 'Kigali -Gasabo' },
  ]);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      itemName: 'National ID',
      status: 'Claim Approved',
      notice: 'Your claim has been approved. Visit the specified location to collect your document.',
    },
  ]);

  const handleRoleChange = () => {
    setShowModal(true);
  };

  const confirmRoleChange = () => {
    setShowModal(false);
    navigate('/finder-dashboard');
  };

  const cancelRoleChange = () => {
    setShowModal(false);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Implement search logic here
  };

  const handleClaim = (itemId) => {
    // Implement claim logic here
    alert(`Claiming item with ID: ${itemId}`);
  };

  const filteredItems = foundItems.filter(item =>
    item.docName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.docType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gradient-to-r from-[#D2B48C] to-[#F4A460] p-4">
      {/* Left Div - Search and Results */}
      <div className="w-3/4 bg-[#FAF0E6] p-6 rounded-lg shadow-md mr-4">
        <h2 className="text-2xl font-bold mb-6 text-[#654321]">Welcome, Seeker!</h2>
        <button
          onClick={handleRoleChange}
          className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white px-4 py-2 rounded hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300 mb-6"
        >
          Switch to Finder Role
        </button>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for lost documents..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-3 rounded-lg border border-[#D2B48C] focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
          />
        </div>

        <div className="space-y-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-sm border border-[#D2B48C] transition-all duration-300 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-[#654321]">{item.docName}</h3>
              <p className="text-sm text-[#8B4513]">Type: {item.docType}</p>
              <p className="text-sm text-[#8B4513]">Location: {item.location}</p>
              <button
                onClick={() => handleClaim(item.id)}
                className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white px-4 py-2 rounded mt-2 hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300"
              >
                Claim Document
              </button>
            </div>
          ))}
        </div>
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
              <p className="text-sm">Status: {notification.status}</p>
              <p className="text-xs mt-2 italic">{notification.notice}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Role Change Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#FAF0E6] p-6 rounded-lg shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#654321]">Confirm Role Change</h3>
            <p className="mb-6 text-[#654321]">Are you sure you want to switch to the Finder role?</p>
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

export default SeekerDash;
