import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { TiAttachment, TiEdit, TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [deleted, setDeleted] = useState(false);

  const deleteReview = (id) => {
    fetch(`http://localhost:5000/delete-review?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount !== 0) {
          setDeleted(!deleted);
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/my-reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [deleted, user?.email]);

  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center mt-10">
        <div className="w-1/2 min-h-[500px] space-y-4 rounded-xl shadow-lg bg-[#F95A93] p-10">
          <h1 className="text-2xl font-poppins font-bold">Your Reviews</h1>
          {reviews.length === 0 ? (
            <div className="mt-20 flex flex-col justify-center items-center space-y-4">
              <h1 className="font-poppins font-bold text-2xl">
                No Reviews Found
              </h1>
              <Link
                to="/services"
                className="btn bg-black px-5 py-3 rounded-full text-white">
                Add Review
              </Link>
            </div>
          ) : (
            reviews.map((currReview, idx) => {
              const { id, _id, serviceName, review } = currReview;
              return (
                <div key={idx}>
                  <div
                    className="bg-slate-50 font-poppins p-4 rounded-lg
                    shadow-lg">
                    <div className="border-b-2 border-green-500 flex justify-between">
                      <p className="block">Category</p>
                      <p>Review</p>
                    </div>
                    <div className="flex space-x-2 p-3">
                      <div className="w-1/4">
                        <h2 className="border-r-2 border-black font-semibold">
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
                    <button className="btn bg-green-500 rounded-full px-3 py-1">
                      <TiEdit />
                    </button>
                    <button
                      onClick={() => deleteReview(_id)}
                      className="btn bg-red-600 rounded-full px-3 py-1">
                      <TiDelete />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
