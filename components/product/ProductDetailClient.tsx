// components/product/ProductDetailClient.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CollectionProduct } from "@/types/collection";
import { useCart } from "@/context/CartContext";
import Breadcrumb from "../product/Breadcrumb";
import ProductImages from "../product/ProductImages";
import ProductTabs from "../product/ProductTabs";
import StickyAddToCart from "../product/StickyAddToCart";
import ProductMeta from "../product/ProductMeta";
import ProductOffers from "../product/ProductOffers";
import ProductFeatures from "../product/ProductFeatures";
import ProductOptions from "../product/ProductOptions";
import RelatedProducts from "./RelatedProducts";
import ProductReviews from "./ProductReviews";

interface ProductDetailClientProps {
    product: CollectionProduct;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
    const router = useRouter();
    const { addToCart } = useCart();
    const [selectedVariant, setSelectedVariant] = useState(
        product.variants?.[0] || {
            id: product.id,
            title: "Default Title",
            price: product.price,
            compare_at_price: product.compare_at_price,
            available: product.available,
            sku: product.sku || "",
        }
    );
    const [quantity, setQuantity] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState("description");
    const [isAddingToCart, setIsAddingToCart] = useState(false);
    const [isBuyingNow, setIsBuyingNow] = useState(false);

    // For "Choose Any 5" option - now optional
    const maxSelections = 5;

    const handleOptionSelect = (value: string) => {
        setSelectedOptions((prev) => {
            if (prev.includes(value)) {
                return prev.filter((item) => item !== value);
            }
            if (prev.length < maxSelections) {
                return [...prev, value];
            }
            return prev;
        });
    };

    const handleQuantityChange = (type: "increment" | "decrement") => {
        setQuantity((prev) => {
            if (type === "increment") return prev + 1;
            if (type === "decrement" && prev > 1) return prev - 1;
            return prev;
        });
    };

    const subtotal = selectedVariant.price * quantity;

    const handleAddToCart = () => {
        setIsAddingToCart(true);

        // Simulate API call
        setTimeout(() => {
            const cartItem = {
                id: `${selectedVariant.id}:${Date.now()}`,
                variantId: selectedVariant.id,
                productId: product.id,
                handle: product.handle,
                title: product.title,
                image: product.image,
                price: selectedVariant.price,
                compare_at_price: selectedVariant.compare_at_price,
                quantity: quantity,
                maxQuantity: 10,
                vendor: "Moms Home",
                selectedOptions: selectedOptions.length > 0 ? selectedOptions : undefined,
                sku: selectedVariant.sku
            };

            addToCart(cartItem);
            setIsAddingToCart(false);

            // Optional: Show success message
            console.log("Added to cart");
        }, 500);
    };

    const handleBuyNow = () => {
        setIsBuyingNow(true);

        // Simulate API call
        setTimeout(() => {
            const cartItem = {
                id: `${selectedVariant.id}:${Date.now()}`,
                variantId: selectedVariant.id,
                productId: product.id,
                handle: product.handle,
                title: product.title,
                image: product.image,
                price: selectedVariant.price,
                compare_at_price: selectedVariant.compare_at_price,
                quantity: quantity,
                maxQuantity: 10,
                vendor: "Moms Home",
                selectedOptions: selectedOptions.length > 0 ? selectedOptions : undefined,
                sku: selectedVariant.sku
            };

            addToCart(cartItem);
            setIsBuyingNow(false);

            // Redirect to cart page
            router.push('/cart');
        }, 500);
    };

    return (
        <div className="product-details product-full-width-2 bg-white">
            {/* Breadcrumb */}
            <Breadcrumb productTitle={product.title} />

            <div className="productView-container w-full px-4 lg:px-6 py-2 lg:py-4">
                <div className="productView halo-productView layout-1 positionMainImage--left productView-sticky">
                    <div className="productView-top flex flex-col lg:flex-row gap-8 lg:gap-10">
                        {/* Left Column - Images (Sticky on desktop) */}
                        <div className="halo-productView-left productView-images lg:w-1/2 lg:sticky lg:top-24 lg:self-start">
                            <ProductImages product={product} />
                        </div>

                        {/* Right Column - Product Details (Normal flow) */}
                        <div className="halo-productView-right productView-details lg:w-1/2">
                            <div className="productView-product clearfix">
                                {/* Product Title */}
                                <div className="productView-moreItem" style={{ padding: "0 0 0px" }}>
                                    <h1 className="productView-title text-[#232323] text-base lg:text-lg font-medium">
                                        <span>{product.title}</span>
                                    </h1>
                                </div>

                                {/* Rating */}
                                {product.rating && product.rating > 0 && (
                                    <div className="productView-moreItem" style={{ padding: "0 0 0px" }}>
                                        <div className="flex items-center gap-2">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className={`w-4 h-4 ${i < Math.floor(product.rating || 0)
                                                            ? "text-yellow-400"
                                                            : "text-gray-300"
                                                            }`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-600">
                                                {product.reviewCount || 0} reviews
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* Sold In Last */}
                                <div className="productView-moreItem" style={{ padding: "10px 0 14px" }}>
                                    <div className="productView-meta clearfix">
                                        <div className="productView-soldProduct">
                                            <svg
                                                className="icon icon-fire-2 inline-block w-4 h-4 mr-1 text-orange-500"
                                                viewBox="0 0 384 512"
                                            >
                                                <path d="M216 23.858c0-23.802-30.653-32.765-44.149-13.038C48 191.851 224 200 224 288c0 35.629-29.114 64.458-64.85 63.994C123.98 351.538 96 322.22 96 287.046v-85.51c0-21.703-26.471-32.225-41.432-16.504C27.801 213.158 0 261.332 0 320c0 105.869 86.131 192 192 192s192-86.131 192-192c0-170.29-168-193.003-168-296.142z" />
                                            </svg>
                                            <span className="text-sm text-gray-600">
                                                <span className="font-semibold">15</span> sold in last{" "}
                                                <span className="font-semibold">15</span> hours
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="productView-moreItem" style={{ padding: "0 0 0px" }}>
                                    <div className="productView-price no-js-hidden clearfix" id="product-price">
                                        {product.discount > 0 && (
                                            <span className="badge price__badge-sale bg-red-500 text-white px-2 py-1 rounded text-sm inline-block mb-2">
                                                {product.discount}% OFF
                                            </span>
                                        )}
                                        <div className="price price--medium price--on-sale">
                                            <div className="price__sale flex items-center gap-3">
                                                <span className="price-item price-item--sale text-2xl font-bold text-[#232323]">
                                                    ₹{selectedVariant.price.toLocaleString("en-IN")}
                                                </span>
                                                {selectedVariant.compare_at_price >
                                                    selectedVariant.price && (
                                                        <s className="price-item price-item--regular text-gray-400">
                                                            ₹
                                                            {selectedVariant.compare_at_price.toLocaleString(
                                                                "en-IN"
                                                            )}
                                                        </s>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* SKU & Availability */}
                                <ProductMeta sku={selectedVariant.sku} available={selectedVariant.available} />

                                {/* Hot Stock */}
                                <div className="productView-moreItem" style={{ padding: "0 0 8px" }}>
                                    <div className="productView-hotStock style-2">
                                        <span className="hotStock-text text-orange-600 text-sm">
                                            Please hurry! Only 3 left in stock
                                        </span>
                                        <div className="hotStock-progress w-full h-1 bg-gray-200 rounded-full mt-1">
                                            <span
                                                className="hotStock-progress-item block h-1 bg-orange-500 rounded-full"
                                                style={{ width: "15%" }}
                                            ></span>
                                        </div>
                                    </div>
                                </div>

                                {/* Limited Time Offers */}
                                <ProductOffers />

                                {/* Product Options - Choose Any 5 (Optional) */}
                                <ProductOptions
                                    selectedOptions={selectedOptions}
                                    onOptionSelect={handleOptionSelect}
                                    maxSelections={maxSelections}
                                />

                                {/* Quantity Selector */}
                                <div className="productView-moreItem w-full" style={{ padding: "0 0 15px" }}>
                                    <div className="quantity_selector">
                                        <div className="productView-quantity quantity__group quantity__group--2 quantity__style--1 clearfix">
                                            <label className="form-label quantity__label block text-xs lg:text-sm font-medium mb-1.5 lg:mb-2">
                                                Quantity:
                                            </label>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                                                <div className="quantity__container flex items-center border border-gray-300 rounded-md w-fit">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleQuantityChange("decrement")}
                                                        className="minus btn-quantity px-2.5 lg:px-3 py-1.5 lg:py-2 text-gray-600 hover:bg-gray-100 rounded-l-md"
                                                    >
                                                        <span className="sr-only">Decrease quantity</span>
                                                        <span className="block w-3.5 h-3.5 lg:w-4 lg:h-4 text-sm lg:text-base">−</span>
                                                    </button>
                                                    <input
                                                        className="form-input quantity__input w-14 lg:w-16 text-center border-x border-gray-300 py-1.5 lg:py-2 text-sm lg:text-base focus:outline-none"
                                                        type="number"
                                                        name="quantity"
                                                        min="1"
                                                        value={quantity}
                                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => handleQuantityChange("increment")}
                                                        className="plus btn-quantity px-2.5 lg:px-3 py-1.5 lg:py-2 text-gray-600 hover:bg-gray-100 rounded-r-md"
                                                    >
                                                        <span className="sr-only">Increase quantity</span>
                                                        <span className="block w-3.5 h-3.5 lg:w-4 lg:h-4 text-sm lg:text-base">+</span>
                                                    </button>
                                                </div>
                                                <div className="productView-subtotal">
                                                    <span className="text-xs lg:text-sm text-gray-600">Subtotal: </span>
                                                    <span className="money-subtotal text-sm lg:text-base font-semibold text-gray-900">
                                                        ₹{subtotal.toLocaleString("en-IN")}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Add to Cart Button */}
                                <div className="productView-moreItem w-full" style={{ padding: "0 0 12px" }}>
                                    <div className="productView-buttons">
                                        <button
                                            type="button"
                                            onClick={handleAddToCart}
                                            disabled={isAddingToCart}
                                            className="product-form__submit button button--primary w-full bg-[#232323] text-white py-3 lg:py-3.5 px-4 lg:px-6 rounded-md text-sm lg:text-base font-medium hover:bg-white hover:text-[#232323] border border-[#232323] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isAddingToCart ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Adding...
                                                </span>
                                            ) : (
                                                "Add to Cart"
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Buy It Now Button */}
                                <div className="productView-moreItem w-full" style={{ padding: "0 0 15px" }}>
                                    <div className="productView-groupBottom">
                                        <div className="productView-groupItem">
                                            <div
                                                className="productView-payment"
                                                style={
                                                    {
                                                        "--bin-color": "#232323",
                                                        "--bin-bg-color": "#ffffff",
                                                        "--bin-border-color": "#acacac",
                                                    } as React.CSSProperties
                                                }
                                            >
                                                <button
                                                    type="button"
                                                    onClick={handleBuyNow}
                                                    disabled={isBuyingNow}
                                                    className="w-full border-2 border-[#ab91df] bg-[#ab91df] text-white py-2.5 lg:py-3 px-4 lg:px-6 rounded-md text-sm lg:text-base font-medium hover:bg-[#ab91df] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {isBuyingNow ? (
                                                        <span className="flex items-center justify-center gap-2">
                                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                            </svg>
                                                            Processing...
                                                        </span>
                                                    ) : (
                                                        "Buy it Now"
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Viewing Product */}
                                <div className="productView-moreItem w-full" style={{ padding: "0 0 22px" }}>
                                    <div className="productView-ViewingProduct flex items-center gap-2 text-xs lg:text-sm text-gray-600">
                                        <svg
                                            className="icon w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0"
                                            viewBox="0 0 511.626 511.626"
                                            fill="currentColor"
                                        >
                                            <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04z" />
                                        </svg>
                                        <span className="leading-tight">
                                            <span className="font-semibold">185</span> customers are viewing this product
                                        </span>
                                    </div>
                                </div>

                                {/* Product Features Icons */}
                                <ProductFeatures />

                                {/* Product Tabs */}
                                <ProductTabs activeTab={activeTab} onTabChange={setActiveTab} />
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProducts currentProductId={product.id} />
                <ProductReviews productId={product.id} productTitle={""} />
            </div>

            {/* Sticky Add to Cart */}
            <StickyAddToCart
                product={product}
                selectedVariant={selectedVariant}
                quantity={quantity}
                onQuantityChange={handleQuantityChange}
                selectedOptions={selectedOptions}
                maxSelections={maxSelections}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
                isAddingToCart={isAddingToCart}
                isBuyingNow={isBuyingNow}
            />
        </div>
    );
}