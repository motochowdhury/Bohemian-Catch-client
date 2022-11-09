import React from "react";

const Client = () => {
  return (
    <div className="w-full">
      <div className="max-w-[80%] mx-auto lg:max-w-6xl ">
        <h2 className="text-4xl font-bold font-poppins text-center py-5">
          My Client
        </h2>
        <div className="flex justify-center space-x-3 lg:space-x-5 py-10">
          <img
            className="w-16 lg:w-28"
            src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png"
            alt=""
          />
          <img
            className="w-16 lg:w-28"
            src="https://www.transparentpng.com/thumb/adidas/0vlXGV-adidas-transparent-picture.png"
            alt=""
          />
          <img
            className="w-16 lg:w-28"
            src="https://i.ibb.co/nbSJTBd/Tele-Talk-Logo-wine.png"
            alt=""
          />
          <img
            className="w-16 lg:w-28"
            src="https://i.ibb.co/XCzt2V4/BBC-World-Service-Logo-wine.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Client;
