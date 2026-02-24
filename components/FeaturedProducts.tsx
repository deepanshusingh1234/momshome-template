"use client";

import Link from "next/link";
import homepageData from "../data/homepage-data.json";
import { FeaturedProduct } from "../types/homepage";

const FeaturedProducts = () => {
    const featuredProducts = homepageData.featuredProducts as FeaturedProduct[];

    return (
        <div className="spotlight-block w-full bg-[#f5f5f5] py-8 lg:py-12">
            <div className="w-full px-4 lg:px-6">
                {/* Header */}
                <div className="halo-block-header text-center mb-8">
                    <h3 className="title text-2xl lg:text-3xl font-semibold text-[#a790d4] relative inline-block">
                        <span className="relative z-10 px-4 bg-[#f5f5f5]">FEATURED PRODUCTS</span>
                        <span className="absolute left-0 top-1/2 w-full h-[2px] bg-[#a790d4] -translate-y-1/2"></span>
                    </h3>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="halo-item">
                            <div className="spotlight-item relative overflow-hidden rounded-lg bg-white shadow-sm">
                                {/* Image */}
                                <div className="image-container">
                                    <Link href={product.link} className="block">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full aspect-square object-cover"
                                            loading="lazy"
                                        />
                                    </Link>
                                </div>

                                {/* Content - Always visible below image */}
                                <div className="content text-center py-6 px-4">
                                    <h3 className="text-[#232323] text-xl font-medium mb-4">
                                        {product.title}
                                    </h3>
                                    <Link
                                        href={product.link}
                                        className="inline-block px-8 py-3 bg-[#6cad96] text-white font-semibold uppercase text-sm rounded-full hover:bg-[#5b9a82] transition-colors"
                                    >
                                        {product.buttonText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;