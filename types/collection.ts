// types/collection.ts
export interface FilterOption {
    id: string;
    label: string;
    count: number;
    value: string;
    disabled?: boolean;
}

export interface FilterGroup {
    availability: FilterOption[];
    productTypes: FilterOption[];
    brands: FilterOption[];
    colors?: FilterOption[];
    designs?: FilterOption[];
}

export interface SortOption {
    value: string;
    label: string;
}

export interface ProductVariant {
    id: number;
    title: string;
    price: number;
    compare_at_price: number;
    available: boolean;
    sku: string;
}

export interface CollectionProduct {
    id: number;
    handle: string;
    title: string;
    image: string;
    price: number;
    compare_at_price: number;
    available: boolean;
    discount: number;
    rating?: number;
    reviewCount?: number;
    variants?: ProductVariant[];
    // Add these fields for filtering
    productType?: string;  // This will match with productTypes filter
    brand?: string;        // This will match with brands filter
    color?: string;        // This will match with colors filter
    design?: string;       // This will match with designs filter
    tags?: string[];       // Optional: for additional filtering
}

export interface CollectionData {
    collection: {
        title: string;
        description: string;
        totalProducts: number;
        productsPerPage: number;
    };
    filters: FilterGroup;
    sortOptions: SortOption[];
    products: CollectionProduct[];
}

export type CategoryKey = 'muslin-swaddle' | 'muslin-towels' | 'jhabla-tshirts' | 'muslin-dohar-and-blankets' | 'baby-quilts' | 'hospital-bags' | 'new-arrivals' | 'sale' | 'buy-1-get-1';