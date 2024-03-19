import React from "react";

<<<<<<< HEAD
const Button = ({title,width}) => {
    const style={
        width: width
    }
    return (
        <div>
            <button style={style} className="bg-white text-black px-10 py-3 rounded-full text-lg  hover:bg-gray-700 hover:text-white font-bold hover:scale-90 transition-all duration-300">
=======
const Button = ({ title }) => {
    return (
        <div>
            <button className="bg-white text-black px-10 py-3 rounded-full text-lg  hover:bg-gray-700 hover:text-white hover:scale-90 transition-all duration-300">
>>>>>>> fc9be08503aed6925dec2452606b28fc0c9f2f82
                {title}
            </button>
        </div>
    );
}

export default Button;
