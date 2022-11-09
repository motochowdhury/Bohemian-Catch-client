import React from "react";
import AddServiceForm from "../Components/AddServiceForm";
import { dynamicTitle } from "../Utils/TitleChanger";

const AddService = () => {
  dynamicTitle("Add Service");

  return (
    <div className="w-full py-10">
      <div className="w-[80%] md:w-[75%] lg:w-1/2 mx-auto bg-[#D4FAEC] rounded-xl">
        <AddServiceForm />
      </div>
    </div>
  );
};

export default AddService;
