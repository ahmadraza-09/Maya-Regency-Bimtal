import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import TopBanner from '../components/top-banner';
import Footer from '../components/footer';
import OurGallery from '../components/our-gallery';
import SocialMediaFixed from '../components/socialmedia-fixed';

const GalleryPage = () => {
    return (
        <>
            <Helmet>
                <title>Gallery - Hotel Maya Regency Bhimtal</title>
                <meta name="description" content="Explore the gallery of Hotel Maya Regency Bhimtal. View stunning images of our rooms, amenities, and the beautiful surroundings of Bhimtal." />
                <meta name="keywords" content="Hotel Maya Regency Bhimtal gallery, Hotel rooms images, Bhimtal hotel photos, Hotel amenities, Bhimtal resort images, scenic views Bhimtal" />
                <link rel="canonical" href="https://hotelmayaregency.com/gallery" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Hotel Maya Regency Bhimtal",
                        "url": "https://hotelmayaregency.com/gallery",
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
            <OurGallery />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default GalleryPage;
