import React from "react";
import { PhotoView } from "react-photo-view";

const Card = ({ service }) => {
  const { img, serviceName, desc, price } = service;
  return (
    <div className="">
      <div className="shadow-lg rounded-2xl p-4 bg-gray-900 w-[90%] lg:w-64 m-auto relative">
        <div className="w-full h-full text-center">
          <div className="flex h-full flex-col justify-between">
            <PhotoView src={img}>
              <img
                src={img}
                className="w-4/5 mx-auto rounded-lg pt-4 "
                alt=""
              />
            </PhotoView>
            <p className="absolute text-sm italic text-white top-2 right-2">
              {`price: $${price}`}
            </p>
            <p className="text-white text-lg mt-4">{serviceName}</p>
            <p className="text-gray-50 text-xs font-thin py-2 px-6">
              {`${desc.slice(0, 99)}...`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
