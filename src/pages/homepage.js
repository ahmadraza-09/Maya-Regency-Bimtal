import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TopBanner from '../components/top-banner';
import SocialMediaFixed from '../components/socialmedia-fixed';
import HeroSection from '../components/hero-section';
import IntroductionSection from '../components/introduction-section';
import OurResortValue from '../components/our-resort-value';
import ExploreRoomsSection from '../components/explore-rooms-section';
import HowToReach from '../components/how-to-reach';
import Testimonial from '../components/testimonial';
import Services from '../components/services';


const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Hotel Maya Regency Bhimtal - A Comfortable Stay in the Heart of Bhimtal</title>
                <meta name="description" content="Experience a comfortable and luxurious stay at Hotel Maya Regency Bhimtal. Nestled in the serene Bhimtal, enjoy spacious rooms, modern amenities, and beautiful lake views." />
                <meta name="keywords" content="Hotel Maya Regency Bhimtal, hotels in Bhimtal, luxury stay Bhimtal, affordable Bhimtal hotels, Bhimtal lake view hotel, Maya Regency accommodation, best hotels in Bhimtal" />
                <link rel="canonical" href="https://hotelmayaregency.com/" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Hotel Maya Regency Bhimtal",
                        "url": "https://hotelmayaregency.com/",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mehragaon, Bhowali - Bhimtal Rd, Dstt",
                            "addressLocality": "Bhimtal",
                            "addressRegion": "Uttarakhand",
                            "postalCode": "263136",
                            "addressCountry": "IN"
                        },
                        "telephone": "+91 9650709101"
                    })}
                </script>
            </Helmet>



            <TopBanner />
            <Navbar />
            <HeroSection />
            <IntroductionSection />
            <OurResortValue />
            <ExploreRoomsSection />
            <Services />
            <HowToReach />
            <Testimonial />
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default HomePage;
