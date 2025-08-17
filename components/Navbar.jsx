"use client";
import React from "react";

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
            <a href="/" className="text-white hover:text-gray-200 font-medium">
              होम
            </a>
            <a
              href="/action"
              className="text-white hover:text-gray-200 font-medium"
            >
              एक्शन
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BhairavTimes;