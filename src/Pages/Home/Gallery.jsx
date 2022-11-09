import React from "react";

const Gallery = () => {
  return (
    <div className="w-full bg-[#FCFBF3] py-10">
      <h1 className="text-4xl py-5 font-bold font-poppins text-center">
        Photo Gallery
      </h1>
      <div className=" max-w-[80%] lg:max-w-6xl grid grid-cols-8 md:grid-cols-12 lg:grid-rows-2 mx-auto gap-2 md:gap-3">
        <div className="col-span-4 md:col-span-3">
          <img
            src="https://i.ibb.co/K5NzTk3/wedding.jpg"
            className="h-full"
            alt=""
          />
        </div>
        <div className="col-span-4 row-span-1">
          <img
            src="https://i.ibb.co/gwzzWBF/wedding2.jpg"
            className="h-full"
            alt=""
          />
        </div>
        <div className="col-span-8 md:col-span-5 md:row-span-2">
          <img
            src="https://i.ibb.co/PMJXhtX/beach.jpg"
            className="h-full object-cover"
            alt=""
          />
        </div>
        <div className="col-span-4 md:col-span-4 md:row-span-1">
          <img
            src="https://i.ibb.co/cCVbWYt/elephant-2380009-960-720.jpg"
            alt=""
          />
        </div>
        <div className="col-span-4 md:col-span-3 md:row-span-1">
          <img
            src="https://i.ibb.co/Df04HFF/water.jpg"
            className="h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
