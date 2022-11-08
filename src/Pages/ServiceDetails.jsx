import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { img, price, serviceName, desc, _id } = useLoaderData();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?id=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

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
        <div className="col-span-7 w-full bg-[#D4FAEC] rounded-xl">
          <div>
            <h4 className="font-bold font-[poppins] text-2xl text-center mt-3">
              Reviews
            </h4>
            {reviews.length === 0 ? (
              <div className="flex mt-20 items-center justify-center text-2xl font-bold font-[poppins]">
                <h1>No Reviews Added yet</h1>
              </div>
            ) : (
              reviews.map((review) => (
                <div
                  key={review._id}
                  className="flex bg-white m-4 p-3 rounded-xl shadow">
                  <div className="flex items-center">
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
                    <div className="border-r-2 px-4  border-black">
                      <h4 className="font-semibold font-[poppins]">
                        {review.name}
                      </h4>
                    </div>
                  </div>
                  <div className="w-[90%] px-4 flex items-center">
                    <p className="font-medium font-[poppins] text-sm">
                      {review.review}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
