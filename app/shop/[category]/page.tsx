"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";

import CollectionSidebar from "@/components/collection/CollectionSidebar";
import CollectionProductGrid from "@/components/collection/CollectionProductGrid";
import CollectionPagination from "@/components/collection/CollectionPagination";
import { CollectionData, CategoryKey, FilterGroup } from "@/types/collection";
import { filterProducts } from "@/utils/filterUtils";

// Import all collection data
import muslinSwaddleData from "@/data/collection/muslin-swaddle.json";
import muslinTowelsData from "@/data/collection/muslin-towels.json";
import babyQuiltsData from "@/data/collection/baby-quilts.json";
import jhablaTshirts from "@/data/collection/jhabla-tshirts.json";
import blanket from "@/data/collection/MuslinDoharBlankets.json";
import hospitalBagsData from "@/data/collection/hospital-bags.json";
import newArrivalsData from "@/data/collection/new-arrivals.json";
import trendingProductsData from "@/data/collection/trending-products.json";
import buy1get1Data from "@/data/collection/buy-1-get-1.json";
import nappies from "@/data/collection/nappies.json";

// Map category slugs to their data
const categoryDataMap: Record<CategoryKey, CollectionData> = {
    'muslin-swaddle': muslinSwaddleData as CollectionData,
    'muslin-towels': muslinTowelsData as CollectionData,
    'jhabla-tshirts': jhablaTshirts as CollectionData,
    'muslin-dohar-and-blankets': blanket as CollectionData,
    'baby-quilts': babyQuiltsData as CollectionData,
    'hospital-bags': hospitalBagsData as unknown as CollectionData,
    'new-arrivals': newArrivalsData as CollectionData,
    'sale': muslinSwaddleData as CollectionData,
    'buy-1-get-1': buy1get1Data as unknown as CollectionData,
    'nappies': nappies as CollectionData,
    'trending': trendingProductsData as CollectionData,
};

// Map category slugs to display titles (fallback)
const categoryTitles: Record<CategoryKey, string> = {
    'muslin-swaddle': 'Muslin Swaddle',
    'muslin-towels': 'Muslin Towels',
    'jhabla-tshirts': 'Jhabla T-Shirts',
    'muslin-dohar-and-blankets': 'blanket',
    'baby-quilts': 'Baby Quilts',
    'hospital-bags': 'Hospital Bags',
    'new-arrivals': 'New Arrivals',
    'sale': 'Sale',
    'buy-1-get-1': 'Buy 1 Get 1',
    'nappies': 'Nappies',
    'trending': 'Trending Products',
};

export default function CategoryPage() {
    const params = useParams();
    const category = params.category as CategoryKey;

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState("manual");
    const [data, setData] = useState<CollectionData | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

    useEffect(() => {
        // Load data based on category
        const loadData = async () => {
            setLoading(true);
            try {
                // Get data from map
                const categoryData = categoryDataMap[category];

                if (categoryData) {
                    setData(categoryData);
                    // Reset filters when category changes
                    setSelectedFilters({});
                    setCurrentPage(1);
                } else {
                    console.error(`Category ${category} not found`);
                }
            } catch (error) {
                console.error("Error loading category data:", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [category]);

    // Filter products based on selected filters
    const filteredProducts = useMemo(() => {
        if (!data) return [];
        return filterProducts(data.products, selectedFilters);
    }, [data, selectedFilters]);

    // Sort products
    const sortedProducts = useMemo(() => {
        const products = [...filteredProducts];

        switch (sortBy) {
            case "price-asc":
                products.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                products.sort((a, b) => b.price - a.price);
                break;
            case "title-asc":
                products.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "title-desc":
                products.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "created-desc":
                // If you have created date, sort by it
                // products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                break;
            case "created-asc":
                // products.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
                break;
            default: // "manual" or default
                // Keep original order
                break;
        }

        return products;
    }, [filteredProducts, sortBy]);

    const handleFilterChange = (filterType: string, value: string, checked: boolean) => {
        setSelectedFilters(prev => {
            const currentValues = prev[filterType] || [];
            const newValues = checked
                ? [...currentValues, value]
                : currentValues.filter(v => v !== value);

            const updated = {
                ...prev,
                [filterType]: newValues
            };

            // Remove filter type if no values selected
            if (newValues.length === 0) {
                const { [filterType]: _, ...rest } = updated;
                return rest;
            }

            return updated;
        });

        // Reset to first page when filters change
        setCurrentPage(1);
    };

    const handleSortChange = (value: string) => {
        setSortBy(value);
        setCurrentPage(1);
    };

    const handleLoadMore = () => {
        setCurrentPage((prev) => prev + 1);
    };

    const handleClearFilters = () => {
        setSelectedFilters({});
        setCurrentPage(1);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#ab91df] border-r-transparent"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">Category Not Found</h1>
                </div>
            </div>
        );
    }

    const productsToShow = sortedProducts.slice(
        0,
        currentPage * data.collection.productsPerPage
    );

    return (
        <div className="bg-white">
            <div className="w-full px-4 lg:px-6 py-8 lg:py-12">
                {/* Collection Title */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-[#a790d4] mb-2">
                        {data.collection.title}
                    </h1>

                    {/* Active Filters Display */}
                    {Object.keys(selectedFilters).length > 0 && (
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                            {Object.entries(selectedFilters).map(([filterType, values]) => (
                                values.map(value => {
                                    const filterOption = data.filters[filterType as keyof FilterGroup]?.find(
                                        f => f.value === value
                                    );
                                    return (
                                        <button
                                            key={`${filterType}-${value}`}
                                            onClick={() => handleFilterChange(filterType, value, false)}
                                            className="inline-flex items-center gap-1 px-3 py-1 bg-purple-50 text-[#ab91df] rounded-full text-sm hover:bg-purple-100"
                                        >
                                            <span>{filterOption?.label || value}</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    );
                                })
                            ))}
                            <button
                                onClick={handleClearFilters}
                                className="text-sm text-gray-500 hover:text-[#ab91df] underline"
                            >
                                Clear all
                            </button>
                        </div>
                    )}

                    {/* <p className="text-sm text-gray-500 mt-2">
                        Showing {productsToShow.length} of {sortedProducts.length} products
                    </p> */}
                </div>

                <div className="flex gap-8">
                    {/* Sidebar */}
                    <CollectionSidebar
                        filters={data.filters}
                        isOpen={sidebarOpen}
                        onClose={() => setSidebarOpen(false)}
                        onFilterChange={handleFilterChange}
                        selectedFilters={selectedFilters}
                    />

                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                        {/* Sort Toolbar */}
                        <div className="flex justify-end mb-4">
                            <select
                                value={sortBy}
                                onChange={(e) => handleSortChange(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#ab91df]"
                            >
                                {data.sortOptions?.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Product Grid */}
                        <div className="mt-6">
                            {productsToShow.length > 0 ? (
                                <CollectionProductGrid
                                    products={productsToShow}
                                    category={category}
                                />
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-500">No products found matching your filters.</p>
                                    <button
                                        onClick={handleClearFilters}
                                        className="mt-4 px-6 py-2 bg-[#ab91df] text-white rounded hover:bg-[#9a7fc9]"
                                    >
                                        Clear Filters
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        {productsToShow.length > 0 && productsToShow.length < sortedProducts.length && (
                            <CollectionPagination
                                currentPage={currentPage}
                                totalProducts={sortedProducts.length}
                                productsPerPage={data.collection.productsPerPage}
                                onLoadMore={handleLoadMore}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}