import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import axios from "axios";
import { Radio } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Login from "../SignIN/SignIN";
import SignIN from "../SignIN/SignIN";
import SignUp from "../SignUp/SignUp";
export default function Home() {


  const [Login, setLogin] = useState("Login");


 

 const activeBtnClass=`bg-white text-[#00298D] shadow-sm`
 const notActiveBtnClass=`bg-transparent text-[#62748e] hover:text-[#00298d]`
 const btnsDesign=`cursor-pointer flex-1 py-2 text-base font-extrabold rounded-xl transition-all duration-100 `
 

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
            

 {Login==="Login"? 
 <>
  <SignIN/>

             
                <title>Sign In | Route Posts</title>
 </>  :   
 

<SignUp/>
 
 }
           
            

     
            
<button
                type="button"
                className="w-full text-center cursor-pointer text-base font-semibold text-[#00298d] hover:underline"
              >
                Forgot password?
              </button>
         
            
          </div> 
        </div>
       
      </div>
       
    </div>
  );
}
