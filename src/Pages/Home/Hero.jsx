import React from "react";
import hero_1 from "../../Assets/hero_1.jpg";
import hero_2 from "../../Assets/hero_2.jpg";

const Hero = () => {
  return (
    <div className="w-full bg-[#04DA8D] relative">
      <div className="lg:max-w-6xl max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 py-10 space-y-12 lg:space-y-0 px-7">
        <div className="space-y-6 md:w-3/4 lg:w-full md:mx-auto">
          <h1 className="text-black text-4xl lg:text-5xl font-bold font-[poppins] text-center lg:text-left">
            I have earned huge love from client with real review
          </h1>
          <p className="text-black text-xl font-bold font-[poppins] text-center lg:text-left lg:w-[90%]">
            Photography is an art which become from heart, and after hand-over
            the photos, client also give me a big heart
          </p>
          <div className="flex justify-center lg:block">
            <button className="btn bg-black text-white font-semibold py-4 px-10 rounded-full">
              See All Reviews
            </button>
          </div>
        </div>
        <div className="">
          <div className="relative mx-auto w-full">
            <img
              className="w-4/5 md:w-9/12 lg:w-4/5 relative rounded-lg ring-2 ring-orange-500"
              src={hero_2}
              alt=""
            />
            <img
              className="w-9/12 md:w-1/2 md:top-1/2 md:left-1/2 lg:w-4/5 absolute lg:left-1/4 lg:top-1/4 left-1/4 top-1/4 rounded-lg"
              src={hero_1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
