"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ImageModalProps = {
  isOpen: boolean;
  images: string[];
  onClose: () => void;
  title?: string;
};

export default function ImageModal({ isOpen, images, onClose, title }: ImageModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      const id = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(id);
    }
    setIsVisible(false);
    const timeout = setTimeout(() => setIsMounted(false), 200);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  // Lock body scroll while modal is mounted (including fade-out)
  useEffect(() => {
    if (!isMounted) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div
      className={
        `fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ease-out ` +
        (isVisible ? "opacity-100" : "opacity-0")
      }
      aria-modal="true"
      role="dialog"
    >
      <div
        className={
          `absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ease-out ` +
          (isVisible ? "opacity-100" : "opacity-0")
        }
        onClick={onClose}
      />

      <div
        className={
          `relative w-full max-w-5xl max-h-[80vh] overflow-y-auto rounded-xl bg-white shadow-xl transition-all duration-200 ease-out ` +
          (isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-1")
        }
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white/80 px-4 py-3 backdrop-blur">
          <h3 className="text-lg font-semibold text-sky-700">{title ?? "Gallery"}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3 md:grid-cols-4 md:gap-3">
          {images.map((src, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden rounded-lg bg-slate-100">
              <Image
                src={src}
                alt={`Related image ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
                priority={idx < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
