import React from "react";

const Input = ({
  name,
  type,
  text,
  id,
  classname,
  placeholder,
  value,
  onChange,
  maxLength,
}) => {
  return (
    <div className="flex flex-col gap-y-2 my-2">
      <label className="text-lg font-semibold" htmlFor={id}>
        {text}
      </label>
      <input
        required
        name={name}
        type={type ? type : "text"}
        placeholder={placeholder}
        value={value}
        id={id ? id : ""}
        className={classname}
        onChange={onChange}
        maxLength={maxLength}
      ></input>
    </div>
  );
};

export default Input;
