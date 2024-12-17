import React from "react";
import "../css/introduction-section.css";
import IntroductionImg from "../assets/hero.jpg";

const IntroductionSection = () => {
  return (
    <section className="introduction-section">
      <div className="introduction-section-right swipe">
        <h1 className="after">
          Welcome To <br />
          <h1>Hotel Maya Regency</h1>
        </h1>
        <p>
        The hotel has been built on the cornerstone of customer satisfaction, one that offers first class comfort with personalized services. Hotel Maya Regency is impressive with it's very own distinctive style and tells the story of it's hospitality through its architecture & design and through its high level of comfort & service. It’s a dream that has been created brick by brick and it’s a story that is vibrant with colors of services, colors that touch every corner & every stone with warmth and vibrancy that create its soul. Hotel is conveniently located on Bhimtal-Bhowali road, just 3 kms ahead of majestic Lake Bhimtal and 16 Kms short of Nainital. Hotel offers 18 spacious, well furnished & equipped with modern amenities rooms to ensure that guests should have the most comfortable and memorable stay. It has a multi-cuisine restaurant, conference facility, indoor games and children’s play area to keep you / your kids engaged through the stay.
        </p>
      </div>
      <div className="introduction-section-left swipe">
        <img
          src={IntroductionImg}
          alt="The Pearl 21 Villa Image"
          loading="eager"
          width="100%"
          height="auto"
        />
      </div>
    </section>
  );
};

export default IntroductionSection;
