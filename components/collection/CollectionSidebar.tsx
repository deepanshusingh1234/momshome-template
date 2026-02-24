"use client";

import { useState } from "react";
import { FilterGroup } from "@/types/collection";

interface CollectionSidebarProps {
    filters: FilterGroup;
    isOpen: boolean;
    onClose: () => void;
    onFilterChange?: (filterType: string, value: string, checked: boolean) => void; // Add callback
}

const CollectionSidebar = ({
    filters,
    isOpen,
    onClose,
    onFilterChange // Add this
}: CollectionSidebarProps) => {
    const [expandedSections, setExpandedSections] = useState<string[]>([
        "availability",
        "price",
        "productTypes",
        "brands",
        "colors",
        "designs",
    ]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1499 });
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

    const toggleSection = (section: string) => {
        setExpandedSections((prev) =>
            prev.includes(section)
                ? prev.filter((s) => s !== section)
                : [...prev, section]
        );
    };

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

            // Call the parent callback if provided
            if (onFilterChange) {
                onFilterChange(filterType, value, checked);
            }

            return updated;
        });
    };

    const handlePriceChange = (type: "min" | "max", value: number) => {
        setPriceRange((prev) => ({ ...prev, [type]: value }));
    };

    const applyPriceFilter = () => {
        console.log("Apply price filter:", priceRange);
        if (onFilterChange) {
            onFilterChange("price", `${priceRange.min}-${priceRange.max}`, true);
        }
    };

    const clearFilters = () => {
        setSelectedFilters({});
        setPriceRange({ min: 0, max: 1499 });
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
          fixed lg:static inset-y-0 left-0 w-[85%] max-w-[320px] lg:w-64
          bg-white z-50 lg:z-auto overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
            >
                <div className="p-4 lg:p-0">
                    {/* Header - Mobile only */}
                    <div className="flex items-center justify-between lg:hidden mb-4 pb-4 border-b">
                        <h2 className="text-lg font-semibold">Filters</h2>
                        <button onClick={onClose} className="p-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Clear Filters Button - Show when filters are selected */}
                    {Object.keys(selectedFilters).length > 0 && (
                        <div className="mb-4">
                            <button
                                onClick={clearFilters}
                                className="text-sm text-[#ab91df] hover:text-[#9a7fc9] flex items-center gap-1"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Clear all filters
                            </button>
                        </div>
                    )}

                    {/* Categories - Static or from props? Consider making this dynamic too */}
                    <div className="mb-6">
                        <div
                            className="flex items-center justify-between cursor-pointer py-2"
                            onClick={() => toggleSection("categories")}
                        >
                            <h3 className="font-semibold text-[#a790d4]">Categories</h3>
                            <svg
                                className={`w-4 h-4 transition-transform ${expandedSections.includes("categories") ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {expandedSections.includes("categories") && (
                            <div className="mt-2 pl-2">
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="text-sm text-[#3c3c3c] hover:text-[#ab91df]">
                                            All Categories
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Availability Filter */}
                    {filters.availability && filters.availability.length > 0 && (
                        <div className="mb-6">
                            <div
                                className="flex items-center justify-between cursor-pointer py-2"
                                onClick={() => toggleSection("availability")}
                            >
                                <h3 className="font-semibold text-[#a790d4]">Availability</h3>
                                <svg
                                    className={`w-4 h-4 transition-transform ${expandedSections.includes("availability") ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            {expandedSections.includes("availability") && (
                                <div className="mt-2 pl-2">
                                    <ul className="space-y-2">
                                        {filters.availability.map((option) => (
                                            <li key={option.id} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id={option.id}
                                                    className="w-4 h-4 text-[#ab91df] border-gray-300 rounded focus:ring-[#ab91df]"
                                                    disabled={option.disabled}
                                                    checked={selectedFilters.availability?.includes(option.value) || false}
                                                    onChange={(e) => handleFilterChange('availability', option.value, e.target.checked)}
                                                />
                                                <label
                                                    htmlFor={option.id}
                                                    className={`ml-2 text-sm ${option.disabled ? "text-gray-400" : "text-[#3c3c3c]"
                                                        }`}
                                                >
                                                    {option.label} <span className="text-gray-400">({option.count})</span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Price Filter */}
                    <div className="mb-6">
                        <div
                            className="flex items-center justify-between cursor-pointer py-2"
                            onClick={() => toggleSection("price")}
                        >
                            <h3 className="font-semibold text-[#a790d4]">Price</h3>
                            <svg
                                className={`w-4 h-4 transition-transform ${expandedSections.includes("price") ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {expandedSections.includes("price") && (
                            <div className="mt-4">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="flex-1">
                                        <label className="block text-xs text-gray-500 mb-1">Min (₹)</label>
                                        <input
                                            type="number"
                                            value={priceRange.min}
                                            onChange={(e) => handlePriceChange("min", Number(e.target.value))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                                            min="0"
                                            max={priceRange.max}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-xs text-gray-500 mb-1">Max (₹)</label>
                                        <input
                                            type="number"
                                            value={priceRange.max}
                                            onChange={(e) => handlePriceChange("max", Number(e.target.value))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                                            min={priceRange.min}
                                            max="1499"
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={applyPriceFilter}
                                    className="w-full px-4 py-2 bg-[#ab91df] text-white text-sm rounded-3xl hover:bg-[#9a7fc9] transition-colors"
                                >
                                    Apply
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Product Type Filter */}
                    {filters.productTypes && filters.productTypes.length > 0 && (
                        <div className="mb-6">
                            <div
                                className="flex items-center justify-between cursor-pointer py-2"
                                onClick={() => toggleSection("productTypes")}
                            >
                                <h3 className="font-semibold text-[#a790d4]">Product type</h3>
                                <svg
                                    className={`w-4 h-4 transition-transform ${expandedSections.includes("productTypes") ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            {expandedSections.includes("productTypes") && (
                                <div className="mt-2 pl-2 max-h-48 overflow-y-auto">
                                    <ul className="space-y-2">
                                        {filters.productTypes.map((option) => (
                                            <li key={option.id} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id={option.id}
                                                    className="w-4 h-4 text-[#ab91df] border-gray-300 rounded focus:ring-[#ab91df]"
                                                    checked={selectedFilters.productTypes?.includes(option.value) || false}
                                                    onChange={(e) => handleFilterChange('productTypes', option.value, e.target.checked)}
                                                />
                                                <label htmlFor={option.id} className="ml-2 text-sm text-[#3c3c3c]">
                                                    {option.label} <span className="text-gray-400">({option.count})</span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Brand Filter */}
                    {filters.brands && filters.brands.length > 0 && (
                        <div className="mb-6">
                            <div
                                className="flex items-center justify-between cursor-pointer py-2"
                                onClick={() => toggleSection("brands")}
                            >
                                <h3 className="font-semibold text-[#a790d4]">Brand</h3>
                                <svg
                                    className={`w-4 h-4 transition-transform ${expandedSections.includes("brands") ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            {expandedSections.includes("brands") && (
                                <div className="mt-2 pl-2 max-h-48 overflow-y-auto">
                                    <ul className="space-y-2">
                                        {filters.brands.map((option) => (
                                            <li key={option.id} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id={option.id}
                                                    className="w-4 h-4 text-[#ab91df] border-gray-300 rounded focus:ring-[#ab91df]"
                                                    checked={selectedFilters.brands?.includes(option.value) || false}
                                                    onChange={(e) => handleFilterChange('brands', option.value, e.target.checked)}
                                                />
                                                <label htmlFor={option.id} className="ml-2 text-sm text-[#3c3c3c]">
                                                    {option.label} <span className="text-gray-400">({option.count})</span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Color Filter */}
                    {filters.colors && filters.colors.length > 0 && (
                        <div className="mb-6">
                            <div
                                className="flex items-center justify-between cursor-pointer py-2"
                                onClick={() => toggleSection("colors")}
                            >
                                <h3 className="font-semibold text-[#a790d4]">Color</h3>
                                <svg
                                    className={`w-4 h-4 transition-transform ${expandedSections.includes("colors") ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            {expandedSections.includes("colors") && (
                                <div className="mt-2 pl-2 max-h-48 overflow-y-auto">
                                    <ul className="space-y-2">
                                        {filters.colors.map((option) => (
                                            <li key={option.id} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id={option.id}
                                                    className="w-4 h-4 text-[#ab91df] border-gray-300 rounded focus:ring-[#ab91df]"
                                                    checked={selectedFilters.colors?.includes(option.value) || false}
                                                    onChange={(e) => handleFilterChange('colors', option.value, e.target.checked)}
                                                />
                                                <label htmlFor={option.id} className="ml-2 text-sm text-[#3c3c3c]">
                                                    {option.label} <span className="text-gray-400">({option.count})</span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Design Filter */}
                    {filters.designs && filters.designs.length > 0 && (
                        <div className="mb-6">
                            <div
                                className="flex items-center justify-between cursor-pointer py-2"
                                onClick={() => toggleSection("designs")}
                            >
                                <h3 className="font-semibold text-[#a790d4]">Design</h3>
                                <svg
                                    className={`w-4 h-4 transition-transform ${expandedSections.includes("designs") ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            {expandedSections.includes("designs") && (
                                <div className="mt-2 pl-2 max-h-48 overflow-y-auto">
                                    <ul className="space-y-2">
                                        {filters.designs.map((option) => (
                                            <li key={option.id} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id={option.id}
                                                    className="w-4 h-4 text-[#ab91df] border-gray-300 rounded focus:ring-[#ab91df]"
                                                    checked={selectedFilters.designs?.includes(option.value) || false}
                                                    onChange={(e) => handleFilterChange('designs', option.value, e.target.checked)}
                                                />
                                                <label htmlFor={option.id} className="ml-2 text-sm text-[#3c3c3c]">
                                                    {option.label} <span className="text-gray-400">({option.count})</span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CollectionSidebar;