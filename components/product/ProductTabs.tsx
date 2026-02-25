// components/product/ProductTabs.tsx
interface ProductTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export default function ProductTabs({ activeTab, onTabChange }: ProductTabsProps) {
    const tabs = [
        { id: "description", label: "DESCRIPTION" },
        { id: "shipping", label: "SHIPPING & RETURN" },
        { id: "fabric", label: "FABRIC TYPE" },
    ];

    return (
        <div className="productView-moreItem w-full">
            <div className="productView-tab layout-vertical halo-product-tab w-full">
                <div className="tabs-contents tabs-contents-vertical clearfix halo-text-format w-full">
                    {/* Tab Headers - Horizontal scroll on mobile */}
                    <div className="w-full overflow-x-auto scrollbar-hide mb-4">
                        <div className="flex border-b border-gray-200 min-w-max lg:min-w-full">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`py-2.5 lg:py-2 px-4 lg:px-4 text-xs lg:text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab.id
                                        ? "border-b-2 border-[#ab91df] text-[#ab91df]"
                                        : "text-gray-600 hover:text-gray-900"
                                        }`}
                                    onClick={() => onTabChange(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content - Responsive text */}
                    <div className="tab-content px-1">
                        {activeTab === "description" && (
                            <div className="prose max-w-none text-xs lg:text-sm text-gray-700">
                                <p className="text-justify leading-relaxed lg:leading-relaxed">
                                    <span>
                                        Moms Home Organic Cotton Muslin Swaddle 0-12 Months - Large size muslin
                                        100x100 cm - Made from premium Organic cotton muslin which is breathable,
                                        prewashed, ultra-soft, and gets softer with every wash. This organic
                                        muslin is free from harmful colour chemicals, Safe and irritant-free for
                                        your baby&apos;s most sensitive and tender skin. It comes with beautiful
                                        hand-block prints done with eco-friendly colours.
                                    </span>
                                </p>

                                <div className="mt-4 space-y-3 lg:space-y-4">
                                    <p className="leading-relaxed">
                                        <b className="font-semibold">Premium Organic Cotton Muslin Swaddle Set:</b> Made from the best quality
                                        organic cotton muslin, these swaddles are soft, breathable, and gentle on
                                        your baby&apos;s skin. Sized at 100x100 cm, they offer ample coverage for snug
                                        comfort.
                                    </p>

                                    <p className="leading-relaxed">
                                        <b className="font-semibold">Multi-Purpose and Stylish:</b> Perfect for nursing covers, stroller
                                        blankets, washcloths, or burp cloths. Vibrant hand block prints add a stylish
                                        touch to your baby essentials.
                                    </p>

                                    <p className="leading-relaxed">
                                        <b className="font-semibold">Superior Quality and Durability:</b> Crafted with cute hand block printing
                                        and AZO-free dyes, ensuring long-lasting softness, colour, and absorbency
                                        wash after wash.
                                    </p>

                                    <p className="leading-relaxed">
                                        <b className="font-semibold">Snug and Comfortable Swaddling Experience:</b> The breathable fabric
                                        ensures optimal airflow, preventing overheating and keeping your baby at the
                                        right temperature. Ideal for newborns, our swaddles offer both comfort and
                                        peace of mind for new parents.
                                    </p>

                                    <div>
                                        <b className="font-semibold block mb-2">Wash Care Instructions:</b>
                                        <ul className="list-disc pl-5 lg:pl-6 space-y-1">
                                            <li className="leading-relaxed">Machine wash cold</li>
                                            <li className="leading-relaxed">Tumble dry low</li>
                                            <li className="leading-relaxed">Do not bleach</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "shipping" && (
                            <div className="prose max-w-none text-xs lg:text-sm text-gray-700">
                                <div className="space-y-3 lg:space-y-4">
                                    <div>
                                        <b className="font-semibold block mb-1 lg:mb-2">7-Day Return and Exchange Policy:</b>
                                        <p className="leading-relaxed">
                                            You can exchange items within 7 days of delivery if they are damaged,
                                            defective, incorrect, or if there is a size issue. Contact us at +91 90247
                                            88312 to initiate the process.
                                        </p>
                                    </div>

                                    <div>
                                        <b className="font-semibold block mb-1 lg:mb-2">Refunds:</b>
                                        <p className="leading-relaxed">
                                            If you prefer a refund instead of an exchange, we will issue a gift card for
                                            the purchase amount. The gift card will be sent to you after we receive the
                                            returned product. Please note that refunds in the form of a gift card are
                                            available only within 3 days of delivery and it is not applicable to sale
                                            items; those items can only be exchanged, not refunded.
                                        </p>
                                    </div>

                                    <div>
                                        <b className="font-semibold block mb-1 lg:mb-2">Non-Eligible Products: Returns or exchanges are not available for:</b>
                                        <ul className="list-disc pl-5 lg:pl-6 space-y-1">
                                            <li className="leading-relaxed">Used or worn items</li>
                                            <li className="leading-relaxed">Washed items</li>
                                            <li className="leading-relaxed">Items not in their original condition</li>
                                            <li className="leading-relaxed">Products missing original packaging or accessories</li>
                                            <li className="leading-relaxed">Sale or promotional items</li>
                                            <li className="leading-relaxed">Items without a readable serial number</li>
                                            <li className="leading-relaxed">Hygiene Items - Cloth diapers, nappies, padded underwear</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <b className="font-semibold block mb-1 lg:mb-2">How to Return or Exchange:</b>
                                        <p className="leading-relaxed">
                                            To return or exchange an item, please contact us at +91 90247 88312 or
                                            info@momshome.in. We will assist with the exchange and inspection process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "fabric" && (
                            <div className="prose max-w-none text-xs lg:text-sm text-gray-700">
                                <p className="leading-relaxed">100% Organic Cotton</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}