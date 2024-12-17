import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TopBanner from "../components/top-banner";
import SocialMediaFixed from "../components/socialmedia-fixed";
import OurResortValue from "../components/our-resort-value";
import IntroductionSection from "../components/introduction-section";
import HowToReach from '../components/how-to-reach';

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About Us - Hotel Maya Regency Bhimtal</title>
                <meta name="description" content="Learn about Hotel Maya Regency Bhimtal, a serene and luxurious retreat offering a peaceful stay with modern amenities and beautiful lake views in Bhimtal." />
                <meta name="keywords" content="About Hotel Maya Regency Bhimtal, luxury hotel in Bhimtal, Bhimtal accommodation, hotel services Bhimtal, lake view hotel, Maya Regency Bhimtal story, hospitality in Bhimtal" />
                <link rel="canonical" href="https://hotelmayaregency.com/about" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Hotel Maya Regency Bhimtal",
                        "url": "https://hotelmayaregency.com/about",
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
            <IntroductionSection />
            <OurResortValue />
            <HowToReach />
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default AboutPage;
