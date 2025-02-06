import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

// import { FaImage, FaTimes } from "react-icons/fa";


const DetailedFormSeeker = () => {
  
  const navigate = useNavigate();
  const seeker=()=>{
    navigate('/seekerdash');
  }

  const [formData, setFormData] = useState({
    fullNames: '',
    selectItem: '',
    whereLost: '',
    codeOfId:'',
    contactPhone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-2/3 p-8 bg-white shadow-lg">
        <h1 className="text-3xl font-bold mb-1  text-gray-800">SHAKA System</h1>
        <h2 className='mb-2 font-light text-2xl text-amber-700'>Seeker info:</h2>
        <form onSubmit={handleSubmit} className="space-y-1">
          <div className="grid grid-cols-1 gap-2">
            <label htmlFor="" className='block text-sm font-medium text-gray-700'>FullNames on the item:</label>
            <input
              type="text"
              name="firstName"
              value={formData.fullNames}
              onChange={handleChange}
              placeholder="Full Names"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bamber-500"
              required
            />
            <label htmlFor="" className='block text-sm font-medium text-gray-700'>Select type:</label>
            <select
             name="selectItem"
             value={formData.selectItem}
             onChange={handleChange}
             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
             required
             id="">
              <option value="">Select the type of item you found</option>
              <option value="">Identification Card</option>
              <option value="">Driving Licence</option>
              <option value="">Land Document</option>
            </select>
          <label htmlFor="block text-sm font-medium text-gray-700">Enter code on the item:</label>
          <input
            type="text"
            name="codeOfId"
            value={formData.codeOfId}
            onChange={handleChange}
            placeholder="Enter code on the item"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
            <label htmlFor="block text-sm font-medium text-gray-700">Where Lost:</label>
            <input
              type="text"
              name="whereFound"
              value={formData.whereLost}
              onChange={handleChange}
              placeholder="Where the item was lost"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <label htmlFor="block text-sm font-medium text-gray-700">Enter your phone number:</label>
            <input
              type="tel"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              placeholder="Contact Phone Number"
              className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          <button onClick={seeker}
            type="submit" 
            className="w-full bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-700 transition duration-300"
          >
            Submit Report
          </button>
          </div>
        </form>
      </div>

      <div className="w-1/3 p-8 bg-blue-50 flex flex-col">
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4 text-amber-800">SHAKA Tracking System</h2>
          <p className="text-gray-700 mb-6">
          Sisitemu yacu yose ifasha gukurikirana no kubona impapuro z’abantu babuze
          binyuze mu gukusanya amakuru arambuye no gufatanya n’inzego z’ubuyobozi bw’aho.
          </p>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-amber-700">Geolocation Tracking</h3>
              <p className="text-gray-600">Advanced geolocation services to aid in search efforts.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-amber-700">Comprehensive Databases</h3>
              <p className="text-gray-600">Integrated with national missing persons databases.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedFormSeeker;