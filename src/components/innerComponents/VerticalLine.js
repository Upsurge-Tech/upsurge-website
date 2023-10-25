import React from "react";
import '../gradient.css';

function VerticalLine() {
  return (
    <div className="hidden md:block relative h-[1500px] mt-[100px]">
      <div className="h-full border-r gradient-background w-[2px] border-dotted absolute left-1/2"></div>
      <div className="h-full absolute left-1/2 top-0 transform -translate-x-1/2">
        <div className="h-2 w-2 gradient-background rounded-full mt-[100px]"></div>
        <div className="h-2 w-2 gradient-background rounded-full my-[400px]"></div>
        <div className="h-2 w-2 gradient-background rounded-full"></div>
        <div className="h-2 w-2 gradient-background rounded-full my-[400px]"></div>
      </div>
    </div>
  );
}


export default VerticalLine;

 