// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="wrapper-footer">
            {/* Image Banner Section */}
            <div className="shopify-section">
                <div
                    className="halo-block halo-banner image-banner style_bg--none is-load"
                    style={{
                        '--section_margin': '0px',
                        '--mg_top_desktop': '0px',
                        '--mg_top_tablet': '0px',
                        '--mg_top_mobile': '0px',
                        '--mg_bottom_desktop': '0px',
                        '--mg_bottom_tablet': '0px',
                        '--mg_bottom_mobile': '0px',
                        '--padding_full_width': '0px'
                    } as React.CSSProperties}
                >
                    <div className="container-full">
                        <div className="halo-block-content">
                            <div className="halo-banner-wrapper slideshow is-slide">
                                <div>
                                    <div className="item item--largeImg image-banner-item-large_img_TkCnTM border--border_s1 item--largeImg_border_s1">
                                        <div className="banner-item">
                                            <div className="img-box img-box--mobile">
                                                <Link href="/" className="image image-adapt adaptive_height block relative" style={{ paddingTop: '38.29787234042553%' }}>
                                                    <Image
                                                        src="https://www.momshome.in/cdn/shop/files/about_us_momshome.jpg?v=1728980935"
                                                        alt="Moms Home"
                                                        fill
                                                        className="object-cover"
                                                        sizes="100vw"
                                                        priority={false}
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Main Section */}
            <footer className="footer footer-1" style={{ '--spacing-l-r': '60px' } as React.CSSProperties}>
                {/* Footer Top */}
                <div className="footer__content-top" style={{ backgroundColor: '#dbcdf7' }}>
                    <div className="container container-1370 max-w-7xl mx-auto px-4">
                        <div className="halo-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

                            {/* Logo Column */}
                            <div className="footer-block__item footer-block__column footer-block__text block__text_first" style={{ '--block-custom-width': '15%' } as React.CSSProperties}>
                                <div>
                                    <div className="footer-block__details">
                                        <div className="image_logo mb-0">
                                            <Image
                                                src="//www.momshome.in/cdn/shop/files/moms_logo-01_200x.svg?v=1736325707"
                                                alt="Moms Home"
                                                width={200}
                                                height={120}
                                                className="w-auto h-auto"
                                            />
                                        </div>
                                        <div className="rte"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Shop Links */}
                            <div className="footer-block__item footer-block__column footer-block__link_list text-left block__text_first" style={{ '--block-custom-width': '15%' } as React.CSSProperties}>
                                <div className="footer-block__mobile">
                                    <h2 className="footer-block__heading text-[#16161a] text-base font-semibold uppercase tracking-wider mb-4">
                                        Shop
                                    </h2>
                                    <div className="footer-block__list">
                                        <ul className="list-unstyled space-y-2">
                                            {['Home', 'Shop', 'Kids Clothing', 'Gift', 'Hospital Bags', "Valentine's Special", 'New Arrivals', 'Shark Approved Deals', 'Buy 1 Get 1', 'About us'].map((item) => (
                                                <li key={item}>
                                                    <Link href="/" className="link link-underline list-menu__item--link text-[#232323] text-xs hover:text-[#232323] capitalize tracking-wide">
                                                        <span className="text">{item}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Information Links */}
                            <div className="footer-block__item footer-block__column footer-block__link_list text-left block__text_first" style={{ '--block-custom-width': '15%' } as React.CSSProperties}>
                                <div className="footer-block__mobile">
                                    <h2 className="footer-block__heading text-[#16161a] text-base font-semibold uppercase tracking-wider mb-4">
                                        Information
                                    </h2>
                                    <div className="footer-block__list">
                                        <ul className="list-unstyled space-y-2">
                                            {['Brand Story', 'Return Policy'].map((item) => (
                                                <li key={item}>
                                                    <Link href="/" className="link link-underline list-menu__item--link text-[#232323] text-xs hover:text-[#232323] capitalize tracking-wide">
                                                        <span className="text">{item}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                            {/* Update these links */}
                                            <li>
                                                <Link href="/pages/terms-conditions" className="link link-underline list-menu__item--link text-[#232323] text-xs hover:text-[#232323] capitalize tracking-wide">
                                                    <span className="text">Terms & Conditions</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/pages/privacy-policy" className="link link-underline list-menu__item--link text-[#232323] text-xs hover:text-[#232323] capitalize tracking-wide">
                                                    <span className="text">Privacy Policy</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/pages/faq" className="link link-underline list-menu__item--link text-[#232323] text-xs hover:text-[#232323] capitalize tracking-wide">
                                                    <span className="text">FAQ</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Customer Service Links */}
                            <div className="footer-block__item footer-block__column footer-block__link_list text-left block__text_first" style={{ '--block-custom-width': '15%' } as React.CSSProperties}>
                                <div className="footer-block__mobile">
                                    <h2 className="footer-block__heading text-[#16161a] text-base font-semibold uppercase tracking-wider mb-4">
                                        Customer Service
                                    </h2>
                                    <div className="footer-block__list">
                                        <ul className="list-unstyled space-y-2">
                                            <li>
                                                <Link href="/" className="link link-underline list-menu__item--link text-[#232323] text-xs hover:text-[#232323] capitalize tracking-wide">
                                                    <span className="text">Our Team</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/" className="link link-underline list-menu__item--link text-[#232323] text-xs hover:text-[#232323] capitalize tracking-wide">
                                                    <span className="text">My Account</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/pages/faq" className="link link-underline list-menu__item--link text-[#232323] text-xs hover:text-[#232323] capitalize tracking-wide">
                                                    <span className="text">FAQ</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.momshome.in/blogs/news/" className="link link-underline list-menu__item--link text-[#232323] text-xs hover:text-[#232323] capitalize tracking-wide">
                                                    <span className="text">Blog</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://momshome-in.myshopify.com/apps/return_prime" className="link link-underline list-menu__item--link text-[#232323] text-xs hover:text-[#232323] capitalize tracking-wide">
                                                    <span className="text">Return and Exchange</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/pages/corporate-gifting" className="link link-underline list-menu__item--link text-[#232323] text-xs hover:text-[#232323] capitalize tracking-wide">
                                                    <span className="text inline-flex items-center">
                                                        <Image src="https://cdn.shopify.com/s/files/1/0557/7683/7717/files/giftbox.png?v=1755081010" alt="" width={22} height={22} className="inline-block relative top-[7px] mr-1" />
                                                        Corporate Gifting
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/pages/franchise-enquiry" className="link link-underline list-menu__item--link text-[#232323] text-xs hover:text-[#232323] capitalize tracking-wide">
                                                    <span className="text inline-flex items-center">
                                                        <Image src="https://cdn.shopify.com/s/files/1/0557/7683/7717/files/franchise-agreement.png?v=1755084967" alt="" width={22} height={22} className="inline-block relative top-[7px] mr-1" />
                                                        Franchise Enquiry
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Us Column */}
                            <div className="footer-block__item footer-block__column footer-block__text block__text_first" style={{ '--block-custom-width': '35%' } as React.CSSProperties}>
                                <div>
                                    <h2 className="footer-block__heading text-[#16161a] text-base font-semibold uppercase tracking-wider mb-4">
                                        Contact Us
                                    </h2>
                                    <div className="footer-block__details" style={{ '--icon-size': '16px', '--content-spacing': '15px' } as React.CSSProperties}>
                                        <div className="rte">
                                            {/* Address */}
                                            <div className="address-wrapper content-piece flex mb-4">
                                                <span className="icon mr-3 text-[#232323]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16" fill="currentColor">
                                                        <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                                                    </svg>
                                                </span>
                                                <div className="text-[#232323] text-sm">
                                                    <p>Plot No. 741, Mahavir Nagar-Ist, Mandir Marg, Tonk Road, Durgapura, Jaipur, Rajasthan 302018</p>
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div className="phone-wrapper content-piece flex mb-4">
                                                <span className="icon mr-3 text-[#232323]">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" role="img" viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                                                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                                                    </svg>
                                                </span>
                                                <div className="text-[#232323] text-sm">
                                                    <p><Link href="tel:9024788312" className="hover:underline">+91-9024788312</Link> / </p>
                                                    <p><Link href="tel:6350676005" className="hover:underline">+91-6350676005</Link></p>
                                                    <p><Link href="tel:9983432333" className="hover:underline">+91-9983432333</Link></p>
                                                </div>
                                            </div>

                                            {/* Email */}
                                            <div className="email-wrapper content-piece flex mb-4">
                                                <span className="icon mr-3 text-[#232323]">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                                                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                                                    </svg>
                                                </span>
                                                <div className="text-[#232323] text-sm">
                                                    <p><Link href="mailto:info@momshome.in" className="hover:underline">info@momshome.in</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="footer-block__list-social mt-8">
                                    <div className="item clearfix">
                                        <ul className="list-unstyled list-social flex space-x-4" role="list">
                                            <li className="list-social__item">
                                                <Link href="https://www.facebook.com/momshomeorganic" className="link link--text list-social__link flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#a992d3] text-[#9279c1] hover:text-[#e58aa8] hover:border-white hover:bg-white transition-colors">
                                                    <svg aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="icon icon-facebook w-5 h-5 fill-current">
                                                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                                    </svg>
                                                    <span className="visually-hidden sr-only">Facebook</span>
                                                </Link>
                                            </li>
                                            <li className="list-social__item">
                                                <Link href="https://www.instagram.com/momshomeorganic/" className="link link--text list-social__link flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#a992d3] text-[#9279c1] hover:text-[#e58aa8] hover:border-white hover:bg-white transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true" focusable="false" role="presentation" className="icon icon-instagram w-5 h-5 fill-current">
                                                        <path d="M256,152c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M256,152 c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M437,0H75C33.6,0,0,33.6,0,75v362c0,41.4,33.6,75,75,75h362c41.4,0,75-33.6,75-75V75C512,33.6,478.4,0,437,0z M256,392c-74.399,0-135-60.601-135-135c0-74.401,60.601-135,135-135s135,60.599,135,135C391,331.399,330.399,392,256,392z M421,122c-16.5,0-30-13.5-30-30s13.5-30,30-30s30,13.5,30,30S437.5,122,421,122z M256,152c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M256,152c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M256,152c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z"></path>
                                                    </svg>
                                                    <span className="visually-hidden sr-only">Instagram</span>
                                                </Link>
                                            </li>
                                            <li className="list-social__item">
                                                <Link href="https://www.youtube.com/@momshomeorganic" className="link link--text list-social__link flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#a992d3] text-[#9279c1] hover:text-[#e58aa8] hover:border-white hover:bg-white transition-colors">
                                                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-youtube w-5 h-5 fill-current" viewBox="0 0 100 70">
                                                        <path d="M98 11c2 7.7 2 24 2 24s0 16.3-2 24a12.5 12.5 0 01-9 9c-7.7 2-39 2-39 2s-31.3 0-39-2a12.5 12.5 0 01-9-9c-2-7.7-2-24-2-24s0-16.3 2-24c1.2-4.4 4.6-7.8 9-9 7.7-2 39-2 39-2s31.3 0 39 2c4.4 1.2 7.8 4.6 9 9zM40 50l26-15-26-15v30z"></path>
                                                    </svg>
                                                    <span className="visually-hidden sr-only">YouTube</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Empty Newsletter Column (kept for structure) */}
                            <div className="footer-block__item footer-block__column footer-block__newsletter newsletter__ text-left block__text_first" style={{ '--block-custom-width': '40%' } as React.CSSProperties}></div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer__content-bottom bg-[#232323] py-5 border-t border-[#07d0bb]">
                    <div className="container container-1370 max-w-7xl mx-auto px-4">
                        <div className="footer-block__bottom flex flex-col md:flex-row justify-between items-center">
                            <div className="footer__column-item footer__copyright">
                                <div className="copyright__content text-xs text-[#cfcfcf]">
                                    <p>All Rights Reserved. Powered by Momshome.</p>
                                </div>
                            </div>
                            <div className="footer__column-item footer__shop_name">
                                <small className="copyright__content"></small>
                            </div>
                            <div className="footer__column footer__column--info">
                                <div className="footer-block__list-payment footer__column-item footer__payment">
                                    <span className="visually-hidden sr-only">Payment methods</span>
                                    <ul className="list list-payment flex space-x-2" role="list">
                                        <li className="list-payment__item visa">
                                            <svg className="icon icon--full-color w-[38px] h-6" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-visa">
                                                <title id="pi-visa">Visa</title>
                                                <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                                                <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                                                <path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path>
                                            </svg>
                                        </li>
                                        <li className="list-payment__item master">
                                            <svg className="icon icon--full-color w-[38px] h-6" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-master">
                                                <title id="pi-master">Mastercard</title>
                                                <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                                                <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                                                <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                                                <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                                                <path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path>
                                            </svg>
                                        </li>
                                        <li className="list-payment__item maestro">
                                            <svg className="icon icon--full-color w-[38px] h-6" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-maestro">
                                                <title id="pi-maestro">Maestro</title>
                                                <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                                                <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                                                <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                                                <circle fill="#00A2E5" cx="23" cy="12" r="7"></circle>
                                                <path fill="#7375CF" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path>
                                            </svg>
                                        </li>
                                        <li className="list-payment__item american_express">
                                            <svg className="icon icon--full-color w-[38px] h-6" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-american_express" viewBox="0 0 38 24" width="38" height="24">
                                                <title id="pi-american_express">American Express</title>
                                                <path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"></path>
                                                <path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"></path>
                                                <path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"></path>
                                                <path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"></path>
                                                <path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"></path>
                                                <path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"></path>
                                                <path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"></path>
                                                <path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"></path>
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;