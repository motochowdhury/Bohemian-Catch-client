import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Shared/Card";

const HomeService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://bohemian-catch-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data.limitedService));
  }, []);
  return (
    <div className="w-full bg-[#E6E5DD]">
      <div className="pt-10 md:pt-16 w-1/4 flex justify-center mx-auto">
        <h1 className="text-black text-4xl font-bold font-poppins text-center border-b-2 border-[#04DA8D]">
          Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl max-w-[90%] mx-auto py-20 space-y-12 lg:space-y-0 px-7">
        {services.map((service) => (
          <Card key={service?._id} service={service} />
        ))}
      </div>
      <div className="flex justify-center pb-5">
        <Link
          className="btn bg-black text-white font-bold px-10 py-3 rounded-full"
          to="/services">
          See all
        </Link>
      </div>
    </div>
  );
};

export default HomeService;
