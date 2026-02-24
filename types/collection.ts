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
    variants?: Array<{
        id: number;
        title: string;
        price: number;
        compare_at_price: number;
        available: boolean;
        sku: string;
    }>;
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