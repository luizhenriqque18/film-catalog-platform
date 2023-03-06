import React from "react";
import '../../css/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__info">
                <a href="#policy">Privacy Policy</a>
                <a href="#term">Terms of Use</a>
            </div>
            <p className="footer__autor">© <a href="https://github.com/luizhenriqque18" target="_blank" rel="noreferrer">luizhenriqque18</a>, 2023</p>
        </footer>
    );
};

export default Footer;
