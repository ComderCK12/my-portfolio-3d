import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="/">Visit my blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon transition duration-300 hover:shadow-lg rounded-full" target="_blank" href={img.url} key={img.url}>
              <img src={img.imgPath} className="w-6 h-6 mx-2" />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Chirag Kathoye | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
