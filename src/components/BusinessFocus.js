import React from "react";
import "./gradient.css";
import { VerticalLine } from "./imports";
import Right from "./innerComponents/Right";
import Left from "./innerComponents/Left";

const BusinessFocus = () => {
  return (
    <div id="businessfocus" className="mt-[50px] md:mt-[100px]">
      <div className="w-full md:w-5/6 mx-auto">
        <h1 className="text-center text-[30px] font-bold gradient-text">
          Our Business
          <br />
          Focus
        </h1>
        <div className="grid grid-cols-3">
          <Left />
          <VerticalLine />
          <Right />
        </div>
      </div>
    </div>
  );
};

export default BusinessFocus;
