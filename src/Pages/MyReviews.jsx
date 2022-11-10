import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Link } from "react-router-dom";
import { dynamicTitle } from "../Utils/TitleChanger";
import MyReviewCard from "../Components/MyReviewCard";
import { toast } from "react-toastify";

const MyReviews = () => {
  dynamicTitle("My-reviews");
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [hitApi, setHitApi] = useState(false);

  useEffect(() => {
    fetch(
      `https://bohemian-catch-server.vercel.app/my-reviews?email=${user?.email}`,
      {
        headers: {
          authToken: `Bearar ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          toast.error("unAuthorized Access");
          return logOut();
        }
        return res.json();
      })
      .then((data) => setReviews(data))
      .catch((err) => toast.error(err.message));
  }, [hitApi, user?.email]);

  return (
    <div className="w-full h-full">
      <div
        className={`max-w-6xl mx-auto flex justify-center items-center mt-10`}>
        <div className="w-[80%] lg:w-1/2 min-h-[500px] space-y-4 rounded-xl shadow-lg bg-[#F95A93] p-10">
          <h1 className="text-2xl font-poppins font-bold">Your Reviews</h1>
          {reviews?.length === 0 ? (
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
            reviews?.map((currReview, idx) => {
              return (
                <MyReviewCard
                  key={idx}
                  hitApiState={{ hitApi, setHitApi }}
                  currReview={currReview}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
