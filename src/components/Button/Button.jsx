import React from "react";

const Button = ({title}) => {
    return (
        <div>
            <button className=" bg-white px-10 py-3 rounded-full text-lg text-black hover:bg-gray-700 ">{title}</button>
        </div>
    )
}

export default Button;