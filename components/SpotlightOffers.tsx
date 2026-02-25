"use client";

import Link from "next/link";

const offers = [
    {
        id: "image_ELwn7y",
        image: "//www.momshome.in/cdn/shop/files/4_9_b4055185-908d-448a-b6e7-a0abe567ecf2_533x.jpg?v=1767012064",
        link: "https://www.momshome.in/apps/gbb/easybundle/1?page=addProductsPage1&currentFlow=byob",
        title: "Build Your Own Hospital Bag",
        buttonText: "SHOP NOW",
        buttonColor: "#6cad96"
    },
    {
        id: "image_kTGHzp",
        image: "//www.momshome.in/cdn/shop/files/3_13_98ce4ea5-4ecd-4dad-90b9-a465462202c0_533x.jpg?v=1767012094",
        link: "https://www.momshome.in/apps/gbb/easybundle/8?page=addProductsPage1&currentFlow=byob",
        title: "Pick Any 3 At Rs 2799",
        buttonText: "SHOP NOW",
        buttonColor: "#6cad96"
    },
    {
        id: "image_TgFxPG",
        image: "//www.momshome.in/cdn/shop/files/2_12_7e29b1d1-6e8f-4349-a9d0-6af34d00e85c_533x.jpg?v=1767012130",
        link: "https://www.momshome.in/apps/gbb/easybundle/6?page=addProductsPage1&currentFlow=byob",
        title: "Pick Any 3 for ₹499",
        buttonText: "SHOP NOW",
        buttonColor: "#6cad96"
    }
];

const SpotlightOffers = () => {
    return (
        <div className="spotlight-block w-full bg-[#f5f5f5] py-8 lg:py-12">
            <div className="w-full px-4 lg:px-6">
                {/* Header */}
                <div className="halo-block-header text-center mb-8">
                    <h3 className="title text-2xl lg:text-3xl font-semibold text-[#a790d4] relative inline-block">
                        <span className="text">BLOCKBUSTER OFFERS</span>
                    </h3>
                </div>

                {/* Offers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {offers.map((offer) => (
                        <div key={offer.id} className="halo-item">
                            <div className="spotlight-item relative overflow-hidden rounded-lg bg-white shadow-sm">
                                {/* Image */}
                                <div className="image-container">
                                    <Link href={offer.link} className="block">
                                        <img
                                            src={offer.image}
                                            alt={offer.title}
                                            className="w-full aspect-square object-cover"
                                            loading="lazy"
                                        />
                                    </Link>
                                </div>

                                {/* Content - Always visible below image */}
                                <div className="content text-center py-6 px-4">
                                    <h3 className="text-[#232323] text-xl font-medium mb-4">
                                        {offer.title}
                                    </h3>
                                    <Link
                                        href={offer.link}
                                        className="inline-block px-8 py-3 bg-[#ab91df] text-white font-semibold uppercase text-sm rounded-full hover:bg-[#ab91df] transition-colors"
                                    >
                                        {offer.buttonText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpotlightOffers;