import React from "react";

const EXCURSIONS = [
  {
    title: "Mnemba Island",
    description: "Swimming with the dolphins, snorkeling, barbecue lunch at the beach.",
    location: "Mnemba Island",
    img: "/excursion and safaris/mnemba.jpg",
  },
  {
    title: "Nakupenda Island",
    description: "Beautiful white sandbank, snorkeling, barbecue lunch at the beach.",
    location: "Nakupenda Island",
    img: "/excursion and safaris/nakupenda.jpg",
  },
  {
    title: "Prison Island",
    description: "Giant land tortoise.",
    location: "Prison Island",
    img: "/excursion and safaris/prison.jpg",
  },
  {
    title: "Jozan Forest",
    description: "Home of red colobus monkey.",
    location: "Jozan Forest",
    img: "/excursion and safaris/jozan forest.jpg",
  },
  {
    title: "Saalam Cave",
    description: "Swimming and feeding the turtles.",
    location: "Saalam Cave",
    img: "/excursion and safaris/saalam.jpg",
  },
  {
    title: "Maalum Cave",
    description: "Swimming in the natural pool with sweet and clear water, having massage in forest spa & experiencing dishes in jungle restaurant.",
    location: "Maalum Cave",
    img: "/excursion and safaris/maalum.jpg",
  },
  {
    title: "Safari Blue & Blue Lagoon",
    description: "Swimming with dolphins and star fish.",
    location: "Blue Lagoon",
    img: "/excursion and safaris/blueLagoon.jpg",
  },

];

const MAINLAND_SAFARIS = [
  {
    title: "Mikumi & Selous National Park Day Trip",
    description: "Day trip to Mikumi & Selous national park.",
    location: "Mikumi & Selous National Park",
    img: "/excursion and safaris/mikumi.jpg",
  },
  {
    title: "Ngorongoro, Serengeti, Manyara, Mikumi National Parks",
    description: "We also organise safaris to Ngorongoro, Serengeti, Manyara, Mikumi national parks.",
    location: "Tanzania Mainland",
    img: "/excursion and safaris/ngorongoro.jpg",
  },
  {
    title: "Mt. Kilimanjaro",
    description: "We organise trips to Mt. Kilimanjaro.",
    location: "Mt. Kilimanjaro",
    img: "/excursion and safaris/kililmanjaro.jpg",
  },
 
];

export default function AdditionalOfferings() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Excursions */}
        <h3 className="text-lg font-semibold text-[#532e11] mb-4 text-left">Excursions</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {EXCURSIONS.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-200 flex flex-col"
            >
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-50 w-full object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  Photo Placeholder
                </div>
              )}
              <h4 className="font-bold text-[#532e11] text-lg mb-2">{item.title}</h4>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <span className="text-sm text-gray-500">{item.location}</span>
            </div>
          ))}
        </div>

        {/* Mainland Safaris */}
        <h3 className="text-lg font-semibold text-[#532e11] mb-4 text-left">Mainland Safaris</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {MAINLAND_SAFARIS.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-200 flex flex-col"
            >
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-50 w-full object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  Photo Placeholder
                </div>
              )}
              <h4 className="font-bold text-[#532e11] text-lg mb-2">{item.title}</h4>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <span className="text-sm text-gray-500">{item.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}