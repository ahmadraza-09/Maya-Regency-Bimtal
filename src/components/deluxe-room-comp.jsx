import React from "react";
import "../css/why-choose.css";
import { useNavigate } from "react-router-dom";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import image1 from "../assets/room/deluxe-room/1.jpg";
import image2 from "../assets/room/deluxe-room/2.webp";
import image3 from "../assets/room/deluxe-room/3.webp";
import image4 from "../assets/room/deluxe-room/4.webp";


import icon1 from "../assets/icons/double-bed.png";
import icon2 from "../assets/icons/wi-fi.png";
import icon3 from "../assets/icons/dinner.png";
import icon4 from "../assets/icons/tv-monitor.png";
import icon5 from "../assets/icons/parked-car.png";
import icon6 from "../assets/icons/two.png";
import icon7 from "../assets/icons/welcome-drink.png";
import icon8 from "../assets/icons/laundry-machine.png";
import icon9 from "../assets/icons/slippers.png";
import icon10 from "../assets/icons/air-conditioner.png";

const DeluxeRoomComp = () => {
  const navigate = useNavigate();
  return (
    <section className="why-choose-section">
      <h1 className="swipe">Deluxe Room</h1>
      <div className="why-choose-slider">
        <Swiper
          modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          style={{ maxWidth: "100%", minWidth: "300px", padding: "0px 0px" }}
          pagination={{ clickable: true }}
          navigation={true}
          // breakpoints={{
          //   320: {
          //     navigation: false,
          //   },
          //   480: {
          //     navigation: false,
          //   },
          //   628: {
          //     navigation: false,
          //   },
          // }}
          className="swipe"
        >
          <SwiperSlide>
            <div className="slider-card-testimonial testimonial-content why-choose-slider-image">
              <img src={image1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card-testimonial testimonial-content why-choose-slider-image">
              <img src={image2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card-testimonial testimonial-content why-choose-slider-image">
              <img src={image3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card-testimonial testimonial-content why-choose-slider-image">
              <img src={image4} alt="" />
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
      <div className="why-choose-contents room-services">
        <h2>Room Services</h2>
        <div className="flex">
          <div className="why-choose-contents-box">
            <img src={icon7} alt="" />
            <h2>Welcome Drink</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={icon1} alt="" />
            <h2>Double Bed</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={icon2} alt="" />
            <h2>Free Wifi</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={icon3} alt="" />
            <h2>Restaurant</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={icon4} alt="" />
            <h2>LCD TV</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={icon5} alt="" />
            <h2>Parking</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={icon9} alt="" />
            <h2>Sleeper</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={icon6} alt="" />
            <h2>Two Mineral Water Bottle</h2>
          </div>
        </div>
      </div>
      <div className="room-overview">
        <h2>Room Overview</h2>
        <div className="overview-table">
          <div className="overview-row">
            <span className="label">Occupancy:</span>
            <span className="value">Two Persons</span>
          </div>
          <div className="overview-row">
            <span className="label">Size:</span>
            <span className="value">250 sq. feet</span>
          </div>
          <div className="overview-row">
            <span className="label">View:</span>
            <span className="value">Valley View</span>
          </div>
          <div className="overview-row">
            <span className="label">Outside sitting area:</span>
            <span className="value">Yes</span>
          </div>
          <div className="overview-row">
            <span className="label">Room Service:</span>
            <span className="value">Available per request</span>
          </div>
          
          <div className="overview-row">
            <span className="label">Internet Free:</span>
            <span className="value">Yes</span>
          </div>
        </div>
      </div>
      <div className="premium-room-comp-content room-card-price-left ">
        <h2>Deluxe Room</h2>
        <br />
        <p>Note  :  Please note that below rates are subject to change on new year, Festive seasons and long weekends.</p>
        <br />
        <h2>
          Rs. 3999 <span>/ Night</span>
        </h2>
        <p>
        The Deluxe Room at Hotel Maya Regency offers a cozy retreat with modern amenities, plush bedding, and stunning views of the surrounding bhimtal, ensuring a comfortable and memorable stay.
        </p>
        <button
          onClick={() => {
            navigate("/contact");
          }}
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default DeluxeRoomComp;
