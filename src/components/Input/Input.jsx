import React from "react";

const Input = ({ type, text, id, classname, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="text-lg font-semibold" htmlFor={id}>
        {text}
      </label>
      <input
        type={type ? type: "text"}
        placeholder={placeholder}
        value={value}
        id={id ? id: ""}
        className={classname}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
