import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black h-[400px]">
      <div className="w-[80%] md:max-w-6xl mx-auto py-4">
        <div className="flex justify-center md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="68"
            viewBox="0 0 200 68">
            <text
              id="Bohemian_Cath"
              data-name="Bohemian Cath"
              transform="translate(4)"
              fill="#04DA8D"
              fontSize="25"
              fontFamily="KristenITC-Regular, Kristen ITC">
              <tspan x="0" y="51">
                BohemianCatch
              </tspan>
            </text>
          </svg>
        </div>
        <div className="w-[80%] mx-auto md:mx-0 md:w-1/4 text-center md:text-left">
          <p className="text-gray-100 font-poppins">
            This sites is a client riview site, where i have take feedback from
            client. so that i can improve my self
          </p>
        </div>
        <div className="w-[80%] md:w-1/4 mx-auto md:mx-0 text-center md:text-left">
          <p className="text-green-400 py-2 border-b-2 border-emerald-400">
            Hire Me:
          </p>
          <p className="text-gray-300 font-roboto">motochowdhury@gmail.com</p>
        </div>
        <div className="text-center text-white">
          <p>all right reserved by</p>
          <p>@Bohemian catch</p>
          <p>2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
