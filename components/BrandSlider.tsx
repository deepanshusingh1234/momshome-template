"use client";

import Link from "next/link";
import homepageData from "../data/homepage-data.json";
import { Brand } from "../types/homepage";

const BrandSlider = () => {
    const brands = homepageData.brands as Brand[];

    return (
        <div className="brand-slider w-full bg-[#ffeaed] py-4 lg:py-6">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="brands-block">
                    {/* Header */}
                    <div className="halo-block-header flex flex-wrap items-center justify-between mb-4">
                        <h2 className="title text-base lg:text-lg font-semibold text-[#232323] m-0">
                            Shop By Category
                        </h2>
                    </div>

                    {/* Brands Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
                        {brands.map((brand, index) => (
                            <div
                                key={brand.id}
                                className="halo-item group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Link
                                    href={brand.link}
                                    className="wrapper-content block text-center"
                                >
                                    <div className="wrapper-image image-zoom bg-[#ffeaed] rounded-lg overflow-hidden mb-3">
                                        <div className="relative aspect-square">
                                            <img
                                                src={brand.image}
                                                alt={brand.alt}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-sm lg:text-base font-semibold text-[#232323] group-hover:text-[#e58aa8] transition-colors">
                                        {brand.title}
                                    </h3>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandSlider;