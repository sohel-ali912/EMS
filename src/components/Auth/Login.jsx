import React, { useState } from "react";
const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <div className="mt-6 w-full text-sm text-gray-300 grid grid-cols-2 gap-5 grid-rows-1">
  {/* Employee Credentials */}
  <div className="rounded-lg border border-emerald-600/50 bg-emerald-950/30 p-4">
    <h3 className="mb-2 text-base font-semibold text-emerald-400">
      Employee Credentials
    </h3>

    <p>
      Email: <span className="text-white">e@e.com</span>
    </p>
    <p>
      Password: <span className="text-white">123</span>
    </p>
  </div>

  {/* Admin Credentials */}
  <div className="rounded-lg border border-blue-500/50 bg-blue-950/30 p-4">
    <h3 className="mb-2 text-base font-semibold text-blue-400">
      Admin Credentials
    </h3>

    <p>
      Email: <span className="text-white">admin1@example.com</span>
    </p>
    <p>
      Password: <span className="text-white">123</span>
    </p>
  </div>
</div>
      </div>
      
    </div>
  );
};

export default Login;
