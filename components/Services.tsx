const SERVICES = [
  { icon: "🦁", title: "Guided Tour" },
  { icon: "🧘", title: "Safari & Wildlife Excursions" },
  { icon: "🏞️", title: "Cultural & Heritage Trips" },
  { icon: "🌅", title: "SPA ,SAUNA & YOGA" },
  { icon: "🍃", title: "Beach Holidays" },
  { icon: "🏕️", title: "City ToursTravel Planning & Custom" },
];

export default function Services() {
  // Duplicate services for seamless scrolling
  const duplicatedServices = [...SERVICES, ...SERVICES];

  return (
    <section id="services" className="bg-[#fdfdfd] py-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-10">What We Offer</h2>
        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide hover:overflow-x-auto group">
          <div className="flex gap-4 animate-scroll group-hover:animate-none group-hover:transform-none">
            {duplicatedServices.map((s, i) => (
              <div
                key={i}
                className="rounded-xl bg-white shadow-md p-8 flex flex-col items-center text-center transition-transform duration-200 hover:scale-110 hover:shadow-md cursor-pointer min-w-[150px] flex-shrink-0"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg text-sky-800">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 