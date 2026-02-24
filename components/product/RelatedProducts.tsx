// components/product/RelatedProducts.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CollectionProduct } from "@/types/collection";

// Mock related products data (in real app, this would come from an API)
const relatedProducts: CollectionProduct[] = [
    {
        id: 9384523137305,
        handle: "ac-quilt-blanket-cum-bedspread-0-3-years-100x120-cm-bloom",
        title: "Ac Quilt Blanket cum Bedspread | 0-3 Years | 100X120 cm | Bloom",
        image: "//www.momshome.in/cdn/shop/files/lemon_ac_quilt_533x.jpg?v=1728976805",
        price: 84900,
        compare_at_price: 249900,
        available: true,
        discount: 66,
        rating: 0,
        reviewCount: 0
    },
    {
        id: 9964140101913,
        handle: "organic-cotton-baby-muslin-cloth-swaddle-0-12-months-100x100-cm-pack-of-1",
        title: "Organic Cotton Baby Muslin Cloth Swaddle | 0-12 Months | 100x100 CM | Pack of 1",
        image: "//www.momshome.in/cdn/shop/files/sofa_swaddle_web_-_avacado_1_533x.jpg?v=1751263010",
        price: 39900,
        compare_at_price: 79900,
        available: true,
        discount: 50,
        rating: 0,
        reviewCount: 0
    },
    {
        id: 10216733933849,
        handle: "organic-cotton-baby-christmas-dress-christmas-clothing-set-for-baby-baby-onesie-cap-mittens-botties-set-0-3-months-pack-of-4",
        title: "Organic Cotton Baby Christmas Dress | Christmas Clothing Set For Baby | Baby Onesie & Cap, Mittens , Botties Set | 0-3 Months | Pack of 4",
        image: "//www.momshome.in/cdn/shop/files/1.5_533x.jpg?v=1765883440",
        price: 39900,
        compare_at_price: 79900,
        available: true,
        discount: 50,
        rating: 0,
        reviewCount: 0
    },
    {
        id: 9491433521433,
        handle: "baby-muslin-swaddle-100x100-cm-pack-of-1-bloom",
        title: "Baby Muslin Swaddle | 100x100 CM | Pack of 1 | Bloom",
        image: "//www.momshome.in/cdn/shop/files/MOCK_UP_FILE_GG_-_W_533x.jpg?v=1722348265",
        price: 39900,
        compare_at_price: 79900,
        available: true,
        discount: 50,
        rating: 0,
        reviewCount: 0
    },
    {
        id: 10111217565977,
        handle: "baby-muslin-swaddle-100x100-cm-pack-of-1-flower",
        title: "Baby Muslin Swaddle | 100x100 CM | Pack of 1 | Flower",
        image: "//www.momshome.in/cdn/shop/files/sofa_swaddle_flower_533x.jpg?v=1758806691",
        price: 39900,
        compare_at_price: 79900,
        available: true,
        discount: 50,
        rating: 0,
        reviewCount: 0
    },
    {
        id: 9681420517657,
        handle: "kids-muslin-front-open-kimono-pack-of-2",
        title: "Muslin Front Open Kimono For New Born Baby | Pack of 2",
        image: "//www.momshome.in/cdn/shop/files/IMG_7873_533x.jpg?v=1741172929",
        price: 49900,
        compare_at_price: 69900,
        available: true,
        discount: 29,
        rating: 0,
        reviewCount: 0
    },
    {
        id: 6747839103061,
        handle: "baby-muslin-cloth-swaddle-0-12-months-100x100-cm-pack-of-3",
        title: "Organic Cotton Baby Muslin Cloth Swaddle | 0-12 Months | Pack of 3",
        image: "//www.momshome.in/cdn/shop/files/blink_it_zepto_products.jpg6_533x.jpg?v=1734777564",
        price: 74900,
        compare_at_price: 194900,
        available: true,
        discount: 62,
        rating: 4.92,
        reviewCount: 12
    },
    {
        id: 9477357601049,
        handle: "baby-organic-cotton-front-open-jhabla-flamingo",
        title: "Baby Organic Cotton Front Open Jhabla | Flamingo",
        image: "//www.momshome.in/cdn/shop/files/A_1_1_533x.jpg?v=1716979171",
        price: 29900,
        compare_at_price: 34900,
        available: true,
        discount: 14,
        rating: 5.0,
        reviewCount: 1
    },
    {
        id: 9491415892249,
        handle: "baby-muslin-swaddle-100x100-cm-pack-of-1-blossom",
        title: "Baby Muslin Swaddle | 100x100 CM | Pack of 1 | Blossom",
        image: "//www.momshome.in/cdn/shop/files/MOCK_UP_FILE_FF_-_W_256e5845-09fe-42c5-b3ff-948f2969bb3e_533x.jpg?v=1722347913",
        price: 39900,
        compare_at_price: 79900,
        available: true,
        discount: 50,
        rating: 0,
        reviewCount: 0
    },
    {
        id: 9515084874009,
        handle: "kids-muslin-front-open-kimono-blossom",
        title: "Kids Muslin Front Open Kimono | Blossom",
        image: "//www.momshome.in/cdn/shop/files/kimono_blosom_mockups_533x.jpg?v=1750144372",
        price: 29900,
        compare_at_price: 34900,
        available: true,
        discount: 14,
        rating: 0,
        reviewCount: 0
    }
];

interface RelatedProductsProps {
    currentProductId: number;
    category?: string;
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Filter out current product and limit to 10 items
    const filteredProducts = relatedProducts
        .filter(p => p.id !== currentProductId)
        .slice(0, 10);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleCount(1.2);
            } else if (window.innerWidth < 768) {
                setVisibleCount(2);
            } else if (window.innerWidth < 1024) {
                setVisibleCount(3);
            } else {
                setVisibleCount(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, filteredProducts.length - Math.floor(visibleCount));

    const handlePrev = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    };

    if (filteredProducts.length === 0) return null;

    return (
        <div className="halo-block halo-product-block halo-recommendations-block section-block w-full mt-12 lg:mt-16">
            <div className="wrapper-container w-full px-4 lg:px-6">
                {/* Section Header */}
                <div className="halo-block-header text-center block-title--style1 mb-6 lg:mb-8">
                    <h3 className="title text-xl lg:text-2xl font-semibold text-[#a790d4]">
                        <span className="text">Related Products</span>
                    </h3>
                </div>

                {/* Products Carousel */}
                <div className="halo-block-content relative">
                    <div className="products-carousel relative" ref={containerRef}>
                        {/* Prev Button */}
                        <button
                            onClick={handlePrev}
                            className={`slick-prev absolute -left-3 lg:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            disabled={currentIndex === 0}
                            aria-label="Previous"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Products Grid/Slider */}
                        <div className="overflow-hidden mx-8 lg:mx-10">
                            <div
                                className="flex transition-transform duration-300 ease-in-out gap-3 lg:gap-4"
                                style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
                            >
                                {filteredProducts.map((product) => {
                                    const discount = product.compare_at_price > product.price
                                        ? Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100)
                                        : 0;

                                    return (
                                        <div
                                            key={product.id}
                                            className="flex-shrink-0"
                                            style={{ width: `${100 / visibleCount}%` }}
                                            onMouseEnter={() => setHoveredProduct(product.id)}
                                            onMouseLeave={() => setHoveredProduct(null)}
                                        >
                                            <div className="product-item group h-full">
                                                <div className="card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                                                    {/* Product Image */}
                                                    <div className="card-product relative overflow-hidden">
                                                        <div className="card-product__wrapper">
                                                            {/* Sale Badge */}
                                                            {discount > 0 && (
                                                                <div className="card__badge absolute top-2 left-2 z-10">
                                                                    <span className="badge sale-badge bg-red-500 text-white text-xs px-2 py-1 rounded">
                                                                        Sale
                                                                    </span>
                                                                </div>
                                                            )}

                                                            {/* Product Image */}
                                                            <div className="card-media aspect-square overflow-hidden bg-gray-100">
                                                                <Link
                                                                    href={`/shop/${category || 'muslin-swaddle'}/${product.handle}`}
                                                                    className="block w-full h-full"
                                                                >
                                                                    <img
                                                                        src={product.image}
                                                                        alt={product.title}
                                                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                                        loading="lazy"
                                                                    />
                                                                </Link>
                                                            </div>

                                                            {/* Quick View Button - Appears on hover */}
                                                            <div className={`absolute top-2 right-2 transition-opacity duration-300 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                                                                }`}>
                                                                <button
                                                                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                                                                    title="Quick View"
                                                                >
                                                                    <svg className="w-4 h-4" viewBox="0 0 512 512" fill="currentColor">
                                                                        <path d="M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035 c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201 C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418 c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418 C447.361,287.923,358.746,385.406,255.997,385.406z M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275 s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516 s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Product Info */}
                                                    <div className="card-information p-2 lg:p-3 text-center flex flex-col flex-grow">
                                                        {/* Title */}
                                                        <Link
                                                            href={`/shop/${category || 'muslin-swaddle'}/${product.handle}`}
                                                            className="card-title block text-xs lg:text-sm font-medium text-gray-800 hover:text-[#ab91df] line-clamp-2 h-8 lg:h-10 mb-1"
                                                        >
                                                            {product.title}
                                                        </Link>

                                                        {/* Price */}
                                                        <div className="card-price mb-2">
                                                            {product.compare_at_price > product.price ? (
                                                                <div className="flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-2">
                                                                    <span className="text-sm lg:text-base font-bold text-[#ab91df]">
                                                                        ₹{product.price.toLocaleString()}
                                                                    </span>
                                                                    <span className="text-xs text-gray-400 line-through">
                                                                        ₹{product.compare_at_price.toLocaleString()}
                                                                    </span>
                                                                </div>
                                                            ) : (
                                                                <span className="text-sm lg:text-base font-bold text-[#ab91df]">
                                                                    ₹{product.price.toLocaleString()}
                                                                </span>
                                                            )}
                                                        </div>



                                                        {/* Quick Add Button */}
                                                        <button className="w-full bg-[#a790d4] border border-[#a790d4] text-white text-xs lg:text-sm py-2 px-3 rounded-2xl  transition-colors cusrsor-pointer hover:bg-[#ab91df]">
                                                            Quick Add
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className={`slick-next absolute -right-3 lg:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all ${currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            disabled={currentIndex >= maxIndex}
                            aria-label="Next"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Dots */}
                    <div className="flex justify-center gap-2 mt-4 lg:hidden">
                        {Array.from({ length: Math.ceil(filteredProducts.length / 2) }).map((_, i) => (
                            <button
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all ${i === Math.floor(currentIndex / 2) ? 'w-4 bg-[#ab91df]' : 'bg-gray-300'
                                    }`}
                                onClick={() => setCurrentIndex(i * 2)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}