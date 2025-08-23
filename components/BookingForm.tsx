"use client";
import React, { useRef, useState } from "react";

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
  const [openBoxmodel, setOpenBoxmodel] = useState(false)

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
`A BOOKING FROM: ${name},
 Email: ${email},
 Dates: ${dates}, 
 Experience: ${experience},
 Special Notes: ${notes}`
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
          <div
          onClick={() => setOpenBoxmodel(true)}
            className="w-full text-center bg-[#532e11] hover:bg-[#472009] text-white font-bold py-3 rounded-xl text-lg shadow transition-colors duration-200"
          >
            Send
          </div>

          {
            openBoxmodel && (
              <div className="fixed top-[80px] max-w-[500px] shadow-md w-[95vw] mx-auto inset-0  bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-lg h-[500px] overflow-y-auto relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
          onClick={ () => setOpenBoxmodel(false) }
        >
          &times;
        </button>
        <h2 className="mb-4">1. Deposit amount 50% advance payment </h2>
        <h2 className="mb-4">2. Final balance payment 50% deputer date.</h2>
        <h2 className="mb-4">3.Accepted payment methods and currency euro€,Dollar $ and tz shillings.</h2>
        <div className="mb-4">
          <h2>4.Cancellation & Refund:</h2>
          <p>It is important to note that our cancellation policy does not include refund after is payment done Confirmation message of payments should be there.</p>
        </div>
        <div className="mb-4">
        <h2 className="mb-4">5.Contracts & Agreements</h2>
        <p>Have guests sign a booking agreement outlining: Payment obligations, Deadlines, Late fees or penalties, Right to cancel their spot for non-payment</p>
        </div>
        <div className="mb-4">
        <h2>6. Secure Online Payment System</h2>
        <p>Use platforms like: Pesa pal link, M-pesa</p>
        </div>
        <div className="mb-4">
        <h2>7.Dear guests kindly be  informed that for guests who haven’t paid in full by specific date;</h2>
        <p>● Will not be allowed to travel</p>
        <p>● Will lose their spot without a refund.</p>
        </div>

        <div className="mb-4">
        <h2>8.Reward early payment:</h2>
        <p>● Bottlle of water </p>
        <p>● Small discounts for the full payment.</p>
        </div>

        <p>Once the payment is completed, kindly share a screenshot as proof of payment to confirm your booking</p>

         <button
          type="submit"
            className="w-full mb-4 mt-8 bg-[#532e11] hover:bg-[#472009] text-white font-bold py-3 rounded-xl text-lg shadow transition-colors duration-200"
          >
            Send to WhatsApp
          </button>
      </div>
    </div>
            )
          }

        </form>
      </div>
    </section>
  );
}