"use client";

import Link from "next/link";

const WinterBanner = () => {
    return (
        <div className="halo-banner w-full bg-white">
            <div className="w-full">
                <div className="halo-banner-wrapper">
                    <div className="item item--largeImg">
                        <div className="banner-item">
                            {/* Desktop Banner */}
                            <Link href="/collections/winter-rompers" className="block relative w-full">
                                <img
                                    src="//www.momshome.in/cdn/shop/files/banner_3_dd9c6d2b-f0eb-4a26-9a6c-1b42c1337fd3.jpg?v=1763034537"
                                    alt="Winter Collection"
                                    className="w-full hidden md:block"
                                    style={{ aspectRatio: "2000/766" }}
                                    loading="lazy"
                                />
                                {/* Mobile Banner */}
                                <img
                                    src="//www.momshome.in/cdn/shop/files/winter_banner_mobile.jpg?v=1763034513"
                                    alt="Winter Collection Mobile"
                                    className="w-full md:hidden"
                                    style={{ aspectRatio: "750/951" }}
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WinterBanner;