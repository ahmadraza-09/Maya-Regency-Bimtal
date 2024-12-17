import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TopBanner from '../components/top-banner';
import SocialMediaFixed from '../components/socialmedia-fixed';

import Services from '../components/services';


const ServicesPage = () => {
    return (
        <>
            <Helmet>
                <title>Our Services - Hotel Maya Regency Bhimtal</title>
                <meta name="description" content="Discover premium services at Hotel Maya Regency Bhimtal, including 24/7 room service, free Wi-Fi, parking, travel desk, restaurant, and conference facilities." />
                <meta name="keywords" content="Hotel services Bhimtal, Hotel Maya Regency Bhimtal services, 24/7 room service Bhimtal, free Wi-Fi Bhimtal, travel desk Bhimtal, conference facilities Bhimtal, restaurant in Bhimtal hotel" />
                <link rel="canonical" href="https://hotelmayaregency.com/services" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Hotel Maya Regency Bhimtal",
                        "url": "https://hotelmayaregency.com/services",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mehragaon, Bhowali - Bhimtal Rd, Dstt",
                            "addressLocality": "Bhimtal",
                            "addressRegion": "Uttarakhand",
                            "postalCode": "263136",
                            "addressCountry": "IN"
                        },
                        "telephone": "+91 9650709101",
                    })}
                </script>
            </Helmet>

            <TopBanner />
            <Navbar />
            <Services />
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default ServicesPage;
