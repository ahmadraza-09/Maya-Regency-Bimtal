import React from "react";
import "../css/testimonial.css";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonial = () => {
  const navigate = useNavigate();

  return (
    <section className="testimonial-section">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        style={{ maxWidth: "100%", minWidth: "300px", padding: "0px 0px" }}
        pagination={{ clickable: true }}
        // navigation={true}
        breakpoints={{
          320: {
            navigation: false,
          },
          480: {
            navigation: false,
          },
          628: {
            navigation: false,
          },
        }}
      >
        <SwiperSlide>
          <div className="slider-card-testimonial testimonial-content">
            <p>
              <span>
                <i class="fa-solid fa-quote-left"></i>
              </span>
              It’s a beautiful stay situated in Bhimtal. The hotel has a wonderful view from Premium rooms. The staff is so courteous and are always ready to help. The food is soo soo delicious. There is also a gaming zone. Had a wonderful time with my family here.
              <span>
                <i class="fa-solid fa-quote-right"></i>
              </span>
            </p>
            <h2>- Sejal Kakkar</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card-testimonial testimonial-content">
            <p>
              <span>
                <i class="fa-solid fa-quote-left"></i>
              </span>
              Loved the Services here everything was so perfect from the staff to the food, had the best dal here 🥰 must recommended place for sure !
              <span>
                <i class="fa-solid fa-quote-right"></i>
              </span>
            </p>
            <h2>- Deepa Negi</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card-testimonial testimonial-content">
            <p>
              <span>
                <i class="fa-solid fa-quote-left"></i>
              </span>
              Good service, peacefully location. Team has done best of their service. Must to mention is the food was awesome and all staff was patience enough to help or serve any number of times.
              <span>
                <i class="fa-solid fa-quote-right"></i>
              </span>
            </p>
            <h2>- Naushad Ali</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
