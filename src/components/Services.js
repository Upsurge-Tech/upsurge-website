import React from 'react';
import './gradient.css';
import { service1, service2, service3 } from '../assets/import';

const Services = () => {
  return (
    <div id="services">
      <div className="">
        <h1 className="text-center gradient-text text-[30px] md:text-[50px] font-semibold">
          Our Services
        </h1>
        <p className="text-center text-dark-grey text-[20px] md:tracking-[5px]">
          Products and Services Built to Perform
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 w-5/6 md:w-3/4 mx-auto gap-y-6 md:gap-y-0 gap-x-6 mt-8">
          <div className="flex flex-col">
            <div className="h-[350px]">
              <img src={service1} alt="service1" className="h-full w-full"/>
            </div>
            <div className="flex justify-center items-center bg-[#A19393] font-semibold text-[20px] h-full">
              <p className='md:py-5'>Design</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-[350px]">
              <img src={service2} alt="service2" className="h-full w-full" />
            </div>
            <div className="flex justify-center items-center bg-[#A19393] font-semibold text-[20px] h-full">
              <p className='md:py-5'>Website</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-[350px]">
              <img src={service3} alt="service3" className="h-full w-full" />
            </div>
            <div className="flex justify-center items-center bg-[#A19393] font-semibold text-[20px] h-full">
              <p className='md:p-5'>Mobile App</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services
