import React from "react";

const Reviews = ({ review }) => {
  return (
    <div className="flex flex-col items-center md:flex-row bg-white m-4 p-3 rounded-xl shadow">
      <div className="flex flex-col items-center md:flex-row ">
        <div className="w-16 h-16">
          <img
            src={
              review.img
                ? review.img
                : "https://t3.ftcdn.net/jpg/02/18/21/86/360_F_218218632_jF6XAkcrlBjv1mAg9Ow0UBMLBaJrhygH.jpg"
            }
            className="w-16 h-16 rounded-full ring-4 ring-[#04DA8D]"
            alt=""
          />
        </div>
        <div className="mt-4 border-b-2 md:border-b-0 md:w-28 md:border-r-2 px-4  border-black">
          <h4 className="font-medium text-sm font-poppins">{review.name}</h4>
        </div>
      </div>
      <div className="w-[90%] px-4 flex justify-center md:justify-start md:items-center">
        <p className="text-center md:text-start font-medium font-poppins text-sm">
          {review.review}
        </p>
      </div>
    </div>
  );
};

export default Reviews;
