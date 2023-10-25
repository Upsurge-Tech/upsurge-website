import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { BiMap } from 'react-icons/bi';
import { PiPhoneCallLight } from 'react-icons/pi';
import { LuMail } from "react-icons/lu";


const Footer2 = () => {
  return (
    <div className='w-full flex flex-col justify-between items-center'>
      <div className=" w-full md:h-[500px] h-[800px] mt-[-153px] md:mt-[-106px] bg-[#1B1B1B] flex justify-center items-center text-white">
        <div className="w-full md:w-5/6 md:h-[400px] mx-auto flex justify-center items-center px-6 md:px-0">
          <div className="w-full h-[300px] flex flex-col md:flex-row justify-around items-start">
            <div className="flex flex-col gap-y-5">
              <div className="w-8 h-8 md:w-12 md:h-12">
                <img src={logo} alt="logo" />
              </div>
              <div className="flex gap-x-2">
                <BiMap size={20} />
                <p>5-kilo</p>
              </div>
              <div className="flex gap-x-2">
                <PiPhoneCallLight size={20} />
                <p>0930365902</p>
              </div>
              <div className="flex gap-x-2">
                <LuMail size={20} />
                <p>upsurgeet@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col text-[13px] gap-y-2 mt-[70px]">
              <Link className="hover:underline">MAIN HOME</Link>
              <Link className="hover:underline">CONTACT</Link>
              <Link className="hover:underline">PORTFOLIO</Link>
              <Link className="hover:underline">SHOP</Link>
              <Link className="hover:underline">BLOG</Link>
            </div>
            <div className="flex flex-col text-[13px] gap-y-2 mt-[70px]">
              <Link className="hover:underline">ABOUT US</Link>
              <Link className="hover:underline">ABOUT ME</Link>
              <Link className="hover:underline">OUR PROCESS</Link>
              <Link className="hover:underline">OUR TEAM</Link>
              <Link className="hover:underline">PRICING PLAN</Link>
            </div>
            <div className="flex flex-col mt-[20px] md:mt-[70px] md:border-0 md:p-0 border-2 p-4 rounded">
              <h1 className="pb-2">Contact Us</h1>
              <input
                placeholder="Your Email"
                className="bg-transparent border-b-[0.7px] border-white px-4 py-2 w-[200px] md:w-[300px]"
              />
              <div className="flex md:mt-3">
                <p>____</p>
                <button className="transcript-[2px]">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='bg-[#1B1B1B] w-full text-white text-center pb-8'>&copy;2023, All Rights Reserved</p>
    </div>
  );
}

export default Footer2