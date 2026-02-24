"use client";

interface CollectionPaginationProps {
    currentPage: number;
    totalProducts: number;
    productsPerPage: number;
    onLoadMore: () => void;
}

const CollectionPagination = ({
    currentPage,
    totalProducts,
    productsPerPage,
    onLoadMore,
}: CollectionPaginationProps) => {
    const start = (currentPage - 1) * productsPerPage + 1;
    const end = Math.min(currentPage * productsPerPage, totalProducts);
    const progress = (end / totalProducts) * 100;

    return (
        <div className="pagination-wrapper text-center mt-8 lg:mt-12">
            <div className="mb-4">
                <div className="text-sm text-gray-600">
                    Showing <span className="font-semibold">{start}</span> -{" "}
                    <span className="font-semibold">{end}</span> of{" "}
                    <span className="font-semibold">{totalProducts}</span> total
                </div>
                <div className="w-full max-w-md mx-auto h-1 bg-gray-200 rounded-full mt-2">
                    <div
                        className="h-full bg-[#ab91df] rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {end < totalProducts && (
                <button
                    onClick={onLoadMore}
                    className="px-8 py-3 bg-[#ab91df] text-white font-semibold rounded-full hover:bg-[#9a7fc9] transition-colors"
                >
                    Show More
                </button>
            )}
        </div>
    );
};

export default CollectionPagination;