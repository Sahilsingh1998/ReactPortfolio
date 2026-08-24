import React from 'react';
import headerData from './data/header.json';

function Navbaar() {
    return (
        <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
            <h1 className="left nav_items">{headerData.brand}</h1>
            <div className="right">
                {headerData.links.map((link, index) => (
                    <a key={index} href={link.href} className="nav_items">
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Navbaar;