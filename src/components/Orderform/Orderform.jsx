import React, { useState } from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const OrderBlood = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bloodGroup: '',
  });

  const [matchingUsers, setMatchingUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the server
      // await axios.post('http://localhost:5000/order', formData); // Submit the order data to the server
  
      // Fetch matching users based on the submitted form data
      const usersResponse = await axios.post("http://localhost:5000/matching-users",formData);
      setMatchingUsers(usersResponse.data.users);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Response not received');
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex justify-center">
        <form onSubmit={handleSubmit} className="relative w-1/2 mt-8 p-8 bg-red-500">
          <div className="text-white absolute top-4 right-3 text-3xl">&times;</div>
          <h1 className="uppercase text-white font-bold text-3xl mb-5">Please Fill up the Form</h1>

          <div className="text-white text-2xl">
            <label htmlFor="name" className="text-white">Name:</label>
            <input
              className="text-left rounded-lg p-2 m-3 text-black"
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-white text-2xl mr-3">
            <label htmlFor="phone" className="text-white">Phone:</label>
            <input
              className="text-left rounded-lg p-2 m-3 text-black"
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-white text-2xl mr-32">
            <label htmlFor="bloodGroup">Blood Group:</label>
            <select
              className="rounded-lg p-2 m-3 text-black"
              name="bloodGroup"
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

          <div className="flex gap-3 justify-center flex-col mt-4">
            <Button title="SUBMIT" />
          </div>
        </form>
      </div>

      {/* Display Matching Users */}
      {matchingUsers.length > 0 && (
  <div className="container mx-auto mt-8 p-8 bg-white rounded shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Matching Users</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {matchingUsers.map((user, index) => (
        <div
          key={index}
          className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-black">Username:{user.name}</h3>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              {user.bloodGroup}
            </span>
          </div>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Phone:</span> {user.phone}
          </p>
        </div>
      ))}
    </div>
  </div>
)}

    </div>
  );
};

export default OrderBlood;
