import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const addProduct = ({ serviceName, img, price, desc }) => {
    const data = {
      serviceName,
      img,
      price,
      desc,
      date: new Date(),
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="w-full py-10">
      <div className="w-[80%] md:w-[75%] lg:w-1/2 mx-auto bg-[#D4FAEC] rounded-xl">
        <form onSubmit={handleSubmit(addProduct)}>
          <div className="flex flex-col w-[80%] md:w-[75%] lg:w-1/2 mx-auto py-10">
            <label className="font-poppins" htmlFor="serviceName">
              Service Name
            </label>
            <input
              {...register("serviceName")}
              className="border bg-transparent border-emerald-500 p-2"
              type="text"
            />
            <label className="font-poppins" htmlFor="img">
              Image Url
            </label>
            <input
              {...register("img")}
              className="border bg-transparent border-emerald-500 p-2"
              type="text"
            />
            <label className="font-poppins" htmlFor="price">
              Price
            </label>
            <input
              {...register("price")}
              className="border bg-transparent border-emerald-500 p-2"
              type="text"
            />
            <label className="font-poppins" htmlFor="">
              Description
            </label>
            <textarea
              {...register("desc")}
              className="border-2 border-emerald-500 bg-transparent p-2 h-40"></textarea>
            <button
              className="btn bg-green-400 px-5 py-2 w-1/2 lg:w-1/4 mt-8 mx-auto rounded-full font-poppins text-white"
              type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
