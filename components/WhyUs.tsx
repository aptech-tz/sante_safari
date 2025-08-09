const FEATURES = [
  {
    icon: "🌱",
    title: "Health-Centered Itineraries",
    text: "Focused on physical, emotional, and mental well-being."
  },
  {
    icon: "🦁",
    title: "Sustainable & Responsible Travel",
    text: "Respecting local communities and the environment." 
  },
  {
    icon: "🤝",
    title: "Carefully Curated Destinations",
    text: "Nature-rich, tranquil, and culturally immersive."
  },
  {
    icon: "🌍",
    title: "Expert Local Partnerships",
    text: "Working with wellness practitioners, guides, and healers."
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-white py-16"> 
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <div key={i} className="rounded-lg shadow-md p-6 bg-[#e0f7fa] flex flex-col items-center text-center">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-sky-800">{f.title}</h3>
              <p className="text-gray-700 text-base">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 