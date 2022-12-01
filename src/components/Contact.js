import React from "react";

export const Contact = ({ img, name, message }) => {
  return (
    <div className="flex justify-between border-b pt-4 pb-4">
      <div className="flex items-center">
        <div className="flex w-16 h-16">
          <img src={img} alt="" className="object-cover w-full rounded-full" />
        </div>
        <div className="pl-3">
          <p className="font-semibold text-[18px]"> {name} </p>
          <p className="text-gray-600 w-[20rem] truncate"> {message} </p>
        </div>
      </div>

      <div className="flex h-full text-gray-400">
        <p className="w-[5rem]">8:51</p>
      </div>
    </div>
  );
};

export default Contact;
