import React from "react";
import "../css/places-to-visit.css";

const PlacesToVisit = () => {
  return (
    <section className="places-to-visit-section">
      <h1 className="swipe">Places To Visit</h1>
      <br />
      <div className="places-to-visit-container">
        <div className="places-to-visit-card places-to-visit-card1 swipe">
          <div className="places-to-visit-card-content">
            <h2>BHIMTAL LAKE</h2>
            <p>
              Away from the screeching noise of the city and crowded hills stations, Bhimtal Lake is a spot of solitude, tranquility and beauty. The pristine lake much bigger in size than Naini Lake.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card2 swipe">
          <div className="places-to-visit-card-content">
            <h2>NAUKUCHIATAL</h2>
            <p>
            Naukuchiatal or ‘lake of nine corners’ is a small hill station in Nainital district of the Indian state of Uttarakhand. The lake is 175 feet deep and is situated at 1220 mts above sea level. It is surrounded by hills covered in trees and shrubs.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card3 swipe">
          <div className="places-to-visit-card-content">
            <h2>HANUMAN GARHI</h2>
            <p>
            As the name suggests, this temple is dedicated to Lord Hanuman. Situated at the height of 6401 ft, this temple offers an incredible sight of sunset over the Himalayas.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card4 swipe">
          <div className="places-to-visit-card-content">
            <h2>NAINITAL</h2>
            <p>
            Nainital is a Himalayan resort town in the Kumaon region of India’s Uttarakhand state, at an elevation of roughly 2,000m. Formerly a British hill station, it’s set around Nainital Lake, a popular boating site with Naina Devi Hindu Temple on its north shore.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card5 swipe">
          <div className="places-to-visit-card-content">
            <h2>MUKTESHWAR</h2>
            <p>
            Mukteshwar is a town and tourist destination in the Nainital district of Uttarakhand, India. It sits high in the Kumaon Hills at an altitude of 2286meters, 51 km from Nainital, 72 km from Haldwani, and 343 km from Delhi.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card6 swipe">
          <div className="places-to-visit-card-content">
            <h2>HIDIMBA PARVAT</h2>
            <p>
            Hidimba Parvat is an ancient temple situated at a height of 1675 m, on a hill above Hanuman Garhi. It stands adjacent to the mountain ranges of Nar-Narayan, at a distance of approximately 20 km from Bhimtal. It is enveloped between the valleys of Manikoot, Brahmakoot and Vishnukoot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacesToVisit;
