import React from "react";
import { PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Card = ({ service }) => {
  const { img, serviceName, desc, price, _id } = service;
  return (
    <div className="">
      <div className="shadow-lg rounded-2xl p-4 bg-gray-900 w-[90%] lg:w-64 m-auto relative">
        <div className="w-full h-full text-center">
          <div className="flex h-full flex-col justify-between">
            <PhotoView src={img}>
              <img
                src={img}
                className="w-4/5 mx-auto rounded-lg pt-4 cursor-pointer"
                alt=""
              />
            </PhotoView>
            <p className="absolute text-sm italic text-white top-2 right-2">
              {`price: $${price}`}
            </p>
            <p className="text-white font-poppins text-lg mt-4">
              {serviceName}
            </p>
            <p className="text-gray-50 text-xs font-roboto py-2 px-6">
              {`${desc.slice(0, 99)}...`}
            </p>
            <Link
              className="btn font-poppins bg-[#04DA8D] py-2 rounded-full"
              to={`/services/${_id}`}>
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
