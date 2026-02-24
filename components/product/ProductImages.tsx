// components/product/ProductImages.tsx
"use client";

import { useState, useEffect } from "react";
import { CollectionProduct } from "@/types/collection";

interface ProductImagesProps {
    product: CollectionProduct;
}

// Helper function to ensure full HTTPS URL
const getFullImageUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('//')) {
        return `https:${url}`;
    }
    if (url.startsWith('http')) {
        return url;
    }
    return `https:${url}`;
};

export default function ProductImages({ product }: ProductImagesProps) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Mock additional images (in real app, these would come from product data)
    const images = [
        product.image,
        "//www.momshome.in/cdn/shop/files/Untitled_design_8.png?v=1737780159",
        "//www.momshome.in/cdn/shop/files/MB8.jpg?v=1734777806",
        "//www.momshome.in/cdn/shop/files/20_dbcd31a6-c019-429c-b67c-7481cf79cfec.jpg?v=1734777806",
        "//www.momshome.in/cdn/shop/products/P51_2_9ae12faf-a819-4852-a769-b246fcb28c63.jpg?v=1734777806",
        "//www.momshome.in/cdn/shop/files/12_2.png?v=1747132574",
        "//www.momshome.in/cdn/shop/files/swaddle_2W_1_cf063a71-2bf3-4660-9784-63cde83dc726.jpg?v=1744896120",
        "//www.momshome.in/cdn/shop/files/swaddle_1W_1_0b3e1194-c2b4-46f9-a06a-d7003ca3e3bf.jpg?v=1744896120",
        "//www.momshome.in/cdn/shop/files/swaddle_4W_2_5c0a6c8e-7608-4f95-820c-28573a728407.jpg?v=1744896120",
    ].map(getFullImageUrl);

    const visibleThumbnails = isMobile ? 4 : 3;
    const maxThumbnailStart = Math.max(0, images.length - visibleThumbnails);

    const handlePrevThumbnails = () => {
        setThumbnailStartIndex(Math.max(0, thumbnailStartIndex - 1));
    };

    const handleNextThumbnails = () => {
        setThumbnailStartIndex(Math.min(maxThumbnailStart, thumbnailStartIndex + 1));
    };

    // Mobile layout - thumbnails below main image
    if (isMobile) {
        return (
            <div className="productView-images-wrapper relative">
                {/* Main Image */}
                <div className="productView-image-wrapper relative mb-4">
                    {/* Sale Badge */}
                    {product.compare_at_price > product.price && (
                        <div className="productView-badge badge-right absolute top-2 right-2 z-10">
                            <span className="badge sale-badge bg-red-500 text-white px-2 py-1 rounded text-xs">
                                Sale
                            </span>
                        </div>
                    )}

                    <div className="productView-nav style-1 image-fit-cover">
                        <div className="productView-image productView-image-square fit-cover">
                            <div className="productView-img-container relative" style={{ paddingBottom: "100%" }}>
                                <div className="media absolute inset-0">
                                    <img
                                        src={images[selectedImage]}
                                        alt={product.title}
                                        className="w-full h-full object-cover"
                                        loading="eager"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Horizontal Thumbnails with Arrows - Below main image */}
                <div className="productView-thumbnail-wrapper relative px-8 mb-2">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrevThumbnails}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md ${thumbnailStartIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                            }`}
                        disabled={thumbnailStartIndex === 0}
                        aria-label="Previous thumbnails"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Thumbnails */}
                    <div className="overflow-hidden">
                        <div className="flex gap-2 transition-transform duration-300" style={{ transform: `translateX(-${thumbnailStartIndex * (80 + 8)}px)` }}>
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`productView-thumbnail cursor-pointer border-2 flex-shrink-0 w-16 ${selectedImage === index
                                        ? "border-[#ab91df]"
                                        : "border-transparent hover:border-gray-300"
                                        }`}
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <div className="productView-thumbnail-link relative aspect-square">
                                        <img
                                            src={img}
                                            alt={`${product.title} - Image ${index + 1}`}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNextThumbnails}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md ${thumbnailStartIndex >= maxThumbnailStart ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                            }`}
                        disabled={thumbnailStartIndex >= maxThumbnailStart}
                        aria-label="Next thumbnails"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Image Counter - Centered below thumbnails */}
                <div className="text-center text-sm text-gray-600 mt-1">
                    {selectedImage + 1} / {images.length}
                </div>
            </div>
        );
    }

    // Desktop layout - side by side with vertical thumbnails
    return (
        <div className="productView-images-wrapper relative">
            <div className="flex gap-4">
                {/* Thumbnails - Vertical with arrows */}
                <div className="productView-thumbnail-wrapper w-24 flex-shrink-0">
                    {/* Up Arrow */}
                    {thumbnailStartIndex > 0 && (
                        <button
                            onClick={handlePrevThumbnails}
                            className="w-full flex justify-center py-2 text-gray-600 hover:text-[#ab91df] transition-colors"
                            aria-label="Previous thumbnails"
                        >
                            <svg className="w-5 h-5 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    )}

                    {/* Thumbnails */}
                    <div className="flex flex-col gap-2 max-h-[500px] overflow-hidden">
                        {images.slice(thumbnailStartIndex, thumbnailStartIndex + visibleThumbnails).map((img, index) => {
                            const actualIndex = thumbnailStartIndex + index;
                            return (
                                <div
                                    key={actualIndex}
                                    className={`productView-thumbnail cursor-pointer border-2 ${selectedImage === actualIndex
                                        ? "border-[#ab91df]"
                                        : "border-transparent hover:border-gray-300"
                                        }`}
                                    onClick={() => setSelectedImage(actualIndex)}
                                >
                                    <div className="productView-thumbnail-link relative aspect-square">
                                        <img
                                            src={img}
                                            alt={`${product.title} - Image ${actualIndex + 1}`}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Down Arrow */}
                    {thumbnailStartIndex < maxThumbnailStart && (
                        <button
                            onClick={handleNextThumbnails}
                            className="w-full flex justify-center py-2 text-gray-600 hover:text-[#ab91df] transition-colors"
                            aria-label="Next thumbnails"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Main Image */}
                <div className="productView-image-wrapper flex-1 relative">
                    {/* Sale Badge */}
                    {product.compare_at_price > product.price && (
                        <div className="productView-badge badge-right absolute top-2 right-2 z-10">
                            <span className="badge sale-badge bg-red-500 text-white px-2 py-1 rounded text-xs">
                                Sale
                            </span>
                        </div>
                    )}

                    <div className="productView-nav style-1 image-fit-cover">
                        <div className="productView-image productView-image-square fit-cover">
                            <div className="productView-img-container relative" style={{ paddingBottom: "100%" }}>
                                <div className="media absolute inset-0 cursor-zoom-in">
                                    <img
                                        src={images[selectedImage]}
                                        alt={product.title}
                                        className="w-full h-full object-cover"
                                        loading="eager"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Zoom Icon */}
                    <div className="productView-iconZoom absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md cursor-pointer">
                        <svg className="icon icon-zoom-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M416 176V86.63L246.6 256L416 425.4V336c0-8.844 7.156-16 16-16s16 7.156 16 16v128c0 8.844-7.156 16-16 16h-128c-8.844 0-16-7.156-16-16s7.156-16 16-16h89.38L224 278.6L54.63 448H144C152.8 448 160 455.2 160 464S152.8 480 144 480h-128C7.156 480 0 472.8 0 464v-128C0 327.2 7.156 320 16 320S32 327.2 32 336v89.38L201.4 256L32 86.63V176C32 184.8 24.84 192 16 192S0 184.8 0 176v-128C0 39.16 7.156 32 16 32h128C152.8 32 160 39.16 160 48S152.8 64 144 64H54.63L224 233.4L393.4 64H304C295.2 64 288 56.84 288 48S295.2 32 304 32h128C440.8 32 448 39.16 448 48v128C448 184.8 440.8 192 432 192S416 184.8 416 176z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}