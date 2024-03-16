import React from "react";

const Button = ({ title }) => {
    return (
        <div>
            <button className="bg-white text-black px-10 py-3 rounded-full text-lg  hover:bg-gray-700 hover:text-white hover:scale-90 transition-all duration-300">
                {title}
            </button>
        </div>
    );
}

export default Button;
