"use client";

import ProductCard from "./ProductCard";

const newArrivalsProducts = [
    {
        id: 10270844715289,
        handle: "t-shirt-shorts-co-ord-set-for-kids-elegant-comfortable-summer-wear-organic-cotton-clothing-set-little-heart-pack-of-1",
        title: "T-Shirt & Shorts Co-ord Set for Kids | Elegant & Comfortable Summer Wear | Organic Cotton Clothing Set | Little Heart | Pack of 1",
        image: "//www.momshome.in/cdn/shop/files/t-shirtshortheart_533x.jpg?v=1771053793",
        price: 499,
        compare_at_price: 849,
        available: true,
        discount: 41,
        variants: [
            { id: 51982726103321, title: "0-3 Months", price: 499, compare_at_price: 849, available: true, sku: "MHHRTTSHIRTSHORT0TO3" },
            { id: 51982726136089, title: "3-6 Months", price: 499, compare_at_price: 849, available: false, sku: "MHHRTTSHIRTSHORT3TO6" },
            { id: 51982726168857, title: "6-12 Months", price: 499, compare_at_price: 849, available: true, sku: "MHHRTTSHIRTSHORT6TO12" },
            { id: 51982726201625, title: "12-18 months", price: 499, compare_at_price: 849, available: true, sku: "MHHRTTSHIRTSHORT12TO18" }
        ]
    },
    {
        id: 10270366007577,
        handle: "organic-cotton-jhabla-pyjama-for-new-born-full-sleeve-baby-jabla-and-baby-pajama-co-ord-set-0-12-months-bunny-set-of-1",
        title: "Organic Cotton Jhabla & Pyjama For New Born | Full Sleeve Baby Jabla and Baby Pajama Co-Ord Set | Bunny | Set of 1",
        image: "//www.momshome.in/cdn/shop/files/t-shirt_pajama_mockup_2_jpg_533x.jpg?v=1770893419",
        price: 699,
        compare_at_price: 1999,
        available: true,
        discount: 65,
        variants: [
            { id: 51979961139481, title: "6-12 Months", price: 699, compare_at_price: 1999, available: true, sku: "MHJHABLAPAYJAMABNY6TO12P1" },
            { id: 51980226429209, title: "1-2 Years", price: 699, compare_at_price: 1999, available: true, sku: "MHJHABLAPAYJAMABNY1TO2P1" },
            { id: 51980226461977, title: "2-3 Years", price: 699, compare_at_price: 1999, available: true, sku: "MHJHABLAPAYJAMABNY2TO3P1" }
        ]
    },
    {
        id: 10270844813593,
        handle: "t-shirt-shorts-co-ord-set-for-kids-elegant-comfortable-summer-wear-organic-cotton-clothing-set-avocado-pack-of-1",
        title: "T-Shirt & Shorts Co-ord Set for Kids | Elegant & Comfortable Summer Wear | Organic Cotton Clothing Set | Avocado | Pack of 1",
        image: "//www.momshome.in/cdn/shop/files/t-shirtshortavocado_533x.jpg?v=1771053890",
        price: 499,
        compare_at_price: 849,
        available: true,
        discount: 41,
        variants: [
            { id: 51982726824217, title: "0-3 Months", price: 499, compare_at_price: 849, available: true, sku: "MHAVDOTSHIRTSHORT0TO3" },
            { id: 51982726856985, title: "3-6 Months", price: 499, compare_at_price: 849, available: false, sku: "MHAVDOTSHIRTSHORT3TO6" },
            { id: 51982726889753, title: "6-12 Months", price: 499, compare_at_price: 849, available: true, sku: "MHAVDOTSHIRTSHORT6TO12" },
            { id: 51982726922521, title: "12-18 months", price: 499, compare_at_price: 849, available: true, sku: "MHAVDOTSHIRTSHORT12TO18" }
        ]
    },
    {
        id: 10254623277337,
        handle: "organic-cotton-newborn-baby-clothing-set-baby-shower-gift-hamper-kimono-top-pyjama-cap-set-0-6-months-pack-of-3",
        title: "Organic Cotton Newborn Baby Clothing Set | Baby Shower Gift Hamper | Kimono Top, Pyjama & Cap Set | 0-6 Months | Pack of 3",
        image: "//www.momshome.in/cdn/shop/files/12_8eb50e2d-d12b-4f9e-97aa-b9dee95d1459_533x.jpg?v=1771246742",
        price: 549,
        compare_at_price: 999,
        available: true,
        discount: 45,
        variants: [
            { id: 51920802840857, title: "0-3 Months", price: 549, compare_at_price: 999, available: true, sku: "MHKIMOPAJCAPLMN0TO3P3" },
            { id: 51920802873625, title: "3-6 Months", price: 549, compare_at_price: 999, available: true, sku: "MHKIMOPAJCAPLMN3TO6P3" }
        ]
    },
    {
        id: 10247469859097,
        handle: "organic-cotton-newborn-baby-clothing-set-baby-shower-gift-hamper-kimono-onesie-payjama-cap-set-0-6-months-pack-of-3",
        title: "Organic Cotton Newborn Baby Clothing Set | Baby Shower Gift Hamper | Kimono Onesie, Pyjama & Cap Set | 0-6 Months | Pack of 3",
        image: "//www.momshome.in/cdn/shop/files/MHKIMOPAJCAPAVACADO0TO3P3_1_533x.jpg?v=1769082167",
        price: 549,
        compare_at_price: 999,
        available: true,
        discount: 45,
        variants: [
            { id: 51887761129753, title: "0-3 Months", price: 549, compare_at_price: 999, available: false, sku: "MHKIMOPAJCAPAVACADO0TO3P3" },
            { id: 51887761162521, title: "3-6 Months", price: 549, compare_at_price: 999, available: true, sku: "MHKIMOPAJCAPAVACADO3TO6P3" }
        ]
    },
    {
        id: 10249401532697,
        handle: "winter-warm-woollen-full-sleeve-sweater-for-baby-dino-3-18-months-pack-of-1",
        title: "Winter Warm Woollen Full Sleeve Sweater For Baby | Dino | 3-18 Months | Pack of 1",
        image: "//www.momshome.in/cdn/shop/files/8_bd60bf69-b31f-436a-944e-6028b5c8beb6_533x.jpg?v=1769254344",
        price: 699,
        compare_at_price: 1999,
        available: false,
        discount: 65
    },
    {
        id: 10233996017945,
        handle: "organic-muslin-baby-play-mat-soft-cotton-baby-floor-mat-for-newborns-toddlers-washable-skin-friendly-playmat-100x100-cm",
        title: "Organic Muslin Baby Play Mat | Soft Cotton Baby Floor Mat for Newborns & Toddlers | 100x100 CM",
        image: "//www.momshome.in/cdn/shop/files/1_67bead1a-726f-4bc9-8f6b-d396197eb3b2_533x.jpg?v=1767613434",
        price: 799,
        compare_at_price: 1999,
        available: false,
        discount: 60
    },
    {
        id: 10232587321625,
        handle: "winter-warm-woolen-baby-cap-for-0-12-months-soft-infant-beanie-hat-newborn-winter-headwear-abc-pack-of-2",
        title: "Winter Warm Woolen Baby Cap For 0–12 Months | Soft Infant Beanie Hat | Newborn Winter Headwear | Pack of 2",
        image: "//www.momshome.in/cdn/shop/files/p2-_5_533x.jpg?v=1767357675",
        price: 349,
        compare_at_price: 999,
        available: true,
        discount: 65,
        variants: [
            { id: 51823562621209, title: "Pink & Yellow", price: 349, compare_at_price: 999, available: true, sku: "MHWOLCAPABCPINKYLWP2" },
            { id: 51823562653977, title: "Green & Sky Blue", price: 349, compare_at_price: 999, available: true, sku: "MHWOLCAPABCGRNSBLUP2" },
            { id: 51823562686745, title: "Barbie Pink & Peach", price: 349, compare_at_price: 999, available: true, sku: "MHWOLCAPABCBPINKPECHP2" }
        ]
    }
];

const NewArrivals = () => {
    return (
        <div className="product-block w-full bg-white py-8 lg:py-12">
            <div className="w-full px-4 lg:px-6">
                <div className="halo-block">
                    {/* Header */}
                    <div className="halo-block-header text-center mb-8">
                        <h3 className="title text-2xl lg:text-3xl font-semibold text-[#a790d4] relative inline-block">
                            <span className="text">New Arrivals</span>
                        </h3>
                    </div>

                    {/* Products Grid */}
                    <div className="halo-block-content">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                            {newArrivalsProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;