import React from "react";
import Image from 'next/image';


const Hero = () => {

  return (

    <section className="bg-[#F2F0FF] py-10 px-6 h-[764px] justify-content items-center">

      <div className="h-auto mx-auto grid grid-cols-1 md:grid-cols-2 items-center p-52">

        <div>

          <p className="text-sm text-pink-600 ">Best Furniture For Your Castle...</p>

          <h1 className=" font-bold text-gray-800 mt-2 text-[53px]">

            New Furniture Collection <br /> Trends in 2020

          </h1>

          <p className="text-sm text-gray-600 mt-4">

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.

          </p>

          <button className="mt-6 bg-pink-500 text-white py-2 px-4 rounded">

            Shop Now

          </button>

        </div>

        <div className="relative">

          

          <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
          <Image 
               src="/images/1.png"
               alt="product 1"
               width={1920}
               height={760}
                  />
    
          </div>

          <span className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-2 py-1 rounded-full">

            50% off

          </span>

        </div>

      </div>

    </section>

  );

};



export default Hero;
