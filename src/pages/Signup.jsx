// src/pages/Signup.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  MessageCircle,
  ArrowLeft,
  ShieldCheck,
  User,
  Building2,
  Factory,
  Store,
  Briefcase,
  Check,
} from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();

  // Step 1 = User Type
  // Step 2 = Account Details
  // Step 3 = Verification
  const [step, setStep] = useState(1);

  const [userType, setUserType] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [agreeTerms, setAgreeTerms] = useState(false);

  const [whatsappOtp, setWhatsappOtp] = useState(["", "", "", ""]);
  const [emailOtp, setEmailOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (element, index, type) => {
    if (isNaN(element.value)) return;

    const otpArray =
      type === "whatsapp" ? [...whatsappOtp] : [...emailOtp];

    otpArray[index] = element.value;

    if (type === "whatsapp") {
      setWhatsappOtp(otpArray);
    } else {
      setEmailOtp(otpArray);
    }

    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
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

          {/* Step Indicator */}
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

            <span className="w-6 h-px bg-gray-300"></span>

            <span
              className={`${
                step === 3 ? "text-violet-600 font-semibold" : ""
              }`}
            >
              3. Verification
            </span>

          </div>
        </div>

        {/* Main Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">

          {/* ================================================================
                            STEP 1: USER TYPE (INDUSTRY SELECTION)
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
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:brightness-105"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Continue
              </button>

            </div>
          )}


          {/* ================================================================
                            STEP 2: ACCOUNT DETAILS
              ================================================================ */}

          {step === 2 && (
            <div>

              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-violet-600 mb-6"
              >
                <ArrowLeft size={16} />
                Back to Industry Type
              </button>

              <p className="text-gray-700 text-xl font-semibold mb-6">
                Tell us about your business
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#0b1533] mb-2.5">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={20}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full h-14 rounded-xl border border-gray-200 bg-[#f7f8fc] pl-14 pr-5 outline-none focus:ring-2 focus:ring-violet-500/20"
                    />
                  </div>
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#0b1533] mb-2.5">
                    Business Name
                  </label>

                  <div className="relative">
                    <Building2
                      size={20}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      placeholder="Acme Corporation"
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
                      placeholder="+91 9876543210"
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
                      placeholder="+91 9876543210"
                      className="w-full h-14 rounded-xl border border-gray-200 bg-[#f7f8fc] pl-14 pr-5 outline-none focus:ring-2 focus:ring-violet-500/20"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#0b1533] mb-2.5">
                    Email ID
                  </label>

                  <div className="relative">
                    <Mail
                      size={20}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full h-14 rounded-xl border border-gray-200 bg-[#f7f8fc] pl-14 pr-5 outline-none focus:ring-2 focus:ring-violet-500/20"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-[#0b1533] mb-2.5">
                    Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={20}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create Password"
                      className="w-full h-14 rounded-xl border border-gray-200 bg-[#f7f8fc] pl-14 pr-12 outline-none focus:ring-2 focus:ring-violet-500/20"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold text-[#0b1533] mb-2.5">
                    Confirm Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={20}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="w-full h-14 rounded-xl border border-gray-200 bg-[#f7f8fc] pl-14 pr-12 outline-none focus:ring-2 focus:ring-violet-500/20"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
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

              {/* Terms and Conditions Toggle */}
              <div className="flex items-center gap-3 mt-8">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-5 h-5 accent-violet-600 rounded cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer select-none">
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

              <button
                onClick={() => {
                  if (agreeTerms) {
                    setStep(3);
                  }
                }}
                disabled={!agreeTerms}
                className={`w-full h-14 mt-8 rounded-xl text-white text-lg font-bold shadow-lg transition-all ${
                  agreeTerms
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:brightness-105"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Proceed to Verification
              </button>

            </div>
          )}


          {/* ================================================================
                            STEP 3: VERIFICATION
              ================================================================ */}

          {step === 3 && (
            <div>

              <button
                onClick={() => setStep(2)}
                className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-violet-600 mb-6"
              >
                <ArrowLeft size={16} />
                Back to Details
              </button>

              <div className="text-center">

                <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck
                    size={34}
                    className="text-violet-600"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#0b1533]">
                  Security Verification
                </h3>

                <p className="text-gray-500 mt-2">
                  Enter OTP sent to WhatsApp & Email
                </p>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

                {/* WhatsApp OTP */}
                <div className="bg-[#f7f8fc] rounded-2xl p-6 border border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <MessageCircle className="text-green-600" />
                        <h4 className="font-bold text-[#0b1533]">
                          WhatsApp OTP
                        </h4>
                      </div>
                      <span className="text-xs font-medium text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full cursor-pointer hover:bg-violet-100">
                        Resend
                      </span>
                    </div>

                    <div className="flex gap-3 justify-center md:justify-start">
                      {whatsappOtp.map((data, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          value={data}
                          onChange={(e) =>
                            handleOtpChange(
                              e.target,
                              index,
                              "whatsapp"
                            )
                          }
                          className="w-14 h-14 rounded-xl border border-gray-200 text-center text-xl font-bold outline-none focus:ring-2 focus:ring-violet-500 bg-white"
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => alert("WhatsApp OTP Verified Successfully!")}
                    className="w-full mt-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all text-sm shadow-sm"
                  >
                    Verify WhatsApp
                  </button>
                </div>

                {/* Email OTP */}
                <div className="bg-[#f7f8fc] rounded-2xl p-6 border border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <Mail className="text-blue-600" />
                        <h4 className="font-bold text-[#0b1533]">
                          Email OTP
                        </h4>
                      </div>
                      <span className="text-xs font-medium text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full cursor-pointer hover:bg-violet-100">
                        Resend
                      </span>
                    </div>

                    <div className="flex gap-3 justify-center md:justify-start">
                      {emailOtp.map((data, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          value={data}
                          onChange={(e) =>
                            handleOtpChange(
                              e.target,
                              index,
                              "email"
                            )
                          }
                          className="w-14 h-14 rounded-xl border border-gray-200 text-center text-xl font-bold outline-none focus:ring-2 focus:ring-violet-500 bg-white"
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => alert("Email OTP Verified Successfully!")}
                    className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all text-sm shadow-sm"
                  >
                    Verify Email
                  </button>
                </div>

              </div>

              <button
                onClick={() => navigate("/login")}
                className="w-full h-14 mt-10 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-lg font-bold shadow-lg hover:brightness-105 transition-all"
              >
                Register
              </button>

            </div>
          )}

          {/* Login Redirect */}
          <p className="text-center text-gray-500 mt-6 text-base">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-violet-600 font-semibold cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-8 text-sm">
          By creating an account, you agree to Hivictus Terms of Service and Privacy Policy
        </p>

      </div>
    </div>
  );
}