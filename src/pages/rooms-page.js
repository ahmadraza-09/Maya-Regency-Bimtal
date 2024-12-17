import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import ExploreRoomsSection from '../components/explore-rooms-section'
import SocialMediaFixed from '../components/socialmedia-fixed'

const RoomsPage = () => {
    return (
        <>
            <Helmet>
                <title>Rooms & Suites - Hotel Maya Regency Bhimtal</title>
                <meta name="description" content="Explore our well-furnished rooms at Hotel Maya Regency Bhimtal, including the Standard Room, Comfort Room, and Suite Room. Book your perfect stay now!" />
                <meta name="keywords" content="Hotel Maya Regency Bhimtal rooms, Standard Room Bhimtal, Comfort Room Bhimtal, Suite Room Bhimtal, Bhimtal hotel accommodation, luxury rooms Bhimtal, stay in Bhimtal" />
                <link rel="canonical" href="https://hotelmayaregency.com/rooms" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Hotel Maya Regency Bhimtal",
                        "url": "https://hotelmayaregency.com/rooms",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mehragaon, Bhowali - Bhimtal Rd, Dstt",
                            "addressLocality": "Bhimtal",
                            "addressRegion": "Uttarakhand",
                            "postalCode": "263136",
                            "addressCountry": "IN"
                        },
                        "telephone": "+91 9650709101",
                        "containsPlace": [
                            {
                                "@type": "HotelRoom",
                                "name": "Deluxe Room"
                            },
                            {
                                "@type": "HotelRoom",
                                "name": "Premium Room"
                            }
                        ]
                    })}
                </script>
            </Helmet>




            {<TopBanner />}
            {<Navbar />}
            {<ExploreRoomsSection />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default RoomsPage
