import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import Button from "../../components/Button/Button";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      if (!passwordRef.current?.value || !emailRef.current?.value) {
        setErrorMsg("Please fill in the fields");
        return;
      }
      const {
        data: { user, session },
        error,
      } = await login(emailRef.current.value, passwordRef.current.value);
      if (error) setErrorMsg(error.message);
      if (user && session) navigate("/dashboard");
      console.log(session)
      const token = session.access_token
      sessionStorage.setItem('token', token)
    } catch (error) {
      setErrorMsg("Email or Password Incorrect");
    }
    setLoading(false);
  };

  return (
    <div className="container w-2/5 h-4/5 text-center border-2 rounded-lg border-solid my-10 p-20 shadow-lg mx-auto">
      <h1 className="font-semibold text-4xl  mb-5">LOGIN</h1>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          id="emailLogin"
          ref={emailRef}
          placeholder="email"
          className="border-b-2 w-full p-3"
        />
        <input
          type="password"
          id="passwordLogin"
          ref={passwordRef}
          placeholder="password"
          className="border-b-2 w-full p-3 mb-8 "
        />
        <Button text="Login" className="my-5" />
      </form>
    </div>
  );
};

export default Login;
