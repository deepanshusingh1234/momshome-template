// app/pages/faq/page.tsx
import Link from "next/link";

export default function FAQPage() {
    return (
        <div className="bg-white min-h-screen py-8 md:py-12">
            <div className="w-full  mx-auto px-4">


                {/* 7-Day Return and Exchange Policy Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
                    <div className="bg-gradient-to-r from-[#b39ddb] to-[#9a7fc9] px-6 py-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">
                            7-Day Return and Exchange Policy
                        </h2>
                    </div>

                    <div className="p-6 md:p-8 space-y-6">
                        {/* Exchanges */}
                        <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                            <h3 className="text-lg font-semibold text-[#232323] mb-2 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#b39ddb] rounded-full"></span>
                                Exchanges
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                You can exchange items within 7 days of delivery if they are damaged, defective, incorrect, or if there is a size issue. Contact us at{" "}
                                <a href="tel:+919024788312" className="text-[#b39ddb] hover:underline font-medium">
                                    +91 90247 88312
                                </a>{" "}
                                or{" "}
                                <a href="mailto:info@momshome.in" className="text-[#b39ddb] hover:underline font-medium">
                                    info@momshome.in
                                </a>{" "}
                                /{" "}
                                <a href="#" className="text-[#b39ddb] hover:underline font-medium">
                                    Click Here
                                </a>{" "}
                                to initiate the process.
                            </p>
                        </div>

                        {/* Refunds */}
                        <div className="border-b border-gray-100 pb-4">
                            <h3 className="text-lg font-semibold text-[#232323] mb-2 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#b39ddb] rounded-full"></span>
                                Refunds
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                If you prefer a refund instead of an exchange, we will issue a gift card for the purchase amount. The gift card will be sent to you after we receive the returned product. Please note that refunds in the form of a gift card are available only within 3 days of delivery and it is not applicable to sale items; those items can only be exchanged, not refunded.
                            </p>
                        </div>

                        {/* Non-Eligible Products */}
                        <div className="border-b border-gray-100 pb-4">
                            <h3 className="text-lg font-semibold text-[#232323] mb-2 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#b39ddb] rounded-full"></span>
                                Non-Eligible Products
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">Returns or exchanges are not accepted for:</p>
                            <ul className="space-y-2">
                                {[
                                    "Used or worn items",
                                    "Washed items",
                                    "Items not in their original condition",
                                    "Products missing original packaging or accessories",
                                    "Items without a readable serial number",
                                    "Hygiene Items - Cloth diapers, nappies, padded underwear",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                                        <span className="text-[#b39ddb] mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* How to Return or Exchange */}
                        <div className="border-b border-gray-100 pb-4">
                            <h3 className="text-lg font-semibold text-[#232323] mb-2 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#b39ddb] rounded-full"></span>
                                How to Return or Exchange
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                To return or exchange an item, please contact us at{" "}
                                <a href="tel:+919024788312" className="text-[#b39ddb] hover:underline font-medium">
                                    +91 90247 88312
                                </a>{" "}
                                or{" "}
                                <a href="mailto:info@momshome.in" className="text-[#b39ddb] hover:underline font-medium">
                                    info@momshome.in
                                </a>{" "}
                                /{" "}
                                <a href="#" className="text-[#b39ddb] hover:underline font-medium">
                                    Click Here
                                </a>. We will assist with the exchange and inspection process.
                            </p>
                        </div>

                        {/* Thank You Note */}
                        <div className="bg-purple-50 p-4 rounded-lg">
                            <p className="text-gray-700 text-sm md:text-base italic">
                                Thank you for choosing Moms Home. We are committed to ensuring your satisfaction with every purchase.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Shipping & Delivery Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
                    <div className="bg-gradient-to-r from-[#b39ddb] to-[#9a7fc9] px-6 py-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">
                            Shipping & Delivery
                        </h2>
                    </div>

                    <div className="p-6 md:p-8 space-y-4">
                        {[
                            {
                                title: "Delivery Time",
                                content: "Orders are typically processed and shipped within 3 to 5 business days. Delivery times vary by location."
                            },
                            {
                                title: "Tracking",
                                content: "Tracking may take up to 24 hours to activate. Please check back after this period."
                            },
                            {
                                title: "Shipping Costs",
                                content: "Check the Cart page for shipping fees and minimum order values for free shipping."
                            },
                            {
                                title: "International Orders",
                                content: "We ship within India only. We accept most international credit cards, including MasterCard, VISA, Diners Club, and AMEX."
                            },
                            {
                                title: "Payment Changes",
                                content: "If you selected COD but wish to pay by card or bank transfer, please call us at +91 90247 88312 for assistance."
                            },
                            {
                                title: "Order Returned to Us",
                                content: "If your order is returned, email info@momshome.in with 'Resend my order' in the subject line to arrange re-shipment."
                            },
                        ].map((item, index) => (
                            <div key={index} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                                <h3 className="font-semibold text-[#232323] mb-1 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#b39ddb] rounded-full"></span>
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base pl-3">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bulk Orders & Business Inquiries Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#b39ddb] to-[#9a7fc9] px-6 py-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">
                            Bulk Orders & Business Inquiries
                        </h2>
                    </div>

                    <div className="p-6 md:p-8 space-y-4">
                        {[
                            {
                                title: "Vendor/Brand Partnership",
                                content: "For partnership inquiries, email info@momshome.in with 'Vendor Inquiry' in the subject line."
                            },
                            {
                                title: "Bulk Orders",
                                content: "For bulk orders or business queries, contact us at +91 90247 88312 or email info@momshome.in with 'Bulk Order' in the subject line."
                            },
                        ].map((item, index) => (
                            <div key={index} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                                <h3 className="font-semibold text-[#232323] mb-1 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#b39ddb] rounded-full"></span>
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base pl-3">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Information Footer */}
                <div className="mt-8 text-center">
                    <p className="text-gray-600 text-sm">
                        Still have questions?{" "}
                        <Link href="/contact" className="text-[#b39ddb] hover:underline font-medium">
                            Contact our support team
                        </Link>
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                        Available Monday - Saturday, 10:00 AM - 6:00 PM
                    </p>
                </div>
            </div>
        </div>
    );
}