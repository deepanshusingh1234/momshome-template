// components/auth/LoginModal.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
}

export default function LoginModal({ isOpen, onClose, onSuccess }: LoginModalProps) {
    const router = useRouter();
    const [mobileNumber, setMobileNumber] = useState("");
    const [couponCode, setCouponCode] = useState("");
    const [acceptNotifications, setAcceptNotifications] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [showCoupons, setShowCoupons] = useState(false);

    // Mock coupons
    const coupons = [
        { code: "WELCOME20", discount: "20% OFF", description: "Welcome discount for new users" },
        { code: "SAVE100", discount: "₹100 OFF", description: "On orders above ₹999" },
        { code: "FREESHIP", discount: "Free Shipping", description: "Free shipping on all orders" },
        { code: "FIRSTORDER", discount: "15% OFF", description: "First order special" },
        { code: "MOMSLOVE", discount: "₹150 OFF", description: "On orders above ₹1499" },
        { code: "BABY10", discount: "10% OFF", description: "Baby products special" },
        { code: "WELCOME15", discount: "15% OFF", description: "New user welcome" },
        { code: "FLAT200", discount: "₹200 OFF", description: "On orders above ₹1999" },
        { code: "EXTRA5", discount: "5% EXTRA", description: "Extra 5% off on prepaid" },
    ];

    // Mock order summary (you would get this from sessionStorage)
    const [orderSummary, setOrderSummary] = useState({
        itemsCount: 2,
        subtotal: 2798,
        discount: 1600,
        total: 1198,
        saved: 1600
    });

    // Prevent body scroll when modal is open
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

    // Load checkout data when modal opens
    useEffect(() => {
        if (isOpen) {
            const checkoutData = sessionStorage.getItem('checkoutData');
            if (checkoutData) {
                try {
                    const data = JSON.parse(checkoutData);
                    if (data.cart) {
                        setOrderSummary({
                            itemsCount: data.cart.itemCount || 2,
                            subtotal: data.cart.subtotal || 2798,
                            discount: data.cart.discount || 1600,
                            total: data.cart.total || 1198,
                            saved: data.cart.discount || 1600
                        });
                    }
                } catch (error) {
                    console.error("Error parsing checkout data:", error);
                }
            }
        }
    }, [isOpen]);

    const formatPrice = (price: number) => {
        return `₹${price.toLocaleString('en-IN')}`;
    };

    const handleContinue = () => {
        if (mobileNumber.length !== 10) return;

        setIsLoading(true);

        // Simulate login/OTP send
        setTimeout(() => {
            setIsLoading(false);

            // After successful login
            if (onSuccess) {
                onSuccess();
            }
            onClose();
        }, 1000);
    };

    const handleApplyCoupon = () => {
        if (couponCode.trim()) {
            console.log("Applying coupon:", couponCode);
            setCouponCode("");
        }
    };

    const handleSelectCoupon = (code: string) => {
        setCouponCode(code);
        setShowCoupons(false);
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop with blur */}
            <div
                className="fixed inset-0 bg-[#00000080] bg-opacity-50  transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <div
                        className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Header with Order Summary */}
                        <div className="bg-white border-b border-gray-100 p-6">
                            <div className="flex items-center justify-between">
                                <div className="merchant-logo">
                                    <img
                                        src="https://cdn.gokwik.co/merchant/19scw3ue5v2w/logo1725600558946.png"
                                        alt="Moms Home"
                                        className="h-8 w-auto object-contain"
                                        onError={(e) => {
                                            e.currentTarget.src = '/moms_logo-01.svg';
                                        }}
                                    />
                                </div>
                                <div className="order-summary-header">
                                    <div className="bg-gray-50 rounded-lg px-3 py-2">
                                        <div className="summary-left text-right">
                                            <div className="summary-top-line flex items-center gap-1 text-sm justify-end">
                                                <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-xs font-semibold">
                                                    {formatPrice(orderSummary.saved)} saved
                                                </span>
                                                <span className="dot-separator text-gray-400">•</span>
                                                <span className="item-count text-gray-600">{orderSummary.itemsCount} items</span>
                                            </div>
                                            <div className="summary-pricing flex items-center gap-1 mt-0.5 justify-end">
                                                <del className="strike-through text-xs text-gray-400">
                                                    {formatPrice(orderSummary.subtotal)}
                                                </del>
                                                <span className="final-price text-base font-semibold text-[#a790d4]">
                                                    {formatPrice(orderSummary.total)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Banner */}
                            <div className="mt-4">
                                <div className="offer-strip w-full rounded-lg" style={{ background: "#dcccf7", color: "#371241" }}>
                                    <div className="py-2 px-3 text-sm font-medium text-center">
                                        Trusted by 20 lacs + Happy Parents
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                            {/* Discounts Section */}
                            <div className="discounts-wrapper bg-white rounded-xl border border-gray-200 w-full mb-4">
                                <div className="discounts w-full p-3 flex flex-col gap-y-2">
                                    <div className="w-full flex items-center gap-x-2">
                                        <div className="discount-coupon-inner floating-input-group w-full relative">
                                            <div className="discount-box px-3 py-2 flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-[#a790d4] focus-within:border-transparent transition-all">
                                                <input
                                                    type="text"
                                                    value={couponCode}
                                                    onChange={(e) => setCouponCode(e.target.value)}
                                                    maxLength={64}
                                                    className="discount-input-field w-full outline-none text-sm"
                                                    placeholder=" "
                                                    id="discount-modal"
                                                />
                                                <label
                                                    htmlFor="discount-modal"
                                                    className={`absolute left-3 transition-all pointer-events-none ${couponCode ? 'text-xs -top-2 bg-white px-1 text-gray-600' : 'text-sm top-3 text-gray-400'
                                                        }`}
                                                >
                                                    Enter coupon code
                                                </label>
                                            </div>
                                        </div>
                                        {couponCode && (
                                            <button
                                                onClick={handleApplyCoupon}
                                                className="px-4 py-2 bg-[#a790d4] text-white text-sm font-medium rounded-lg hover:bg-[#9a7fc9] transition-colors whitespace-nowrap"
                                            >
                                                Apply
                                            </button>
                                        )}
                                    </div>

                                    <div className="view-offer-wrap">
                                        <button
                                            onClick={() => setShowCoupons(!showCoupons)}
                                            className="flex items-center justify-between w-full text-sm p-0"
                                        >
                                            <div className="flex gap-x-2 items-center">
                                                <svg className="w-5 h-5 text-[#a790d4]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v3" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <span className="text-gray-700">9 coupons available</span>
                                            </div>
                                            <span className="view-offer text-sm font-semibold text-[#a790d4]">
                                                {showCoupons ? 'Hide' : 'View All'}
                                            </span>
                                        </button>
                                    </div>

                                    {/* Coupons Grid */}
                                    {showCoupons && (
                                        <div className="coupons-grid grid grid-cols-2 gap-2 mt-2 max-h-40 overflow-y-auto p-1">
                                            {coupons.map((coupon) => (
                                                <button
                                                    key={coupon.code}
                                                    onClick={() => handleSelectCoupon(coupon.code)}
                                                    className="coupon-item p-2 border border-gray-200 rounded-lg hover:border-[#a790d4] hover:shadow-sm transition-all text-left"
                                                >
                                                    <div className="font-semibold text-sm text-[#a790d4]">{coupon.code}</div>
                                                    <div className="text-xs font-medium text-gray-700">{coupon.discount}</div>
                                                    <div className="text-xs text-gray-500 mt-1 line-clamp-2">{coupon.description}</div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Login Section */}
                            <div className="login-container bg-white border border-gray-200 rounded-xl">
                                <div className="login-body p-4">
                                    <div className="login-info flex items-center gap-3 mb-4">
                                        <div className="img-wrap flex items-center justify-center w-10 h-10 bg-[#a790d4] bg-opacity-10 rounded-full">
                                            <svg className="w-5 h-5 text-[#a790d4]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeWidth="2" strokeLinecap="round" />
                                                <circle cx="12" cy="7" r="4" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-medium">Login to continue</span>
                                    </div>

                                    <div className="input-wrapper text-sm flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-[#a790d4] focus-within:border-transparent transition-all">
                                        <span className="country-code px-3 py-3 text-gray-700 font-medium border-r border-gray-300">+91</span>
                                        <span className="separator px-2 text-gray-300">|</span>
                                        <div className="floating-input-group relative flex-1">
                                            <input
                                                type="tel"
                                                className="phone-input w-full px-3 py-3 outline-none text-gray-700"
                                                id="phone-input-modal"
                                                pattern="[0-9]{10}"
                                                maxLength={10}
                                                value={mobileNumber}
                                                onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                                placeholder=" "
                                                autoFocus
                                            />
                                            <label
                                                htmlFor="phone-input-modal"
                                                className={`absolute left-3 transition-all pointer-events-none ${mobileNumber ? 'text-xs -top-2 bg-white px-1 text-gray-600' : 'text-sm top-3 text-gray-400'
                                                    }`}
                                            >
                                                Enter Mobile Number
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Notification Checkbox */}
                            <div className="notification-checkbox text-sm px-1 flex items-center gap-x-2 mt-4">
                                <input
                                    type="checkbox"
                                    id="notifications-modal"
                                    checked={acceptNotifications}
                                    onChange={(e) => setAcceptNotifications(e.target.checked)}
                                    className="styled-checkbox w-4 h-4 rounded border-gray-300 text-[#a790d4] focus:ring-[#a790d4]"
                                />
                                <label htmlFor="notifications-modal" className="text-gray-600">
                                    Send me order updates & offers - (no spam)
                                </label>
                            </div>
                        </div>

                        {/* Footer with Continue Button */}
                        <div className="border-t border-gray-200 p-6">
                            <button
                                className={`w-full py-3 px-4 rounded-lg text-sm font-semibold transition-all ${mobileNumber.length === 10
                                    ? 'bg-[#a790d4] text-white hover:bg-[#9a7fc9]'
                                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                    }`}
                                onClick={handleContinue}
                                disabled={mobileNumber.length !== 10 || isLoading}
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    'Continue'
                                )}
                            </button>

                            {/* Terms and Conditions */}
                            <div className="text-center mt-3">
                                <p className="text-xs text-gray-500">
                                    By proceeding, I agree to Gokwik&apos;s{' '}
                                    <a href="https://www.gokwik.co/data-policy" target="_blank" rel="noopener noreferrer" className="text-[#a790d4] font-semibold hover:underline">
                                        Privacy Policy
                                    </a>
                                    {' '}and{' '}
                                    <a href="https://www.gokwik.co/terms" target="_blank" rel="noopener noreferrer" className="text-[#a790d4] font-semibold hover:underline">
                                        T&C
                                    </a>
                                </p>
                                <p className="text-xs text-gray-400 mt-1">ae7f4e6f</p>
                            </div>

                            {/* Powered by and icons */}
                            <div className="mt-4 flex flex-col items-center">
                                <div className="footer-section flex items-center justify-center gap-4">
                                    <div className="icon pciDss">
                                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z" />
                                        </svg>
                                    </div>
                                    <div className="icon securedPayments">
                                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                                        </svg>
                                    </div>
                                    <div className="icon verified">
                                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82 1.89 3.2L12 21.04l3.4 1.46 1.89-3.2 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="powered-container flex justify-center mt-2">
                                    <img
                                        src="/assets/icons/poweredBy.svg"
                                        alt="Powered by Gokwik"
                                        className="h-3 opacity-40"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}