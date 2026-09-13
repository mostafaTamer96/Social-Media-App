import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod"

export default function Home() {
  const [Login, setLogin] = useState("Login");


let signUpSchema = z.object(
  {
  name:z.string().min(3,"Name must be at least 3 letters").max(15,"Name must be at max 15 letters").nonempty(),
  username:z.string().min(3,"userName must be at least 3 letters").max(15,"userName must be at max 15 letters").optional(),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  dateOfBirth:z.string().nonempty(),
  gender:z.enum(["male","female"]),
  password:z.string().min(8,"minimum is 8 characters must contain capital letters small letters special character ").max(20,"max is 20 characters must contain capital letters small letters special character").nonempty().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ ),
  rePassword:z.string().min(8,"minimum is 8 characters must contain capital letters small letters special character ").max(20,"must contain capital letters small letters special character and max 20").nonempty().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ ,"must contain capital letters small letters special character")

 }
).refine( function(values){
  return values.password===values.rePassword
},{

error: "password and rePassword not matched",
  path:["rePassword"],
}
)



 const {handleSubmit,register ,formState,}= useForm({
 defaultValues: {
  name: "",
  username: "",
  email: "",
   dateOfBirth: "",
  gender: "",
  password: "",
  rePassword: ""
},resolver:zodResolver(signUpSchema)
 })

 


 const activeBtnClass=`bg-white text-[#00298D] shadow-sm`
 const notActiveBtnClass=`bg-transparent text-[#62748e] hover:text-[#00298d]`
 const btnsDesign=`cursor-pointer flex-1 py-2 text-base font-extrabold rounded-xl transition-all duration-100 `
 


 function myHandelSubmit(values){
  console.log(values)
 }
 function handleSelectLogin() {
    setLogin("Login");
  }

  function handleSelectRegister() {
    setLogin("Register");
  }

 

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center px-4 py-8 sm:py-12">
     
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
        {/* Left Section */}
        <div className="w-full max-w-xl text-center lg:text-left order-2 lg:order-1">
          {/* Main Title */} 
          <div className="title">
            
            <h1 className="text-4xl font-extrabold tracking-tight text-[#00298d] sm:text-5xl lg:text-6xl">
             Route Posts 
            </h1>
            
            <p className="mt-3 text-lg font-medium leading-snug text-slate-800 sm:text-2xl">
             Connect with friends and the world around you on
              Route Posts. 
            </p>
           
          </div>
          {/* About Card */} 
          <div className="mt-6 rounded-2xl border border-[#c9d5ff] bg-white/80 p-5 shadow-sm">
            
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#00298d]">
             About Route Academy 
            </p>
            
            <p className="mt-1 text-lg font-bold text-slate-900">
             Egypt's Leading IT Training Center Since 2012
             
            </p>
            
            <p className="mt-2 text-base font-normal leading-relaxed text-slate-700">
             Route Academy is the premier IT training center in
              Egypt, established in 2012. We specialize in delivering
              high-quality training courses in programming, web development, and
              application development. 
            </p>
             {/* Metrics Grid */}
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            
              <div className="rounded-xl border border-[#c9d5ff] bg-[#F2F6FF] px-3 py-2">
               
                <p className="text-base font-extrabold text-[#00298d]">2012</p>
              
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-600">
                  Founded
                </p>
              
              </div>
            
              <div className="rounded-xl border border-[#c9d5ff] bg-[#F2F6FF] px-3 py-2">
               
                <p className="text-base font-extrabold text-[#00298d]">40K+</p>
              
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-600">
                  Graduates
                </p>
              
              </div>
            
              <div className="rounded-xl border border-[#c9d5ff] bg-[#F2F6FF] px-3 py-2">
               
                <p className="text-base font-extrabold text-[#00298d]">50+</p>
              
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-600">
                  Partner Companies
                </p>
              
              </div>
            
              <div className="rounded-xl border border-[#c9d5ff] bg-[#F2F6FF] px-3 py-2">
               
                <p className="text-base font-extrabold text-[#00298d]">5</p> 
                
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-600">
                  Branches
                </p>
                 
              </div>
               
              <div className="col-span-2 rounded-xl border border-[#c9d5ff] bg-[#F2F6FF] px-3 py-2 sm:col-span-1">
               
                <p className="text-base font-extrabold text-[#00298d]">20</p> 
                
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-600">
                  Diplomas Available
                </p>
                 
              </div>
              
            </div>
           
          </div>
        
        </div>
       {/* Right Section (Login Form) */}
        <div className="w-full max-w-md order-1 lg:order-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {/* Tab Switcher (Static) */}
            <div className="flex items-center gap-1 bg-[#F1F5F9] border rounded-2xl border-transparent w-full p-1 mb-5">
           
            <button
  type="button"
  onClick={handleSelectLogin}
  className={`${btnsDesign} ${
    Login === "Login"
      ? `${activeBtnClass}`
      : `${notActiveBtnClass}`
  }`}
>
  Login
</button>

<button
  type="button"
  onClick={handleSelectRegister}
  className={`${btnsDesign} ${
    Login === "Register"
      ? `${activeBtnClass}`
      : `${notActiveBtnClass}`
  }`}
>
  Register
</button>

            </div>

 {Login==="Login"? <>
 
 <h2 className="text-2xl font-extrabold text-[#0f172b]">
              Log in to Route Posts
            </h2>
            <p className="mt-1 text-base font-normal text-[#62748e]">
              Log in and continue your social journey.
            </p>


                   <form className="mt-6 flex flex-col gap-4">
           
          
             
              
                <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d] focus-within:bg-white">
                <svg
                  className="h-5 w-5 shrink-0 text-[#8e9baf]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Email or username"
                  className="w-full bg-transparent text-base text-[#334155] placeholder-[#8e9baf] outline-none"
                  
                />
               
              </div>

             
              <div className="flex items-center gap-3 mb-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d] focus-within:bg-white">
                <svg
                  className="h-5 w-5 shrink-0 text-[#8e9baf]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                  />
                </svg>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent text-base text-[#334155] placeholder-[#8e9baf] outline-none"
                  
                />
              </div>
             
  
      </form>



           {/* Action Buttons */}
              <button
                type="button"
                className=" capitalize cursor-pointer w-full rounded-2xl bg-[#00298D] py-3.5 text-base font-extrabold text-white transition-opacity hover:opacity-95 my-4 "
              >
               log in
              </button>

              <button
                type="button"
                className="w-full text-center cursor-pointer text-base font-semibold text-[#00298d] hover:underline"
              >
                Forgot password?
              </button>
 </>  :    <> 
 
<h2 className="text-2xl font-extrabold text-[#0f172b]">
             Create a new account
            </h2>
            <p className="mt-1 text-base font-normal text-[#62748e]">
            It is quick and easy.
            </p>
            <title>Create Account | Route Posts</title>



 <form onSubmit={handleSubmit(myHandelSubmit) } className="mt-6 flex flex-col gap-4">
  {/* 1. Full Name */}
  <div className=" mo flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d] focus-within:bg-white">
    <svg
      className="h-5 w-5 shrink-0 text-[#8e9baf]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
    <input
    {...register("name")}
      type="text"
      placeholder="Full Name"
      className="w-full bg-transparent text-base text-[#334155] placeholder-[#8e9baf] outline-none"
      
    />
  </div>
  {formState.errors.name && <p className="mt-0.5 text-xs font-semibold text-rose-600 "> {formState.errors.name?.message}</p>
    }

  {/* 2. Username (Optional) */}
  <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d] focus-within:bg-white">
    <svg
      className="h-5 w-5 shrink-0 text-[#8e9baf]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
      />
    </svg>
    <input
    {...register("username")}
      type="text"
      placeholder="Username (Optional)"
      className="w-full bg-transparent text-base text-[#334155] placeholder-[#8e9baf] outline-none"
    />
  </div>




  {/* 3. Email Address */}
  <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d] focus-within:bg-white">
    <svg
      className="h-5 w-5 shrink-0 text-[#8e9baf]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
    <input
    
      type="email"
      
    {...register("email")}
      placeholder="Email address"
      className="w-full bg-transparent text-base text-[#334155] placeholder-[#8e9baf] outline-none"
      
    />
  </div>
  {formState.errors.email && <p className="mt-0.5 text-xs font-semibold text-rose-600 "> {formState.errors.email?.message}</p>}



  {/* 5. Gender Select */}
  <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d] focus-within:bg-white">
    <svg
      className="h-5 w-5 shrink-0 text-[#8e9baf]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a5.97 5.97 0 0 0-.942 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
    <select
      defaultValue=""
       {...register("gender")}
      className="w-full bg-transparent text-base text-[#334155] outline-none cursor-pointer invalid:text-[#8e9baf]"
      
    >
      <option value="" disabled hidden>
        Select gender
      </option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>
  {formState.errors.gender && <p className="mt-0.5 text-xs font-semibold text-rose-600 "> {formState.errors.gender?.message}</p>}

  {/* 6. Date Input */}
  <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d] focus-within:bg-white">
    <svg
      className="h-5 w-5 shrink-0 text-[#8e9baf]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
    <input
      type="date"
        {...register("dateOfBirth")}
      className="w-full bg-transparent text-base text-[#334155] outline-none cursor-pointer"
      
    />
  </div>

  {/* 7. Password */}
  <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d] focus-within:bg-white">
    <svg
      className="h-5 w-5 shrink-0 text-[#8e9baf]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
      />
    </svg>
    <input
      type="password"
        {...register("password")}
      placeholder="Password"
      className="w-full bg-transparent text-base text-[#334155] placeholder-[#8e9baf] outline-none"
      
    />
  </div>
  {formState.errors.password && <p className="mt-0.5 text-xs font-semibold text-rose-600 "> {formState.errors.password?.message}</p>}

  {/* 8. Confirm Password */}
  <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d] focus-within:bg-white">
    <svg
      className="h-5 w-5 shrink-0 text-[#8e9baf]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
      />
    </svg>
    <input
      type="password"
        {...register("rePassword")}
      placeholder="Confirm password"
      className="w-full bg-transparent text-base text-[#334155] placeholder-[#8e9baf] outline-none"
      
    />
  </div>

    {formState.errors.rePassword && <p className="mt-0.5 text-xs font-semibold text-rose-600 "> {formState.errors.rePassword.message}</p>}


  {/* Submit Button */}
  <button
    type="submit"
    className="w-full rounded-2xl bg-[#00298D] py-3.5 text-base font-extrabold text-white transition-opacity hover:opacity-95 cursor-pointer"
  >
    Register
  </button>
</form>
 
 
 </> }
           
            

     
            

         
            
          </div>
        </div>
       
      </div>
       
    </div>
  );
}
