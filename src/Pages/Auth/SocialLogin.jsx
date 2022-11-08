import React from "react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";

  const googleSignIn = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="flex justify-center">
      <FaGoogle
        onClick={googleSignIn}
        className="text-xl cursor-pointer rounded-full"
      />
    </div>
  );
};

export default SocialLogin;
