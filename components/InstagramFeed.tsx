"use client";
import homepageData from "../data/homepage-data.json";
import { InstagramImage } from "@/types/homepage";




const InstagramFeed = () => {
    const instagramImages = homepageData.instagramImages as InstagramImage[];
    return (
        <div className="instagram-slide w-full bg-white py-8 lg:py-12">
            <div className="w-full overflow-hidden">
                <div
                    className="flex animate-scroll"
                    style={{
                        animation: 'scroll 35s linear infinite',
                        width: 'fit-content'
                    }}
                >
                    {/* First set */}
                    {instagramImages.map((image) => (
                        <div
                            key={`first-${image.id}`}
                            className="flex-shrink-0 w-[33.33vw] max-w-[400px] px-[2.5px]"
                        >
                            <div className="relative aspect-[3/2] overflow-hidden">
                                <img
                                    src={image.image}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {instagramImages.map((image) => (
                        <div
                            key={`second-${image.id}`}
                            className="flex-shrink-0 w-[33.33vw] max-w-[400px] px-[2.5px]"
                        >
                            <div className="relative aspect-[3/2] overflow-hidden">
                                <img
                                    src={image.image}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @media (max-width: 767px) {
          .instagram-slide {
            display: none;
          }
        }
      `}</style>
        </div>
    );
};

export default InstagramFeed;