"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";

interface ServiceSidebarFormProps {
  serviceName?: string;
}

export const ServiceSidebarForm: React.FC<ServiceSidebarFormProps> = ({
  serviceName = "Panchakarma Treatment",
}) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleVerify = () => {
    if (isVerified) return;
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 800);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      setErrorMsg("Please fill in your name and phone number.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          location,
          service: serviceName,
          message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg("Failed to send request. Please call us directly.");
      }
    } catch {
      setErrorMsg("An error occurred. Please try again or call us.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0F5A38] rounded-[24px] p-5 sm:p-6 shadow-xl border border-[#145E3F]/30 sticky top-28">
      {/* Header text */}
      <h3 className="text-white text-sm sm:text-[15px] font-semibold leading-snug mb-4 text-center sm:text-left">
        Share Your Details And Our Team Will Guide You With The Right Treatment
      </h3>

      {submitted ? (
        <div className="bg-white rounded-2xl p-6 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#E2EDE5] text-[#145E3F] flex items-center justify-center mx-auto">
            <CheckCircle2 size={28} />
          </div>
          <h4 className="font-serif-heading text-lg font-bold text-[#145E3F]">
            Consultation Requested!
          </h4>
          <p className="text-xs text-gray-600">
            Thank you, {fullName}. Our medical team will contact you shortly regarding{" "}
            <strong>{serviceName}</strong>.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-[#145E3F] underline font-semibold mt-2"
          >
            Submit another query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-4 sm:p-5 space-y-3 shadow-sm">
          {errorMsg && (
            <div className="p-2.5 rounded-lg bg-red-50 text-red-600 text-xs font-medium">
              {errorMsg}
            </div>
          )}

          {/* Full Name */}
          <div>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name*"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:border-[#145E3F] focus:ring-1 focus:ring-[#145E3F] outline-none transition-all"
            />
          </div>

          {/* Phone Number with India Flag */}
          <div className="flex items-center rounded-lg border border-gray-300 overflow-hidden focus-within:border-[#145E3F] focus-within:ring-1 focus-within:ring-[#145E3F]">
            <div className="flex items-center gap-1 px-2.5 py-2 bg-gray-50 border-r border-gray-200 select-none">
              <span className="text-sm">🇮🇳</span>
              <span className="text-xs font-semibold text-gray-600">+91</span>
            </div>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your Phone Number*"
              className="w-full px-3 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none"
            />
          </div>

          {/* Email Address with icon */}
          <div className="flex items-center rounded-lg border border-gray-300 overflow-hidden focus-within:border-[#145E3F] focus-within:ring-1 focus-within:ring-[#145E3F]">
            <div className="pl-3 text-gray-400">
              <Mail size={16} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email Address*"
              className="w-full px-3 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location*"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:border-[#145E3F] focus:ring-1 focus:ring-[#145E3F] outline-none transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:border-[#145E3F] focus:ring-1 focus:ring-[#145E3F] outline-none resize-none transition-all"
            />
          </div>

          {/* Cloudflare Turnstile Simulator */}
          <div
            onClick={handleVerify}
            className="flex items-center justify-between p-2.5 bg-[#2B2B2B] text-white rounded-lg cursor-pointer hover:bg-[#333333] transition-colors select-none"
          >
            <div className="flex items-center gap-2">
              {isVerifying ? (
                <Loader2 size={16} className="animate-spin text-white" />
              ) : isVerified ? (
                <div className="w-4 h-4 rounded-full bg-[#35A033] flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">✓</span>
                </div>
              ) : (
                <div className="w-4 h-4 rounded border border-gray-400" />
              )}
              <span className="text-xs font-medium">
                {isVerifying
                  ? "Verifying..."
                  : isVerified
                  ? "Success!"
                  : "Verify you are human"}
              </span>
            </div>

            <div className="flex flex-col items-end text-[10px] text-gray-400 leading-none">
              <span className="font-bold tracking-wider text-gray-300">CLOUDFLARE</span>
              <span className="text-[8px] text-gray-500 mt-0.5">Privacy • Terms</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-[#35A033] hover:bg-[#2D892B] text-white font-bold text-sm shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-[0.99]"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <span>Request Consultation</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
