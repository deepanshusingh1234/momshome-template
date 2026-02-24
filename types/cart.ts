// types/cart.ts
export interface CartItem {
    id: string; // Unique cart item ID (variantId + timestamp)
    variantId: string | number;
    productId: number;
    handle: string;
    title: string;
    image: string;
    price: number;
    compare_at_price: number;
    quantity: number;
    maxQuantity: number;
    vendor: string;
    selectedOptions?: string[];
    sku?: string;
}

export interface CartData {
    items: CartItem[];
    subtotal: number;
    total: number;
    discount: number;
    itemCount: number;
    couponCode?: string;
    note?: string;
}