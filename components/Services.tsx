import Image from "next/image";

const SERVICES = [
  { img: "/service/guidedTour.jpeg", title: "Guided Tour" },
  { img: "/service/wildlife.jpg", title: "Safari & Wildlife Excursions" },
  { img: "/service/cultural.jpeg", title: "Cultural & Heritage Trips" },
  { img: "/service/spa.jpeg", title: "SPA, SAUNA & YOGA" },
  { img: "/service/beach.jpeg", title: "Beach Holidays" },
  {img:"/service/transportation.jpg", title: "Transportation"},
  {img:"/service/hiking.jpeg", title: "Hiking"},
  {img:"/service/excursion.jpeg", title: "Zanzibar Excursions"},
  { img: "/service/citytravel.jpg", title: "City Tours, Travel Planning & Custom" },
];

export default function Services() {
  // Duplicate services for seamless scrolling
  const duplicatedServices = [...SERVICES, ...SERVICES];

  return (
    <section id="services" className="bg-[#fdfdfd] py-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#532e11] mb-10">What We Offer</h2>
        <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide hover:overflow-x-auto group">
          <div className="flex gap-8 animate-scroll group-hover:animate-none group-hover:transform-none">
            {duplicatedServices.map((s, i) => (
              <div
                key={i}
                className="rounded-xl bg-white shadow-md p-8 flex flex-col items-center text-center transition-transform duration-200 hover:scale-110 hover:shadow-md cursor-pointer w-56 min-w-[224px] flex-shrink-0"
              >
                <div className="mb-4 w-full">
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={224}
                    height={200}
                    className="rounded-lg object-cover w-full h-24"
                  />
                </div>
                <h3 className="font-bold text-lg text-[#532e11] break-words">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}