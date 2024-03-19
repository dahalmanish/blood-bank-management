import React from "react";

const Event = () => {
    return(
        <div className="container mx-auto leading-10">
            <h1 className="text-3xl font-bold m-10">EVENT</h1>
        <div className="flex gap-4">
        <div className="relative inline-block hover:scale-90 transition-all">
          <img
            src="./images/1.jpg" alt="" className=" w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
            <span className="text-3xl font-bold">Om hospital <br />Oct 20</span>  
          </div>
        </div>
         
        <div className="relative inline-block hover:scale-90 transition-all">
          <img
            src="./images/2.jpg" alt="" className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
            <span className="text-3xl font-bold">Scout Center Jorpati <br />Oct 21</span>  
          </div>
        </div>
         
        <div className="relative inline-block hover:scale-90 transition-all">
          <img
            src="./images/3.jpg" alt="" className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
            <span className="text-3xl font-bold">Orchid International College <br />Feb 30</span>  
          </div>
        </div>
      </div>
      </div>
    )
}

export default Event;