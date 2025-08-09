"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import ImageModal from "./ImageModal";

type ImageGroup = {
  cover: string;
  related: string[];
  title?: string;
};

const IMAGE_GROUPS: ImageGroup[] = [
  {
    cover: "/photos/photo1.jpg",
    related: [
      "/photos/photo1.jpg",
      "/photos/photo2.jpg",
      "/photos/photo3.jpg",
      "/photos/photo4.jpg",
    ],
    title: "Featured",
  },
  {
    cover: "/photos/IMG-20250808-WA0004.jpg",
    related: [
      "/photos/IMG-20250808-WA0004.jpg",
      "/photos/IMG-20250808-WA0005.jpg",
      "/photos/IMG-20250808-WA0006.jpg",
      "/photos/IMG-20250808-WA0007.jpg",
      "/photos/IMG-20250808-WA0008.jpg",
      "/photos/IMG-20250808-WA0009.jpg",
    ],
    title: "Moments I",
  },
  {
    cover: "/photos/IMG-20250808-WA0010.jpg",
    related: [
      "/photos/IMG-20250808-WA0010.jpg",
      "/photos/IMG-20250808-WA0011.jpg",
      "/photos/IMG-20250808-WA0012.jpg",
      "/photos/IMG-20250808-WA0013.jpg",
      "/photos/IMG-20250808-WA0014.jpg",
      "/photos/IMG-20250808-WA0015.jpg",
    ],
    title: "Moments II",
  },
  {
    cover: "/photos/IMG-20250808-WA0016.jpg",
    related: [
      "/photos/IMG-20250808-WA0016.jpg",
      "/photos/IMG-20250808-WA0017.jpg",
      "/photos/IMG-20250808-WA0018.jpg",
      "/photos/IMG-20250808-WA0019.jpg",
      "/photos/IMG-20250808-WA0020.jpg",
      "/photos/IMG-20250808-WA0021.jpg",
    ],
    title: "Moments III",
  },
  {
    cover: "/photos/IMG-20250808-WA0026.jpg",
    related: [
      "/photos/IMG-20250808-WA0026.jpg",
      "/photos/IMG-20250808-WA0030.jpg",
      "/photos/IMG-20250808-WA0031.jpg",
      "/photos/IMG-20250808-WA0032.jpg",
      "/photos/IMG-20250808-WA0034.jpg",
    ],
    title: "Highlights",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const duplicatedGroups = useMemo(() => IMAGE_GROUPS.concat(IMAGE_GROUPS), []);

  const handleOpen = (index: number) => {
    setSelectedIndex(index % IMAGE_GROUPS.length);
    setIsModalOpen(true);
  };

  const handleClose = () => setIsModalOpen(false);

  const currentGroup =
    selectedIndex !== null ? IMAGE_GROUPS[selectedIndex] : undefined;

  // Auto-scroll logic with seamless loop using duplicated content
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let rafId = 0;
    let lastTs = 0;
    const speedPxPerSec = 60; // adjust speed here
    const contentLoopWidth = container.scrollWidth / 2; // because we duplicated

    const tick = (ts: number) => {
      if (!lastTs) lastTs = ts;
      const dt = Math.min(100, ts - lastTs) / 1000; // cap delta to avoid jumps
      lastTs = ts;

      if (!isHovered) {
        container.scrollLeft += speedPxPerSec * dt;
        if (container.scrollLeft >= contentLoopWidth) {
          container.scrollLeft = container.scrollLeft - contentLoopWidth;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isHovered]);

  // Translate vertical wheel to horizontal scroll when hovering
  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const container = scrollRef.current;
    if (!container) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  };

  // Mouse drag to scroll behavior
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const container = scrollRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartScrollRef.current = container.scrollLeft;
    container.classList.add("cursor-grabbing");
  };

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const container = scrollRef.current;
    if (!container || !isDraggingRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    container.scrollLeft = dragStartScrollRef.current - dx;
  };

  const endDrag = () => {
    const container = scrollRef.current;
    if (container) container.classList.remove("cursor-grabbing");
    isDraggingRef.current = false;
  };

  return (
    <section id="gallery" className="relative overflow-hidden py-12">
      {/* Background gradient and blurred blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-emerald-50 to-white"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-16 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 text-center text-3xl font-bold text-sky-700 md:mb-10">
          Gallery
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="select-none overflow-x-auto scrollbar-hide cursor-grab"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          endDrag();
        }}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={endDrag}
      >
        <div className="flex w-max gap-4 px-4 py-1">
          {duplicatedGroups.map((group, idx) => (
            <button
              key={idx}
              className="group relative h-40 w-[280px] flex-shrink-0 overflow-hidden rounded-xl bg-slate-100 shadow md:h-56 md:w-[360px] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              onClick={() => handleOpen(idx)}
              aria-label={`Open ${group.title ?? "images"}`}
            >
              <Image
                src={group.cover}
                alt={group.title ?? `Gallery item ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 280px, 360px"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-hover:opacity-70"
                priority={idx < 2}
              />
              {/* Center overlay CTA on hover */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="rounded-md bg-black/40 px-3 py-1.5 text-sm font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  View photos
                </span>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-2 text-left text-xs font-medium text-white md:text-sm">
                {group.title}
              </div>
            </button>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        images={currentGroup?.related ?? []}
        onClose={handleClose}
        title={currentGroup?.title}
      />
    </section>
  );
}