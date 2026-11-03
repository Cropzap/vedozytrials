// src/pages/Login.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader2, Eye, EyeOff, ShieldCheck, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Input = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <Icon
      size={20}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
    />
    <input
      {...props}
      className="w-full pl-12 pr-4 py-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 
      focus:bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400"
    />
  </div>
);

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ NO BACKEND - DIRECT LOGIN
  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    setTimeout(() => {
      localStorage.setItem("token", "dummy-token");
      navigate("/dashboard");
      setLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-6 py-12 relative overflow-hidden">
      
      {/* Background Glow Decors */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/50 relative z-10"
      >
        
        {/* Brand / Trust Tag */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
            <ShieldCheck size={14} /> Secure Portal Access
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            Access your Vedozy & Hivictus credit dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
            <Input
              icon={Mail}
              type="email"
              name="email"
              placeholder="name@company.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className="w-full pl-12 pr-12 py-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 
                focus:bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end pt-1">
            <Link
              to="/forgot-password"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs font-medium">
              {error}
            </div>
          )}

          {/* Professional, Elegant & Modern Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 text-white py-3.5 px-6 rounded-xl text-sm font-bold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-xl hover:shadow-blue-600/25 active:scale-[0.99] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed border border-slate-800/40 hover:border-blue-500/30 overflow-hidden"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin text-blue-300" />
                <span>Logging in...</span>
              </>
            ) : (
              <>
                <span>Login</span>
                <ArrowRight size={17} className="text-blue-300 group-hover:text-white transform group-hover:translate-x-1 transition-transform duration-200" />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-3 text-slate-400 font-semibold tracking-wider">New to Vedozy?</span>
          </div>
        </div>

        {/* Create Account Action */}
        <div className="text-center">
          <Link to="/register">
            <button
              className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 
              py-3.5 rounded-xl text-sm font-bold transition-all cursor-pointer border border-slate-200 shadow-xs"
            >
              Create an Account
            </button>
          </Link>
        </div>

      </motion.div>
    </div>
  );
}