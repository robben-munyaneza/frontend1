import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    names: "",
    identifier: "", // Holds either an email or a phone number
    homeLocation: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = process.env.REACT_APP_API_URL; // Get API URL from environment variables

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.identifier) {
      alert("Please enter either a phone number or an email.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(`http://localhost:5100/auth/register`, formData);

      console.log("Response:", response.data);
      alert("Registration successful!");
      
      navigate('/login'); // Redirect to login after success
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      {/* Registration Form */}
      <div className="w-full max-w-md shadow-xl border-0 bg-white rounded-lg p-6">
        <div className="space-y-1">
          <h2 className="text-2xl text-center text-amber-900 font-bold">Shaka Tracking System</h2>
        </div>
        <div className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-amber-900">Name</label>
              <input
                type="text"
                name="names"
                required
                className="w-full rounded-lg border border-amber-200 p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                value={formData.names}
                onChange={handleChange}
              />
            </div>

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
              <label className="block text-sm font-medium mb-1 text-amber-900">Location</label>
              <input
                type="text"
                name="homeLocation"
                required
                className="w-full rounded-lg border border-amber-200 p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                value={formData.homeLocation}
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

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-amber-800 text-white py-3 px-4 rounded-lg hover:bg-amber-900 transition-colors duration-200 font-medium shadow-lg"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Register"}
            </button>

            {/* Login Button */}
            <p className="text-center text-sm text-gray-600 mt-3">
              Already have an account?{" "}
              <button
                onClick={() => navigate('/login')}
                className="text-amber-700 font-medium hover:underline"
              >
                Login
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
