// components/ProductCard.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

interface ProductVariant {
    id: number;
    title: string;
    price: number;
    compare_at_price: number;
    available: boolean;
    sku: string;
}

interface Product {
    id: number;
    handle: string;
    title: string;
    image: string;
    price: number;
    compare_at_price: number;
    available: boolean;
    variants?: ProductVariant[];
    discount?: number;
    rating?: number;
    reviewCount?: number;
    sku?: string;
}

interface ProductCardProps {
    product: Product;
    category?: string;
}

const ProductCard = ({ product, category = "muslin-swaddle" }: ProductCardProps) => {
    const router = useRouter();
    const { addToCart } = useCart();
    const [showVariants, setShowVariants] = useState(false);
    const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
        product.variants?.[0] || {
            id: product.id,
            title: "Default Title",
            price: product.price,
            compare_at_price: product.compare_at_price,
            available: product.available,
            sku: product.sku || "",
        }
    );
    const [isAddingToCart, setIsAddingToCart] = useState(false);
    const [isBuyingNow, setIsBuyingNow] = useState(false);

    // Calculate discount if not provided
    const discount = product.discount || (product.compare_at_price > product.price
        ? Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100)
        : 0);

    // Format price (handle both formats - if price is in paise or rupees)
    const formatPrice = (price: number) => {
        // If price is less than 1000, it might be in rupees already
        // If price is > 1000, it's probably in paise (114900 = 1149.00)
        if (price > 1000) {
            return (price / 100).toFixed(2);
        }
        return price.toFixed(2);
    };

    const handleAddToCart = (variant?: ProductVariant) => {
        setIsAddingToCart(true);

        const variantToAdd = variant || selectedVariant || {
            id: product.id,
            title: "Default Title",
            price: product.price,
            compare_at_price: product.compare_at_price,
            available: product.available,
            sku: product.sku || "",
        };

        // Simulate API call like in ProductDetailClient
        setTimeout(() => {
            const cartItem = {
                id: `${variantToAdd.id}:${Date.now()}`,
                variantId: variantToAdd.id,
                productId: product.id,
                handle: product.handle,
                title: product.title,
                image: product.image,
                price: variantToAdd.price,
                compare_at_price: variantToAdd.compare_at_price,
                quantity: 1, // Default quantity 1 for product card
                maxQuantity: 10,
                vendor: "Moms Home",
                sku: variantToAdd.sku
            };

            addToCart(cartItem);
            setIsAddingToCart(false);
            setShowVariants(false);

            // Optional: Show success message
            console.log("Added to cart");
        }, 500);
    };

    const handleBuyNow = (variant?: ProductVariant) => {
        setIsBuyingNow(true);

        const variantToAdd = variant || selectedVariant || {
            id: product.id,
            title: "Default Title",
            price: product.price,
            compare_at_price: product.compare_at_price,
            available: product.available,
            sku: product.sku || "",
        };

        // Simulate API call like in ProductDetailClient
        setTimeout(() => {
            const cartItem = {
                id: `${variantToAdd.id}:${Date.now()}`,
                variantId: variantToAdd.id,
                productId: product.id,
                handle: product.handle,
                title: product.title,
                image: product.image,
                price: variantToAdd.price,
                compare_at_price: variantToAdd.compare_at_price,
                quantity: 1, // Default quantity 1 for product card
                maxQuantity: 10,
                vendor: "Moms Home",
                sku: variantToAdd.sku
            };

            addToCart(cartItem);
            setIsBuyingNow(false);
            setShowVariants(false);

            // Redirect to cart page like in ProductDetailClient
            router.push('/cart');
        }, 500);
    };

    const handleQuickAdd = () => {
        if (product.variants && product.variants.length > 1) {
            setShowVariants(true);
        } else {
            handleAddToCart();
        }
    };

    return (
        <div className="product-item group h-full">
            <div className="card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                {/* Product Image */}
                <div className="card-product relative overflow-hidden">
                    <div className="card-product__wrapper">
                        {/* Sale Badge */}
                        {discount > 0 && (
                            <div className="card__badge absolute top-2 left-2 z-10">
                                <span className="badge sale-badge bg-red-500 text-white text-xs px-2 py-1 rounded">
                                    {discount}% OFF
                                </span>
                            </div>
                        )}

                        {/* Product Image */}
                        <div className="card-media aspect-square overflow-hidden bg-gray-100">
                            <Link
                                href={`/shop/${category}/${product.handle}`}
                                className="block w-full h-full"
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </Link>
                        </div>

                        {/* Quick View Button */}
                        <div className="card-product__group absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                className="card-product__group-item bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                                title="Quick View"
                                onClick={() => setShowVariants(!showVariants)}
                            >
                                <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor">
                                    <path d="M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035 c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201 C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418 c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418 C447.361,287.923,358.746,385.406,255.997,385.406z" />
                                    <path d="M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275 s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516 s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Info - Flex column to push button to bottom */}
                <div className="card-information p-3 text-center flex flex-col flex-grow">
                    {/* Title with fixed height and line clamp */}
                    <Link
                        href={`/shop/${category}/${product.handle}`}
                        className="card-title block text-sm font-medium text-gray-800 hover:text-[#ab91df] line-clamp-2 h-10 mb-1"
                    >
                        {product.title}
                    </Link>

                    {/* Rating - Only show if exists */}
                    {product.rating && product.rating > 0 ? (
                        <div className="flex items-center justify-center gap-1 h-5">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        className={`w-4 h-4 ${star <= Math.floor(product.rating || 0)
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                            } fill-current`}
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-xs text-gray-500">({product.reviewCount || 0})</span>
                        </div>
                    ) : (
                        <div className="h-5"></div> // Placeholder to maintain layout
                    )}

                    {/* Price - Fixed height */}
                    <div className="card-price h-6 mt-1">
                        {product.compare_at_price > product.price ? (
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-sm font-bold text-[#ab91df]">
                                    Rs. {formatPrice(product.price)}
                                </span>
                                <span className="text-xs text-gray-400 line-through">
                                    Rs. {formatPrice(product.compare_at_price)}
                                </span>
                            </div>
                        ) : (
                            <span className="text-sm font-bold text-[#ab91df]">
                                Rs. {formatPrice(product.price)}
                            </span>
                        )}
                    </div>

                    {/* Add to Cart Button - Always at bottom with margin-top auto */}
                    <div className="mt-auto pt-3">
                        {product.variants && product.variants.length > 1 ? (
                            <button
                                onClick={handleQuickAdd}
                                disabled={isAddingToCart || !product.available}
                                className="w-full px-4 py-2 bg-[#ab91df] text-white text-sm rounded hover:bg-[#9a7fc9] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                            >
                                {isAddingToCart ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Adding...
                                    </span>
                                ) : (
                                    "Quick Add"
                                )}
                            </button>
                        ) : product.available ? (
                            <button
                                onClick={handleQuickAdd}
                                disabled={isAddingToCart}
                                className="w-full px-4 py-2 bg-[#ab91df] text-white text-sm rounded hover:bg-[#9a7fc9] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                            >
                                {isAddingToCart ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Adding...
                                    </span>
                                ) : (
                                    "Add to Cart"
                                )}
                            </button>
                        ) : (
                            <button className="w-full px-4 py-2 bg-gray-300 text-gray-600 text-sm rounded cursor-not-allowed" disabled>
                                Out of Stock
                            </button>
                        )}
                    </div>

                    {/* Variants Modal - Like in ProductDetailClient but simplified for product card */}
                    {showVariants && product.variants && product.variants.length > 1 && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                            <div className="bg-white rounded-lg max-w-md w-full p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-semibold">Select Option</h3>
                                    <button
                                        onClick={() => setShowVariants(false)}
                                        className="p-1 hover:bg-gray-100 rounded-full"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M18 6L6 18M6 6L18 18" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="space-y-3">
                                    {product.variants.map((variant) => (
                                        <div
                                            key={variant.id}
                                            className={`p-3 border rounded-lg transition-colors ${variant.available
                                                    ? 'hover:border-[#ab91df] hover:bg-purple-50'
                                                    : 'opacity-50 bg-gray-100'
                                                }`}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-medium">{variant.title}</span>
                                                <span className="font-semibold text-[#ab91df]">
                                                    Rs. {formatPrice(variant.price)}
                                                </span>
                                            </div>
                                            {variant.compare_at_price > variant.price && (
                                                <div className="text-xs text-gray-500 line-through mb-2">
                                                    Rs. {formatPrice(variant.compare_at_price)}
                                                </div>
                                            )}
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handleAddToCart(variant)}
                                                    disabled={!variant.available || isAddingToCart}
                                                    className="flex-1 py-2 bg-[#232323] text-white text-sm rounded hover:bg-[#ab91df] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                                                >
                                                    {isAddingToCart ? "Adding..." : "Add to Cart"}
                                                </button>
                                                <button
                                                    onClick={() => handleBuyNow(variant)}
                                                    disabled={!variant.available || isBuyingNow}
                                                    className="flex-1 py-2 border-2 border-[#ab91df] bg-[#ab91df] text-white text-sm rounded hover:bg-[#ab91df] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {isBuyingNow ? "Processing..." : "Buy Now"}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;