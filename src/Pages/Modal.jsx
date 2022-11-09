import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TiDelete, TiEdit } from "react-icons/ti";

const Modal = ({ review, controller, hitApi }) => {
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const updateReview = (reviewWord, e) => {
    const data = { review: reviewWord.review };
    console.log(data);
    setShowModal(false);
    controller(false);
    fetch(`http://localhost:5000/update-review?id=${review._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        hitApi(true);
      });
    e.preventDefault();
  };
  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
          controller(true);
        }}
        className="btn bg-green-500 rounded-full px-3 py-1">
        <TiEdit />
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[80%] md:w-[70%] lg:w-[500px]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5  rounded-t ">
                  <h3 className="text-xl font-poppins text-center font-semibold">
                    Update review
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => {
                      setShowModal(false);
                      controller(false);
                    }}>
                    <TiDelete />
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleSubmit(updateReview)}>
                    <div className="w-[80%] mx-auto flex flex-col justify-center space-y-2">
                      <label
                        htmlFor="serviceName"
                        className="text-sm font-poppins font-semibold block">
                        Service Name
                      </label>
                      <input
                        name="serviceName"
                        type="text"
                        defaultValue={review?.serviceName}
                        readOnly
                        className="w-[80%] border border-green-400 mx-auto text-sm font-poppins font-medium px-3 py-2 outline-none"
                      />
                      <label
                        className="text-sm font-poppins font-semibold block"
                        htmlFor="review">
                        Review
                      </label>
                      <textarea
                        {...register("review")}
                        defaultValue={review?.review}
                        id=""
                        className="w-[80%] border border-green-400 outline-none mx-auto h-28 text-sm font-poppins font-normal py-2 px-2"></textarea>
                    </div>
                    <div className="flex items-center justify-center p-6 rounded-b">
                      <button
                        className="text-white font-poppins bg-green-500 font-bold uppercase text-sm px-6 py-3 rounded-full focus:outline-none"
                        type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
