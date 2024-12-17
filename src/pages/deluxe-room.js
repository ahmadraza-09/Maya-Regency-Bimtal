import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import DeluxeRoomComp from '../components/deluxe-room-comp'
import SocialMediaFixed from '../components/socialmedia-fixed'

const DeluxeRoom = () => {

    return (
        <>
            <Helmet>
                <title>Deluxe Room | Corbett Aroma Park Resort, Ramnagar Dhikuli</title>
                <meta name="description" content="Book a Deluxe Room at Corbett Aroma Park Resort, Ramnagar Dhikuli. Enjoy a comfortable stay with modern amenities, stunning views, and a peaceful ambiance for an unforgettable experience." />
                <meta name="keywords" content="Deluxe Room Corbett Aroma Park, Corbett resort deluxe room, Jim Corbett luxury rooms, best deluxe rooms in Ramnagar Dhikuli, comfortable resort rooms, resort rooms with views" />
                <link rel="canonical" href="https://www.aromaparkcorbett.com/rooms/deluxe-room" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Room",
                        "name": "Deluxe Room",
                        "url": "https://www.aromaparkcorbett.com/rooms/deluxe-room",
                        "telephone": "+91-9958866101",
                        "roomType": "Deluxe Room",

                    })}
                </script>
            </Helmet>



            {<TopBanner />}
            {<Navbar />}
            {<DeluxeRoomComp />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default DeluxeRoom
