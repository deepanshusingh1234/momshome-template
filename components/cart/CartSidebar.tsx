// components/cart/CartSidebar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
    const { cart, updateQuantity, removeFromCart, applyCoupon, updateNote } = useCart();
    const [couponCode, setCouponCode] = useState("");
    const [cartNote, setCartNote] = useState("");
    const [showNotePopup, setShowNotePopup] = useState(false);
    const [showCouponPopup, setShowCouponPopup] = useState(false);
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

    // Close sidebar when clicking outside or pressing escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Prevent body scroll when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

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
            setShowCouponPopup(false);
        }
    };

    const handleSaveNote = () => {
        updateNote(cartNote);
        setShowNotePopup(false);
    };

    const handleCheckout = () => {
        setIsCheckoutLoading(true);
        // Checkout logic here
        setTimeout(() => {
            setIsCheckoutLoading(false);
            // Navigate to checkout
        }, 2000);
    };

    const formatPrice = (price: number) => {
        return `Rs. ${(price / 100).toFixed(2)}`;
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
                onClick={onClose}
            />

            {/* Sidebar */}
            <div className="halo-sidebar halo-sidebar-right fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out overflow-hidden">
                {/* Close Button */}
                <button
                    type="button"
                    className="halo-sidebar-close button-effect absolute top-4 right-4 z-10 flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={onClose}
                >
                    <svg className="w-5 h-5" viewBox="0 0 48 48">
                        <path d="M 38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375 L 24 21.171875 L 10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062 L 21.171875 24 L 7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062 L 24 26.828125 L 37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938 L 26.828125 24 L 40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z" fill="currentColor" />
                    </svg>
                    <span>Close</span>
                </button>

                {/* Header */}
                <div className="halo-sidebar-header text-left p-6 border-b border-gray-200">
                    <span className="title text-xl font-semibold text-[#232323]">Shopping Cart</span>
                    <div className="wrapper-cartCount mt-1">
                        <span className="cartCount font-medium text-[#ab91df]">{cart.itemCount}</span>
                        <span className="text-gray-600 ml-1">items</span>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="halo-sidebar-wrapper custom-scrollbar h-[calc(100vh-200px)] overflow-y-auto p-6">
                    <div className="cart-coupon-discount" data-is-sidebar="true">
                        {/* Discount Icon Template */}
                        <template data-discount-icon="">
                            <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-discount w-4 h-4" viewBox="0 0 12 12">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7 0h3a2 2 0 012 2v3a1 1 0 01-.3.7l-6 6a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4l6-6A1 1 0 017 0zm2 2a1 1 0 102 0 1 1 0 00-2 0z" fill="currentColor" />
                            </svg>
                        </template>

                        {/* Discounted Price Template */}
                        <template data-discounted-price-template="">
                            <span className="previewCartItem-saving-price">
                                <s className="before-discount-price" data-original-price-display=""></s>
                                <span className="discounted-price" data-current-price-display=""></span>
                            </span>
                        </template>

                        {/* Cart Items */}
                        <div className="previewCart-wrapper">
                            {cart.items.length === 0 ? (
                                <div className="text-center py-8">
                                    <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    <p className="text-gray-500">Your cart is empty</p>
                                </div>
                            ) : (
                                <div className="previewCart">
                                    <ul className="previewCartList list-unstyled space-y-4">
                                        {cart.items.map((item) => (
                                            <li key={item.id} className="previewCartItem clearfix flex gap-4 pb-4 border-b border-gray-100">
                                                {/* Product Image */}
                                                <a
                                                    href={`/shop/${item.handle.split('-')[0] || 'muslin-swaddle'}/${item.handle}`}
                                                    className="previewCartItem-image flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden"
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover"
                                                        width="80"
                                                        height="80"
                                                        loading="lazy"
                                                    />
                                                </a>

                                                {/* Product Content */}
                                                <div className="previewCartItem-content cart-item-block-right flex-1">
                                                    <a
                                                        className="previewCartItem-name link-underline block text-sm font-medium text-gray-800 hover:text-[#ab91df] mb-1"
                                                        href={`/shop/${item.handle.split('-')[0] || 'muslin-swaddle'}/${item.handle}`}
                                                    >
                                                        <span className="text line-clamp-2">{item.title}</span>
                                                    </a>

                                                    {/* Properties/Options */}
                                                    {item.selectedOptions && item.selectedOptions.length > 0 && (
                                                        <dl className="card-properties definitionList cart-item-properties text-xs text-gray-600 mb-2">
                                                            <div className="flex gap-1">
                                                                <dt className="font-medium">Selected:</dt>
                                                                <dd>{item.selectedOptions.join(', ')}</dd>
                                                            </div>
                                                        </dl>
                                                    )}

                                                    {/* Price and Quantity */}
                                                    <div className="previewCartItem-change flex items-center justify-between">
                                                        {/* Price */}
                                                        <div className="previewCartItem-price" data-price={item.price}>
                                                            <span className="price">
                                                                {item.compare_at_price > item.price ? (
                                                                    <span className="previewCartItem-saving-price saved_compare_price">
                                                                        <s className="before-discount-price text-xs text-gray-400 mr-2">
                                                                            {formatPrice(item.compare_at_price)}
                                                                        </s>
                                                                        <span className="discounted-price text-sm font-semibold text-[#ab91df]">
                                                                            {formatPrice(item.price)}
                                                                        </span>
                                                                    </span>
                                                                ) : (
                                                                    <span className="discounted-price text-sm font-semibold text-[#ab91df]">
                                                                        {formatPrice(item.price)}
                                                                    </span>
                                                                )}
                                                            </span>
                                                        </div>

                                                        {/* Quantity */}
                                                        <div className="previewCartItem-qty flex items-center border border-gray-300 rounded-md">
                                                            <button
                                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.maxQuantity)}
                                                                className="minus btn-quantity px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-l-md"
                                                            >
                                                                <span className="sr-only">Decrease quantity</span>
                                                                <span className="block w-3 h-3">−</span>
                                                            </button>
                                                            <input
                                                                className="form-input quantity w-10 text-center py-1 text-sm border-x border-gray-300"
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

                                                {/* Remove Button */}
                                                <button
                                                    type="button"
                                                    className="previewCartItem-remove text-gray-400 hover:text-red-500 transition-colors"
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    title={`Remove ${item.title}`}
                                                >
                                                    <svg className="w-5 h-5" viewBox="0 0 48 48">
                                                        <path d="M 38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375 L 24 21.171875 L 10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062 L 21.171875 24 L 7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062 L 24 26.828125 L 37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938 L 26.828125 24 L 40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z" fill="currentColor" />
                                                    </svg>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Tool Icons (Note & Coupon) */}
                        {cart.items.length > 0 && (
                            <>
                                <div className="previewCartTool flex gap-4 mt-6">
                                    <button
                                        className="cartTool-item cart-tool-note flex items-center gap-2 text-gray-600 hover:text-[#ab91df] transition-colors"
                                        onClick={() => setShowNotePopup(!showNotePopup)}
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 384 512">
                                            <path fill="currentColor" d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z" />
                                        </svg>
                                        <span>Add Note</span>
                                    </button>
                                    <button
                                        className="cartTool-item cart-tool-discount flex items-center gap-2 text-gray-600 hover:text-[#ab91df] transition-colors"
                                        onClick={() => setShowCouponPopup(!showCouponPopup)}
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.745 18.745 49.137 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zm-22.627 45.255L271.196 475.314c-6.243 6.243-16.375 6.253-22.627 0L36.686 263.431A15.895 15.895 0 0 1 32 252.117V48c0-8.822 7.178-16 16-16h204.118c4.274 0 8.292 1.664 11.314 4.686l211.882 211.882c6.238 6.239 6.238 16.39 0 22.628zM144 124c11.028 0 20 8.972 20 20s-8.972 20-20 20-20-8.972-20-20 8.972-20 20-20m0-28c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z" />
                                        </svg>
                                        <span>Add Coupon</span>
                                    </button>
                                </div>

                                {/* Popups */}
                                <div className="popup-toolDowns mt-4">
                                    {/* Note Popup */}
                                    {showNotePopup && (
                                        <div className="popup-toolDown border border-gray-200 rounded-lg p-4 mb-4">
                                            <div className="cart__note">
                                                <label htmlFor="Cart-note" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                                    <svg className="w-4 h-4" viewBox="0 0 384 512">
                                                        <path fill="currentColor" d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z" />
                                                    </svg>
                                                    Order special instructions
                                                </label>
                                                <textarea
                                                    className="text-area text-area--resize-vertical field__input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ab91df] focus:border-transparent"
                                                    rows={3}
                                                    value={cartNote}
                                                    onChange={(e) => setCartNote(e.target.value)}
                                                    placeholder="Order special instructions"
                                                />
                                                <div className="flex gap-2 mt-2">
                                                    <button
                                                        type="button"
                                                        className="button button-1 px-4 py-2 bg-[#ab91df] text-white rounded-md hover:bg-[#9a7fc9] transition-colors text-sm"
                                                        onClick={handleSaveNote}
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="button button-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors text-sm"
                                                        onClick={() => setShowNotePopup(false)}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Coupon Popup */}
                                    {showCouponPopup && (
                                        <div className="popup-toolDown border border-gray-200 rounded-lg p-4">
                                            <div className="discount-code-field">
                                                <label htmlFor="coupon-code" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                                    <svg className="w-4 h-4" viewBox="0 0 512 512">
                                                        <path fill="currentColor" d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.745 18.745 49.137 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zm-22.627 45.255L271.196 475.314c-6.243 6.243-16.375 6.253-22.627 0L36.686 263.431A15.895 15.895 0 0 1 32 252.117V48c0-8.822 7.178-16 16-16h204.118c4.274 0 8.292 1.664 11.314 4.686l211.882 211.882c6.238 6.239 6.238 16.39 0 22.628zM144 124c11.028 0 20 8.972 20 20s-8.972 20-20 20-20-8.972-20-20 8.972-20 20-20m0-28c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z" />
                                                    </svg>
                                                    Add A Coupon
                                                </label>
                                                <p className="text-xs text-gray-500 mb-2">Enter your coupon code</p>
                                                <input
                                                    autoComplete="off"
                                                    type="text"
                                                    value={couponCode}
                                                    onChange={(e) => setCouponCode(e.target.value)}
                                                    className="field__input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ab91df] focus:border-transparent"
                                                    placeholder="Enter coupon code"
                                                />
                                                <div className="flex gap-2 mt-2">
                                                    <button
                                                        type="button"
                                                        className="button button-1 px-4 py-2 bg-[#ab91df] text-white rounded-md hover:bg-[#9a7fc9] transition-colors text-sm"
                                                        onClick={handleApplyCoupon}
                                                    >
                                                        Apply
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="button button-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors text-sm"
                                                        onClick={() => setShowCouponPopup(false)}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Footer - Cart Totals & Actions */}
                {cart.items.length > 0 && (
                    <div className="previewCartInfo absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6">
                        <ul className="previewCartTotalsPrice list-unstyled space-y-2">
                            <li className="previewCartTotals subTotal clearfix flex justify-between">
                                <div className="previewCartTotals-label text-gray-600">Subtotal:</div>
                                <div className="previewCartTotals-value font-medium" data-cart-subtotal="">
                                    {formatPrice(cart.subtotal)}
                                </div>
                            </li>

                            {/* Discount (if any) */}
                            {cart.discount > 0 && (
                                <li className="previewCartTotals cart-total-savings flex justify-between text-green-600">
                                    <div className="previewCartTotals-label">
                                        <span className="text">Discount:</span>
                                    </div>
                                    <div className="previewCartTotals-value">
                                        <span className="text" data-saved-discount-value="">-{formatPrice(cart.discount)}</span>
                                    </div>
                                </li>
                            )}

                            <li className="previewCartTotals total clearfix flex justify-between pt-2 border-t border-gray-200">
                                <div className="previewCartTotals-label font-semibold">Total:</div>
                                <div className="previewCartTotals-value font-bold text-lg text-[#ab91df]" data-cart-total-value={cart.total}>
                                    {formatPrice(cart.total)}
                                </div>
                            </li>

                            <li className="previewCartTotals shipTotal clearfix">
                                <div className="previewCartTotals-value text-xs text-gray-500">
                                    Tax and shipping calculated at checkout
                                </div>
                            </li>
                        </ul>

                        <div className="previewCartAction text-left mt-4">
                            <div className="previewCartGroup space-y-3">
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
                                                <div className="addloadr">
                                                    <div className="cir-loader inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                </div>
                                            </>
                                        ) : (
                                            <span className="btn-text">Checkout</span>
                                        )}
                                    </button>
                                </div>

                                {/* View Cart Link */}
                                <Link
                                    href="/cart"
                                    className="button button-2 button-view-cart w-full block text-center border border-[#232323] text-[#232323] py-3 px-6 rounded-md hover:bg-gray-100 transition-colors"
                                    onClick={onClose}
                                >
                                    View Cart
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}