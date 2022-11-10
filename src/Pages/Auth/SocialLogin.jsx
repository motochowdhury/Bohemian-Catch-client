import React from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { googleLogin, gitHub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";

  const googleSignIn = () => {
    googleLogin()
      .then((result) => {
        const email = result.user.email;
        fetch(`https://bohemian-catch-server.vercel.app/jwt?email=${email}`)
          .then((res) => res.json())
          .then((data) => localStorage.setItem("token", data.token));
        toast.success("Loging Success");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const githubLogin = () => {
    gitHub()
      .then((result) => {
        const email = result.user.email;
        fetch(`https://bohemian-catch-server.vercel.app/jwt?email=${email}`)
          .then((res) => res.json())
          .then((data) => localStorage.setItem("token", data.token));
        toast.success("Loging Success");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="flex justify-center space-x-3">
      <FaGoogle
        onClick={googleSignIn}
        className="text-xl cursor-pointer rounded-full"
      />
      <FaGithub
        onClick={githubLogin}
        className="text-xl cursor-pointer rounded-full"
      />
    </div>
  );
};

export default SocialLogin;
