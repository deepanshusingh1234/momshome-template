"use client";

import ProductCard from "./ProductCard";

const trendingProducts = [
    {
        id: 10226315362585,
        handle: "newborn-baby-homecoming-gift-set-newborn-essential-gift-hamper-soft-gentle-thoughtful-newborn-gift-pack-of-5-copy",
        title: "Moms Home Newborn Baby Homecoming Gift Set | Newborn Essential Gift Hamper | Soft, Gentle & Thoughtful Newborn Gift | Pack of 5",
        image: "//www.momshome.in/cdn/shop/files/WhatsAppImage2025-12-27at11.59.09AM_533x.jpg?v=1766843681",
        price: 999,
        compare_at_price: 1399,
        available: true,
        discount: 29,
        variants: [
            { id: 51806873125145, title: "0-3 Months", price: 999, compare_at_price: 1399, available: false, sku: "MHBBKIMONOONESECMB0TO3P5" },
            { id: 51806873157913, title: "3-6 Months", price: 999, compare_at_price: 1399, available: true, sku: "MHBBKIMONOONESECMB3TO6P5" },
            { id: 51806873190681, title: "6-12 Months", price: 999, compare_at_price: 1399, available: true, sku: "MHBBKIMONOONESECMB6TO12P5" }
        ]
    },
    {
        id: 10226303500569,
        handle: "new-born-summer-essential-clothing-for-boys-girls-organic-cotton-baby-clothing-set-baby-shower-gift-hamper-0-6-months-avocado-pack-of-6-copy",
        title: "Newborn Baby Home coming Gift Set | New Born Essential Gift Hamper | Pack of 4",
        image: "//www.momshome.in/cdn/shop/files/WhatsApp_Image_2025-12-27_at_1.31.17_PM_533x.jpg?v=1766844162",
        price: 1499,
        compare_at_price: 2399,
        available: true,
        discount: 38,
        variants: [
            { id: 51806821908761, title: "0-3 Months", price: 1499, compare_at_price: 2399, available: true, sku: "MHONESEHTOWELBBPB0TO3P4" },
            { id: 51806821941529, title: "3-6 Months", price: 1499, compare_at_price: 2399, available: true, sku: "MHONESEHTOWELBBPB3TO6P4" },
            { id: 51806835966233, title: "6-12 Months", price: 1499, compare_at_price: 2399, available: true, sku: "MHONESEHTOWELBBPB6TO12P4" }
        ]
    },
    {
        id: 10226308481305,
        handle: "newborn-baby-home-coming-gift-set-new-born-essential-gift-hamper-pack-of-4-copy",
        title: "Newborn Baby Home coming Gift Set | New Born Essential Gift Hamper | Pack of 4",
        image: "//www.momshome.in/cdn/shop/files/image_10_df617731-e1e7-4d11-a388-2fd98bfce829_533x.jpg?v=1766840161",
        price: 1449,
        compare_at_price: 1999,
        available: true,
        discount: 28,
        variants: [
            { id: 51806838751513, title: "0-3 Months", price: 1449, compare_at_price: 1999, available: true, sku: "MHSWDLONESEBBTOY0TO3P4" },
            { id: 51806838784281, title: "3-6 Months", price: 1449, compare_at_price: 1999, available: true, sku: "MHSWDLONESEBBTOY3TO6P4" },
            { id: 51806838817049, title: "6-12 Months", price: 1449, compare_at_price: 1999, available: true, sku: "MHSWDLONESEBBTOY6TO12P4" }
        ]
    },
    {
        id: 9608183152921,
        handle: "baby-quilt-organic-cotton-blanket-100x150-cm-0-5-year-pack-of-1",
        title: "Baby Quilt Organic Cotton | Blanket | 100x150 CM | 0-5 Year | Pack of 1",
        image: "//www.momshome.in/cdn/shop/files/ELEPHANTBABYQULIT_3_3_533x.webp?v=1766121398",
        price: 1399,
        compare_at_price: 2799,
        available: true,
        discount: 50,
        variants: [
            { id: 49381547278617, title: "Tiger", price: 1399, compare_at_price: 2799, available: true, sku: "MHOCQ3GREEN" },
            { id: 51838865309977, title: "Flower", price: 1599, compare_at_price: 2799, available: true, sku: "MHBABYQUILTP1FLWR" },
            { id: 50153517449497, title: "Lemon", price: 1499, compare_at_price: 2799, available: true, sku: "MHBABYQUILTP1LEMON" },
            { id: 49575511032089, title: "Santa", price: 1399, compare_at_price: 2799, available: true, sku: "MHQUILTSANTA100X150" }
        ]
    },
    {
        id: 9845053194521,
        handle: "baby-home-coming-outfit-baby-shower-gift-hamper-joyworld-0-3-months-pack-of-7",
        title: "Baby Home Coming Outfit Set | Baby Shower Gift Hamper | Baby Essential Clothes Set | Joyworld | 0-3 Months | Pack of 7",
        image: "//www.momshome.in/cdn/shop/files/joy_world_2_f0d41ba8-2e41-46ed-9a3a-eb19dcc7e00c_533x.jpg?v=1757758566",
        price: 1299,
        compare_at_price: 1499,
        available: false,
        discount: 13
    },
    {
        id: 9788195143961,
        handle: "organic-cotton-new-born-gift-set-0-12-months-6-items-lemon",
        title: "Organic Cotton Baby Essentials Gift Set | Baby Shower Gift Hamper | Baby Clothing Gift Combo | Lemon | Pack of 6",
        image: "//www.momshome.in/cdn/shop/files/gg_533x.jpg?v=1754649687",
        price: 699,
        compare_at_price: 949,
        available: true,
        discount: 26,
        variants: [
            { id: 50058828022041, title: "3-6 Months", price: 699, compare_at_price: 949, available: true, sku: "MHLEMONFS6GIFT3TO6" }
        ]
    },
    {
        id: 9940172931353,
        handle: "organic-cotton-baby-clothing-set-baby-essential-clothes-for-boys-girls-baby-shower-gift-hamper-0-6-months-avocado-pack-of-6",
        title: "Organic Cotton Baby Clothing Set | Baby Essential Clothes For Boys & Girls | Baby Shower Gift Hamper | 0-6 Months | Avocado | Pack of 6",
        image: "//www.momshome.in/cdn/shop/files/Avocado_Kimono_set_533x.png?v=1751529630",
        price: 899,
        compare_at_price: 949,
        available: true,
        discount: 5,
        variants: [
            { id: 50827550359833, title: "3-6 Months", price: 899, compare_at_price: 949, available: true, sku: "MHAVCDOGIFT3TO6P6" }
        ]
    },
    {
        id: 9849834340633,
        handle: "new-born-baby-muslin-gift-hamper-lemon-pack-of-10",
        title: "New Born Baby Muslin Gift Hamper | Baby Shower Gift Set | Baby Essential Clothes Set | Lemon | Pack of 10",
        image: "//www.momshome.in/cdn/shop/files/muslin_lemon_10_items_set_1_533x.jpg?v=1747481451",
        price: 2499,
        compare_at_price: 2799,
        available: true,
        discount: 11,
        variants: [
            { id: 50367791300889, title: "0-3 Months", price: 2499, compare_at_price: 2799, available: true, sku: "MHLEMMUS10GIFT0TO3" },
            { id: 50367791333657, title: "3-6 Months", price: 2499, compare_at_price: 2799, available: true, sku: "MHLEMMUS10GIFT3TO6" },
            { id: 50367791366425, title: "6-12 Months", price: 2499, compare_at_price: 2799, available: true, sku: "MHLEMMUS10GIFT6TO12" }
        ]
    }
];

const TrendingProducts = () => {
    return (
        <div className="product-block w-full bg-white py-8 lg:py-12">
            <div className="w-full px-4 lg:px-6">
                <div className="halo-block">
                    {/* Header */}
                    <div className="halo-block-header text-center mb-8">
                        <h3 className="title text-2xl lg:text-3xl font-semibold text-[#a790d4] relative inline-block">
                            <span className="text">Our Trending Products</span>
                        </h3>
                    </div>

                    {/* Products Grid */}
                    <div className="halo-block-content">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                            {trendingProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingProducts;