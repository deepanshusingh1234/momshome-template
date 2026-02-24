// components/product/Breadcrumb.tsx
import Link from "next/link";

interface BreadcrumbProps {
    productTitle: string;
}

export default function Breadcrumb({ productTitle }: BreadcrumbProps) {
    return (
        <div
            className="productView-moreItem moreItem-breadcrumb"
            style={{
                paddingTop: "10px",
                paddingBottom: "20px",
            }}
        >
            <div className="breadcrumb-bg">
                <div className="container px-4 lg:px-6">
                    <nav className="breadcrumb breadcrumb-left flex items-center text-sm" aria-label="breadcrumbs">
                        <Link href="/" className="link home-link text-gray-600 hover:text-[#ab91df]">
                            Home
                        </Link>
                        <span className="separate mx-2 text-gray-400" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                <path d="M 7.75 1.34375 L 6.25 2.65625 L 14.65625 12 L 6.25 21.34375 L 7.75 22.65625 L 16.75 12.65625 L 17.34375 12 L 16.75 11.34375 Z" />
                            </svg>
                        </span>
                        <span className="text-gray-900 font-medium">{productTitle}</span>
                    </nav>
                </div>
            </div>
        </div>
    );
}