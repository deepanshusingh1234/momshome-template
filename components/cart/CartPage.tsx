// components/cart/CartPage.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Breadcrumb from "@/components/product/Breadcrumb";
import LoginModal from "@/components/auth/LoginModal"; // Add this import

export default function CartPage() {
    const router = useRouter();
    const { cart, updateQuantity, removeFromCart, applyCoupon, updateNote } = useCart();
    const [couponCode, setCouponCode] = useState("");
    const [cartNote, setCartNote] = useState("");
    const [countdownMinutes, setCountdownMinutes] = useState(38);
    const [countdownSeconds, setCountdownSeconds] = useState(52);
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            if (countdownSeconds > 0) {
                setCountdownSeconds(prev => prev - 1);
            } else if (countdownMinutes > 0) {
                setCountdownMinutes(prev => prev - 1);
                setCountdownSeconds(59);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [countdownMinutes, countdownSeconds]);

    const handleQuantityChange = (itemId: string, newQuantity: number, maxQuantity: number) => {
        if (newQuantity < 1 || newQuantity > maxQuantity) return;
        updateQuantity(itemId, newQuantity);
    };

    const handleRemoveItem = (itemId: string) => {
        removeFromCart(itemId);
    };

    const handleApplyCoupon = () => {
        if (couponCode.trim()) {
            applyCoupon(couponCode);
            setCouponCode("");
            console.log("Coupon applied:", couponCode);
        }
    };

    const handleSaveNote = () => {
        updateNote(cartNote);
        console.log("Note saved:", cartNote);
    };

    const handleCheckout = () => {
        // Check if user is authenticated (replace with your actual auth check)
        const isAuthenticated = false; // Replace with your auth logic

        if (!isAuthenticated) {
            // Save cart data before showing login modal
            try {
                sessionStorage.setItem('checkoutData', JSON.stringify({
                    cart: {
                        items: cart.items,
                        subtotal: cart.subtotal,
                        total: cart.total,
                        discount: cart.discount,
                        itemCount: cart.itemCount,
                        couponCode: cart.couponCode,
                        note: cart.note
                    },
                    timestamp: Date.now()
                }));
            } catch (error) {
                console.error("Error saving checkout data:", error);
            }

            // Show login modal instead of redirecting
            setShowLoginModal(true);
            return;
        }

        // If authenticated, proceed with checkout
        setIsCheckoutLoading(true);

        // Simulate checkout process
        setTimeout(() => {
            console.log("Processing checkout with items:", cart.items);
            setIsCheckoutLoading(false);
            alert("Order placed successfully! (Demo)");
        }, 2000);
    };

    const handleLoginSuccess = () => {
        // After successful login, proceed with checkout
        setShowLoginModal(false);
        handleCheckout(); // This will now pass the auth check (if you update isAuthenticated)
    };

    const formatPrice = (price: number) => {
        return `Rs. ${(price / 100).toFixed(2)}`;
    };

    // Show empty cart
    if (cart.items.length === 0) {
        return (
            <div className="block bg-white min-h-screen" data-section-id="template--25521513759001__main">
                <div className="cart-container w-full px-4 lg:px-6 py-8">
                    {/* Breadcrumb */}
                    <Breadcrumb productTitle="Your cart" />

                    {/* Page Header */}
                    <h1 className="page-header text-left text-2xl lg:text-3xl font-semibold text-[#ab91df] mb-6">
                        Your cart
                    </h1>

                    {/* Empty Cart */}
                    <div className="text-center py-12">
                        <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <h2 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h2>
                        <p className="text-gray-500 mb-6">Looks like you haven&apos;t added any items to your cart yet.</p>
                        <Link
                            href="/"
                            className="inline-block px-6 py-3 bg-[#ab91df] text-white rounded-md hover:bg-[#9a7fc9] transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="block bg-white min-h-screen" data-section-id="template--25521513759001__main">
            <div className="cart-container w-full px-4 lg:px-6 py-8">
                {/* Breadcrumb */}
                <Breadcrumb productTitle="Your cart" />

                {/* Page Header */}
                <h1 className="page-header text-left text-2xl lg:text-3xl font-semibold text-[#ab91df] mb-6">
                    Your cart ({cart.itemCount} {cart.itemCount === 1 ? 'item' : 'items'})
                </h1>

                {/* Countdown Timer */}
                <div className="cart-countdown alertBox alertBox--info d-flex flex-align-center flex-jc-center is-running mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-3">
                    <svg className="icon icon-error w-5 h-5 text-blue-600" viewBox="0 0 100 100">
                        <path d="M53,31c0,1.7-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3C51.7,28,53,29.3,53,31z M50,37c-1.7,0-3,1.4-3,3v29 c0,1.7,1.3,3,3,3c1.7,0,3-1.4,3-3V40C53,38.3,51.7,37,50,37z M95,50c0,24.8-20.2,45-45,45C25.2,95,5,74.8,5,50C5,25.2,25.2,5,50,5 C74.8,5,95,25.2,95,50z M91,50C91,27.4,72.6,9,50,9S9,27.4,9,50s18.4,41,41,41S91,72.6,91,50z" fill="currentColor" />
                    </svg>
                    <div className="text alertBox-message text-sm text-gray-700">
                        <span className="text-wrap d-inline-block">
                            Please, hurry! Someone has placed an order on one of the items you have in the cart. We&apos;ll keep it for you for
                        </span>
                        <span className="time d-inline-block font-semibold text-blue-600 mx-1">
                            {String(countdownMinutes).padStart(2, '0')}:{String(countdownSeconds).padStart(2, '0')}
                        </span>
                        minutes.
                    </div>
                </div>

                <div className="halo-page-content halo-cart-content">
                    <div className="cart-content-wrapper clearfix lg:flex lg:gap-8">
                        {/* Cart Items Section */}
                        <div className="cart-content-item lg:w-2/3" data-cart-content="">
                            <div className="cart">
                                {/* Cart Header - Desktop only */}
                                <div className="cart-header hidden lg:grid grid-cols-12 gap-4 mb-4 pb-2 border-b border-gray-200 text-sm font-medium text-gray-600">
                                    <div className="cart-header-info col-span-6">Product</div>
                                    <div className="cart-header-price col-span-2 text-center">Price</div>
                                    <div className="cart-header-quantity col-span-2 text-center">Quantity</div>
                                    <div className="cart-header-total col-span-1 text-center">Total</div>
                                    <div className="cart-header-remove col-span-1"></div>
                                </div>

                                {/* Cart Items List */}
                                <div className="cart-list space-y-4">
                                    {cart.items.map((item) => (
                                        <div key={item.id} className="cart-item border border-gray-200 rounded-lg p-4 lg:p-0 lg:border-0" data-item-row="">
                                            <div className="cart-item-block cart-item-info">
                                                <div className="cart-item-wrapper lg:grid lg:grid-cols-12 lg:gap-4 lg:items-center">
                                                    {/* Product Info - Left side */}
                                                    <div className="lg:col-span-6 flex gap-4">
                                                        {/* Product Image */}
                                                        <div className="cart-item-block-left w-24 lg:w-28 flex-shrink-0">
                                                            <a
                                                                href={`/shop/muslin-swaddle/${item.handle}`}
                                                                className="cart-item-image image-portrait block relative aspect-square bg-gray-100 rounded-lg overflow-hidden group"
                                                            >
                                                                <svg aria-hidden="true" focusable="false" className="icon icon-external-link absolute top-2 right-2 w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 512 512">
                                                                    <path d="M440,256H424a8,8,0,0,0-8,8V464a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V112A16,16,0,0,1,48,96H248a8,8,0,0,0,8-8V72a8,8,0,0,0-8-8H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V264A8,8,0,0,0,440,256ZM500,0,364,.34a12,12,0,0,0-12,12v10a12,12,0,0,0,12,12L454,34l.7.71L131.51,357.86a12,12,0,0,0,0,17l5.66,5.66a12,12,0,0,0,17,0L477.29,57.34l.71.7-.34,90a12,12,0,0,0,12,12h10a12,12,0,0,0,12-12L512,12A12,12,0,0,0,500,0Z" fill="currentColor" />
                                                                </svg>
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.title}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </a>
                                                        </div>

                                                        {/* Product Details */}
                                                        <div className="cart-item-block-right flex-1">
                                                            <h4 className="cart-item-name text-sm lg:text-base font-medium text-gray-800 mb-1">
                                                                <a href={`/shop/muslin-swaddle/${item.handle}`} className="link link-underline hover:text-[#ab91df]">
                                                                    <span className="text">{item.title}</span>
                                                                </a>
                                                            </h4>

                                                            <p className="cart-item-vendor text-xs text-gray-500 mb-2">{item.vendor}</p>

                                                            {/* Selected Options (if any) */}
                                                            {item.selectedOptions && item.selectedOptions.length > 0 && (
                                                                <div className="text-xs text-gray-600 mb-2">
                                                                    <span className="font-medium">Selected: </span>
                                                                    {item.selectedOptions.join(', ')}
                                                                </div>
                                                            )}

                                                            {/* Price - Mobile only */}
                                                            <div className="cart-item-block cart-item-price lg:hidden mt-2">
                                                                <div className="cart-item__price-wrapper">
                                                                    {item.compare_at_price > item.price ? (
                                                                        <dl className="cart-item__discounted-prices flex items-center gap-2">
                                                                            <dt className="sr-only">Regular price</dt>
                                                                            <dd>
                                                                                <s className="cart-item__old-price price price--end text-xs text-gray-400">
                                                                                    {formatPrice(item.compare_at_price)}
                                                                                </s>
                                                                            </dd>
                                                                            <dt className="sr-only">Sale price</dt>
                                                                            <dd className="price price--end text-sm font-semibold text-[#ab91df]">
                                                                                {formatPrice(item.price)}
                                                                            </dd>
                                                                        </dl>
                                                                    ) : (
                                                                        <span className="text-sm font-semibold text-[#ab91df]">
                                                                            {formatPrice(item.price)}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            {/* Mobile Actions - Quantity & Remove */}
                                                            <div className="cart-item-blocks lg:hidden flex items-center justify-between mt-3">
                                                                <div className="cart-item-blocks-left">
                                                                    <div className="cart-item-block cart-item-quantity">
                                                                        <div data-product={item.productId} className="cart-item-qty">
                                                                            <label className="sr-only" htmlFor={`update-${item.id}`}>Quantity</label>
                                                                            <div className="flex items-center border border-gray-300 rounded-md w-fit">
                                                                                <button
                                                                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.maxQuantity)}
                                                                                    className="minus btn-quantity px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-l-md"
                                                                                >
                                                                                    <span className="sr-only">Decrease quantity</span>
                                                                                    <span className="block w-3 h-3">−</span>
                                                                                </button>
                                                                                <input
                                                                                    className="form-input quantity cart-item-qty-input w-12 text-center py-1 text-sm"
                                                                                    id={`update-${item.id}`}
                                                                                    value={item.quantity}
                                                                                    type="number"
                                                                                    min="1"
                                                                                    max={item.maxQuantity}
                                                                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1, item.maxQuantity)}
                                                                                />
                                                                                <button
                                                                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.maxQuantity)}
                                                                                    className="plus btn-quantity px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-r-md"
                                                                                >
                                                                                    <span className="sr-only">Increase quantity</span>
                                                                                    <span className="block w-3 h-3">+</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="cart-item-block cart-item-remove">
                                                                    <button
                                                                        onClick={() => handleRemoveItem(item.id)}
                                                                        className="cart-remove p-2 text-gray-400 hover:text-red-500 transition-colors"
                                                                        aria-label={`Remove ${item.title}`}
                                                                    >
                                                                        <svg className="w-5 h-5" viewBox="0 0 48 48">
                                                                            <path d="M 38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375 L 24 21.171875 L 10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062 L 21.171875 24 L 7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062 L 24 26.828125 L 37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938 L 26.828125 24 L 40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z" fill="currentColor" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Price - Desktop */}
                                                    <div className="cart-item-block cart-item-price hidden lg:block lg:col-span-2 text-center">
                                                        <div className="cart-item__price-wrapper">
                                                            {item.compare_at_price > item.price ? (
                                                                <dl className="cart-item__discounted-prices">
                                                                    <dt className="sr-only">Regular price</dt>
                                                                    <dd>
                                                                        <s className="cart-item__old-price price price--end text-sm text-gray-400">
                                                                            {formatPrice(item.compare_at_price)}
                                                                        </s>
                                                                    </dd>
                                                                    <dt className="sr-only">Sale price</dt>
                                                                    <dd className="price price--end text-sm font-semibold text-[#ab91df]">
                                                                        {formatPrice(item.price)}
                                                                    </dd>
                                                                </dl>
                                                            ) : (
                                                                <span className="text-sm font-semibold text-[#ab91df]">
                                                                    {formatPrice(item.price)}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Quantity - Desktop */}
                                                    <div className="cart-item-block cart-item-quantity hidden lg:block lg:col-span-2">
                                                        <div className="cart-item-qty flex justify-center" data-product={item.productId} data-variant={item.variantId}>
                                                            <label className="sr-only" htmlFor={`update-${item.id}-desktop`}>Quantity</label>
                                                            <div className="flex items-center border border-gray-300 rounded-md w-fit">
                                                                <button
                                                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.maxQuantity)}
                                                                    className="minus btn-quantity px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-l-md"
                                                                >
                                                                    <span className="sr-only">Decrease quantity</span>
                                                                    <span className="block w-3 h-3">−</span>
                                                                </button>
                                                                <input
                                                                    className="form-input quantity cart-item-qty-input w-12 text-center py-1 text-sm"
                                                                    id={`update-${item.id}-desktop`}
                                                                    value={item.quantity}
                                                                    type="number"
                                                                    min="1"
                                                                    max={item.maxQuantity}
                                                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1, item.maxQuantity)}
                                                                />
                                                                <button
                                                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.maxQuantity)}
                                                                    className="plus btn-quantity px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-r-md"
                                                                >
                                                                    <span className="sr-only">Increase quantity</span>
                                                                    <span className="block w-3 h-3">+</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Total - Desktop */}
                                                    <div className="cart-item-block cart-item-total hidden lg:block lg:col-span-1 text-center">
                                                        <span className="cart-item-value text-sm font-medium">
                                                            {formatPrice(item.price * item.quantity)}
                                                        </span>
                                                    </div>

                                                    {/* Remove - Desktop */}
                                                    <div className="cart-item-block cart-item-remove hidden lg:block lg:col-span-1 text-center">
                                                        <button
                                                            onClick={() => handleRemoveItem(item.id)}
                                                            className="cart-remove p-1 text-gray-400 hover:text-red-500 transition-colors"
                                                            aria-label={`Remove ${item.title}`}
                                                        >
                                                            <svg className="w-5 h-5" viewBox="0 0 48 48">
                                                                <path d="M 38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375 L 24 21.171875 L 10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062 L 21.171875 24 L 7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062 L 24 26.828125 L 37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938 L 26.828125 24 L 40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z" fill="currentColor" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cart Note */}
                            <div className="cart-note form-field mt-6">
                                <label className="form-label block text-sm font-medium text-gray-700 mb-2" htmlFor="cart-note">
                                    Additional Comments
                                </label>
                                <textarea
                                    className="form-input form-input-placeholder w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ab91df] focus:border-transparent"
                                    name="note"
                                    id="cart-note"
                                    rows={3}
                                    placeholder="Special instruction for seller..."
                                    value={cartNote}
                                    onChange={(e) => setCartNote(e.target.value)}
                                ></textarea>
                                <button
                                    onClick={handleSaveNote}
                                    className="button button-1 mt-2 px-4 py-2 bg-[#ab91df] text-white rounded-md hover:bg-[#9a7fc9] transition-colors text-sm"
                                    style={{ display: cartNote ? 'inline-block' : 'none' }}
                                >
                                    Save
                                </button>
                            </div>

                            {/* Security Image */}
                            <div className="cart-securityImage mt-6 flex items-center gap-2 text-sm text-gray-600">
                                <span className="cart-securityImage-label flex items-center gap-2">
                                    <svg className="icon icon-shield-check w-5 h-5 text-green-600" viewBox="0 0 179.94 179.96">
                                        <path d="M90,0,5,42.78C13.73,105.26,38.14,154.32,90,180c51.83-25.64,76.25-74.7,85-137.18Z" fill="currentColor" />
                                        <polygon points="149.83 67.57 134.81 52.55 79.31 108.05 49.74 78.48 34.72 93.5 79.15 137.94 79.31 137.78 79.47 137.94 149.83 67.57" fill="white" />
                                    </svg>
                                    Secure Shopping Guarantee
                                </span>
                                <ul className="list-unstyled clearfix"></ul>
                            </div>
                        </div>

                        {/* Order Summary Section */}
                        <div className="cart-content-item cart-total lg:w-1/3 mt-6 lg:mt-0" data-cart-total="">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="bg-gray-50 rounded-lg p-6">
                                    {/* Order Summary Title */}
                                    <div className="cart--totals-title text-lg font-semibold text-[#232323] mb-4">
                                        Order Summary
                                    </div>

                                    <ul className="cart-totals list-unstyled space-y-3">
                                        {/* Subtotal */}
                                        <li className="cart-total cart-total-subtotal flex justify-between items-center">
                                            <div className="cart-total-label"><span className="text text-gray-600">Subtotal</span></div>
                                            <div className="cart-total-value"><span className="text font-medium">{formatPrice(cart.subtotal)}</span></div>
                                        </li>

                                        {/* Coupon Code */}
                                        <li className="cart-total cart-total-coupon">
                                            <div className="cart-total-label mb-2"><span className="text text-gray-600">Coupon Code</span></div>
                                            <div className="cart-coupon-code form-field discount-code-field">
                                                <label className="sr-only" htmlFor="cart-coupon-code">Coupon Code</label>
                                                <div className="flex gap-2">
                                                    <input
                                                        className="form-input flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ab91df] focus:border-transparent text-sm"
                                                        autoComplete="off"
                                                        type="text"
                                                        name="discount"
                                                        id="cart-coupon-code"
                                                        placeholder="Enter Coupon Code"
                                                        value={couponCode}
                                                        onChange={(e) => setCouponCode(e.target.value)}
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={handleApplyCoupon}
                                                        className="px-4 py-2 bg-[#ab91df] text-white rounded-md hover:bg-[#9a7fc9] transition-colors text-sm whitespace-nowrap"
                                                    >
                                                        Apply
                                                    </button>
                                                </div>
                                                <p className="form-text text-xs text-gray-500 mt-1">Coupon code will be applied on the checkout page</p>
                                            </div>
                                        </li>

                                        {/* Discount (if any) */}
                                        {cart.discount > 0 && (
                                            <li className="cart-discount cart-total-savings flex justify-between items-center text-green-600">
                                                <div className="cart-total-label"><span className="text">Discount:</span></div>
                                                <div className="cart-total-value">
                                                    <span className="text font-medium">-{formatPrice(cart.discount)}</span>
                                                </div>
                                            </li>
                                        )}

                                        {/* Total */}
                                        <li className="cart-total cart-total-grandtotal flex justify-between items-center pt-3 border-t border-gray-200">
                                            <div className="cart-total-label"><span className="text font-semibold">Total:</span></div>
                                            <div className="cart-total-value" data-cart-total-value={cart.total}>
                                                <span className="text font-bold text-lg text-[#ab91df]">{formatPrice(cart.total)}</span>
                                            </div>
                                        </li>

                                        {/* Tax & Shipping Info */}
                                        <li className="shipTotal">
                                            <p className="cart-total-value form-text text-xs text-gray-500">Tax and shipping calculated at checkout</p>
                                        </li>

                                        {/* Delivery Info */}
                                        <li className="deliverytime space-y-1">
                                            <p className="cart-total-value form-text text-xs text-green-600">Free Shipping on Prepaid orders above 799</p>
                                            <p className="cart-total-value form-text text-xs text-gray-500">Std delivery time : 3-5 days</p>
                                        </li>
                                    </ul>

                                    {/* Checkout Actions */}
                                    <div className="cart-actions mt-6">
                                        <div className="action-group space-y-3">
                                            {/* Checkout Button */}
                                            <div className="gokwik-checkout">
                                                <button
                                                    type="button"
                                                    className="w-full bg-[#232323] text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                                    onClick={handleCheckout}
                                                    disabled={isCheckoutLoading}
                                                >
                                                    {isCheckoutLoading ? (
                                                        <>
                                                            <span className="btn-text">Processing...</span>
                                                            <div className="addloadr" id="btn-loader">
                                                                <div className="cir-loader inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="btn-text">Proceed to Checkout</span>
                                                        </>
                                                    )}
                                                </button>
                                            </div>

                                            {/* Continue Shopping */}
                                            <Link
                                                href="/"
                                                className="button button-2 button-continue w-full block text-center border border-[#232323] text-[#232323] py-3 px-6 rounded-md hover:bg-gray-100 transition-colors"
                                            >
                                                Continue shopping
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Live Region (for accessibility) */}
                <p className="visually-hidden sr-only" id="cart-live-region-text" aria-live="polite" role="status"></p>
                <p className="visually-hidden sr-only" id="shopping-cart-line-item-status" aria-live="polite" aria-hidden="true" role="status">Loading...</p>
            </div>

            {/* Login Modal */}
            <LoginModal
                isOpen={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                onSuccess={handleLoginSuccess}
            />
        </div>
    );
}