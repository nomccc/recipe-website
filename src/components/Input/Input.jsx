import React from "react";

const Input = ({ type, text, id, classname, placeholder }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="text-lg font-semibold" htmlFor={id}>{text}</label>
      <input type={type} placeholder={placeholder} id={id} className={classname}></input>
    </div>
  );
};

export default Input;
