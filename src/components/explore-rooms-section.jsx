import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/explore-rooms-section.css";
import RoomCard from "./room-card";
import PremiumRoom from "../assets/room/premium-room/1.jpg"; // Add more images if needed
import DeluxeRoom from "../assets/room/deluxe-room/1.jpg"; // Add more images if needed


const ExploreRoomsSection = () => {
  const navigate = useNavigate();
  const rooms = [
    {
      id: 1,
      image: PremiumRoom,
      title: "Premium Room",
      description:
        "We ensure our guests enjoy a luxurious stay at Bhimtal, with well-equipped rooms and scenic views. Hotel Maya Regency offers the best of wildlife, rivers, and forests, perfect for fun with friends and family.",
      price: 4499,
    },
    {
      id: 2,
      image: DeluxeRoom,
      title: "Deluxe Room",
      description:
        "The Deluxe Room at Hotel Maya Regency offers a cozy retreat with modern amenities, plush bedding, and stunning views of the surrounding bhimtal, ensuring a comfortable and memorable stay.",
      price: 3999,
    }
  ];

  return (
    <section className="explore-rooms-section">
      <div className="explore-rooms-header">
        <div className="explore-rooms-header-left swipe-left">
          <h2>Explore Our Rooms</h2>
          <h4>Choose a room according to your budget</h4>
        </div>
        <div className="explore-rooms-header-right swipe-right">
          <button
            onClick={() => {
              navigate("/rooms");
            }}
          >
            View All Rooms <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>
      </div>
      <div className="explore-rooms-cards swipe">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            image={room.image}
            title={room.title}
            description={room.description}
            price={room.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreRoomsSection;
