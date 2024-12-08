import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-evenly items-center p-[168px]">
      <div className="text-xl font-bold text-purple-700 text-[34px] ">Hekto</div>
      <ul className="flex space-x-6 text-sm">
        <li className=" text-[16px]">Home</li>
        <li className=" text-[16px]">Pages</li>
        <li className=" text-[16px]">Products</li>
        <li className=" text-[16px]">Blog</li>
        <li className=" text-[16px]">Shop</li>
        <li className=" text-[16px]">Contact</li>
      </ul>
      <div className='flex items-center'>
            <input type="text" id="inputtext" placeholder='What are you looking for?' className=' p-[20px] h-[40px] w-[290px] bg-gray-200' />
            <IoSearch className='text-white size-19 bg-[#FB2E86]' />
            <div className='absolute '>
            
            </div>
            </div>
    </nav>
  );
};

export default Navbar;