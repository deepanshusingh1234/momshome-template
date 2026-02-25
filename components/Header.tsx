// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import headerData from "../data/header-nav.json";
import type { HeaderData, NavItem, Link as LinkType, Column, Section } from "../types/header";
import MainLogin from "@/components/auth/MainLogin";

const Header = () => {
    const { cart } = useCart();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showUserDrawer, setShowUserDrawer] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    const data = headerData as HeaderData;

    // Wait for component to mount to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Get cart count from cart.itemCount (provided by your context)
    const cartCount = cart?.itemCount || 0;

    // Debug: Log cart data
    useEffect(() => {
        console.log("Header cart data:", cart);
        console.log("Header cart count:", cartCount);
    }, [cart, cartCount]);

    const toggleMobileSubmenu = (id: string) => {
        if (mobileSubmenuOpen === id) {
            setMobileSubmenuOpen(null);
        } else {
            setMobileSubmenuOpen(id);
        }
    };

    // Don't render cart count until mounted to avoid hydration mismatch
    const displayCartCount = mounted ? cartCount : 0;

    return (
        <>
            {/* Top Banner - Full Width */}
            <div className="bg-[#ffedf3] text-center py-2 px-3 text-xs sm:text-sm text-[#a704f5] w-full whitespace-normal">
                <span className="inline-block max-w-full">
                    {data.topBanner.text}{" "}
                    <span className="font-semibold whitespace-nowrap">{data.topBanner.code}</span>{" "}
                    {data.topBanner.condition}
                </span>
            </div>

            {/* Main Header with Logo and Search - Full Width */}
            <div className="bg-[#dbcdf7] border-b border-gray-200 w-full">
                <div className="w-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
                    <div className="flex items-center justify-between gap-1 sm:gap-2 lg:gap-4">
                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-1.5 text-[#5c3b83] hover:text-[#ab91df] transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Menu"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="block">
                                <img
                                    src="/moms_logo-01.svg"
                                    alt="Moms Home"
                                    className="w-[100px] sm:w-[120px] lg:w-[140px] xl:w-[160px] h-auto"
                                />
                            </Link>
                        </div>

                        {/* Search Bar - Hidden on mobile, visible on desktop */}
                        <div className="hidden lg:block flex-1 max-w-2xl">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder={data.searchPlaceholder}
                                    className="w-full px-5 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-[#ab91df] focus:ring-2 focus:ring-[#ab91df] focus:ring-opacity-20 text-sm pr-14 placeholder-[#ab91df]"
                                />
                                <button
                                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-[#dbcdf7] text-white rounded-full hover:bg-[#9a7fc9] transition-colors duration-200 shadow-sm hover:shadow-md"
                                    aria-label="Search"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Contact Info with Icons */}
                        <div className="flex-shrink-0">
                            <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
                                {/* Contact Numbers - Hidden on mobile */}
                                <div className="hidden lg:block text-right">
                                    <div className="text-xs text-[#5c3b83] mb-0.5">{data.contact.label}</div>
                                    <div className="space-y-0.5">
                                        {data.contact.numbers.map((number, index) => (
                                            <a
                                                key={index}
                                                href={`tel:${number.replace(/-/g, '')}`}
                                                className="block text-xs font-medium"
                                            >
                                                {number}
                                            </a>
                                        ))}
                                    </div>
                                </div>



                                {/* User Icon */}
                                <div className="header--icon relative">
                                    {!isLoggedIn ? (
                                        <div
                                            className="cursor-pointer flex items-center hover:opacity-80 transition-opacity p-1"
                                            onClick={() => setShowLoginModal(true)}
                                            aria-label="Login"
                                        >
                                            <svg width="24" height="24" className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.9129 12.935L13.7571 23.0474C13.5348 23.2929 13.1284 23.1084 13.1669 22.7794L14.0816 14.9731H10.6991C10.4034 14.9731 10.2484 14.6219 10.4478 14.4035L20.3133 3.59739C20.5589 3.32834 20.9984 3.58134 20.8891 3.92887L18.2354 12.3664H22.6607C22.9557 12.3664 23.1109 12.7163 22.9129 12.935Z" fill="#FEA203" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M16.6079 5.35819C16.4805 5.1933 16.3421 5.03582 16.1932 4.8869C15.2702 3.96387 14.0183 3.44531 12.7129 3.44531C11.4075 3.44531 10.1556 3.96387 9.2326 4.8869C8.30957 5.80993 7.79102 7.06183 7.79102 8.36719C7.79102 9.67255 8.30957 10.9244 9.2326 11.8475C9.48368 12.0986 9.75909 12.3197 10.0533 12.5086L11.0235 11.4503C10.7335 11.2914 10.4649 11.0911 10.227 10.8531C9.56766 10.1938 9.19727 9.29959 9.19727 8.36719C9.19727 7.43479 9.56766 6.54057 10.227 5.88127C10.8863 5.22196 11.7805 4.85156 12.7129 4.85156C13.6453 4.85156 14.5395 5.22196 15.1988 5.88127C15.3636 6.04604 15.5103 6.22549 15.6377 6.41654L16.6079 5.35819ZM20.6413 18.6497L19.6746 19.7132C20.1676 20.4122 20.4473 21.2264 20.4473 22.0781V23.8359C20.4473 24.2243 20.7621 24.5391 21.1504 24.5391C21.5387 24.5391 21.8535 24.2243 21.8535 23.8359V22.0781C21.8535 20.7863 21.4016 19.6103 20.6413 18.6497ZM12.3111 17.5078H10.3026C7.27113 17.5078 4.97852 19.6394 4.97852 22.0781V23.8359C4.97852 24.2243 4.66372 24.5391 4.27539 24.5391C3.88707 24.5391 3.57227 24.2243 3.57227 23.8359V22.0781C3.57227 18.6922 6.67684 16.1016 10.3026 16.1016H12.4885L12.3111 17.5078Z" fill="currentColor" stroke="currentColor" />
                                            </svg>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex items-center gap-0.5">
                                                <div
                                                    className="cursor-pointer hover:opacity-80 transition-opacity p-1"
                                                    onClick={() => setIsLoggedIn(false)}
                                                    aria-label="Close"
                                                >
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <div
                                                    className="cursor-pointer hover:opacity-80 transition-opacity p-1"
                                                    onClick={() => setShowUserDrawer(!showUserDrawer)}
                                                    aria-label="User menu"
                                                >
                                                    <svg width="24" height="24" className="sm:w-7 sm:h-7" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.9129 12.935L13.7571 23.0474C13.5348 23.2929 13.1284 23.1084 13.1669 22.7794L14.0816 14.9731H10.6991C10.4034 14.9731 10.2484 14.6219 10.4478 14.4035L20.3133 3.59739C20.5589 3.32834 20.9984 3.58134 20.8891 3.92887L18.2354 12.3664H22.6607C22.9557 12.3664 23.1109 12.7163 22.9129 12.935Z" fill="#FEA203" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.6079 5.35819C16.4805 5.1933 16.3421 5.03582 16.1932 4.8869C15.2702 3.96387 14.0183 3.44531 12.7129 3.44531C11.4075 3.44531 10.1556 3.96387 9.2326 4.8869C8.30957 5.80993 7.79102 7.06183 7.79102 8.36719C7.79102 9.67255 8.30957 10.9244 9.2326 11.8475C9.48368 12.0986 9.75909 12.3197 10.0533 12.5086L11.0235 11.4503C10.7335 11.2914 10.4649 11.0911 10.227 10.8531C9.56766 10.1938 9.19727 9.29959 9.19727 8.36719C9.19727 7.43479 9.56766 6.54057 10.227 5.88127C10.8863 5.22196 11.7805 4.85156 12.7129 4.85156C13.6453 4.85156 14.5395 5.22196 15.1988 5.88127C15.3636 6.04604 15.5103 6.22549 15.6377 6.41654L16.6079 5.35819ZM20.6413 18.6497L19.6746 19.7132C20.1676 20.4122 20.4473 21.2264 20.4473 22.0781V23.8359C20.4473 24.2243 20.7621 24.5391 21.1504 24.5391C21.5387 24.5391 21.8535 24.2243 21.8535 23.8359V22.0781C21.8535 20.7863 21.4016 19.6103 20.6413 18.6497ZM12.3111 17.5078H10.3026C7.27113 17.5078 4.97852 19.6394 4.97852 22.0781V23.8359C4.97852 24.2243 4.66372 24.5391 4.27539 24.5391C3.88707 24.5391 3.57227 24.2243 3.57227 23.8359V22.0781C3.57227 18.6922 6.67684 16.1016 10.3026 16.1016H12.4885L12.3111 17.5078Z" fill="currentColor" stroke="currentColor" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* User Drawer */}
                                            {showUserDrawer && (
                                                <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg border border-gray-200 w-56 z-50">
                                                    <ul className="py-1">
                                                        <li>
                                                            <Link
                                                                href="/order-history"
                                                                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition-colors text-sm"
                                                                onClick={() => setShowUserDrawer(false)}
                                                            >
                                                                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.6 2.20033L3.3 3.93366C3.04251 4.27697 2.91377 4.44863 2.91676 4.59232C2.91936 4.71736 2.97799 4.83462 3.07646 4.91172C3.18962 5.00032 3.40419 5.00032 3.83333 5.00032H16.1667C16.5958 5.00032 16.8104 5.00032 16.9235 4.91172C17.022 4.83462 17.0806 4.71736 17.0832 4.59232C17.0862 4.44863 16.9575 4.27697 16.7 3.93366L15.4 2.20033M4.6 2.20033C4.74667 2.00477 4.82 1.90699 4.91294 1.83647C4.99525 1.77401 5.08846 1.72741 5.18782 1.69903C5.3 1.66699 5.42222 1.66699 5.66667 1.66699H14.3333C14.5778 1.66699 14.7 1.66699 14.8122 1.69903C14.9115 1.72741 15.0047 1.77401 15.0871 1.83647C15.18 1.90699 15.2533 2.00477 15.4 2.20033M4.6 2.20033L3.03333 4.28921C2.83545 4.55306 2.73651 4.68498 2.66625 4.83026C2.6039 4.95917 2.55843 5.09559 2.53096 5.23612C2.5 5.3945 2.5 5.55941 2.5 5.88921L2.5 15.667C2.5 16.6004 2.5 17.0671 2.68166 17.4236C2.84144 17.7372 3.09641 17.9922 3.41002 18.152C3.76654 18.3337 4.23325 18.3337 5.16667 18.3337L14.8333 18.3337C15.7668 18.3337 16.2335 18.3337 16.59 18.152C16.9036 17.9922 17.1586 17.7372 17.3183 17.4236C17.5 17.0671 17.5 16.6004 17.5 15.667V5.88921C17.5 5.55941 17.5 5.3945 17.469 5.23613C17.4416 5.09559 17.3961 4.95918 17.3338 4.83026C17.2635 4.68498 17.1646 4.55306 16.9667 4.28921L15.4 2.20033M13.3333 8.33366C13.3333 9.21771 12.9821 10.0656 12.357 10.6907C11.7319 11.3158 10.8841 11.667 10 11.667C9.11594 11.667 8.2681 11.3158 7.64298 10.6907C7.01786 10.0656 6.66667 9.21771 6.66667 8.33366" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                                                                </svg>
                                                                Order History
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <button
                                                        className="w-full flex items-center justify-between px-3 py-2 text-sm text-[#232323] hover:bg-gray-50 transition-colors border-t border-gray-100"
                                                        onClick={() => {
                                                            setIsLoggedIn(false);
                                                            setShowUserDrawer(false);
                                                        }}
                                                    >
                                                        Logout
                                                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15 6.66667L18.3334 10M18.3334 10L15 13.3333M18.3334 10H7.50002M12.5 3.50337C11.4377 2.86523 10.2044 2.5 8.88891 2.5C4.90019 2.5 1.66669 5.85786 1.66669 10C1.66669 14.1421 4.90019 17.5 8.88891 17.5C10.2044 17.5 11.4377 17.1348 12.5 16.4966" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>

                                {/* Cart Icon */}
                                <div className="header-single-line__item">
                                    <Link href="/cart" className="flex items-center hover:opacity-80 transition-opacity relative p-1" aria-label="Cart">
                                        <svg viewBox="0 0 1024 1024" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="currentColor">
                                            <path d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2zM768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2zM898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424z" />
                                        </svg>
                                        <span className="absolute -top-1 -right-1 bg-[#ff8b21] text-white text-[10px] font-bold rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-0.5">
                                            {displayCartCount}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Search Bar */}
            <div className="lg:hidden bg-[#dbcdf7] pb-2 px-3">
                <div className="relative">
                    <input
                        type="text"
                        placeholder={data.searchPlaceholder}
                        className="w-full px-4 py-2 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-[#ab91df] focus:ring-2 focus:ring-[#ab91df] focus:ring-opacity-20 text-sm pr-10 placeholder-[#ab91df] text-gray-600"
                    />
                    <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 bg-[#dbcdf7] text-white rounded-full" aria-label="Search">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Desktop Navigation Bar - Hidden on mobile */}
            <div className="hidden lg:block bg-white sticky top-0 z-50 w-full border-b border-gray-200">
                <div className="container mx-auto max-w-7xl px-6 lg:px-8">
                    <nav className="flex items-center justify-center">
                        <ul className="flex items-center space-x-1">
                            {data.navItems.map((item: NavItem) => {
                                if (item.type === 'link') {
                                    return (
                                        <NavItemComponent key={item.id} href={item.url || '#'}>
                                            {item.title}
                                        </NavItemComponent>
                                    );
                                } else if (item.type === 'mega-menu') {
                                    return (
                                        <li key={item.id} className="group relative">
                                            <button className="px-3 py-3 text-[#232323] hover:text-[#ab91df] text-sm font-medium transition-colors">
                                                {item.title}
                                            </button>
                                            <div className="absolute left-0 top-full w-[800px] bg-white shadow-lg border-t invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 p-6">
                                                <div className="grid grid-cols-4 gap-6">
                                                    {item.columns?.map((column: Column, idx: number) => (
                                                        <div key={idx}>
                                                            <h3 className="font-semibold text-[#232323] mb-3 pb-2 border-b text-sm">{column.title}</h3>
                                                            <ul className="space-y-2">
                                                                {column.links.map((link: LinkType, linkIdx: number) => (
                                                                    <li key={linkIdx}>
                                                                        <MegaLink href={getCollectionUrl(link.url)}>{link.title}</MegaLink>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                                {item.secondRow && (
                                                    <div className="grid grid-cols-4 gap-6 mt-6 pt-6 border-t">
                                                        {item.secondRow.map((column: Column, idx: number) => (
                                                            <div key={idx}>
                                                                <h3 className="font-semibold text-[#232323] mb-3 pb-2 border-b text-sm">{column.title}</h3>
                                                                <ul className="space-y-2">
                                                                    {column.links.map((link: LinkType, linkIdx: number) => (
                                                                        <li key={linkIdx}>
                                                                            <MegaLink href={getCollectionUrl(link.url)}>{link.title}</MegaLink>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    );
                                } else if (item.type === 'dropdown') {
                                    return (
                                        <li key={item.id} className="group relative">
                                            <Link
                                                href={item.url || '#'}
                                                className="px-3 py-3 text-[#232323] hover:text-[#ab91df] text-sm font-medium inline-block transition-colors"
                                            >
                                                {item.title}
                                            </Link>
                                            <div className="absolute left-0 top-full bg-white shadow-lg min-w-[220px] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 border border-gray-100 rounded-lg py-2">
                                                {item.sections ? (
                                                    <>
                                                        {item.sections.map((section: Section, idx: number) => (
                                                            <div key={idx}>
                                                                {section.title && (
                                                                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                                        {section.title}
                                                                    </div>
                                                                )}
                                                                {section.links.map((link: LinkType, linkIdx: number) => (
                                                                    <DropdownLink key={linkIdx} href={getCollectionUrl(link.url)}>
                                                                        {link.title}
                                                                    </DropdownLink>
                                                                ))}
                                                            </div>
                                                        ))}
                                                    </>
                                                ) : (
                                                    item.links?.map((link: LinkType, idx: number) => (
                                                        <DropdownLink key={idx} href={getCollectionUrl(link.url)}>
                                                            {link.title}
                                                        </DropdownLink>
                                                    ))
                                                )}
                                            </div>
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
                    <div className="absolute left-0 top-0 h-full w-[85%] max-w-[320px] bg-white shadow-xl overflow-y-auto">
                        <div className="p-3 border-b flex justify-between items-center bg-[#dbcdf7]">
                            <h3 className="font-semibold text-base">Menu</h3>
                            <button onClick={() => setMobileMenuOpen(false)} className="p-1.5" aria-label="Close menu">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <ul className="p-3">
                            {data.navItems.map((item: NavItem) => (
                                <li key={item.id} className="border-b last:border-b-0 border-gray-100">
                                    {item.type === 'link' ? (
                                        <Link
                                            href={item.url || '#'}
                                            className="block py-2.5 text-sm text-[#232323] hover:text-[#ab91df] transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.title}
                                        </Link>
                                    ) : (
                                        <div>
                                            <button
                                                className="w-full flex items-center justify-between py-2.5 text-sm text-[#232323] hover:text-[#ab91df] transition-colors"
                                                onClick={() => toggleMobileSubmenu(item.id)}
                                            >
                                                <span>{item.title}</span>
                                                <svg className={`w-3.5 h-3.5 transition-transform ${mobileSubmenuOpen === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {mobileSubmenuOpen === item.id && (
                                                <div className="pl-3 pb-2">
                                                    {item.type === 'mega-menu' && item.columns?.map((column, idx) => (
                                                        <div key={idx} className="mb-2">
                                                            <h4 className="font-medium text-xs text-gray-500 mb-1">{column.title}</h4>
                                                            <ul className="space-y-0.5">
                                                                {column.links.map((link, linkIdx) => (
                                                                    <li key={linkIdx}>
                                                                        <Link
                                                                            href={getCollectionUrl(link.url)}
                                                                            className="block py-1 text-xs text-gray-600 hover:text-[#ab91df]"
                                                                            onClick={() => setMobileMenuOpen(false)}
                                                                        >
                                                                            {link.title}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                    {item.type === 'dropdown' && item.sections?.map((section, idx) => (
                                                        <div key={idx} className="mb-2">
                                                            {section.title && (
                                                                <h4 className="font-medium text-xs text-gray-500 mb-1">{section.title}</h4>
                                                            )}
                                                            <ul className="space-y-0.5">
                                                                {section.links.map((link, linkIdx) => (
                                                                    <li key={linkIdx}>
                                                                        <Link
                                                                            href={getCollectionUrl(link.url)}
                                                                            className="block py-1 text-xs text-gray-600 hover:text-[#ab91df]"
                                                                            onClick={() => setMobileMenuOpen(false)}
                                                                        >
                                                                            {link.title}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                    {item.type === 'dropdown' && item.links && (
                                                        <ul className="space-y-0.5">
                                                            {item.links.map((link, linkIdx) => (
                                                                <li key={linkIdx}>
                                                                    <Link
                                                                        href={getCollectionUrl(link.url)}
                                                                        className="block py-1 text-xs text-gray-600 hover:text-[#ab91df]"
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                    >
                                                                        {link.title}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Login Modal */}
            <MainLogin
                isOpen={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                onSuccess={() => {
                    setIsLoggedIn(true);
                    setShowLoginModal(false);
                }}
            />
        </>
    );
};

// Helper function to convert collection URLs to the new dynamic structure
const getCollectionUrl = (url: string) => {
    const urlMap: Record<string, string> = {
        '/collections/muslin-swaddle': '/shop/muslin-swaddle',
        '/collections/muslin-towels': '/shop/muslin-towels',
        '/collections/jhabla-tshirts': '/shop/jhabla-tshirts',
        '/collections/muslin-dohar-and-blankets': '/shop/muslin-dohar-and-blankets',
        '/collections/muslin-gift-bundles': '/shop/muslin-gift-sets',
        '/collections/ac-quilt': '/shop/baby-quilts',
        '/collections/kids-quilt': '/shop/kids-quilts',
        '/collections/blanket-dohar': '/shop/blankets-dohar',
        '/collections/sleeping-bag': '/shop/sleeping-bags',
        '/collections/bedding': '/shop/bedding',
        '/collections/winter-rompers': '/shop/winter-rompers',
        '/collections/woolen-wear': '/shop/woolen-wear',
        '/collections/infant-clothing': '/shop/infant-clothing',
        '/collections/onesies': '/shop/onesies',
        '/collections/t-shirt-shorts': '/shop/t-shirt-shorts',
        '/collections/clothing-sets': '/shop/clothing-sets',
        '/collections/summer-wear': '/shop/summer-wear',
        '/collections/sleepsuits': '/shop/sleepsuits',
        '/collections/boys': '/shop/boys',
        '/collections/girls': '/shop/girls',
        '/collections/diaper-time': '/shop/cloth-diapers',
        '/collections/nappies': '/shop/nappies',
        '/collections/diaper-pants': '/shop/diaper-pants',
        '/collections/drysheet': '/shop/dry-sheets',
        '/collections/diaper-bags': '/shop/diaper-bags',
        '/collections/cap-mitten-booties': '/shop/cap-mitten-booties',
        '/collections/feeding-pillow': '/shop/feeding-pillows',
        '/collections/feeding-apron': '/shop/feeding-aprons',
        '/collections/washclothes': '/shop/washclothes',
        '/collections/hospital-bag': '/shop/hospital-bags',
        '/collections/baby-gift-items': '/shop/baby-gifts',
        '/collections/antiskid-socks': '/shop/antiskid-socks',
        '/collections/kids-socks': '/shop/kids-socks',
        '/collections/uniform-socks': '/shop/uniform-socks',
        '/collections/flash-sale': '/shop/flash-sale',
        '/collections/new-arrivals': '/shop/new-arrivals',
        '/collections/sale': '/shop/sale',
        '/collections/buy-1-get-1': '/shop/buy-1-get-1',
    };
    return urlMap[url] || url;
};

// Helper Components
const NavItemComponent = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li>
        <Link
            href={href}
            className="px-3 py-3 text-[#232323] hover:text-[#ab91df] text-sm font-medium inline-block transition-colors"
        >
            {children}
        </Link>
    </li>
);

const DropdownLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="block px-4 py-2 text-sm text-[#3c3c3c] hover:text-[#ab91df] hover:bg-gray-50 transition-colors"
    >
        {children}
    </Link>
);

const MegaLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="text-sm text-[#3c3c3c] hover:text-[#ab91df] transition-colors"
    >
        {children}
    </Link>
);

export default Header;