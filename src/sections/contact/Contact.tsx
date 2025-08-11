"use client";
import { useState } from "react";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div
      id="contact-section"
      className="min-h-screen text-white grid grid-cols-[minmax(200px,_1fr)_minmax(300px,_1fr)_minmax(200px,_1fr)] max-md:grid-cols-1 gap-4 justify-items-center items-center"
    >
      <div className="mb-8 text-center p-4">
        <h2 className="text-4xl font-semibold mb-2 text-white font-bebas">
          Old-school?
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-6xl max-md:text-4xl">
            {" "}
            No problem.{" "}
          </span>
        </h2>
        <p className="text-gray-300 max-w-md mx-auto text-xl">
          If you&apos;re the kind of legend who still believes in heartfelt
          emails over chaotic DMs&mdash;this one&rsquo;s for you. Drop your note
          below.
        </p>
      </div>

      <ContactForm formData={formData} setFormData={setFormData} />

      <div className="mb-8 text-center p-4">
        <h2 className="text-4xl font-semibold mb-2 text-white font-bebas">
          REAL{" "}
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-6xl max-md:text-4xl">
            Connections
          </span>{" "}
          START HERE.
        </h2>
        <p className="text-gray-300 max-w-md mx-auto text-xl">
          Forget bots and scroll fatigue—this form leads straight to my inbox.
          Say hi, pitch an idea, or just tell me your favorite snack.
        </p>
      </div>
    </div>
  );
}
