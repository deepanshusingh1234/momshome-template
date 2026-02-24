export interface Brand {
    id: string;
    image: string;
    link: string;
    alt: string;
    title: string;
}

export interface FeaturedProduct {
    id: string;
    image: string;
    title: string;
    link: string;
    buttonText: string;
    buttonColor: string;
}

export interface Slide {
    id: string;
    mobileImage: string;
    desktopImage: string;
    link: string;
    alt: string;
}

export interface ProductVariant {
    id: number;
    title: string;
    price: number;
    compare_at_price: number;
    available: boolean;
    sku: string;
}

export interface Product {
    id: number;
    handle: string;
    title: string;
    image: string;
    price: number;
    compare_at_price: number;
    available: boolean;
    discount: number;
    variants?: ProductVariant[];
}

export interface InstagramImage {
    id: number;
    image: string;
    alt: string;
}

export interface Badge {
    id: string;
    image: string;
    alt: string;
    content: string[];
}

export interface Offer {
    id: string;
    image: string;
    link: string;
    title: string;
    buttonText: string;
    buttonColor: string;
}

export interface HomepageData {
    brands: Brand[];
    featuredProducts: FeaturedProduct[];
    slides: Slide[];
    moreFeaturedProducts: FeaturedProduct[];
    hospitalBagsProducts: Product[];
    instagramImages: InstagramImage[];
    newArrivalsProducts: Product[];
    offers: Offer[];
    trendingProducts: Product[];
    badges: Badge[];
}