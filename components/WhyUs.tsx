import FadeUp from "../components/FadeUp";
import Image from "next/image";

const FEATURES = [
  {
    img: "/whyus/health.jpg",
    title: "Health-Centered Itineraries",
    text: "Focused on physical, emotional, and mental well-being."
  },
  {
    img: "/whyus/travel.jpeg",
    title: "Sustainable & Responsible Travel",
    text: "Respecting local communities and the environment." 
  },
  {
    img: "/whyus/destination.jpeg",
    title: "Carefully Curated Destinations",
    text: "Nature-rich, tranquil, and culturally immersive."
  },
  {
    img: "/whyus/partnership.jpeg",
    title: "Expert Local Partnerships",
    text: "Working with wellness practitioners, guides, and healers."
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-white py-16"> 
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#532e11] mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <FadeUp key={i}>
              <div className="rounded-lg shadow-md p-6 bg-[#e0f7fa] flex flex-col items-center text-center h-full">
                <div className="mb-4 w-full flex justify-center">
                  <Image
                    src={f.img}
                    alt={f.title}
                    width={180}
                    height={120}
                    className="rounded-lg object-cover w-full h-32"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#532e11]">{f.title}</h3>
                <p className="text-gray-700 text-base">{f.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}