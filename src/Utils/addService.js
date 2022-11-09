export const addService = ({ serviceName, img, price, desc }) => {
  const data = {
    serviceName,
    img,
    price,
    desc,
    date: new Date(),
  };

  fetch("http://localhost:5000/services", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
