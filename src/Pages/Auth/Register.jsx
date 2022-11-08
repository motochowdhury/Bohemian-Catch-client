import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const { createUser, update } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { name, email, pass } = data;

    createUser(email, pass)
      .then((result) => {
        console.log(result.user);
        update(name)
          .then(() => {})
          .catch((err) => console.log(`from update: ${err.message}`));
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="max-h-screen flex items-center justify-center">
      <div className="w-full lg:w-1/2 space-y-4 border p-4">
        <div>
          <h1 className="text-green-400 text-3xl font-bold font-sec text-center">
            Register
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full lg:w-1/2 mx-auto space-y-1 flex flex-col">
            <label htmlFor="name">Your name</label>
            <input
              className="border outline-none rounded block py-1"
              type="text"
              {...register("name")}
            />
            <label htmlFor="email">Email</label>
            <input
              className="border outline-none rounded block py-1"
              type="email"
              {...register("email")}
            />
            <label htmlFor="pass">Password</label>
            <input
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
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
