import React from "react";
import { phone2, phone4 } from "../../assets/import";
import "../gradient.css";

const Right = () => {
  return (
    <div className="md:ml-[-150px] md:mt-[70px]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center h-[300px]">
          <div className="gradient-number w-full md:w-[380px] font-bold">
            <span className="block w-full text-[200px] font-playfair">01</span>
          </div>
          <div className="w-[400px] md:ml-[100px] relative md:top-[-150px]">
            <h1 className="text-start text-[20px] font-semibold">
              Innovative Futuristic
              <br />
              Features
            </h1>
            <p className="text-dark-grey">
              We embrace innovation as a driving force, constantly pushing
              boundaries to bring you tomorrow's technology today. Our solutions
              are designed with futuristic features that give your business a
              competitive edge in a rapidly evolving market.
            </p>
          </div>
        </div>
        <div className="w-[270px] h-[400px] hidden md:block">
          <img src={phone2} alt="firstimage" className="h-[400px]" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="gradient-number w-[380px] font-bold">
            <span className="block w-full text-[200px] font-playfair">03</span>
          </div>
          <div className="w-[500px] ml-[200px] relative top-[-150px]">
            <h1 className="text-start text-[20px] font-semibold">
              Multiple Options
              <br />
              Available
            </h1>
            <p className="text-dark-grey">
              We provide versatile solutions adaptable to any industry. Our
              research-driven approach ensures tailored, effective results,
              regardless of your field. Join us in shaping innovation in your
              industry. At Upsurge, we're not just building digital solutions;
              we're shaping the future of technology.Join us on this exciting
              journey, and let's turn your ideas into reality.
            </p>
          </div>
        </div>
        <div className="w-[270px] hidden md:block">
          <img src={phone4} alt="firstimage" />
        </div>
      </div>
    </div>
  );
};

export default Right;
