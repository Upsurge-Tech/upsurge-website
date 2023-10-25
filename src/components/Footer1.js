import React from "react";
import { background } from "../assets/import";
import "./gradient.css";
import { Link } from "react-router-dom";

const Footer1 = () => {
  return (
    <div id="footer1">
      <div className="w-full h-[350px]">
        <img src={background} alt="background" className="w-full h-[350px]" />
      </div>
      <div className="relative top-[-230px]">
        <h1 className="text-center text-[30px] gradient-text font-semibold tracking-[1px]">
          Are you here for internship?
        </h1>
        <div className="text-center flex justify-center items-center mt-5">
          <Link to="https://forms.gle/Tu6oEqLHgPUqDaia7" className="border-2 border-black w-fit py-2 px-4 hover:bg-[#800088] hover:text-white" target='_blank'>
            Click Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
