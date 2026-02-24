// components/product/ProductFeatures.tsx
import Image from "next/image";

export default function ProductFeatures() {
    const features = [
        { id: "cotton", label: "Cotton", image: "https://cdn.shopify.com/s/files/1/0557/7683/7717/files/cotton.jpg?v=1716355401" },
        { id: "breathable", label: "Breathable", image: "https://cdn.shopify.com/s/files/1/0557/7683/7717/files/breathable.jpg?v=1716355400" },
        { id: "soft", label: "Soft", image: "https://cdn.shopify.com/s/files/1/0557/7683/7717/files/soft.jpg?v=1716355400" },
        { id: "baby-friendly", label: "Baby Friendly", image: "https://cdn.shopify.com/s/files/1/0557/7683/7717/files/baby_friendly.jpg?v=1716355400" },
    ];

    return (
        <div className="productView-moreItem moreItem-productText w-full overflow-hidden" style={{ padding: "0 0 0px" }}>
            <div className="productView-customText w-full">
                {/* Mobile: Horizontal Scroll */}
                <div className="lg:hidden w-full">
                    <div className="relative w-full">
                        {/* Scrollable container with proper width constraint */}
                        <div className="overflow-x-auto scrollbar-hide -mx-1 px-1">
                            <div className="flex gap-3" style={{ width: "fit-content", minWidth: "100%" }}>
                                {features.map((feature) => (
                                    <div key={feature.id} className="flex flex-col items-center gap-1 flex-shrink-0" style={{ width: "60px" }}>
                                        <div className="relative w-10 h-10">
                                            <Image
                                                src={feature.image}
                                                alt={feature.label}
                                                fill
                                                sizes="40px"
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className="text-[9px] text-gray-600 text-center leading-tight truncate w-full">
                                            {feature.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Fade indicators */}
                        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                    </div>
                </div>

                {/* Desktop: Grid */}
                <div className="hidden lg:grid lg:grid-cols-4 lg:gap-4 lg:w-full">
                    {features.map((feature) => (
                        <div key={feature.id} className="flex flex-col items-center gap-2">
                            <div className="relative w-12 h-12">
                                <Image
                                    src={feature.image}
                                    alt={feature.label}
                                    fill
                                    sizes="48px"
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xs text-gray-600 text-center">
                                {feature.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}