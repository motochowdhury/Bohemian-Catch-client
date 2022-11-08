import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { img, price, serviceName, desc } = useLoaderData();
  return (
    <div className="w-full bg-[#FCFBF3] py-10">
      <div className="max-w-6xl mx-auto gap-8 grid grid-cols-12">
        <div className="col-span-5 bg-[#D4FAEC] h-96 rounded-xl">
          <div className="p-4 flex items-center">
            <img src={img} alt="" className="m-4 w-1/2 rounded-xl" />
            <div>
              <h2 className="text-2xl font-[poppins] font-semibold text-black">
                {serviceName}
              </h2>
              <p className="font-[poppins] font-semibold mt-3 text-[#04DA8D]">{`price: $${price}`}</p>
            </div>
          </div>
          <div className="m-5">
            <p className="font-medium font-[Roboto Slab]">{desc}</p>
          </div>
        </div>
        <div className="col-span-7 w-full h-96 bg-[#D4FAEC] rounded-xl"></div>
      </div>
    </div>
  );
};

export default ServiceDetails;
