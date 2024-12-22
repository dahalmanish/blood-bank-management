import React, { useState } from 'react';
import axios from 'axios';
import Button from '../Button/Button';

const DonateForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    phone: '',
    email: '',
    dob: '',
    gender: '',
    bloodGroup: '',
  });
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(''); // Clear previous success message
    setErrorMessage(''); // Clear previous error message
    try {
      const response = await axios.post('http://localhost:5000/donate', formData);
      if (response.status === 200 || response.status === 201) {
        setSuccessMessage('Form submitted successfully!');
        setFormData({
          username: '',
          password: '',
          phone: '',
          email: '',
          dob: '',
          gender: '',
          bloodGroup: '',
        }); // Reset form fields
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Failed to submit the form. Please try again.');
    }
  };

  return (
    <div className="container mx-auto flex justify-center">
      <form 
        className="relative w-full md:w-1/2 mt-8 p-8 bg-red-500 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="uppercase text-white font-bold text-3xl mb-5">
          Please Fill Up the Form
        </h1>

        {/* Success and Error Messages */}
        {successMessage && (
          <div className="bg-green-100 text-green-700 p-4 mb-4 rounded">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-4 mb-4 rounded">
            {errorMessage}
          </div>
        )}

        {/* Form Fields */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-white text-2xl">Name:</label>
          <input 
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            className="w-full rounded-lg p-2 mt-1 text-black"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-white text-2xl">Password:</label>
          <input 
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="w-full rounded-lg p-2 mt-1 text-black"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-white text-2xl">Phone:</label>
          <input 
            id="phone"
            name="phone"
            type="number"
            placeholder="Phone Number"
            className="w-full rounded-lg p-2 mt-1 text-black"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-2xl">Email:</label>
          <input 
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="w-full rounded-lg p-2 mt-1 text-black"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dob" className="block text-white text-2xl">DOB:</label>
          <input 
            id="dob"
            name="dob"
            type="date"
            className="w-full rounded-lg p-2 mt-1 text-black"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block text-white text-2xl">Gender:</label>
          <select 
            id="gender"
            name="gender"
            className="w-full rounded-lg p-2 mt-1 text-black"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="bloodGroup" className="block text-white text-2xl">Blood Group:</label>
          <select 
            id="bloodGroup"
            name="bloodGroup"
            className="w-full rounded-lg p-2 mt-1 text-black"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="flex justify-center mt-6">
          <Button title="SUBMIT" />
        </div>
      </form>
    </div>
  );
};

export default DonateForm;
