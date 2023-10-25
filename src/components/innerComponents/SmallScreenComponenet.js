import React from 'react';
import '../gradient.css';

const SmallScreenComponenet = () => {
  return (
      <div id="businessfocus" className="mt-[40px]">
        <h1 className="text-center text-[30px] font-bold gradient-text">
          Our Business
          <br />
          Focus
        </h1>
        <div className="flex flex-col items-center justify-center h-[300px] mt-[50px]">
          <div className="gradient-number font-bold">
            <span className="block w-full text-[150px] font-playfair">01</span>
          </div>
          <div className="w-full px-4 relative top-[-150px]">
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
        <div className="flex flex-col items-center justify-center h-[300px] mt-[30px]">
          <div className="gradient-number font-bold">
            <span className="block w-full text-[150px] font-playfair">02</span>
          </div>
          <div className="w-full px-4 relative top-[-150px]">
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
        <div className="flex flex-col items-center justify-center h-[300px] mt-[30px]">
          <div className="gradient-number font-bold">
            <span className="block w-full text-[150px] font-playfair">03</span>
          </div>
          <div className="w-full px-4 relative top-[-150px]">
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
              journey, and let's turn your ideas into reality
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-[300px] mt-[30px]">
          <div className="gradient-number font-bold">
            <span className="block w-full text-[150px] font-playfair">04</span>
          </div>
          <div className="w-full px-4 relative top-[-150px]">
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
  );
}

export default SmallScreenComponenet
