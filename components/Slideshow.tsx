"use client";
import React, { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    type: "image",
    src: "https://via.placeholder.com/800x450",
    alt: "Slide 1"
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    alt: "Slide 2"
  },
  {
    type: "image",
    src: "https://via.placeholder.com/800x450/cccccc/000000",
    alt: "Slide 3"
  }
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handleVideoEnded = () => {
    nextSlide();
  };

  useEffect(() => {
    const currentSlideData = SLIDES[currentSlide];
    
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

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [currentSlide]);

  return (
    <div className="max-w-[800px] aspect-video rounded-xl shadow-lg overflow-hidden relative mx-auto">
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
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
  );
} 