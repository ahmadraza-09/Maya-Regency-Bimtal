import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'
import PremiumRoomComp from '../components/premium-room-comp'

const PremiumRoom = () => {

    return (
        <>
            <Helmet>
                <title>Premium Room | Corbett Aroma Park Resort, Ramnagar Dhikuli</title>
                <meta name="description" content="Book a Premium Room at Corbett Aroma Park Resort, Ramnagar Dhikuli. Enjoy luxurious amenities, spacious interiors, and breathtaking views of nature for a perfect stay." />
                <meta name="keywords" content="Premium Room Corbett Aroma Park, Jim Corbett premium room, luxury rooms Ramnagar Dhikuli, resort rooms with premium amenities, best premium room in Corbett" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.aromaparkcorbett.com/rooms/premium-room" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Room",
                        "name": "Premium Room",
                        "url": "https://www.aromaparkcorbett.com/rooms/premium-room",
                        "telephone": "+91-9958866101",
                        "roomType": "Premium Room",
                    })}
                </script>
            </Helmet>



            {<TopBanner />}
            {<Navbar />}
            {<PremiumRoomComp />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default PremiumRoom
