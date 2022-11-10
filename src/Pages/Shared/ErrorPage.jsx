import { Link } from "react-router-dom";
import error from "../../Assets/error image.jpg";
const ErrorPage = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] lg:max-w-6xl mx-auto mt-20">
        <div className="">
          <img src={error} className="rounded-xl mx-auto" alt="" />
        </div>
        <div className="flex justify-center mt-20">
          <Link
            className="bg-green-400 btn px-7 py-3 mt-10 rounded-full"
            to="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
