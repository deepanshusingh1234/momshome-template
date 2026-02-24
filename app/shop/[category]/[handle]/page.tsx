// app/shop/[category]/[handle]/page.tsx
import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/product/ProductDetailClient";
import { getProductByHandle, getAllProducts } from "@/lib/products";

interface ProductPageProps {
    params: Promise<{  // Change this to Promise
        category: string;
        handle: string;
    }>;
}

export async function generateStaticParams() {
    const products = await getAllProducts();
    return products.map((product) => ({
        category: product.category || "muslin-swaddle",
        handle: product.handle,
    }));
}

export default async function ProductPage({ params }: ProductPageProps) {
    // Await the params
    const { category, handle } = await params;

    const product = await getProductByHandle(handle);

    if (!product) {
        notFound();
    }

    return <ProductDetailClient product={product} />;
}