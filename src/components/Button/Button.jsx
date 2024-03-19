import React from "react";

const Button = ({title,width}) => {
    const style={
        width: width
    }
    return (
        <div>
            <button style={style} className="bg-white text-black px-10 py-3 rounded-full text-lg  hover:bg-gray-700 hover:text-white font-bold hover:scale-90 transition-all duration-300">
                {title}
            </button>
        </div>
    );
}

export default Button;
