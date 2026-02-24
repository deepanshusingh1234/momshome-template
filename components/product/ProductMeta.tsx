// components/product/ProductMeta.tsx
interface ProductMetaProps {
    sku: string;
    available: boolean;
}

export default function ProductMeta({ sku, available }: ProductMetaProps) {
    return (
        <div className="productView-moreItem" style={{ padding: "0 0 18px" }}>
            <div className="productView-info space-y-1 text-sm border-t border-gray-200 pt-4">
                <div className="productView-info-item flex">
                    <span className="productView-info-name w-24 text-gray-600">SKU:</span>
                    <span className="productView-info-value text-gray-900">{sku}</span>
                </div>
                <div className="productView-info-item flex">
                    <span className="productView-info-name w-24 text-gray-600">Availability:</span>
                    <span className="productView-info-value text-green-600 font-medium">
                        {available ? "In Stock" : "Out of Stock"}
                    </span>
                </div>
                <div className="productView-info-item flex">
                    <span className="productView-info-name w-24 text-gray-600">Product Type:</span>
                    <span className="productView-info-value text-gray-900">Muslin Swaddle</span>
                </div>
            </div>
        </div>
    );
}