// components/product/ProductOffers.tsx
export default function ProductOffers() {
    return (
        <div className="productView-moreItem moreItem-productText w-full" style={{ padding: "0 0 0px" }}>
            <div className="productView-customText text-left w-full">
                <div
                    className="availableOffers w-full"
                    style={{
                        border: "1px #999 dashed",
                        width: "100%",
                        padding: "12px 12px 4px 16px",
                        borderRadius: "12px",
                        marginBottom: "8px",
                        marginTop: "8px",
                    }}
                >
                    <span className="text block mb-2 text-sm lg:text-base font-medium italic">
                        *Limited Time Offers
                    </span>

                    {/* Main list */}
                    <ul className="space-y-3 lg:space-y-4 text-xs lg:text-sm">
                        {/* Special Discounts */}
                        <li>
                            <span className="font-semibold text-xs lg:text-sm block mb-1">🎉 Special Discounts:</span>
                            <ul className="list-disc pl-4 lg:pl-5 space-y-1.5 text-[11px] lg:text-xs text-gray-700">
                                <li className="leading-tight lg:leading-normal">
                                    Flat <span className="font-medium">₹200 OFF</span> on your first order above <span className="font-medium">Rs. 1199</span> Use code <span className="font-medium bg-gray-100 px-1 rounded">MHNEW200</span>
                                </li>
                                <li className="leading-tight lg:leading-normal">
                                    Get <span className="font-medium">15% OFF + Up to 5% Additional OFF</span> (on prepaid orders only) with code <span className="font-medium bg-gray-100 px-1 rounded">LOVE20</span> on orders above <span className="font-medium">Rs. 2999</span>
                                </li>
                                <li className="leading-tight lg:leading-normal">
                                    Get <span className="font-medium">10% OFF + Up to 5% Additional OFF</span> (on prepaid orders only) with code <span className="font-medium bg-gray-100 px-1 rounded">JAN15</span> on orders above <span className="font-medium">Rs. 1499</span>
                                </li>
                            </ul>
                        </li>

                        {/* Free Gifts */}
                        <li>
                            <span className="font-semibold text-xs lg:text-sm block mb-1">🎁 Free Gifts (Valid on prepaid orders only):</span>
                            <ul className="list-disc pl-4 lg:pl-5 space-y-1.5 text-[11px] lg:text-xs text-gray-700">
                                <li className="leading-tight lg:leading-normal">
                                    Free <span className="font-medium">1 Diaper Bag</span> worth <span className="font-medium">Rs. 1299</span> on orders above <span className="font-medium">Rs. 9999</span>
                                </li>
                            </ul>
                        </li>

                        {/* Note */}
                        <li>
                            <span className="font-semibold text-xs lg:text-sm block mb-1">📝 Note:</span>
                            <ul className="list-disc pl-4 lg:pl-5 space-y-1.5 text-[11px] lg:text-xs text-gray-700">
                                <li className="leading-tight lg:leading-normal">
                                    <span className="font-medium">Buy 1 Get 1</span> and <span className="font-medium">Free Gift</span> offers are valid on prepaid orders only
                                </li>
                                <li className="leading-tight lg:leading-normal">
                                    These items are non-returnable and non-exchangeable
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}