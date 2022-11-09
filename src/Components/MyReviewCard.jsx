import React, { useState } from "react";
import { TiAttachment, TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import Modal from "../Pages/Modal";
import { deleteReview } from "../Utils/deleteReview";

const MyReviewCard = ({ currReview, hitApiState }) => {
  const { id, _id, serviceName, review } = currReview;
  const { hitApi, setHitApi } = hitApiState;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className={`bg-slate-50 font-poppins p-4 rounded-lg
                    shadow-lg ${
                      open ? "backdrop-blur-[150px] bg-white/30" : ""
                    }`}>
        <div className="border-b-2 border-green-500 hidden md:flex justify-between">
          <p className="block">Category</p>
          <p>Review</p>
        </div>
        <div className="flex flex-col md:flex-row space-x-2 p-3">
          <div className="md:w-1/3">
            <h2 className="text-xl md:text-base text-green-500 md:border-r-2 border-black font-semibold">
              {serviceName}
            </h2>
          </div>
          <div>
            <p>{review}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end py-4 space-x-2 text-xl">
        <button className="btn bg-blue-500 rounded-full px-3 py-1">
          <Link to={`/services/${id}`}>
            <TiAttachment />
          </Link>
        </button>
        <Modal controller={setOpen} hitApi={setHitApi} review={currReview} />
        <button
          onClick={() => deleteReview(_id, setHitApi, hitApi)}
          className="btn bg-red-600 rounded-full px-3 py-1">
          <TiDelete />
        </button>
      </div>
    </div>
  );
};

export default MyReviewCard;
