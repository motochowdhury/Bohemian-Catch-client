import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import SocialLogin from "./SocialLogin";
import { dynamicTitle } from "../../Utils/TitleChanger";
import { toast } from "react-toastify";

const Login = () => {
  dynamicTitle("Login-Bohemian_cath");
  const { login } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";

  const inputValue = (data) => {
    const { email, pass } = data;
    login(email, pass)
      .then(() => {
        toast.success("Login Success");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[80%] md:w-1/2 space-y-4 border p-4">
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
        <p className="text-center text-sm font-poppins">Social Login</p>
        <SocialLogin />
        <p className="text-center text-sm font-poppins">
          Don't Have an account?{" "}
          <Link className="text-green-500" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
