import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Home() {
  const [authMode, setAuthMode] = useState("Login");

  function handleSelectLogin() {
    setAuthMode("Login");
  }

  function handleSelectRegister() {
    setAuthMode("Register");
  }

  function myHandleSubmit() {
   
    if (authMode === "Login") {
      // Handle login submission
    }
  }

  const { handleSubmit,register,getValues}=useForm()

  const isLogin = authMode === "Login";

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
              Connect with friends and the world around you on Route Posts.
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
              Route Academy is the premier IT training center in Egypt, established in 2012. We specialize in delivering high-quality training courses in programming, web development, and application development.
            </p>

            {/* Metrics Grid */}
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              <div className="rounded-xl border border-[#c9d5ff] bg-[#F2F6FF] px-3 py-2">
                <p className="text-base font-extrabold text-[#00298d]">2012</p>
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-600">Founded</p>
              </div>

              <div className="rounded-xl border border-[#c9d5ff] bg-[#F2F6FF] px-3 py-2">
                <p className="text-base font-extrabold text-[#00298d]">40K+</p>
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-600">Graduates</p>
              </div>

              <div className="rounded-xl border border-[#c9d5ff] bg-[#F2F6FF] px-3 py-2">
                <p className="text-base font-extrabold text-[#00298d]">50+</p>
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-600">Partner Companies</p>
              </div>

              <div className="rounded-xl border border-[#c9d5ff] bg-[#F2F6FF] px-3 py-2">
                <p className="text-base font-extrabold text-[#00298d]">5</p>
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-600">Branches</p>
              </div>

              <div className="col-span-2 rounded-xl border border-[#c9d5ff] bg-[#F2F6FF] px-3 py-2 sm:col-span-1">
                <p className="text-base font-extrabold text-[#00298d]">20</p>
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-600">Diplomas Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Auth Form) */}
        <div className="w-full max-w-md order-1 lg:order-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            {/* Switch Tabs */}
            <div className="flex items-center gap-1 bg-[#F1F5F9] border rounded-2xl border-transparent w-full p-1 mb-5">
              <button
                type="button"
                className={
                  isLogin
                    ? 'flex-1 bg-white py-2 text-[#00298D] text-base font-extrabold rounded-xl shadow-sm transition-all'
                    : 'flex-1 bg-transparent py-2 text-[#62748e] font-extrabold text-base hover:text-[#0f172b] transition-all'
                }
                onClick={handleSelectLogin}
              >
                Login
              </button>

              <button
                type="button"
                className={
                  !isLogin
                    ? 'flex-1 bg-white py-2 text-[#00298D] text-base font-extrabold rounded-xl shadow-sm transition-all'
                    : 'flex-1 bg-transparent py-2 text-[#62748e] font-extrabold text-base hover:text-[#0f172b] transition-all'
                }
                onClick={handleSelectRegister}
              >
                Register
              </button>
            </div>

            {/* Dynamic Header */}
            <h2 className="text-2xl font-extrabold text-[#0f172b]">
              {isLogin ? 'Log in to Route Posts' : 'Create a new account'}
            </h2>
            <p className="mt-1 text-base font-normal text-[#62748e]">
              {isLogin ? 'Log in and continue your social journey.' : 'It is quick and easy.'}
            </p>

            <div onSubmit={myHandleSubmit} className="mt-6 flex flex-col gap-4">
              
              {/* Register-only: Full Name & Username */}
              {!isLogin && (
                <>
                  <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d]">
                    <svg className="h-5 w-5 shrink-0 text-[#8e9baf]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full bg-transparent text-base text-[#334155] placeholder-[#8e9baf] outline-none"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d]">
                    <svg className="h-5 w-5 shrink-0 text-[#8e9baf]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Username (optional)"
                      className="w-full bg-transparent text-base text-[#334155] placeholder-[#8e9baf] outline-none"
                    />
                  </div>
                </>
              )}

              {/* Email Input */}
              <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d]">
                <svg className="h-5 w-5 shrink-0 text-[#8e9baf]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <input
                  type={isLogin ? "text" : "email"}
                  placeholder={isLogin ? "Email or username" : "Email address"}
                  className="w-full bg-transparent text-base text-[#334155] placeholder-[#8e9baf] outline-none"
                  required
                />
              </div>

              {/* Register-only: Gender & Date of Birth */}
              {!isLogin && (
                <>
                  <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d]">
                    <select className="w-full bg-transparent text-base text-[#8e9baf] outline-none">
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d]">
                    <input
                      type="date"
                      className="w-full bg-transparent text-base text-[#8e9baf] outline-none"
                      required
                    />
                  </div>
                </>
              )}

              {/* Password Input */}
              <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d]">
                <svg className="h-5 w-5 shrink-0 text-[#8e9baf]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                </svg>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent text-base text-[#334155] placeholder-[#8e9baf] outline-none"
                  required
                />
              </div>

              {/* Register-only: Confirm Password */}
              {!isLogin && (
                <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-colors focus-within:border-[#00298d]">
                  <svg className="h-5 w-5 shrink-0 text-[#8e9baf]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                  </svg>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full bg-transparent text-base text-[#334155] placeholder-[#8e9baf] outline-none"
                    required
                  />
                </div>
              )}

              {/* Submit Action Button */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-[#00298D] py-3.5 text-base font-extrabold text-white transition-opacity hover:opacity-95"
              >
                {isLogin ? 'Log In' : 'Create New Account'}
              </button>

              {/* Forgot Password (Login Only) */}
              {isLogin && (
                <button
                  type="button"
                  className="w-full text-center text-base font-semibold text-[#00298d] hover:underline"
                >
                  Forgot password?
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}