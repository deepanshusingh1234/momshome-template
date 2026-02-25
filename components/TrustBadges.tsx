"use client";

import { useState } from "react";

const badges = [
    {
        id: "popup1",
        image: "https://cdn.shopify.com/s/files/1/0557/7683/7717/files/trusted_by.png?v=1737348840",
        alt: "Trusted by 10Lac+ Parents",
        content: [
            "With a legacy of trust, our products are trusted by over 10lac + parents who value our on-time delivery and the softness of 100% organic cotton and muslin-friendly essentials.",
            "Each piece is carefully designed to provide ultimate comfort, safety, and care for your baby's delicate skin—trusted by those who prioritize only the best for their little ones."
        ]
    },
    {
        id: "popup2",
        image: "https://cdn.shopify.com/s/files/1/0557/7683/7717/files/skin_frndly.png?v=1737348840",
        alt: "Skin Friendly",
        content: [
            "Our baby clothing is crafted with skin-friendly materials, offering a softness that feels like a gentle touch.",
            "Breathable and ultra-soft, they provide ultimate comfort while keeping your baby cozy and calm.",
            "With every piece, we prioritize your baby's well-being, ensuring only the safest touch for their precious skin."
        ]
    },
    {
        id: "popup3",
        image: "https://cdn.shopify.com/s/files/1/0557/7683/7717/files/azo_free.png?v=1737348840",
        alt: "Azo Free",
        content: [
            "At the heart of our baby clothing, we prioritize your little one's safety and comfort.",
            "That's why every print we create is designed with azo-free dyes, ensuring no harmful chemicals touch their delicate skin.",
            "From playful patterns to vibrant colors, each piece is crafted with care that your baby is dressed in the safest, most natural fabrics."
        ]
    },
    {
        id: "popup4",
        image: "https://cdn.shopify.com/s/files/1/0557/7683/7717/files/100_cotton.png?v=1737348840",
        alt: "100% Cotton",
        content: [
            "Made from 100% organic cotton, our baby essentials are as comforting as a mother's hug.",
            "Soft, breathable, and free from harmful chemicals, they keep your little one cozy and content all day long.",
            "Gentle on delicate baby skin and kind to the planet, this natural fabric provides the perfect balance of safety, comfort, and sustainability—everything your baby deserves!"
        ]
    },
    {
        id: "popup5",
        image: "https://cdn.shopify.com/s/files/1/0557/7683/7717/files/made_in_india.png?v=1737348840",
        alt: "Made in India",
        content: [
            "Our baby clothing and essentials are Proudly made in India with 100% organic materials, ensuring quality and safety.",
            "By supporting local artisans, we empower rural women, creating opportunities, growth, employment and skill development.",
            "Every purchase helps strengthen India's economy and fosters a sustainable, self-reliant future for both your baby and communities."
        ]
    },
    {
        id: "popup6",
        image: "https://cdn.shopify.com/s/files/1/0557/7683/7717/files/one_step_soloution.png?v=1737348840",
        alt: "One Step Solution",
        content: [
            "Your ultimate destination for everything your baby needs! From the softest nappies and snuggly quilts to our top-selling hospital bags with all the essentials, diaper bags, swaddles, and beyond—we've thoughtfully curated each item.",
            "Crafted with love, every piece is designed to ensure your little one's happiness at every step."
        ]
    }
];

const TrustBadges = () => {
    const [activePopup, setActivePopup] = useState<string | null>(null);

    const openPopup = (id: string) => {
        setActivePopup(id);
        // eslint-disable-next-line react-hooks/immutability
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setActivePopup(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section className="w-full">
            <div className="orgmbrouter bg-[#eae1f9] relative py-16 lg:py-24 px-4">
                {/* Decorative Elements */}
                <div className="hidden lg:block absolute right-0 bottom-0 w-[200px] h-[271px] bg-no-repeat bg-contain bg-right-bottom"
                    style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0557/7683/7717/files/Mascot-05.png?v=1738728819')" }}>
                </div>
                <div className="hidden lg:block absolute left-0 bottom-0 w-[200px] h-[271px] bg-no-repeat bg-contain bg-left-bottom"
                    style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0557/7683/7717/files/dragon_fly.png?v=1738728818')" }}>
                </div>

                {/* Badges Grid */}
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-10">
                        {badges.map((badge) => (
                            <div key={badge.id} className="btnmbr flex justify-center">
                                <button
                                    onClick={() => openPopup(badge.id)}
                                    className="border-none bg-transparent cursor-pointer transition-transform hover:scale-105"
                                >
                                    <img
                                        src={badge.image}
                                        alt={badge.alt}
                                        className="w-[120px] h-auto"
                                        loading="lazy"
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popups */}
                {badges.map((badge) => (
                    <div
                        key={badge.id}
                        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white p-6 rounded-lg shadow-xl z-[1000] transition-opacity duration-300 ${activePopup === badge.id ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                            }`}
                    >
                        <button
                            onClick={closePopup}
                            className="absolute right-4 top-4 text-2xl cursor-pointer hover:text-gray-600"
                        >
                            ×
                        </button>
                        <div className="mt-4 space-y-4">
                            {badge.content.map((paragraph, index) => (
                                <p key={index} className="text-gray-700 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Overlay */}
                {activePopup && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
                        onClick={closePopup}
                    />
                )}
            </div>

            <style jsx>{`
        @media (max-width: 767px) {
          .orgmbrouter {
            display: none;
          }
        }
      `}</style>
        </section>
    );
};

export default TrustBadges;