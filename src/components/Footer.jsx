import React from 'react';
import './footer.css';
import footerData from './data/footer.json';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section mt-5" aria-label="Sahil Singh Portfolio Footer">
      <div className="container">
        {/* Contact Highlights / Top CTA Cards */}
        <div className="footer-cta py-4">
          <div className="row g-3">
            {footerData.cta && footerData.cta.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-cta">
                  <i className={item.iconClass} aria-hidden="true" />
                  <div className="cta-text">
                    <h4>{item.title}</h4>
                    <span>{item.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Body */}
        <div className="footer-content pt-5 pb-5">
          <div className="row g-4">
            {/* Brand column */}
            <div className="col-xl-4 col-lg-4 mb-4 mb-lg-0">
              <div className="footer-widget">
                <div className="footer-text">
                  <p>
                    Official web portfolio of <strong>Sahil Singh</strong>, a Full Stack Developer & Software Engineer based in New Delhi, India. Open for web development and software engineering opportunities.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Connect With Me</span>
                  {footerData.socialLinks && footerData.socialLinks.map((link, index) => {
                    const href = link.href || '';
                    const icon = (link.iconClass || '').toLowerCase();
                    const label =
                      icon.includes('facebook') || href.includes('facebook')
                        ? 'Sahil Singh on Facebook'
                        : icon.includes('twitter') || href.includes('x.com') || href.includes('twitter')
                        ? 'Sahil Singh on Twitter'
                        : icon.includes('instagram') || href.includes('instagram')
                        ? 'Sahil Singh on Instagram'
                        : icon.includes('linkedin') || href.includes('linkedin')
                        ? 'Sahil Singh on LinkedIn'
                        : icon.includes('github') || href.includes('github')
                        ? 'Sahil Singh on GitHub'
                        : 'Sahil Singh Social Link';

                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                      >
                        <i className={link.iconClass} aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Navigation</h3>
                </div>
                <ul>
                  {footerData.quickLinks && footerData.quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Newsletter</h3>
                </div>
                <div className="footer-text mb-3">
                  <p>Subscribe to receive occasional updates about new open-source projects, tools, and technical blogs.</p>
                </div>
                <div className="subscribe-form">
                  <form onSubmit={(e) => e.preventDefault()} className="d-flex w-100">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      aria-label="Email address for Sahil Singh newsletter"
                      required
                    />
                    <button type="submit" aria-label="Subscribe to newsletter">
                      <i className="fab fa-telegram-plane" aria-hidden="true" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="copyright-text">
                <p>
                  Copyright © {currentYear}, All Rights Reserved{' '}
                  <a href="#home" title="Sahil Singh Developer Portfolio">
                    Sahil Singh
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block text-end">
              <ul className="footer-menu">
                {footerData.quickLinks && footerData.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
    </footer>
  );
}

export default Footer;