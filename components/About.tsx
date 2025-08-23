import Image from "next/image";
import FadeUp from "../components/FadeUp";

export default function About() {
  return (
    <section id="about" className="bg-blue-200 py-12">
      <h2 className="mt-0 text-3xl text-center font-bold text-[#532e11] mb-4">Who We Are</h2>
      <div className="max-w-5xl mx-auto flex flex-col justify-center md:flex-row items-center gap-4 px-6">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/photos/IMG-20250808-WA0034.jpg"
            alt="About Santé Safaris"
            width={480}
            height={480}
            className="rounded-xl object-cover"
            placeholder="blur"
            blurDataURL="/globe.svg"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center text-gray-800 space-y-2">
          
          <FadeUp>
            <p className="bg-white p-4 rounded-xl">
              <b>Santé Safaris</b> we believe that travel is more than just a journey it's a path to renewal. Rooted in the meaning of "health," Our mission is to offer transformative travel experiences that nurture both body and soul.
            </p>
          </FadeUp>
          <FadeUp>
            <p className="bg-white p-4 rounded-xl">
              We specialize in wellness-inspired tourism, curating unforgettable trips that promote balance, serenity, and connection with nature and culture. <br /> Whether you're seeking peaceful retreats, nature escapes, or culturally enriching adventures, every journey with us is designed to leave you refreshed, inspired, and healthier inside and out.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}


