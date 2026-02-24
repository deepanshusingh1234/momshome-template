// app/products/[handle]/page.tsx
import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/product/ProductDetailClient";
import { getProductByHandle, getAllProductHandles } from "@/lib/products";

interface ProductPageProps {
    params: {
        handle: string;
    };
}

export async function generateStaticParams() {
    const handles = await getAllProductHandles();
    return handles.map((handle) => ({
        handle,
    }));
}

export default async function ProductPage({ params }: ProductPageProps) {
    const product = await getProductByHandle(params.handle);

    if (!product) {
        notFound();
    }

    return <ProductDetailClient product={product} />;
}