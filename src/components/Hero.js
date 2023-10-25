import React from "react";
import { Link } from "react-router-dom";
import heroimg from '../assets/HeroImg.png';
import './gradient.css';


function Hero() {
  return (
    <section id="hero" className="md:mt-[80px] mb-[40px]">
      <div className="md:flex md:justify-between md:items-center md:h-full md:w-5/6 mx-auto">
        <div className="hidden md:order-2 md:flex justify-center basis-3/5 z-10 mt-16 md:mb-16 md:mt-25 md:max-h-[620px] md:h-full">
          <img
            src={heroimg}
            alt="heroimg"
            className="z-10 max-w-[400px] md:max-w-[700px] md:max-h-[400px] md:w-full md:h-full w-[280px] h-[280px]"
          />
        </div>
        <div className="basis-2/5 mt-[80px] md:mt-0 md:ml-10 flex flex-col items-center justify-center">
          <p className="font-semibold text-[35px] md:text-[83px] gradient-text">
            Upsurge
          </p>
          <p className="text-[20px] md:text-[20px] mt-4 md:mt-0">
            Reach the uncharted Horizon
          </p>
          <div className="md:mt-[25px] mt-[10px] gradient-background w-[140px] h-[50px] flex justify-center items-center">
            <div className="w-[136px] h-[46px] flex items-center justify-center bg-white hover:bg-[#a536a5] hover:text-white">
              <Link>VIEW MORE</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
