import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { dynamicTitle } from "../../Utils/TitleChanger";
import SocialLogin from "./SocialLogin";
import { toast } from "react-toastify";
import Login from "./Login";

const Register = () => {
  dynamicTitle("Register-Account_Bohemian_Cath");
  const { createUser, update } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { name, email, pass, img } = data;

    createUser(email, pass)
      .then(() => {
        update(name, img)
          .then(() => {})
          .catch(() => {});
        toast.success("Successfully registered");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[80%] md:w-1/2 space-y-4 border p-4">
        <div>
          <h1 className="text-green-400 text-3xl font-bold font-sec text-center">
            Register
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full lg:w-1/2 mx-auto space-y-1 flex flex-col">
            <label htmlFor="name">Your name</label>
            <input
              required
              className="border outline-none rounded block py-1"
              type="text"
              {...register("name")}
            />
            <label htmlFor="name">Profile imgae</label>
            <input
              required
              className="border outline-none rounded block py-1"
              type="text"
              {...register("img")}
            />
            <label htmlFor="email">Email</label>
            <input
              required
              className="border outline-none rounded block py-1"
              type="email"
              {...register("email")}
            />
            <label htmlFor="pass">Password</label>
            <input
              required
              className="border outline-none rounded block py-1"
              type="password"
              {...register("pass")}
            />
            <button
              type="submit"
              className="btn mt-10 bg-green-400 px-5 py-2 rounded-full text-white font-semibold hover:bg-green-500">
              Login
            </button>
          </div>
        </form>
        <p className="font-poppins text-center text-sm">Social Login</p>
        <SocialLogin />
        <p className="font-poppins text-center text-sm">
          Already have an acoount?{" "}
          <Link className="text-green-400" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
