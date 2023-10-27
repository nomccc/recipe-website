import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Login = () => {
  return (
    <div className="container w-2/5 h-4/5 text-center border-2 rounded-lg border-solid my-10 p-20 shadow-lg mx-auto">
      <h1 className="font-semibold text-4xl">LOGIN</h1>
      <form action="">
        <Input
          placeholder="Email"
          type="email"
          classname="border-b-2 w-full p-3"
        />
        <Input
          placeholder="Password"
          type="password"
          classname="border-b-2 w-full p-3 mb-8 "
        />
        <Button text="Login" className="my-5"/>
      </form>
    </div>
  );
};

export default Login;
