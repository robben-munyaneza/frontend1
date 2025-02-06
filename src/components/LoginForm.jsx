import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
 const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <div className="w-full max-w-md shadow-xl border-0 bg-white rounded-lg p-6">
        <div className="space-y-1">
          <h2 className="text-2xl text-center text-amber-900 font-bold">Login</h2>
        </div>
        <div className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-amber-900">Phone or Email</label>
              <input
                type="text"
                name="identifier"
                required
                placeholder="Enter phone number or email"
                className="w-full rounded-lg border border-amber-200 p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                value={formData.identifier}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-amber-900">Password</label>
              <input
                type="password"
                name="password"
                required
                className="w-full rounded-lg border border-amber-200 p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button  onClick={() => navigate('/setrole')}
              type="submit"
              className="w-full bg-amber-800 text-white py-3 px-4 rounded-lg hover:bg-amber-900 transition-colors duration-200 font-medium shadow-lg"
            >
              Login
            </button>

            <p className="text-center text-sm text-amber-900">
              Don't have an account? <a href="#" className="text-amber-800 hover:underline">Register here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;