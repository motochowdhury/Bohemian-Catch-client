import React, { useEffect, useState } from "react";
import { dynamicTitle } from "../Utils/TitleChanger";
import Card from "./Shared/Card";

const Services = () => {
  dynamicTitle("Services-Bohemian-cath");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://bohemian-catch-server.vercel.app/services")
      .then()
      .then((res) => res.json())
      .then((data) => {
        setServices(data.allService);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-16 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    );
  }

  return (
    <div className="w-full py-10 bg-[#E6E5DD]">
      <div className="lg:max-w-6xl mx-auto">
        <h1 className="text-black text-4xl font-bold font-[poppins] text-center mb-10 border-b-2 border-[#04DA8D]">
          All Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Card key={service?._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
