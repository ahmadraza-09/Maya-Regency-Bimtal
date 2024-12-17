import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TopBanner from '../components/top-banner';
import SocialMediaFixed from '../components/socialmedia-fixed';
import PlacesToVisit from '../components/places-to-visit';

const PlacesToVisitPage = () => {
    return (
        <>
            <Helmet>
                <title>Places to Visit in Bhimtal - Hotel Maya Regency</title>
                <meta name="description" content="Explore the best places to visit near Hotel Maya Regency Bhimtal, including Bhimtal Lake, Nainital, Sattal, Naukuchiatal, Hanuman Garhi, and adventure activities nearby." />
                <meta name="keywords" content="places to visit near Bhimtal, Bhimtal tourist attractions, Bhimtal Lake, Nainital attractions, Sattal, Naukuchiatal, Hanuman Garhi, adventure near Bhimtal, sightseeing near Hotel Maya Regency" />
                <link rel="canonical" href="https://hotelmayaregency.com/places-to-visit" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Place",
                        "name": "Places to Visit Near Hotel Maya Regency Bhimtal",
                        "url": "https://hotelmayaregency.com/places-to-visit",
                        "telephone": "+91 9650709101",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mehragaon, Bhowali - Bhimtal Rd, Dstt",
                            "addressLocality": "Bhimtal",
                            "addressRegion": "Uttarakhand",
                            "postalCode": "263136",
                            "addressCountry": "IN"
                        }
                    })}
                </script>
            </Helmet>



            <TopBanner />
            <Navbar />
            <PlacesToVisit />
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default PlacesToVisitPage;
