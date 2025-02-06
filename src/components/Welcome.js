import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-lg p-10 text-center text-black">
        <h2 className="text-2xl font-bold mb-6">
          <span className="text-amber-800">Shaka:</span> Find Your Lost Requirements
        </h2>
        
        <p className="mb-4">
          Shaka is designed to help people find important documents and requirements. 
          Users can register and provide their information to make it easier to access or retrieve necessary items.
        </p>
        
        <p className="mb-4 font-semibold">Examples of requirements:</p>
        <ul className="text-left mx-auto mb-6 inline-block">
          <li>✅ Identification Cards (ID)</li>
          <li>✅ Passports</li>
          <li>✅ Driver's Licenses</li>
          <li>✅ Certificates (Birth, Marriage, Education, etc.)</li>
          <li>✅ Business Permits</li>
          <li>✅ Other official documents</li>
        </ul>

        <button 
          onClick={() => navigate('/register')}
          className="py-3 px-6 rounded-full bg-amber-800 text-white hover:bg-amber-700 transition-colors duration-300"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Welcome;
