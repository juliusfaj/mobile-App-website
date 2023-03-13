import React from "react";
import { footerIcons } from "./data";
import { useGlobalContext } from "../context";

const Footer = () => {
  const { currentYear } = useGlobalContext();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="about-website">
          <h4>about website</h4>
          <p>
            Aliquam ultrices turpis a auctor commodo. Etiam consectetur
            tincidunt elit ac euismod. Duis et finibus felis, non porttitor
            rapena live dolor
          </p>
        </div>
        <div className="footer-links">
          <h4>links</h4>
          <div>
            <p>Important: Terms & Conditions, Privacy Policy</p>
            <p>Useful: Colorpicker, Icon Library, Illustrations</p>
            <p>Menu: Home, Article, Features, Contact</p>
          </div>
        </div>
        <div className="footer-icons-container">
          <div className="footer-icons">
            {footerIcons.map((item, index) => {
              return <button key={index}>{item}</button>;
            })}
          </div>
          <p>Quam posuerei pellent esque vam contact@site.com</p>
        </div>
      </div>
      <p className="copyright">Copyright &copy; Funnso Julius {currentYear}</p>
    </footer>
  );
};

export default Footer;
