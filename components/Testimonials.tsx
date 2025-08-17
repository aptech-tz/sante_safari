"use client";

import { useState } from "react";

const TESTIMONIALS = [
	{
		name: "Amina K.",
		text: "Santé Safaris gave me the most peaceful and healing experience of my life. I returned home truly rejuvenated!",
	},
	{
		name: "James M.",
		text: "The blend of adventure and wellness was perfect. The team made every moment special. Highly recommended!",
	},
	{
		name: "Priya S.",
		text: "From sunrise yoga to wildlife safaris, every detail was thoughtfully planned. I can't wait to return!",
	},
];

export default function Testimonials() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
	};

	return (
		<section id="testimonials" className="py-16 bg-white">
			<div className="max-w-3xl mx-auto px-4 md:px-0">
				<h2 className="text-3xl font-bold text-center text-[#532e11] mb-10">
					Testimonials
				</h2>

				<div className="relative">
					{/* Slideshow Container */}
					<div className="overflow-hidden">
						<div
							className="flex transition-transform duration-500 ease-in-out"
							style={{ transform: `translateX(-${currentSlide * 100}%)` }}
						>
							{TESTIMONIALS.map((t, i) => (
								<div key={i} className="w-full flex-shrink-0 px-4">
									<blockquote className="bg-white p-8 flex flex-col items-center text-center min-h-[200px]">
										<p className="text-lg italic text-gray-700 mb-6">
											"{t.text}"
										</p>
										<span className="font-bold text-[#532e11]">
											— {t.name}
										</span>
									</blockquote>
								</div>
							))}
						</div>
					</div>

					{/* Navigation Buttons */}
					<button
						onClick={prevSlide}
						className="absolute left-2 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200 ml-2"
						aria-label="Previous testimonial"
					>
						<svg
							className="w-6 h-6 text-[#532e11]"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>

					<button
						onClick={nextSlide}
						className="absolute right-2 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200 mr-2"
						aria-label="Next testimonial"
					>
						<svg
							className="w-6 h-6 text-[#532e11]"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>

					{/* Dots Indicator */}
					<div className="flex justify-center mt-6 space-x-2">
						{TESTIMONIALS.map((_, i) => (
							<button
								key={i}
								onClick={() => setCurrentSlide(i)}
								className={`w-3 h-3 rounded-full transition-colors duration-200 ${
									i === currentSlide
										? "bg-[#532e11]"
										: "bg-blue-100 hover:bg-blue-200"
								}`}
								aria-label={`Go to testimonial ${i + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}