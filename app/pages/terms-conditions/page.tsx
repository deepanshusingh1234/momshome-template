// app/pages/terms-conditions/page.tsx
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms and Conditions - Moms Home',
    description: 'Read our terms and conditions for using Moms Home website and services.',
};

export default function TermsConditionsPage() {
    return (
        <main id="MainContent" className="wrapper-body content-for-layout focus-none bg-white min-h-screen py-8 md:py-12" role="main" tabIndex={-1}>
            <div className="w-full  mx-auto px-4">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#b39ddb] to-[#9a7fc9] px-6 md:px-8 py-6 text-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                            TERMS AND CONDITIONS
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 lg:p-10">
                        <div className="prose prose-sm md:prose-base max-w-none text-gray-700">

                            {/* Title */}
                            <h2 className="text-xl md:text-2xl font-semibold text-[#232323] text-center mb-6">
                                TERMS AND CONDITIONS
                            </h2>

                            <div className="space-y-4 text-gray-600 leading-relaxed">

                                {/* Introduction */}
                                <p>
                                    All information, products and services displayed on the www.momshome.in website constitute an &quot;invitation to offer&quot;. Your order for purchase constitutes your &quot;offer&quot; which shall be subject to the terms and conditions as listed below. www.momshome.in the website has the right to accept or reject your offer without assigning any reason thereof.
                                </p>

                                <p>
                                    In order to use the www.momshome.in website belonging to Greenwood Organics, you (The User) have accepted the following terms and conditions given below. reserves the right to add, delete, alter or modify these terms and conditions at any time.
                                </p>

                                <p>
                                    You (The User) are therefore advised to read carefully these terms and conditions every time you use the www.momshome.in website of Greenwood Organics.
                                </p>

                                {/* Terms List */}
                                <div className="mt-8 space-y-6">

                                    {/* Term 1 */}
                                    <div className="border-b border-gray-100 pb-4">
                                        <p className="font-semibold text-[#232323] mb-2">1.</p>
                                        <p className="text-gray-600">
                                            We have made every effort to display the colour of our products that appear on the site as accurately as possible. However, as the actual colours you see will depend on your monitor, we cannot guarantee that your monitor&apos;s display of colour will be accurate.
                                        </p>
                                    </div>

                                    {/* Term 2 */}
                                    <div className="border-b border-gray-100 pb-4">
                                        <p className="font-semibold text-[#232323] mb-2">2.</p>
                                        <p className="text-gray-600">
                                            The User certifies that he/she is at least 18 (eighteen) years of age or has the consent of a parent or legal guardian.
                                        </p>
                                    </div>

                                    {/* Term 3 */}
                                    <div className="border-b border-gray-100 pb-4">
                                        <p className="font-semibold text-[#232323] mb-2">3.</p>
                                        <p className="text-gray-600">
                                            Greenwood Organics will not be responsible for any damage suffered by users from use of the services on www.momshome.in. This without limitation includes loss of revenue or data resulting from delays, non-deliveries, missed deliveries, or service interruptions as may occur because of any act/omission of the vendor. This disclaimer of liability also applies to any damages or injury caused by any failure of performance, negligence, defect, deletion, error, omission, interruption, delay in operation or transmission, computer virus, communication line failure, theft or destruction or unauthorized access to, alteration of, or use of record, whether for breach of contract, tortuous behavior, or under any other cause of action.
                                        </p>
                                    </div>

                                    {/* Term 4 */}
                                    <div className="border-b border-gray-100 pb-4">
                                        <p className="font-semibold text-[#232323] mb-2">4.</p>
                                        <p className="text-gray-600">
                                            Greenwood Organics will take &quot;Full Responsibility&quot; of your Order if the Order has been shipped to any of the major cities, where we used &quot;Private Courier Companies&quot; (eg. Blue Dart, First Flight, Safex, DHL, Dehlivery, Xspresses Bee etc.) to ship your order.
                                        </p>
                                    </div>

                                    {/* Term 5 */}
                                    <div className="border-b border-gray-100 pb-4">
                                        <p className="font-semibold text-[#232323] mb-2">5.</p>
                                        <p className="text-gray-600">
                                            The prices and availability of products are subject to change without prior notice at the sole discretion of Greenwood Organics.
                                        </p>
                                    </div>

                                    {/* Term 6 */}
                                    <div className="border-b border-gray-100 pb-4">
                                        <p className="font-semibold text-[#232323] mb-2">6.</p>
                                        <p className="text-gray-600">
                                            Request for cancellations of orders once placed on www.momshome.in shall not be entertained.
                                        </p>
                                    </div>

                                    {/* Term 7 */}
                                    <div className="border-b border-gray-100 pb-4">
                                        <p className="font-semibold text-[#232323] mb-2">7.</p>
                                        <p className="text-gray-600">
                                            Greenwood Organics reserves the right to refuse or cancel any order placed for a product that is listed at an incorrect price or for any other reason. This shall be regardless of whether the order has been confirmed and/or payment been received. The payment shall be refunded and the User shall be informed of the same.
                                        </p>
                                    </div>

                                    {/* Term 8 */}
                                    <div className="border-b border-gray-100 pb-4">
                                        <p className="font-semibold text-[#232323] mb-2">8.</p>
                                        <p className="text-gray-600">
                                            If a non-delivery or late delivery occurs due to a mistake by the User (i.e. wrong or incomplete name or address or recipient not available) any extra cost spent by Greenwood Organics for re-delivery shall be claimed from the User placing the order.
                                        </p>
                                    </div>

                                    {/* Term 9 */}
                                    <div className="border-b border-gray-100 pb-4">
                                        <p className="font-semibold text-[#232323] mb-2">9.</p>
                                        <p className="text-gray-600">
                                            The User agrees to give accurate, authentic and true information. Greenwood Organics reserves the right to confirm and validate the information and other details provided by the User at any point of time. If any such User details are found not to be true wholly or partly, Greenwood Organics has the right in its sole discretion to reject the registration and debar the User from using the services of www.momshome.in without prior intimation whatsoever.
                                        </p>
                                    </div>

                                    {/* Term 10 */}
                                    <div className="border-b border-gray-100 pb-4">
                                        <p className="font-semibold text-[#232323] mb-2">10.</p>
                                        <p className="text-gray-600">
                                            Greenwood Organics will not be liable for any type or kind of credit card fraud. The liability to use a card fraudulently will be on the user and the onus to &apos;prove otherwise&apos; shall be exclusively on the user. The User must exclusively use his/her own card on the site.
                                        </p>
                                    </div>

                                    {/* Term 11 */}
                                    <div className="border-b border-gray-100 pb-4">
                                        <p className="font-semibold text-[#232323] mb-2">11.</p>
                                        <p className="text-gray-600">
                                            Greenwood Organics shall not entertain any complaints after 15 days, once the order is delivered.
                                        </p>
                                    </div>

                                    {/* Term 12 */}
                                    <div className="border-b border-gray-100 pb-4">
                                        <p className="font-semibold text-[#232323] mb-2">12.</p>
                                        <p className="text-gray-600">
                                            This agreement shall be construed in accordance with the applicable laws of India. The Courts at Rajasthan shall have exclusive jurisdiction in any proceedings arising out of this agreement.
                                        </p>
                                    </div>
                                </div>

                                {/* Note about modifications */}
                                <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                                    <p className="text-sm text-gray-600 italic">
                                        Note: Greenwood Organics reserves the right to add, delete, alter or modify these terms and conditions at any time. Users are advised to read these terms and conditions carefully every time they use the website.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Last Updated Note */}
                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </div>
        </main>
    );
}