// lib/products.ts
import { CollectionProduct, CollectionData } from "@/types/collection";

// Import all collection data
import muslinSwaddleData from "@/data/collection/muslin-swaddle.json";
import muslinTowelsData from "@/data/collection/muslin-towels.json";
import babyQuiltsData from "@/data/collection/baby-quilts.json";
import jhablaTshirts from "@/data/collection/jhabla-tshirts.json";
import blanket from "@/data/collection/MuslinDoharBlankets.json";
import hospitalBagsData from "@/data/collection/hospital-bags.json"; // Add this
import newArrivalsData from "@/data/collection/new-arrivals.json";
import trendingProductsData from "@/data/collection/trending-products.json";
import buy1get1Data from "@/data/collection/buy-1-get-1.json";

// Define collections with their category keys
const collections: Array<{ category: string; data: CollectionData }> = [
    { category: 'muslin-swaddle', data: muslinSwaddleData as CollectionData },
    { category: 'muslin-towels', data: muslinTowelsData as CollectionData },
    { category: 'jhabla-tshirts', data: jhablaTshirts as CollectionData },
    { category: 'muslin-dohar-and-blankets', data: blanket as CollectionData },
    { category: 'baby-quilts', data: babyQuiltsData as CollectionData },
    { category: 'hospital-bags', data: hospitalBagsData as unknown as CollectionData }, // Add this
    { category: 'new-arrivals', data: newArrivalsData as CollectionData },
    { category: 'trending', data: trendingProductsData as CollectionData },
    { category: 'buy-1-get-1', data: buy1get1Data as unknown as CollectionData },
];

// Create a map of product handles to products with category info
const productsByHandle = new Map<string, CollectionProduct & { category?: string }>();

collections.forEach((collection) => {
    console.log(`Loading products from ${collection.category}...`);
    collection.data.products.forEach((product: CollectionProduct) => {
        productsByHandle.set(product.handle, {
            ...product,
            category: collection.category // Add category to product data
        });
    });
});

console.log(`Total products loaded: ${productsByHandle.size}`);

export async function getProductByHandle(handle: string): Promise<(CollectionProduct & { category?: string }) | null> {
    return productsByHandle.get(handle) || null;
}

export async function getAllProductHandles(): Promise<string[]> {
    return Array.from(productsByHandle.keys());
}

export async function getAllProducts(): Promise<Array<CollectionProduct & { category?: string }>> {
    return Array.from(productsByHandle.values());
}