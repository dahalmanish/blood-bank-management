import React from "react";
import Button from "../Button/Button";

const Hero = () => {
    return (
        <div className="relative">
            <img className="" src="./images/background.png" alt="Donate Blood, Save a Life" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                <p className="text-center uppercase text-6xl md:text-8xl font-semibold leading-tight">Donate blood<br />Save a life</p>
                <div className="flex gap-5 mt-5">
                    <Button title={"Donate Blood"} />
                    <Button title={"Order Now"} />
                </div>
            </div>
        </div>
    );
}

export default Hero;