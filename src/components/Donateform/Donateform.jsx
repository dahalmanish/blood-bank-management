import React from "react";
import Button from '../Button/Button';

const DonateForm = () => {
    return (
        <div className="container mx-auto flex justify-center">
            {/* <form action="" className="relative w-1/2 mt-8 p-8 bg-red-500">
             <div className="text-white absolute top-4 right-3 text-3xl">&times;</div>
                <h1 className="uppercase text-white font-bold text-3xl mb-5">Please Fill up the Form</h1>
                <div className="text-white text-2xl">
                <label htmlFor="username" className="text-white">Name:</label>
                <input className="text-left rounded-lg p-2 m-3 text-black" type="text" placeholder="Username" required/><br />
                </div>
                <div className="text-white text-2xl mr-12">
                <label htmlFor="password" className="text-white">Password:</label>
                <input className=" text-left rounded-lg p-2 m-3 text-black" type="password" placeholder="Password" required /> <br />
                </div>
                <div className="text-white text-2xl mr-3">
                <label htmlFor="phone" className="text-white">Phone:</label>
                <input className=" text-left rounded-lg p-2 m-3 text-black" type="number" placeholder="Phone Number" required /> <br />
                </div>
                <div className="text-white text-2xl mr-1">
                <label htmlFor="Email" className="text-white">Email:</label>
                <input className=" text-left rounded-lg p-2 m-3 text-black" type="email" placeholder="Email" required /> <br />
                </div>
                <div className="text-white text-2xl mr-20">
                <label htmlFor="DOB" className="text-white">DOB:</label>
                <input className="text-left rounded-lg p-2 m-3 text-black" type="date" placeholder="DOB" required/><br />
                </div>
                <div className="text-white text-2xl mr-32">
                <label htmlFor="gender">Gender:</label>
                            <select className="rounded-lg p-2 m-3 text-black" required>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
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
                <div className="flex gap-3 justify-center flex-col">
                <Button title={"SUBMIT"}/>    
                </div>
            </form> */}
            <div className="form flex flex-col">
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                id="username"
                />
                <label htmlFor="password">Password</label>
                <input 
                type="text" 
                id="password"
                />
            </div>
        </div>
    )
}

export default DonateForm;