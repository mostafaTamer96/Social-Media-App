// import axios from 'axios';
// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import * as z from "zod";
// export default function Login() {
// const [isLoading,setIsLoading]=useState(null)
// const[success,setSuccess] =useState(null)
// const [errorMsg,setErrorMsg]=useState(null)

//  let nav=useNavigate()
//   const logInScehma=z.object({

//     email:z.string().email("Email is required").nonempty(),
//     password:z.string("Password is required.").regex( /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,"Password must include uppercase, lowercase, number, and special character."),
//   })







//   const {register,handleSubmit,formState}= useForm({
//     defaultValues:{
      
     
//       email:"",
    
//       password:"",
     
//     }
// })




// async  function myHandelSubmit(values){
  

//   try {
  
//    setIsLoading(true)
   
//        const resp= await axios.post("https://route-posts.routemisr.com/users/signin",values)

//      const successMsg= resp.data.message 
//     console.log(successMsg )

//    setTimeout(() => {
//        setSuccess(successMsg)
//     }, 500);

//     setTimeout(() => {
//        nav("/home")
//     }, 2500);
  
//   } catch (error) {
   

//   const errorMessage = error.response.data.errors  ;

//   setTimeout(() => {
//        setErrorMsg(errorMessage)
//   }, );

//     console.log(errorMessage);
    

// }


// }

//   return (
//     <div>
//         <form onSubmit={handleSubmit(myHandelSubmit)} className="mt-6 flex flex-col gap-4">
           
          
             
              
//                 <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d] focus-within:bg-white">
//                 <svg
//                   className="h-5 w-5 shrink-0 text-[#8e9baf]"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
//                   />
//                 </svg>
//                 <input
//                 {...register("name")}
//                   type="text"
//                   placeholder="Email or username"
//                   className="w-full bg-transparent text-base text-[#334155] placeholder-[#8e9baf] outline-none"
                  
//                 />
               
//               </div>

             
//               <div className="flex items-center gap-3 mb-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d] focus-within:bg-white">
//                 <svg
//                   className="h-5 w-5 shrink-0 text-[#8e9baf]"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
//                   />
//                 </svg>
//                 <input
//                 {...register("email")}
//                   type="password"
//                   placeholder="Password"
//                   className="w-full bg-transparent text-base text-[#334155] placeholder-[#8e9baf] outline-none"
                  
//                 />
//               </div>
             
  
//       </form>
//     </div>
//   )
// }
