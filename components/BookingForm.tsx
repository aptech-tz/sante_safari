"use client";
import React, { useRef } from "react";

const EXPERIENCES = [
  "Safari & Wildlife",
  "Wellness Retreat",
  "Nature Walk",
  "Sunrise Yoga",
  "Detox Escape",
  "Eco Camping",
];

export default function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const dates = data.get("dates");
    const experience = data.get("experience");
    const notes = data.get("notes");
    const text = encodeURIComponent(
      `Booking Inquiry from Sante Safaris:%0A` +
      `Name: ${name}%0AEmail: ${email}%0ADates: ${dates}%0AExperience: ${experience}%0ASpecial Notes: ${notes}`
    );
   
    console.log(text)
    const url = `https://wa.me/${255767921035}?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <section id="booking" className="py-16 bg-[#fdfdfd]">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-10">Book Your Journey</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 space-y-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="dates" className="font-semibold text-gray-700">Date</label>
            <input
              type="date"
              id="dates"
              name="dates"
              required
              className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="experience" className="font-semibold text-gray-700">Experience</label>
            <select
              id="experience"
              name="experience"
              required
              className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              <option value="">Select an experience</option>
              {EXPERIENCES.map((exp) => (
                <option key={exp} value={exp}>{exp}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="notes" className="font-semibold text-gray-700">Special Notes</label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
              placeholder="Let us know any special requests..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl text-lg shadow transition-colors duration-200"
          >
            Send to WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
} 