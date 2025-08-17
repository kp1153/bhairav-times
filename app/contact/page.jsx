"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("भेजा जा रहा है...");

    emailjs
      .send(
        "service_fbytk2l", // ✅ अपना service id डालें
        "template_7idu0oj", // ✅ अपना template id डालें
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "ayF4e7MboN3lTQh-c" // ✅ अपना public key डालें
      )
      .then(
        () => {
          setStatus("शिकायत सफलतापूर्वक भेज दी गई ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => setStatus("भेजने में समस्या आई ❌ " + error.text)
      );
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* Form सबसे ऊपर */}
      <div className="w-full max-w-lg mx-auto px-4 pt-4">
        <h1 className="text-3xl font-bold text-amber-800 mb-3">
          संपर्क / फरियाद
        </h1>

        {/* Blue double border form */}
        <form
          onSubmit={sendEmail}
          className="bg-white border-4 border-blue-600 border-double rounded-xl shadow-sm p-5 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="आपका नाम"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-2 border-blue-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="आपका ईमेल"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-2 border-blue-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <textarea
            name="message"
            placeholder="अपनी शिकायत / संदेश लिखें"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full border-2 border-blue-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700"
          >
            शिकायत भेजें
          </button>
          {status && <p className="text-center text-sm mt-1">{status}</p>}
        </form>

        {/* Quick contact */}
        <div className="mt-4 bg-white border-4 border-blue-600 border-double rounded-xl p-4 text-center space-y-2">
          <p className="font-semibold">या सीधे संपर्क करें:</p>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-3">
            <Link href="tel:+919876543210" className="underline">
              📞 फोन से कॉल
            </Link>
            <Link
              href="mailto:raghuvanshilenin@gmail.com"
              className="underline"
            >
              📧 ईमेल
            </Link>
            <Link
              href="https://wa.me/919876543210"
              target="_blank"
              className="underline"
            >
              💬 WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
