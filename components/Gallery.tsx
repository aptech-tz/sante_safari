"use client";

import { useState } from "react";

const PHOTOS = [
  {
    id: 1,
    url: "/photos/IMG-20250808-WA0014.jpg",
    caption: "Our clients boarding from plane",
  },
  {
    id: 2,
    url: "/photos/IMG-20250808-WA0004.jpg",
    caption: "Antelope roaming freely",
  },
  {
    id: 3,
    url: "/photos/IMG-20250808-WA0034.jpg",
    caption: "Our clients during camping",
  },
  {
    id: 4,
    url: "/photos/IMG-20250808-WA0005.jpg",
    caption: "Giraffes at Serengeti National Park",
  },
  {
    id: 5,
    url: "/photos/IMG-20250808-WA0006.jpg",
    caption: "Hyenas at dusk.",
  },
  {
    id: 6,
    url: "/photos/photo3.jpg",
    caption: "Our clients enjoying a sunset.",
  },
  {
    id: 7,
    url: "/photos/IMG-20250808-WA0007.jpg",
    caption: "A visit at Mikumi National Park.",
  },
  {
    id: 8,
    url: "/photos/IMG-20250808-WA0008.jpg",
    caption: "A visit at Serengeti National Park.",
  },
  {
    id: 9,
    url: "/photos/IMG-20250808-WA0009.jpg",
    caption: "Zebra in the wild.",
  },
  {
    id: 10,
    url: "/photos/IMG-20250808-WA0010.jpg",
    caption: "Lion walking majestically.",
  },
  {
    id: 11,
    url: "/photos/IMG-20250808-WA0011.jpg",
    caption: "Hippopotamus at sunset.",
  },
  {
    id: 12,
    url: "/photos/IMG-20250808-WA0012.jpg",
    caption: "Hippos in water.",
  },
  {
    id: 13,
    url: "/photos/IMG-20250808-WA0013.jpg",
    caption: "Antelopes grazing.",
  },
  {
    id: 14,
    url: "/photos/IMG-20250808-WA0015.jpg",
    caption: "Giraffes at Selous Game Reserve.",
  },
  {
    id: 15,
    url: "/photos/IMG-20250808-WA0016.jpg",
    caption: "view of water",
  },
  {
    id: 16,
    url: "/photos/IMG-20250808-WA0017.jpg",
    caption: "Giraffes at Mikumi National Park.",
  },
  {
    id: 17,
    url: "/photos/IMG-20250808-WA0018.jpg",
    caption: "Giraffes at Mikumi National Park.",
  },
  {
    id: 18,
    url: "/photos/IMG-20250808-WA0019.jpg",
    caption: "Lioness with her cubs.",
  },
  {
    id: 19,
    url: "/photos/IMG-20250808-WA0020.jpg",
    caption: "Lioness hunting",
  },
  {
    id: 20,
    url: "/photos/IMG-20250808-WA0021.jpg",
    caption: "Lion family",
  },
  {
    id: 21,
    url: "/photos/IMG-20250808-WA0026.jpg",
    caption: "Lion family at sunset",
  },
 
  {
    id: 22,
    url: "/photos/IMG-20250808-WA0032.jpg",
    caption: "Our clients camping.",
  },
  {
    id: 23,
    url: "/photos/photo1.jpg",
    caption: "Mules grazing at Serengeti National Park.",
  },
  {
    id: 24,
    url: "/photos/photo2.jpg",
    caption: "Mules grazing.",
  },
  {
    id: 25,
    url: "/photos/photo4.jpg",
    caption: "Elephants at Mikumi National Park.",
  },
];

const PHOTOS_PER_PAGE = 9;

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(PHOTOS_PER_PAGE);
  const [selectedPhoto, setSelectedPhoto] = useState<typeof PHOTOS[0] | null>(null);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PHOTOS_PER_PAGE);
  };

  const handlePhotoClick = (photo: typeof PHOTOS[0]) => {
    setSelectedPhoto(photo);
  };

  const handleClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <section id="gallery" className="py-16 bg-sky-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#532e11] mb-10">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PHOTOS.slice(0, visibleCount).map((photo) => (
            <div
              key={photo.id}
              className="rounded-lg overflow-hidden shadow bg-white cursor-pointer"
              onClick={() => handlePhotoClick(photo)}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {visibleCount < PHOTOS.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="bg-[#532e11] hover:bg-[#472009] text-white font-bold px-6 py-2 cursor-pointer rounded-xl shadow transition-colors duration-200"
            >
              Load More
            </button>
          </div>
        )}
      </div>
      {/* Modal for displaying selected photo */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={handleClose}>
          <div className="relative max-w-2xl w-full mx-4" onClick={e => e.stopPropagation()}>
            <img src={selectedPhoto.url} alt={selectedPhoto.caption} className="w-full rounded-lg shadow-lg" />
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 bg-white text-sky-700 rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-sky-100"
              aria-label="Close"
            >
              <span className="text-2xl leading-none flex items-center justify-center w-full h-full">&times;</span>
            </button>
            {/* Caption below image */}
            <div className="mt-4 text-center text-white text-lg font-medium">
              {selectedPhoto.caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}