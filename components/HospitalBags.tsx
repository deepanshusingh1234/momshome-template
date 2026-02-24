// components/home/HospitalBags.tsx
"use client";

import ProductCard from "../components/ProductCard";
import hospitalBagsData from "@/data/collection/hospital-bags.json";
import { CollectionProduct } from "@/types/collection";

const HospitalBags = () => {
    const products = hospitalBagsData.products as CollectionProduct[];

    return (
        <div className="product-block w-full bg-white py-8 lg:py-12">
            <div className="w-full px-4 lg:px-6">
                <div className="halo-block">
                    {/* Header */}
                    <div className="halo-block-header text-center mb-8">
                        <h3 className="title text-2xl lg:text-3xl font-semibold text-[#a790d4] relative inline-block group">
                            <span className="text">Hospital Bags</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#a790d4] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </h3>
                    </div>

                    {/* Products Grid */}
                    <div className="halo-block-content">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    category="hospital-bags"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalBags;