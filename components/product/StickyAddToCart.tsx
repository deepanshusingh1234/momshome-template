// components/product/StickyAddToCart.tsx
"use client";

import { useState, useEffect } from "react";
import { CollectionProduct } from "@/types/collection";

interface StickyAddToCartProps {
    product: CollectionProduct;
    selectedVariant: any;
    quantity: number;
    onQuantityChange: (type: "increment" | "decrement") => void;
    selectedOptions: string[];
    maxSelections: number;
    onAddToCart: () => void;
    onBuyNow: () => void;
    isAddingToCart: boolean;
    isBuyingNow: boolean;
}

export default function StickyAddToCart({
    product,
    selectedVariant,
    quantity,
    onQuantityChange,
    selectedOptions,
    maxSelections,
    onAddToCart,
    onBuyNow,
    isAddingToCart,
    isBuyingNow,
}: StickyAddToCartProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;

            // Show sticky when scrolled past 30% of the page
            setIsVisible(scrollPosition > documentHeight * 0.3);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    // No longer disabled based on selections
    const isDisabled = false;

    return (
        <div
            className="productView-stickyCart style-1 fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 transition-transform duration-300"
            style={{ transform: isVisible ? "translateY(0)" : "translateY(100%)" }}
        >
            <div className="container mx-auto px-4 lg:px-6">
                <button
                    className="sticky-product-close absolute -top-3 right-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                    onClick={() => setIsVisible(false)}
                    aria-label="Close sticky cart"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="w-4 h-4"
                    >
                        <path d="M 38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375 L 24 21.171875 L 10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062 L 21.171875 24 L 7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062 L 24 26.828125 L 37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938 L 26.828125 24 L 40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z" />
                    </svg>
                </button>

                <div className="sticky-product-wrapper py-3">
                    <div className="sticky-product flex items-center justify-between">
                        <div className="sticky-left flex items-center gap-3">
                            <div className="sticky-image w-12 h-12 relative flex-shrink-0">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                            <div className="sticky-info hidden sm:block">
                                <h4 className="sticky-title text-sm font-medium line-clamp-1 max-w-md">
                                    {product.title}
                                </h4>
                                <div className="sticky-price has-compare-price flex items-center gap-2">
                                    {selectedVariant.compare_at_price > selectedVariant.price && (
                                        <s className="money-compare-price text-xs text-gray-400">
                                            ₹{selectedVariant.compare_at_price.toLocaleString("en-IN")}
                                        </s>
                                    )}
                                    <span className="money-subtotal text-sm font-semibold">
                                        ₹{selectedVariant.price.toLocaleString("en-IN")}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="sticky-right sticky-content">
                            <div className="sticky-actions sticky-actions-2 flex items-center gap-3">
                                <div className="quantity__group quantity__style--1 hidden sm:block">
                                    <div className="quantity__container flex items-center border border-gray-300 rounded">
                                        <button
                                            type="button"
                                            onClick={() => onQuantityChange("decrement")}
                                            className="minus btn-quantity w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                                        >
                                            <span className="sr-only">Decrease quantity</span>
                                            <span className="text-lg leading-none">−</span>
                                        </button>
                                        <input
                                            className="form-input quantity__input w-12 h-8 text-center py-1 text-sm border-x border-gray-300"
                                            type="number"
                                            min="1"
                                            value={quantity}
                                            readOnly
                                        />
                                        <button
                                            type="button"
                                            onClick={() => onQuantityChange("increment")}
                                            className="plus btn-quantity w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                                        >
                                            <span className="sr-only">Increase quantity</span>
                                            <span className="text-lg leading-none">+</span>
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={onAddToCart}
                                    className="product-form__submit button button--primary bg-[#232323] text-white px-4 sm:px-6 py-2 rounded text-sm hover:bg-white hover:text-[#232323] border border-[#232323] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                                    disabled={isAddingToCart}
                                >
                                    {isAddingToCart ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Adding...
                                        </span>
                                    ) : (
                                        "Add to cart"
                                    )}
                                </button>

                                <button
                                    type="button"
                                    onClick={onBuyNow}
                                    className="product-form__submit button button--primary bg-[#ab91df] text-white px-4 sm:px-6 py-2 rounded text-sm hover:bg-[#ab91df] hover:text-white border border-[#ab91df] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                                    disabled={isBuyingNow}
                                >
                                    {isBuyingNow ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </span>
                                    ) : (
                                        "Buy Now"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}