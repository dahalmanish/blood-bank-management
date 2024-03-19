import React from "react";
import Button from "../components/Button/Button";
import NavBar from "../components/Navbar/Navbar";

const OrderBlood = () => {
    return(
        <div>
            <NavBar/>
        <div className="container mx-auto flex justify-center">
        <form action="" className="relative w-1/2 mt-8 p-8 bg-red-500">
         <div className="text-white absolute top-4 right-3 text-3xl">&times;</div>
            <h1 className="uppercase text-white font-bold text-3xl mb-5">Please Fill up the Form</h1>
            <div className="text-white text-2xl">
            <label htmlFor="username" className="text-white">Name:</label>
            <input className="text-left rounded-lg p-2 m-3 text-black" type="text" placeholder="Username" required/><br />
            </div>
            
            <div className="text-white text-2xl mr-3">
            <label htmlFor="phone" className="text-white">Phone:</label>
            <input className=" text-left rounded-lg p-2 m-3 text-black" type="number" placeholder="Phone Number" required /> <br />
            </div>
            
            <div className="text-white text-2xl mr-32">
            <label htmlFor="bloodGroup">Blood Group:</label>
                        <select className="rounded-lg p-2 m-3 text-black" required>
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
            </div><br />
            <div className=" flex justify-center text-white text-2xl">
            <label className="mr-8" htmlFor="Message">Message:</label><br />
            <textarea cols="30" rows="3" className="">Message</textarea>
            </div><br />
            <div className="flex gap-3 justify-center flex-col">
            <Button title={"SUBMIT"}/>    
            </div>
        </form>
    </div>
    </div>
    )
}

export default OrderBlood;