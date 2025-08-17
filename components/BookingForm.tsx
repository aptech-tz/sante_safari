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

// Simple sanitization function
function sanitize(input: string) {
  return input.replace(/[<>]/g, "");
}

export default function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);

    // Validation
    const name = sanitize((data.get("name") as string || "").trim());
    const email = sanitize((data.get("email") as string || "").trim());
    const dates = sanitize((data.get("dates") as string || "").trim());
    const experience = sanitize((data.get("experience") as string || "").trim());
    const notes = sanitize((data.get("notes") as string || "").trim());

    if (!name || !email || !dates || !experience) {
      alert("Please fill in all required fields.");
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const text = encodeURIComponent(
      `Booking Inquiry from Sante Safaris:%0A` +
      `Name: ${name}%0AEmail: ${email}%0ADates: ${dates}%0AExperience: ${experience}%0ASpecial Notes: ${notes}`
    );

    const url = `https://wa.me/${255767921035}?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <section id="booking" className="py-16 bg-[#fdfdfd]">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#532e11] mb-10">Book Your Journey</h2>
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
              minLength={2}
              maxLength={50}
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
              maxLength={100}
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
              className="block w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
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
              maxLength={300}
              className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
              placeholder="Let us know any special requests..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#532e11] hover:bg-[#472009] text-white font-bold py-3 rounded-xl text-lg shadow transition-colors duration-200"
          >
            Send to WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}