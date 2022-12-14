import { toast } from "react-toastify";

export const addService = ({ serviceName, img, price, desc }, e) => {
  const data = {
    serviceName,
    img,
    price,
    desc,
    date: new Date(),
  };

  fetch("https://bohemian-catch-server.vercel.app/services", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      toast.success("Service Added Successfully");
    });
  e.target.reset();
};
