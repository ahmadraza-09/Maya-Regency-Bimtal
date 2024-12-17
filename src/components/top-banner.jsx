import React from "react";
import "../css/navbar.css";

const TopBanner = () => {
  return (
    <div className="top-banner">
      <div className="top-banner-left">
        <div className="phone">
          <i class="fa-solid fa-phone"></i>
          <a
            href="tel:+919650709101"
            target="_blank"
            aria-label="call us for hotel booking"
          >
            +91 9650709101 
          </a>
        </div>
        <div className="email">
          <i class="fa-solid fa-envelope"></i>
          <a
            href="mailto:booking@rchronline.com"
            target="_blank"
            aria-label="mail us for hotel booking"
          >
            booking@rchronline.com
          </a>
        </div>
      </div>

      <div className="top-banner-right">
        <a
          href="https://www.instagram.com/hotel_maya_regency"
          target="_blank"
          aria-label="follow us on instagram"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61561257480736"
          target="_blank"
          aria-label="follow us on facebook"
        >
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://youtu.be/zv5GE1ZW4HU?si=2X1AD_KZVEJq8uLl"
          target="_blank"
          aria-label="follow us on youtube"
        >
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default TopBanner;
