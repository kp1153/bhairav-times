"use client";
import React from "react";
import Link from "next/link";

const BhairavTimes = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Navbar */}
      <nav className="bg-amber-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center py-3">
            <h1 className="text-2xl font-bold text-white">भैरव टाइम्स</h1>
          </div>
          <div className="flex justify-center items-center space-x-8 pb-3">
            <Link
              href="/"
              className="text-white hover:text-gray-200 font-medium"
            >
              होम
            </Link>
            <Link
              href="/action"
              className="text-white hover:text-gray-200 font-medium"
            >
              एक्शन
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-200 font-medium"
            >
              कांटैक्ट
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BhairavTimes;
