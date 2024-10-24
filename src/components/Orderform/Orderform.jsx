import React, { useState } from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const OrderBlood = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bloodGroup: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/order', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="container mx-auto flex justify-center">
        <form onSubmit={handleSubmit} className="relative w-1/2 mt-8 p-8 bg-red-500">
          <div className="text-white absolute top-4 right-3 text-3xl">&times;</div>
          <h1 className="uppercase text-white font-bold text-3xl mb-5">
            Please Fill up the Form
          </h1>

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

          <div className="flex justify-center text-white text-2xl">
            <label className="mr-8" htmlFor="message">Message:</label>
            <textarea
              cols="30"
              rows="3"
              type="text"
              name="message"
              className="text-black rounded-lg p-2"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-3 justify-center flex-col mt-4">
            <Button title="SUBMIT" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderBlood;
