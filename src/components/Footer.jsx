import React from 'react';
import './footer.css';
import logoFooter from '../logo-footer.png';

function Footer() {
    return (
        <>
            <footer className="footer-section mt-5">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt" />
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>New Delhi, India</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone" />
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>7782864311</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open" />
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>singhsahil.8340@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
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
                                        Ready to bring your ideas to life? Feel free to reach out and let`s discuss how we can collaborate to create exceptional web experiences.
                                        </p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href='https://www.facebook.com/share/q2cd6v3zzMU3bDs9/?mibextid=qi2Omg' target='blank'>
                                            <i className="fab fa-facebook-f facebook-bg" />
                                        </a>
                                        <a href='https://x.com/sahilsingh7782?t=GYekHIEViuZyDbat-Ml4kw&s=08' target='blank'>
                                            <i className="fab fa-twitter twitter-bg" />
                                        </a>
                                        <a href='https://www.instagram.com/it_sahil_rajput?igsh=MWNoM2ZhY3UwYWJhMw==' target='blank'>
                                            <i class="fab fa-instagram instagram-bg" aria-hidden="true"></i>
                                        </a>
                                        <a href='https://www.linkedin.com/in/sahil-singh-69833425b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='blank' >
                                            <i class="fab fa-linkedin linkedin-bg" aria-hidden="true"></i>
                                        </a>
                                        <a href='https://github.com/Sahilsingh1998' target='blank'>
                                            <i class="fab fa-github github-bg" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <a href="#home">Home</a>
                                        </li>
                                        <li>
                                            <a href="#experience">Experience</a>
                                        </li>
                                        <li>
                                            <a href="#skills">Skills</a>
                                        </li>
                                        <li>
                                            <a href="#projects">Projects</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contact</a>
                                        </li>
                                        <li>
                                            <a href="https://dapper-axolotl-7a9863.netlify.app/" target="_blank" rel='noreferrer'>Portfolio</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>
                                            Don’t miss to subscribe to our new feeds, kindly fill the form
                                            below.
                                        </p>
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
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>
                                        Copyright © 2024, All Right Reserved{" "}
                                        <a href="/">Sahil Singh</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li>
                                            <a href="#home">Home</a>
                                        </li>
                                        <li>
                                            <a href="/">Terms</a>
                                        </li>
                                        <li>
                                            <a href="/">Privacy</a>
                                        </li>
                                        <li>
                                            <a href="/">Policy</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;