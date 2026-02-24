"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import CollectionSidebar from "@/components/collection/CollectionSidebar";

import CollectionProductGrid from "@/components/collection/CollectionProductGrid";
import CollectionPagination from "@/components/collection/CollectionPagination";
import { CollectionData, CategoryKey } from "@/types/collection";

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


// Map category slugs to their data
const categoryDataMap: Record<CategoryKey, CollectionData> = {
    'muslin-swaddle': muslinSwaddleData as CollectionData,
    'muslin-towels': muslinTowelsData as CollectionData,
    'jhabla-tshirts': jhablaTshirts as CollectionData,
    'muslin-dohar-and-blankets': blanket as CollectionData,
    // Add other categories as you create them
    'baby-quilts': babyQuiltsData as CollectionData,
    'hospital-bags': hospitalBagsData as CollectionData, // Placeholder
    'new-arrivals': newArrivalsData as CollectionData, // Placeholder
    'sale': muslinSwaddleData as CollectionData, // Placeholder
    // 'buy-1-get-1': muslinSwaddleData as CollectionData, // Placeholder
    'buy-1-get-1': buy1get1Data as CollectionData,
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

    useEffect(() => {
        // Load data based on category
        const loadData = async () => {
            setLoading(true);
            try {
                // Get data from map
                const categoryData = categoryDataMap[category];

                if (categoryData) {
                    setData(categoryData);
                } else {
                    // Handle 404 - category not found
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

    const handleSortChange = (value: string) => {
        setSortBy(value);
        // Implement sorting logic here
        console.log("Sort by:", value);
    };

    const handleLoadMore = () => {
        setCurrentPage((prev) => prev + 1);
        // Implement load more logic here
    };

    if (loading) {
        return (
            <>

                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#ab91df] border-r-transparent"></div>
                        <p className="mt-4 text-gray-600">Loading...</p>
                    </div>
                </div>
            </>
        );
    }

    if (!data) {
        return (
            <>

                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Category Not Found</h1>

                    </div>
                </div>
            </>
        );
    }

    const productsToShow = data.products.slice(
        0,
        currentPage * data.collection.productsPerPage
    );

    return (
        <>

            <div className="bg-white">
                <div className="w-full px-4 lg:px-6 py-8 lg:py-12">
                    {/* Collection Title */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl lg:text-3xl font-semibold text-[#a790d4] mb-2">
                            {data.collection.title}
                        </h1>
                    </div>

                    <div className="flex gap-8">
                        {/* Sidebar */}
                        <CollectionSidebar
                            filters={data.filters}
                            isOpen={sidebarOpen}
                            onClose={() => setSidebarOpen(false)}
                        />

                        {/* Main Content */}
                        <div className="flex-1 min-w-0">
                            {/* Toolbar */}


                            {/* Product Grid */}
                            <div className="mt-6">
                                <CollectionProductGrid
                                    products={productsToShow}
                                    category={category}  // This passes the current category to the product grid
                                />
                            </div>

                            {/* Pagination */}
                            <CollectionPagination
                                currentPage={currentPage}
                                totalProducts={data.collection.totalProducts}
                                productsPerPage={data.collection.productsPerPage}
                                onLoadMore={handleLoadMore}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}