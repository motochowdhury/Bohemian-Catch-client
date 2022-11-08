import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";

  const inputValue = (data) => {
    const { email, pass } = data;
    login(email, pass)
      .then((result) => {
        const user = {
          email: result.user.email,
        };
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((token) => {
            console.log(token);
            localStorage.setItem("token", token.token);
          });
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="max-h-screen flex items-center justify-center">
      <div className="w-full lg:w-1/2 space-y-4 border p-4">
        <div>
          <h1 className="text-green-400 text-3xl font-bold font-sec text-center">
            Login
          </h1>
        </div>
        <form onSubmit={handleSubmit(inputValue)}>
          <div className="w-full lg:w-1/2 mx-auto space-y-1 flex flex-col">
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
        <p>
          Don't Have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
