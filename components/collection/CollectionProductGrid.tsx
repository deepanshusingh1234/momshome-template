"use client";

import ProductCard from "../ProductCard";
import { CollectionProduct } from "@/types/collection";

interface CollectionProductGridProps {
    products: CollectionProduct[];
    category?: string; // Add this line
}

const CollectionProductGrid = ({ products, category }: CollectionProductGridProps) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} category={category} />
            ))}
        </div>
    );
};

export default CollectionProductGrid;