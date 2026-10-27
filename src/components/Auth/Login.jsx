import React, { useState } from "react";
const Login = ({handleLogin}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(`Email is ${email}`)
    // console.log(`Password is ${password}`)
    handleLogin(email,password)
    setEmail("");
    setPassword("")
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center gap-5"
        >
          <input
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400"
             value={email}
            onChange={(e)=>{
              setEmail(e.target.value) 
            }}
           
            type="email"
            placeholder="Enter your Email"
            required
          />
          <input
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value) 
            }}
            
            type="password"
            placeholder="Enter your Password"
            required
          />
          <button className=" bg-emerald-600 rounded-full py-2 px-9 text-xl text-white outline-none placeholder:text-white border-non cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
