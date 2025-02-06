import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { FaImage, FaTimes } from "react-icons/fa";

const DetailedFormFounder = () => {

    const navigate = useNavigate();
    const finder=()=>{
      navigate('/finderdash');
    }
    

  
  const [formData, setFormData] = useState({
    fullName: '',
    selectItem: '',
    dateOfBirth: '',
    whereFound: '',
    image:null,
    codeOfId:'',
    contactPhone: ''
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prevState => ({
        ...prevState,
        image: file
      }));

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  const removeImage = () => {
    setFormData(prevState => ({
      ...prevState,
      image: null
    }));
    setImagePreview(null);
  };
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-2/3 p-8 bg-white shadow-lg">
        <h1 className="text-3xl font-bold mb-1  text-gray-800">SHAKA System</h1>
        <h2 className='mb-2 font-light text-2xl text-amber-700'>Finder info:</h2>
        <form onSubmit={handleSubmit} className="space-y-1">
          <div className="grid grid-cols-1 gap-1">
            <label htmlFor="" className='block text-sm font-medium text-gray-700'>FullNames on the item:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full names"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
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
              <option value="Identification Card">Identification Card</option>
              <option value="Driving Licence">Driving Licence</option>
              <option value="Land Document">Land Document</option>
            </select>
            <label className="block text-sm font-medium text-gray-700">Date of birth on the item:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              placeholder="Date of Birth"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
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
            <label htmlFor="block text-sm font-medium text-gray-700">Where found:</label>
            <input
              type="text"
              name="whereFound"
              value={formData.whereFound}
              onChange={handleChange}
              placeholder="Where the item was founded"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
             <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Provide a picture (as evidence):
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-amber-500 transition-colors duration-200">
              <div className="space-y-1 text-center">
                {!imagePreview ? (
                  <>
                    <div className="flex flex-col items-center">
                      {/* <FaImage className='mx-auto h-12 w-12 text-red-400'/> */}
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-amber-600 hover:text-amber-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-amber-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="image"
                            type="file"
                            accept="image/*"
                            className="sr-only"
                            onChange={handleImageChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-h-64 rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-amber-500 text-white rounded-full p-1 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                    >
                      {/* <FaTimes className='h-5 w-5'/> */}
                    </button>
                  </div>
                )}
              </div>
            </div>
            <label htmlFor="block text-sm font-medium text-gray-700">Enter your phone number:</label>
            <input
              type="tel"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              placeholder="Contact Phone Number"
              className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <button onClick={finder}
            type="submit" 
            className="w-full bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-600 transition duration-300"
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
          Sisitemu yacu  ifasha gukurikirana no kubona impapuro z’abantu babuze
          binyuze mu gukusanya amakuru arambuye no gufatanya n’inzego z’ubuyobozi bw’aho.
          </p>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-amber-700">Gukurikirana Aho Biri(Geolocation Tracking)</h3>
              <p className="text-gray-600">Serivisi z’iterambere z’aho dokima ziri kugira ngo zifashe mu gushakisha.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-amber-700">Ibigenga by' Amakuru(Comprehensive Databases)</h3>
              <p className="text-gray-600">Byahujwe n’ibigega by’igihugu bibika impapuro zaburiwe irengero..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailedFormFounder;