import React from 'react';
import './footer.css';
import logoFooter from '../logo-footer.png';
import footerData from './data/footer.json';

function Footer() {
    return (
        <footer className="footer-section mt-5">
            <div className="container">
                {}
                <div className="footer-cta py-4">
                    <div className="row">
                        {footerData.cta.map((item, index) => (
                            <div className="col-xl-4 col-md-4 mb-30" key={index}>
                                <div className="single-cta">
                                    <i className={item.iconClass} />
                                    <div className="cta-text">
                                        <h4>{item.title}</h4>
                                        <span>{item.text}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {}
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        {}
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html">
                                        <img
                                            src={logoFooter}
                                            className="img-fluid"
                                            alt="logo"
                                        />
                                    </a>
                                </div>
                                <div className="footer-text">
                                    <p>
                                        Ready to bring your ideas to life? Feel free to reach out and let’s discuss how  to collaborate to create exceptional web experiences.
                                    </p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow Me</span>
                                    {footerData.socialLinks.map((link, index) => (
                                        <a key={index} href={link.href} target="_blank" rel="noreferrer">
                                            <i className={link.iconClass} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {}
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    {footerData.quickLinks.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.href}
                                                target={link.href.includes('http') ? '_blank' : '_self'}
                                                rel="noreferrer"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {}
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to my new feeds. Kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button>
                                            <i className="fab fa-telegram-plane" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {}
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>
                                    Copyright © 2025, All Rights Reserved{" "}
                                    <a href="/">Sahil Singh</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div className="footer-menu">
                                <ul>
                                    {footerData.quickLinks.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.href}
                                                target={link.href.includes('http') ? '_blank' : '_self'}
                                                rel="noreferrer"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
