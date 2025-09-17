"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    type: "image",
    src: "/photos/photo1.jpg",
    alt: "Safari Adventure", 
    text: 'Where Travel Meets Well-being'
  },
  {
    type: "video",
    src: '/videos/spa.mp4',
    alt: "Wildlife Experience",
    text: 'Reconnect with Nature and Yourself',
  },
  {
    type: "image",
    src: "/photos/IMG-20250808-WA0026.jpg",
    alt: "Nature Retreat",
    text: 'Discover Peace in Every Journey'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textSlide, setTextSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const textIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handleVideoEnded = () => {
    nextSlide();
  };

  // Restart video when video slide becomes active
  useEffect(() => {
    const currentSlideData = SLIDES[currentSlide];
    if (currentSlideData && currentSlideData.type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [currentSlide]);

  // Handle slideshow timing
  useEffect(() => {
    const currentSlideData = SLIDES[currentSlide];
    
    if (currentSlideData) {
      if (currentSlideData.type === "image") {
        // For images, set 5-second timer
        intervalRef.current = setTimeout(() => {
          nextSlide();
        }, 5000);
      } else if (currentSlideData.type === "video") {
        // For video, clear any existing timer and let video end event handle it
        if (intervalRef.current) {
          clearTimeout(intervalRef.current);
          intervalRef.current = null;
        }
      }
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [currentSlide]);

  // Handle text slideshow (separate from background slideshow)
  useEffect(() => {
    textIntervalRef.current = setInterval(() => {
      setTextSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    
    return () => {
      if (textIntervalRef.current) {
        clearInterval(textIntervalRef.current);
      }
    };
  }, []);

  const handleBook = () => {
    const el = document.querySelector("#booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Slideshow background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide 
                ? "translate-x-0" 
                : index < currentSlide 
                  ? "-translate-x-full" 
                  : "translate-x-full"
            }`}
          >
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                ref={videoRef}
                src={slide.src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                onEnded={handleVideoEnded}
              />
            )}
          </div>
        ))}
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10">
        <h1 className="text-4xl max-w-[500px] md:text-6xl font-bold text-white text-center drop-shadow-lg transition-all duration-700 min-h-[3.5rem]">
          {SLIDES[currentSlide]?.text || "Where Travel Meets Well-being"}
        </h1>
        <button
          onClick={handleBook}
          className="mt-10 bg-[#532e11] hover:bg-[#472009] text-white font-bold px-8 py-4 rounded-xl shadow-lg text-lg transition-colors duration-200"
        >
          <Link href='#booking'>
          Book Your Journey
          </Link>
        </button>
      </div>
    </section>
  );
} 