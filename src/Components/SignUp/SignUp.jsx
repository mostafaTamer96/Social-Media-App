import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import axios from "axios";
import { Radio } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export default function SignUp() {

const [errorMsg,setErrorMsg]=useState(null)
const [isLoading,setIsLoading]=useState(null)
const[success,setSuccess] =useState(null)
 let nav=useNavigate()
  

   const signUpSchema=z.object({
    name:z.string("Full name is required.").min(2,"Name must be at least 2 characters.").nonempty(),
    username:z.string(),
    email:z.string().email("Email is required").nonempty(),
    gender:z.enum(["male","female"],"Gender is required."),
    dateOfBirth:z.string("Date of birth is required.").nonempty(),
    password:z.string("Password is required.").regex( /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,"Password must include uppercase, lowercase, number, and special character."),
    rePassword:z.string("Please confirm your password.").regex( /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,"Password must include uppercase, lowercase, number, and special character.")

  }).refine( function(values){
 return values.password===values.rePassword
  },{error:"password and rePassword not match",path:["password","rePassword"]
    
  })





 
  const {register,handleSubmit,formState}= useForm({
    defaultValues:{
      name:"",
      username:"",
      email:"",
      gender:"",
      dateOfBirth:"",
      password:"",
      rePassword:""
    }
    ,resolver:zodResolver(signUpSchema)
  },)

 






async  function myHandelSubmit(values){
  

  try {
  
   setIsLoading(true)
   
       const resp= await axios.post("https://route-posts.routemisr.com/users/signup",values)

     const successMsg= resp.data.message 
    console.log(successMsg )

   setTimeout(() => {
       setSuccess(successMsg)
    }, 500);

    setTimeout(() => {
       nav("/home")
    }, 2500);
  
  } catch (error) {
   

  const errorMessage = error.response.data.errors  ;

  setTimeout(() => {
       setErrorMsg(errorMessage)
  }, );

    console.log(errorMessage);
    

}


}












  return ( <> 
 


{success && !errorMsg && (
  <p className="mt-1 text-green-500 text-xl font-bold">{success}</p>
)}


 {errorMsg &&<p className="mt-1  text-rose-600 text-xl font-bold"> {errorMsg} </p>}

<h2 className="text-2xl font-extrabold text-[#0f172b]">
             Create a new account
            </h2>
            <p className="mt-1 text-base font-normal text-[#62748e]">
            It is quick and easy.
            </p>
            <title>Create Account | Route Posts</title>




































  {/* SignUp form */}


 <form onSubmit={handleSubmit(myHandelSubmit)} className="mt-6 flex flex-col space-y-3">
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
  {formState.errors.name  && <p className="mt-1 text-xs font-semibold text-rose-600" >{ formState.errors.name.message}</p>   }

 

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

  {formState.errors.email  && <p className="mt-1 text-xs font-semibold text-rose-600" >{ formState.errors.email.message}</p>   }


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
      </option >
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>

  {formState.errors.gender  && <p className="mt-1 text-xs font-semibold text-rose-600" >{ formState.errors.gender.message}</p>   }


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
    {formState.errors.dateOfBirth  && <p className="mt-1 text-xs font-semibold text-rose-600" >{ formState.errors.dateOfBirth.message}</p>   }


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
    {formState.errors.password  && <p className="mt-1 text-xs font-semibold text-rose-600" >{ formState.errors.password.message}</p>   }


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
    {formState.errors.rePassword  && <p className="mt-1 text-xs font-semibold text-rose-600" >{ formState.errors.rePassword.message}</p>   }



  {/* Submit Button */}
{isLoading? <div className="">
<button disabled className="w-full rounded-xl flex justify-center items-center cursor-wait py-3 text-base font-extrabold text-white transition disabled:opacity-60 bg-[#0c235c] ">Loading  



  <span>

  <Radio
visible={true}
height="24"
width="24"
color="#4fa94d"
ariaLabel="radio-loading"
wrapperStyle={{}}
wrapperClass=""
/>
</span>
</button>

</div>   :   <>

<button  className="w-full rounded-xl py-3 cursor-pointer text-base font-extrabold text-white transition disabled:opacity-60 bg-[#00298d] hover:bg-[#001f6b]">Create New Account </button>




</>} 
</form>

 
 </> 
  )
}
