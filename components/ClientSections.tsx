"use client";
import dynamic from "next/dynamic";

const Gallery = dynamic(() => import("./Gallery"), { ssr: false, loading: () => <div className="py-16 text-center">Loading gallery...</div> });
const Testimonials = dynamic(() => import("./Testimonials"), { ssr: false, loading: () => <div className="py-16 text-center">Loading testimonials...</div> });

export default function ClientSections() {
  return (
    <>
      <Testimonials />
      <Gallery />
    </>
  );
}