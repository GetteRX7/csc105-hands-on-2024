import React from "react";
import AboutMe from "../pages/aboutme";
import Home from "../pages/home";


const Navbar = () => {
    return (
        <nav className="bg-white p-4">
      <div className="flex justify-between items-center max-w-full overflow-x-auto">
        <div className="whitespace-nowrap">
          <h1 className="text-xl sm:text-2xl font-bold">Settawut</h1>
        </div>
        
        <div className="flex-1 flex justify-center items-center space-x-4 sm:space-x-8 whitespace-nowrap mx-4">
          <a href="" className="text-black font-semibold text-sm sm:text-base">Home</a>
          <a href="" className="text-black font-semibold text-sm sm:text-base">About me</a>
          <a href="" className="text-black font-semibold text-sm sm:text-base">Gallery</a>
        </div>
        
        <div className="whitespace-nowrap">
          <a href="#" className="bg-green-900 text-white font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">Contact</a>
        </div>
      </div>
    </nav>
    );
}
export default Navbar;