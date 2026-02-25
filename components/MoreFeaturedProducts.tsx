"use client";

import Link from "next/link";

const moreFeaturedProducts = [
    {
        id: "muslin-blanket",
        image: "//www.momshome.in/cdn/shop/files/ALL_PRINT_BLANKET_1_aa071753-e305-4f18-97b1-1af0e3c06460_533x.jpg?v=1731744236",
        title: "Muslin Blanket",
        link: "shop/muslin-dohar-and-blankets",
        buttonText: "SHOP NOW",
        buttonColor: "#6cad96"
    },
    {
        id: "muslin-swaddle",
        image: "//www.momshome.in/cdn/shop/files/12_4_f179fabe-84e2-4cd3-9a0f-b2c0f14b4694_533x.jpg?v=1731764209",
        title: "Muslin Swaddle",
        link: "/shop/muslin-swaddle",
        buttonText: "SHOP NOW",
        buttonColor: "#6cad96"
    },
    {
        id: "nappy-essentials",
        image: "//www.momshome.in/cdn/shop/files/1DRYSHEET_1PADDEDUNDERWEAR_1SWADDLE_2NAPPY_2_257d5f11-9a60-4d87-a3b0-4b1a24e14522_533x.jpg?v=1731743867",
        title: "Nappy Essentials",
        link: "/shop/nappies",
        buttonText: "SHOP NOW",
        buttonColor: "#6cad96"
    }
];

const MoreFeaturedProducts = () => {
    return (
        <div className="spotlight-block w-full bg-white py-8 lg:py-12">
            <div className="w-full px-4 lg:px-6">
                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {moreFeaturedProducts.map((product) => (
                        <div key={product.id} className="halo-item">
                            <div className="spotlight-item relative overflow-hidden rounded-lg bg-white shadow-sm">
                                {/* Image */}
                                <div className="image-container">
                                    <Link href={product.link} className="block">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full aspect-square object-cover"
                                            loading="lazy"
                                        />
                                    </Link>
                                </div>

                                {/* Content - Always visible below image */}
                                <div className="content text-center py-6 px-4">
                                    <h3 className="text-[#232323] text-xl font-medium mb-4">
                                        {product.title}
                                    </h3>
                                    <Link
                                        href={product.link}
                                        className="inline-block px-8 py-3 bg-[#a790d4] text-white font-semibold uppercase text-sm rounded-full hover:bg-[#a790d4] transition-colors"
                                    >
                                        {product.buttonText}
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

export default MoreFeaturedProducts;