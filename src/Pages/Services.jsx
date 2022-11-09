import React, { useEffect, useState } from "react";
import Card from "./Shared/Card";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then()
      .then((res) => res.json())
      .then((data) => setServices(data.allService));
  }, []);
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
