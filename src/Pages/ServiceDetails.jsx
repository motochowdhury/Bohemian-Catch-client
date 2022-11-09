import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import { useForm } from "react-hook-form";
import { dynamicTitle } from "../Utils/TitleChanger";
import Reviews from "../Components/Reviews";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  dynamicTitle("Service_Detais");
  const { img, price, serviceName, desc, _id } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [open, setOpen] = useState(false);
  const [recall, setRecall] = useState(false);
  const { register, handleSubmit } = useForm();

  const addReview = (data, e) => {
    const reviewData = {
      name: user.displayName ? user.displayName : data.name,
      review: data.review,
      email: user.email,
      img: user.photoURL,
      id: _id,
      serviceName,
      date: new Date(),
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Review Added Successfully");
        e.target.reset();
      })
      .catch((err) => toast.error(err.message));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?id=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecall(!recall);
        setReviews(data);
      });
  }, [recall, _id]);

  return (
    <div className="w-full bg-[#FCFBF3] py-10">
      <div className="max-w-6xl mx-auto">
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-12">
          <div className=" w-[90%] mx-auto lg:col-span-5 bg-[#D4FAEC] lg:h-96 rounded-xl">
            <div className="p-4 flex flex-col md:flex-row items-center">
              <img src={img} alt="" className="m-4 w-1/2 rounded-xl" />
              <div>
                <h2 className="text-lg md:text-2xl font-[poppins] font-semibold text-black text-center">
                  {serviceName}
                </h2>
                <p className="font-poppins font-semibold text-center mt-3 border-b-2 border-black md:border-0 text-[#04DA8D]">{`price: $${price}`}</p>
              </div>
            </div>
            <div className="m-5">
              <p className="font-medium font-Roboto">{desc}</p>
            </div>
          </div>
          <div className="lg:col-span-7 w-[90%] mx-auto lg:w-full bg-[#D4FAEC] rounded-xl">
            <div>
              <h4 className="font-bold font-poppins text-2xl text-center mt-3">
                Reviews
              </h4>
              {reviews.length === 0 ? (
                <div className="flex mt-20 items-center justify-center text-2xl font-bold font-poppins">
                  <h1>No Reviews Added yet</h1>
                </div>
              ) : (
                reviews.map((review, idx) => (
                  <Reviews key={idx} review={review} />
                ))
              )}
              <div className="mt-10">
                <div className="flex justify-center">
                  <button
                    onClick={() => setOpen(!open)}
                    className={`btn bg-black px-5 py-3 rounded-full text-white text-sm mb-4`}>
                    AddReview
                  </button>
                </div>
                {user ? (
                  <div className={`${open ? "block" : "hidden"}`}>
                    <div>
                      <form onSubmit={handleSubmit(addReview)}>
                        <div className="flex justify-center my-3">
                          <div className="w-full flex flex-col">
                            {user.displayName === null && (
                              <input
                                type="text"
                                required
                                placeholder="Enter Your name"
                                {...register("name")}
                                className="border-2 border-[#da7d04] outline-none px-2 bg-transparent block mb-2 mx-auto"
                              />
                            )}
                            <textarea
                              placeholder="Write Your feedback"
                              {...register("review")}
                              className="w-[80%] md:w-[70] mx-auto lg:w-1/2 h-40 border-2 border-[#04DA8D] outline-none px-2 bg-transparent"></textarea>
                          </div>
                        </div>
                        <div className=" flex justify-center mb-5">
                          <button
                            className="btn bg-[#04DA8D] px-7 py-2 rounded-full"
                            type="submit">
                            Add
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`${
                      open ? "block" : "hidden"
                    } flex justify-center pb-10`}>
                    <h1>Please login for add review</h1>
                    <Link to="/login" className="ml-2 font-medium font-poppins">
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
