// src/pages/Signup.jsx

import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  MessageCircle,
  ArrowLeft,
  User,
  Building2,
  Factory,
  Store,
  Briefcase,
  Check,
  Loader2,
  CheckCircle2,
} from "lucide-react";

// ✅ Your latest deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz-Wu_9G-m2nN-IN9iV-ZFAWg1B_DiPfqdSwMrhx87b2A0zwkMgsb1It2FEOlLv_bqmFw/exec";

// Natively hash plain-text password to SHA-256 hex string using Web Crypto API
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function Signup() {
  // Step 1 = Industry Type
  // Step 2 = Account Details & Final Submit
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    mobile: "",
    whatsapp: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!agreeTerms) {
      setError("Please accept the Terms of Service and Privacy Policy to proceed.");
      return;
    }

    if (!form.fullName || !form.businessName || !form.email || !form.password) {
      setError("Please fill out all required fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      // 1. Hash password securely
      const hashedPassword = await hashPassword(form.password);

      // 2. Build JSON payload
      const payload = {
        userType,
        fullName: form.fullName,
        businessName: form.businessName,
        mobile: form.mobile,
        whatsapp: form.whatsapp,
        email: form.email,
        passwordHash: hashedPassword,
      };

      // 3. Post to Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.result === "success") {
        setLoading(false);
        setIsSuccess(true);
      } else {
        throw new Error(result.error || "Failed to create account.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setLoading(false);
      setError("Failed to register. Please try again or check network connection.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <div className="px-6 py-10 lg:py-14">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600"></div>

            <h1 className="text-2xl font-bold text-[#0b1533] tracking-tight">
              Hivictus
            </h1>
          </div>

          <h2 className="text-4xl font-bold text-[#0b1533] tracking-tight">
            Create Your Business Account
          </h2>

          {!isSuccess && (
            <div className="flex items-center justify-center gap-3 mt-4 text-sm font-medium text-gray-400">
              <span
                className={`${
                  step === 1 ? "text-violet-600 font-semibold" : ""
                }`}
              >
                1. Industry Type
              </span>

              <span className="w-6 h-px bg-gray-300"></span>

              <span
                className={`${
                  step === 2 ? "text-violet-600 font-semibold" : ""
                }`}
              >
                2. Account Details
              </span>
            </div>
          )}
        </div>

        {/* Main Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
          
          {/* ================================================================
                          SUCCESS / WISHLIST CONFIRMATION STATE
          ================================================================ */}
          {isSuccess ? (
            <div className="text-center py-12 px-4 space-y-6">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={44} strokeWidth={2.5} />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-[#0b1533]">
                  Successfully Added to Wishlist!
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Thank you, <span className="font-semibold text-gray-700">{form.fullName}</span>. Your business registration details for <span className="font-semibold text-gray-700">{form.businessName}</span> have been securely recorded and added to our exclusive Early Adopter Network queue.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setStep(1);
                    setUserType("");
                    setForm({
                      fullName: "",
                      businessName: "",
                      mobile: "",
                      whatsapp: "",
                      email: "",
                      password: "",
                      confirmPassword: "",
                    });
                    setAgreeTerms(false);
                  }}
                  className="px-8 h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl text-sm transition-all cursor-pointer"
                >
                  Register Another Account
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* ================================================================
                              STEP 1: INDUSTRY TYPE
              ================================================================ */}
              {step === 1 && (
                <div>
                  <p className="text-gray-700 text-xl font-semibold mb-2">
                    What is your industry type?
                  </p>

                  <p className="text-gray-500 mb-8">
                    Select the option that best describes your primary business sector.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* MANUFACTURING */}
                    <label
                      className={`relative cursor-pointer rounded-2xl border-2 p-6 transition-all duration-200 ${
                        userType === "manufacturing"
                          ? "border-violet-600 bg-violet-50 shadow-md"
                          : "border-gray-200 bg-white hover:border-violet-300 hover:shadow-sm"
                      }`}
                    >
                      <input
                        type="radio"
                        name="userType"
                        value="manufacturing"
                        checked={userType === "manufacturing"}
                        onChange={(e) => setUserType(e.target.value)}
                        className="sr-only"
                      />

                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                            userType === "manufacturing"
                              ? "bg-violet-600 text-white"
                              : "bg-violet-100 text-violet-600"
                          }`}
                        >
                          <Factory size={30} />
                        </div>

                        <div
                          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                            userType === "manufacturing"
                              ? "bg-violet-600 border-violet-600"
                              : "bg-white border-gray-300"
                          }`}
                        >
                          {userType === "manufacturing" && (
                            <Check
                              size={16}
                              className="text-white"
                              strokeWidth={3}
                            />
                          )}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-[#0b1533]">
                        Manufacturing
                      </h3>

                      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                        Production of raw materials or components into finished goods on a large scale.
                      </p>
                    </label>

                    {/* TRADING */}
                    <label
                      className={`relative cursor-pointer rounded-2xl border-2 p-6 transition-all duration-200 ${
                        userType === "trading"
                          ? "border-violet-600 bg-violet-50 shadow-md"
                          : "border-gray-200 bg-white hover:border-violet-300 hover:shadow-sm"
                      }`}
                    >
                      <input
                        type="radio"
                        name="userType"
                        value="trading"
                        checked={userType === "trading"}
                        onChange={(e) => setUserType(e.target.value)}
                        className="sr-only"
                      />

                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                            userType === "trading"
                              ? "bg-violet-600 text-white"
                              : "bg-violet-100 text-violet-600"
                          }`}
                        >
                          <Store size={30} />
                        </div>

                        <div
                          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                            userType === "trading"
                              ? "bg-violet-600 border-violet-600"
                              : "bg-white border-gray-300"
                          }`}
                        >
                          {userType === "trading" && (
                            <Check
                              size={16}
                              className="text-white"
                              strokeWidth={3}
                            />
                          )}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-[#0b1533]">
                        Trading Industry
                      </h3>

                      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                        Buying and selling goods and services across local or global wholesale/retail chains.
                      </p>
                    </label>

                    {/* SERVICE INDUSTRY */}
                    <label
                      className={`relative cursor-pointer rounded-2xl border-2 p-6 transition-all duration-200 ${
                        userType === "service"
                          ? "border-violet-600 bg-violet-50 shadow-md"
                          : "border-gray-200 bg-white hover:border-violet-300 hover:shadow-sm"
                      }`}
                    >
                      <input
                        type="radio"
                        name="userType"
                        value="service"
                        checked={userType === "service"}
                        onChange={(e) => setUserType(e.target.value)}
                        className="sr-only"
                      />

                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                            userType === "service"
                              ? "bg-violet-600 text-white"
                              : "bg-violet-100 text-violet-600"
                          }`}
                        >
                          <Briefcase size={30} />
                        </div>

                        <div
                          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                            userType === "service"
                              ? "bg-violet-600 border-violet-600"
                              : "bg-white border-gray-300"
                          }`}
                        >
                          {userType === "service" && (
                            <Check
                              size={16}
                              className="text-white"
                              strokeWidth={3}
                            />
                          )}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-[#0b1533]">
                        Service Industry
                      </h3>

                      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                        Providing intangible economic value, professional expertise, or business solutions.
                      </p>
                    </label>
                  </div>

                  {/* Continue Button */}
                  <button
                    onClick={() => {
                      if (userType) {
                        setStep(2);
                      }
                    }}
                    disabled={!userType}
                    className={`w-full h-14 mt-10 rounded-xl text-white text-lg font-bold shadow-lg transition-all ${
                      userType
                        ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:brightness-105 cursor-pointer"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                  >
                    Continue
                  </button>
                </div>
              )}

              {/* ================================================================
                              STEP 2: ACCOUNT DETAILS & DIRECT SUBMIT
              ================================================================ */}
              {step === 2 && (
                <form onSubmit={handleSubmit}>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-violet-600 mb-6 cursor-pointer"
                  >
                    <ArrowLeft size={16} />
                    Back to Industry Type
                  </button>

                  <p className="text-gray-700 text-xl font-semibold mb-6">
                    Tell us about your business
                  </p>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-semibold">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0b1533] mb-2.5">
                        Full Name *
                      </label>

                      <div className="relative">
                        <User
                          size={20}
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          type="text"
                          name="fullName"
                          placeholder="John Doe"
                          value={form.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full h-14 rounded-xl border border-gray-200 bg-[#f7f8fc] pl-14 pr-5 outline-none focus:ring-2 focus:ring-violet-500/20"
                        />
                      </div>
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0b1533] mb-2.5">
                        Business Name *
                      </label>

                      <div className="relative">
                        <Building2
                          size={20}
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          type="text"
                          name="businessName"
                          placeholder="Acme Corporation"
                          value={form.businessName}
                          onChange={handleInputChange}
                          required
                          className="w-full h-14 rounded-xl border border-gray-200 bg-[#f7f8fc] pl-14 pr-5 outline-none focus:ring-2 focus:ring-violet-500/20"
                        />
                      </div>
                    </div>

                    {/* Mobile */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0b1533] mb-2.5">
                        Mobile Number
                      </label>

                      <div className="relative">
                        <Phone
                          size={20}
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          type="tel"
                          name="mobile"
                          placeholder="+91 9876543210"
                          value={form.mobile}
                          onChange={handleInputChange}
                          className="w-full h-14 rounded-xl border border-gray-200 bg-[#f7f8fc] pl-14 pr-5 outline-none focus:ring-2 focus:ring-violet-500/20"
                        />
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0b1533] mb-2.5">
                        WhatsApp Number
                      </label>

                      <div className="relative">
                        <MessageCircle
                          size={20}
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          type="tel"
                          name="whatsapp"
                          placeholder="+91 9876543210"
                          value={form.whatsapp}
                          onChange={handleInputChange}
                          className="w-full h-14 rounded-xl border border-gray-200 bg-[#f7f8fc] pl-14 pr-5 outline-none focus:ring-2 focus:ring-violet-500/20"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-[#0b1533] mb-2.5">
                        Email ID *
                      </label>

                      <div className="relative">
                        <Mail
                          size={20}
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          type="email"
                          name="email"
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={handleInputChange}
                          required
                          className="w-full h-14 rounded-xl border border-gray-200 bg-[#f7f8fc] pl-14 pr-5 outline-none focus:ring-2 focus:ring-violet-500/20"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0b1533] mb-2.5">
                        Password *
                      </label>

                      <div className="relative">
                        <Lock
                          size={20}
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Create Password"
                          value={form.password}
                          onChange={handleInputChange}
                          required
                          className="w-full h-14 rounded-xl border border-gray-200 bg-[#f7f8fc] pl-14 pr-12 outline-none focus:ring-2 focus:ring-violet-500/20"
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0b1533] mb-2.5">
                        Confirm Password *
                      </label>

                      <div className="relative">
                        <Lock
                          size={20}
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          value={form.confirmPassword}
                          onChange={handleInputChange}
                          required
                          className="w-full h-14 rounded-xl border border-gray-200 bg-[#f7f8fc] pl-14 pr-12 outline-none focus:ring-2 focus:ring-violet-500/20"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-center gap-3 mt-8">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="w-5 h-5 accent-violet-600 rounded cursor-pointer"
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-gray-600 cursor-pointer select-none"
                    >
                      I accept the{" "}
                      <span className="text-violet-600 font-semibold hover:underline">
                        Terms of Service
                      </span>{" "}
                      and{" "}
                      <span className="text-violet-600 font-semibold hover:underline">
                        Privacy Policy
                      </span>
                    </label>
                  </div>

                  {/* Register Submit Button */}
                  <button
                    type="submit"
                    disabled={!agreeTerms || loading}
                    className={`w-full h-14 mt-8 rounded-xl text-white text-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${
                      agreeTerms && !loading
                        ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:brightness-105 cursor-pointer"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Adding to Wishlist...
                      </>
                    ) : (
                      "Register Business Account"
                    )}
                  </button>
                </form>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-8 text-sm">
          By creating an account, you agree to Hivictus Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}