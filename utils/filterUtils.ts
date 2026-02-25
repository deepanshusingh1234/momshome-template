// utils/filterUtils.ts
import { CollectionProduct } from "@/types/collection";

export const filterProducts = (
    products: CollectionProduct[],
    selectedFilters: Record<string, string[]>
): CollectionProduct[] => {
    // If no filters are selected, return all products
    if (Object.keys(selectedFilters).length === 0) {
        return products;
    }

    return products.filter(product => {
        // Check each filter type
        for (const [filterType, values] of Object.entries(selectedFilters)) {
            if (values.length === 0) continue;

            switch (filterType) {
                case 'availability':
                    // Handle availability filtering
                    if (values.includes('in_stock') && !product.available) return false;
                    if (values.includes('out_of_stock') && product.available) return false;
                    break;

                case 'price':
                    // Handle price range filtering
                    if (values[0]) {
                        const [min, max] = values[0].split('-').map(Number);
                        if (product.price < min || product.price > max) return false;
                    }
                    break;

                case 'productTypes':
                    // Handle product type filtering
                    if (!product.productType || !values.includes(product.productType)) {
                        return false;
                    }
                    break;

                case 'brands':
                    // Handle brand filtering
                    if (!product.brand || !values.includes(product.brand)) {
                        return false;
                    }
                    break;

                case 'colors':
                    // Handle color filtering
                    if (!product.color || !values.includes(product.color)) {
                        return false;
                    }
                    break;

                case 'designs':
                    // Handle design filtering
                    if (!product.design || !values.includes(product.design)) {
                        return false;
                    }
                    break;
            }
        }
        return true;
    });
};

// Helper function to get unique filter options from products
export const extractFilterOptions = (products: CollectionProduct[]): FilterGroup => {
    const filters: FilterGroup = {
        availability: [
            { id: 'in-stock', label: 'In Stock', count: 0, value: 'in_stock' },
            { id: 'out-of-stock', label: 'Out of Stock', count: 0, value: 'out_of_stock' },
        ],
        productTypes: [],
        brands: [],
        colors: [],
        designs: [],
    };

    // Count availability
    filters.availability[0].count = products.filter(p => p.available).length;
    filters.availability[1].count = products.filter(p => !p.available).length;

    // Extract unique product types
    const productTypeMap = new Map<string, number>();
    products.forEach(product => {
        if (product.productType) {
            productTypeMap.set(
                product.productType,
                (productTypeMap.get(product.productType) || 0) + 1
            );
        }
    });
    filters.productTypes = Array.from(productTypeMap.entries()).map(([value, count], index) => ({
        id: `product-type-${index}`,
        label: value,
        value: value,
        count: count
    }));

    // Extract unique brands
    const brandMap = new Map<string, number>();
    products.forEach(product => {
        if (product.brand) {
            brandMap.set(
                product.brand,
                (brandMap.get(product.brand) || 0) + 1
            );
        }
    });
    filters.brands = Array.from(brandMap.entries()).map(([value, count], index) => ({
        id: `brand-${index}`,
        label: value,
        value: value,
        count: count
    }));

    // Extract unique colors
    const colorMap = new Map<string, number>();
    products.forEach(product => {
        if (product.color) {
            colorMap.set(
                product.color,
                (colorMap.get(product.color) || 0) + 1
            );
        }
    });
    filters.colors = Array.from(colorMap.entries()).map(([value, count], index) => ({
        id: `color-${index}`,
        label: value,
        value: value,
        count: count
    }));

    // Extract unique designs
    const designMap = new Map<string, number>();
    products.forEach(product => {
        if (product.design) {
            designMap.set(
                product.design,
                (designMap.get(product.design) || 0) + 1
            );
        }
    });
    filters.designs = Array.from(designMap.entries()).map(([value, count], index) => ({
        id: `design-${index}`,
        label: value,
        value: value,
        count: count
    }));

    return filters;
};