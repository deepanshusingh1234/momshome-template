// components/collection/CollectionSidebar.tsx
"use client";

import { useState, useEffect } from "react";
import { FilterGroup } from "@/types/collection";

interface CollectionSidebarProps {
    filters: FilterGroup;
    isOpen: boolean;
    onClose: () => void;
    onFilterChange: (filterType: string, value: string, checked: boolean) => void;
    selectedFilters?: Record<string, string[]>;
}

const CollectionSidebar = ({
    filters,
    isOpen,
    onClose,
    onFilterChange,
    selectedFilters: parentSelectedFilters = {}
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
    const [localSelectedFilters, setLocalSelectedFilters] = useState<Record<string, string[]>>(parentSelectedFilters);

    // Sync with parent filters
    useEffect(() => {
        setLocalSelectedFilters(parentSelectedFilters);
    }, [parentSelectedFilters]);

    const toggleSection = (section: string) => {
        setExpandedSections((prev) =>
            prev.includes(section)
                ? prev.filter((s) => s !== section)
                : [...prev, section]
        );
    };

    const handleFilterChange = (filterType: string, value: string, checked: boolean) => {
        // Update local state for UI
        setLocalSelectedFilters(prev => {
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

        // Call parent callback immediately
        onFilterChange(filterType, value, checked);
    };

    const handlePriceChange = (type: "min" | "max", value: number) => {
        setPriceRange((prev) => ({ ...prev, [type]: value }));
    };

    const applyPriceFilter = () => {
        // Remove existing price filter if any
        if (localSelectedFilters.price) {
            onFilterChange("price", localSelectedFilters.price[0], false);
        }
        // Apply new price filter
        onFilterChange("price", `${priceRange.min}-${priceRange.max}`, true);
    };

    const clearFilters = () => {
        // Clear all filters by calling parent with each selected filter
        Object.entries(localSelectedFilters).forEach(([filterType, values]) => {
            values.forEach(value => {
                onFilterChange(filterType, value, false);
            });
        });

        setPriceRange({ min: 0, max: 1499 });
    };

    const isFilterSelected = (filterType: string, value: string) => {
        return localSelectedFilters[filterType]?.includes(value) || false;
    };

    const getFilterCount = (filterType: string) => {
        return localSelectedFilters[filterType]?.length || 0;
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

                    {/* Clear Filters Button */}
                    {Object.keys(localSelectedFilters).length > 0 && (
                        <div className="mb-4">
                            <button
                                onClick={clearFilters}
                                className="text-sm text-[#ab91df] hover:text-[#9a7fc9] flex items-center gap-1"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Clear all filters
                                {Object.values(localSelectedFilters).flat().length > 0 && (
                                    <span className="bg-[#ab91df] text-white px-2 py-0.5 rounded-full text-xs">
                                        {Object.values(localSelectedFilters).flat().length}
                                    </span>
                                )}
                            </button>
                        </div>
                    )}

                    {/* Availability Filter */}
                    {filters.availability && filters.availability.length > 0 && (
                        <div className="mb-6">
                            <div
                                className="flex items-center justify-between cursor-pointer py-2"
                                onClick={() => toggleSection("availability")}
                            >
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-[#a790d4]">Availability</h3>
                                    {getFilterCount('availability') > 0 && (
                                        <span className="bg-[#ab91df] text-white px-2 py-0.5 rounded-full text-xs">
                                            {getFilterCount('availability')}
                                        </span>
                                    )}
                                </div>
                                <svg
                                    className={`w-4 h-4 transition-transform ${expandedSections.includes("availability") ? "rotate-180" : ""}`}
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
                                                    checked={isFilterSelected('availability', option.value)}
                                                    onChange={(e) => handleFilterChange('availability', option.value, e.target.checked)}
                                                />
                                                <label
                                                    htmlFor={option.id}
                                                    className={`ml-2 text-sm ${option.disabled ? "text-gray-400" : "text-[#3c3c3c]"}`}
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
                            <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-[#a790d4]">Price</h3>
                                {getFilterCount('price') > 0 && (
                                    <span className="bg-[#ab91df] text-white px-2 py-0.5 rounded-full text-xs">
                                        {getFilterCount('price')}
                                    </span>
                                )}
                            </div>
                            <svg
                                className={`w-4 h-4 transition-transform ${expandedSections.includes("price") ? "rotate-180" : ""}`}
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
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-[#a790d4]">Product type</h3>
                                    {getFilterCount('productTypes') > 0 && (
                                        <span className="bg-[#ab91df] text-white px-2 py-0.5 rounded-full text-xs">
                                            {getFilterCount('productTypes')}
                                        </span>
                                    )}
                                </div>
                                <svg
                                    className={`w-4 h-4 transition-transform ${expandedSections.includes("productTypes") ? "rotate-180" : ""}`}
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
                                                    checked={isFilterSelected('productTypes', option.value)}
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
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-[#a790d4]">Brand</h3>
                                    {getFilterCount('brands') > 0 && (
                                        <span className="bg-[#ab91df] text-white px-2 py-0.5 rounded-full text-xs">
                                            {getFilterCount('brands')}
                                        </span>
                                    )}
                                </div>
                                <svg
                                    className={`w-4 h-4 transition-transform ${expandedSections.includes("brands") ? "rotate-180" : ""}`}
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
                                                    checked={isFilterSelected('brands', option.value)}
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
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-[#a790d4]">Color</h3>
                                    {getFilterCount('colors') > 0 && (
                                        <span className="bg-[#ab91df] text-white px-2 py-0.5 rounded-full text-xs">
                                            {getFilterCount('colors')}
                                        </span>
                                    )}
                                </div>
                                <svg
                                    className={`w-4 h-4 transition-transform ${expandedSections.includes("colors") ? "rotate-180" : ""}`}
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
                                                    checked={isFilterSelected('colors', option.value)}
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
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-[#a790d4]">Design</h3>
                                    {getFilterCount('designs') > 0 && (
                                        <span className="bg-[#ab91df] text-white px-2 py-0.5 rounded-full text-xs">
                                            {getFilterCount('designs')}
                                        </span>
                                    )}
                                </div>
                                <svg
                                    className={`w-4 h-4 transition-transform ${expandedSections.includes("designs") ? "rotate-180" : ""}`}
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
                                                    checked={isFilterSelected('designs', option.value)}
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