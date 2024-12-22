import React from "react";
import Button from '../Button/Button';

const Form = () => {
    return (
        <div className="container mx-auto flex justify-center">
            <form action="" className="relative w-1/2 mt-8 p-8 bg-red-500">
             <div className="text-white absolute top-4 right-3 text-3xl">&times;</div>
                <h1 className="uppercase text-white font-bold text-3xl mb-5">Login</h1>
                <div className="text-white text-3xl">
                <label htmlFor="username" className="text-white">Name:</label>
                <input className="text-left rounded-lg p-2 m-3 text-black" type="text" placeholder="Username" required/><br /><br />
                </div>
                <div className="text-white text-3xl mr-12">
                <label htmlFor="password" className="text-white">Password:</label>
                <input className=" text-left rounded-lg p-2 m-3 text-black" type="password" placeholder="Password" required /> <br /><br />
                </div>
                <div className="flex gap-3 justify-center flex-col">
                <Button title={"Sign Up"}/>    
                <a href="/DonateBlood" className="text-white text-2xl">Forget password?</a>
                </div>
            </form>
        </div>
    )
}

export default Form;