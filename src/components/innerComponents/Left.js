import React from "react";
import { phone1, phone3 } from "../../assets/import";
import '../gradient.css'

const Left = () => {
  return (
    <div className="mt-[30px] md:mt-[70px] mr-[-150px]">
      <div className="flex flex-col justify-center items-center">
        <div className="hidden md:block w-full md:w-[270px]">
          <img src={phone1} alt="firstimage"/>
        </div>
        <div className="flex flex-col items-center justify-center md:mt-[60px]">
          <div className="gradient-number w-full md:w-[380px] font-bold">
            <span className="block w-full text-[200px] font-playfair">02</span>
          </div>
          <div className="w-[400px] ml-[100px] relative top-[-150px]">
            <h1 className="text-start text-[20px] font-semibold">
              Platform and App
              <br />
              Developing
            </h1>
            <p className="text-dark-grey">
              From web platforms to mobile applications, we excel in creating
              robust, user-friendly solutions that cater to your unique needs.
              Our development team combines expertise with creativity to build
              functional and scalable products that resonate with your audience.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="hidden md:block w-[270px] h-[400px]">
          <img src={phone3} alt="firstimage" className="h-[400px]"/>
        </div>
        <div className="flex flex-col items-center justify-center md:mt-[40px]">
          <div className="gradient-number w-[380px] font-bold">
            <span className="block w-full text-[200px] font-playfair">04</span>
          </div>
          <div className="w-[400px] ml-[100px] relative top-[-150px]">
            <h1 className="text-start text-[20px] font-semibold">
              Modern & Unique
              <br />
              App Look
            </h1>
            <p className="text-dark-grey">
              We believe that design is at the heart of a great user experience.
              Our design philosophy revolves around creating modern and unique
              designs that not only look stunning but also enhance usability and
              engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
