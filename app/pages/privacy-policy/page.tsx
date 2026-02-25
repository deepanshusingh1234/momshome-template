// app/pages/privacy-policy/page.tsx
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - Moms Home',
    description: 'Learn about how Moms Home protects your privacy and handles your personal information.',
};

export default function PrivacyPolicyPage() {
    return (
        <main id="MainContent" className="wrapper-body content-for-layout focus-none bg-white min-h-screen py-8 md:py-12" role="main" tabIndex={-1}>
            <div className="w-full  mx-auto px-4">
                <div className="shopify-policy__container bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

                    {/* Header */}
                    <div className="shopify-policy__title bg-gradient-to-r from-[#b39ddb] to-[#9a7fc9] px-6 md:px-8 py-6">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                            Privacy Policy
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="shopify-policy__body p-6 md:p-8 lg:p-10">
                        <div className="rte prose prose-sm md:prose-base max-w-none text-gray-700">

                            {/* We protect your privacy */}
                            <div className="mb-8">
                                <h2 className="text-xl md:text-2xl font-semibold text-[#232323] mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#b39ddb] rounded-full"></span>
                                    We protect your privacy.
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Our privacy policy is simple: any information you give us stays with us. We do not rent, sell, lend, or otherwise distribute your personal information to anyone for any reason. This includes your contact information, as well as specific order information.
                                </p>
                            </div>

                            {/* Limit data access */}
                            <div className="mb-8">
                                <h2 className="text-xl md:text-2xl font-semibold text-[#232323] mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#b39ddb] rounded-full"></span>
                                    We limit data access to those who need to know.
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Within our organization, your personal data is accessible to only a limited number of employees with special access privileges. Although we may, from time to time, compile general demographic information based on your order, this information is shared within our organization only and has no identifiable personal data associated with it.
                                </p>
                            </div>

                            {/* Information Collected */}
                            <div className="mb-8">
                                <h2 className="text-xl md:text-2xl font-semibold text-[#232323] mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#b39ddb] rounded-full"></span>
                                    Information Collected
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-3">
                                    To enable you to place an order on our site, we need to have the following basic information about you:
                                </p>
                                <ul className="list-disc pl-6 mb-3 space-y-1 text-gray-600">
                                    <li>Your First Name</li>
                                    <li>Your Last Name</li>
                                    <li>Your Address</li>
                                    <li>City, PIN code, State, Country</li>
                                    <li>Phone Number</li>
                                    <li>Contact E-mail address</li>
                                </ul>
                                <p className="text-gray-600 leading-relaxed mb-3">
                                    Apart from this, our systems gather certain details about your computer&apos;s internet connection like your IP address when you visit our site. Your IP address does not identify you personally. We use this information to deliver our web pages to you upon request, to customize our site as per your interest, to calculate the number of visitors on our site and to know the geographic locations from where our visitors come.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We do not allow any unauthorized person or organization be it other members, visitors, and anyone not in our organization to use any information collected from you.
                                </p>
                            </div>

                            {/* Information Modification */}
                            <div className="mb-8">
                                <h2 className="text-xl md:text-2xl font-semibold text-[#232323] mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#b39ddb] rounded-full"></span>
                                    Information Modification
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    You can modify your personal details by accessing Edit Profile option anytime from our site.
                                </p>
                            </div>

                            {/* Information Sharing */}
                            <div className="mb-8">
                                <h2 className="text-xl md:text-2xl font-semibold text-[#232323] mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#b39ddb] rounded-full"></span>
                                    Information Sharing
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    This is probably the most important question in your mind as to with whom do we share your information? The answer to this question is that we do not rent, sell, barter, or give away your information to anyone. To some extent, information has to be passed on to the courier companies, credit card processing companies, vendors, etc. to enable them to perform their functions related to your order fulfilment. Apart from this normal business requirement, information may also be needed to be shared with law authorities, for fraud detection, and for the safety of our site, employees, management, users, members and other affiliates associated with us.
                                </p>
                            </div>

                            {/* Information Usage */}
                            <div className="mb-8">
                                <h2 className="text-xl md:text-2xl font-semibold text-[#232323] mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#b39ddb] rounded-full"></span>
                                    Information Usage
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    The most important usage of the information collected from you is your email which is used to inform you that your order has been confirmed/executed. Your email is also used to inform you for your customer service related queries and for any newsletters sent. All other information collected is confidentially stored and will not be disclosed unless needed as per the requirement of the law authorities or in case of any disputes.
                                </p>
                            </div>

                            {/* Spacing */}
                            <div className="my-8"></div>

                            {/* Moms Home Brand Section */}
                            <div className="bg-purple-50 p-6 md:p-8 rounded-lg mt-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#232323] mb-2">
                                    MomsHome – <span className="text-[#b39ddb]">as pure as your love</span>
                                </h3>
                                <p className="text-lg font-semibold text-gray-700 mb-4">
                                    India&apos;s First & Biggest 100% Organic Baby Clothing Store
                                </p>

                                <p className="text-gray-600 leading-relaxed mb-4">
                                    As a parent we always want to protect our kids from everything harmful from a tiny little ant to some dirt, we don&apos;t want anything harming our babies.
                                </p>

                                <p className="text-gray-600 leading-relaxed mb-4">
                                    It&apos;s a widely known fact that a baby&apos;s skin is more sensitive and more susceptible to irritation. Also it&apos;s thinner and more porous than your skin. Thus rough fabrics not only cause discomfort and rashes, but any chemicals in or on your baby&apos;s clothing can be more easily absorbed into their body. This is why organic clothing is a fantastic option. You can get the comfort of ultra-soft cotton without all of the potentially harmful toxins that normal textiles are saturated with and take care of your precious little kid.
                                </p>

                                <p className="text-gray-600 leading-relaxed mb-4">
                                    At Moms Home, we bring to you the range of pure organic cotton products in Baby, Bed and Bath category which are made by the finest of organic cotton and other eco-friendly material like bamboo. Our signature 100% organic cotton is known for being heavenly soft and gentle on delicate skin, yet super-durable through endless washes.
                                </p>

                                <p className="text-gray-600 leading-relaxed mb-4">
                                    It&apos;s also Earth-friendly and GOTS certified to meet the highest global standard for organic textiles. Best of all, we give parents a break by delivering our premium products at surprisingly affordable prices.
                                </p>

                                <p className="text-gray-600 leading-relaxed mb-4">
                                    The range is exhaustive to include Muslins, Baby Quilts, Socks, Baby Dohars, Gift Sets, Onesies, Sleeping Suits, full rompers, mittens, booties, bolsters, blankets, Bedding Sets and a lot more.
                                </p>

                                {/* Why Organic cotton matters */}
                                <h4 className="text-xl font-bold text-[#232323] mt-6 mb-3">
                                    Why Organic cotton matters?
                                </h4>

                                <h5 className="text-lg font-semibold text-[#232323] mb-3">
                                    5 reasons why organic cotton is best for your baby
                                </h5>

                                <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                                    <li>It&apos;s best for baby&apos;s delicate skin</li>
                                    <li>It Feels Heavenly soft</li>
                                    <li>It lasts wash after wash</li>
                                    <li>It&apos;s Earth and farmer friendly</li>
                                    <li>It&apos;s GOTS certified 100% organic</li>
                                </ul>

                                <div className="mt-6 pt-4 border-t border-gray-200">
                                    <h4 className="text-xl font-bold text-[#232323] mb-1">
                                        Moms Home – <span className="text-[#b39ddb]">as pure as your love</span>
                                    </h4>
                                    <p className="text-gray-600">
                                        At Moms Home, we bring to you the range of pure organic cotton products in Baby, Bed and Bath category which are made by the finest of organic cotton and other eco-friendly material like bamboo.
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