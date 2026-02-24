"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
    {
        id: "image_8tUTwG",
        mobileImage: "//www.momshome.in/cdn/shop/files/valentines_day_sale_banners_mobile.jpg_2.jpg?v=1771049275",
        desktopImage: "//www.momshome.in/cdn/shop/files/valentines_day_sale_banners.jpg_1.jpg?v=1771049332",
        link: "/collections/flash-sale",
        alt: "Valentine's Day Sale"
    },
    {
        id: "16321237356a896dad-0",
        mobileImage: "//www.momshome.in/cdn/shop/files/new_hospital_bag222_mobile_jpg.jpg?v=1770817472",
        desktopImage: "//www.momshome.in/cdn/shop/files/new_hospital_bag222_jpg.jpg?v=1770817452",
        link: "/collections/hospital-bag",
        alt: "Hospital Bags"
    },
    {
        id: "image_WENLHY",
        mobileImage: "//www.momshome.in/cdn/shop/files/winter_banner2.1_1.jpg?v=1764941423",
        desktopImage: "//www.momshome.in/cdn/shop/files/winter_banner2.jpg44.jpg?v=1764853712",
        link: "/collections/winter-collection",
        alt: "Winter Collection"
    },
    {
        id: "8091d8a5-cd0e-452b-939d-561c3f6b56eb",
        mobileImage: "//www.momshome.in/cdn/shop/files/book-set.jpgmobile.jpg?v=1767612612",
        desktopImage: "//www.momshome.in/cdn/shop/files/book-set.jpg?v=1767612595",
        link: "/collections/baby-gift-items",
        alt: "Baby Gift Items"
    }
];

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <div className="slideshow-wrapper w-full bg-white py-0 lg:py-5">
            <div className="w-full px-0">
                <div className="slideshow relative w-full overflow-hidden">
                    {/* Slides Container with responsive aspect ratio */}
                    <div className="relative w-full">
                        {/* Mobile container (visible on mobile) */}
                        <div className="block lg:hidden relative w-full" style={{ aspectRatio: '750/951' }}>
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    <Link href={slide.link} className="block w-full h-full">
                                        <img
                                            src={slide.mobileImage}
                                            alt={slide.alt}
                                            className="w-full h-full object-contain"
                                            loading={index === 0 ? "eager" : "lazy"}
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Desktop container (hidden on mobile) */}
                        <div className="hidden lg:block relative w-full" style={{ aspectRatio: '2000/766' }}>
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    <Link href={slide.link} className="block w-full h-full">
                                        <img
                                            src={slide.desktopImage}
                                            alt={slide.alt}
                                            className="w-full h-full object-cover"
                                            loading={index === 0 ? "eager" : "lazy"}
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows - Hide on mobile, show on desktop */}
                        <button
                            onClick={prevSlide}
                            className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 rounded-full items-center justify-center hover:bg-white transition-colors shadow-md"
                            aria-label="Previous slide"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 rounded-full items-center justify-center hover:bg-white transition-colors shadow-md"
                            aria-label="Next slide"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Dots Navigation - Position adjusted for mobile */}
                        <div className="absolute bottom-4 lg:bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-all ${index === currentSlide
                                        ? 'bg-[#dbcdf7] w-4 lg:w-6'
                                        : 'bg-gray-400/70 lg:bg-gray-400 hover:bg-gray-600'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slideshow;