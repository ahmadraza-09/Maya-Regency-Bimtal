import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopBanner from '../components/top-banner';
import Navbar from '../components/navbar';
import ContactUs from '../components/contact-us';
import Footer from '../components/footer';
import SocialMediaFixed from '../components/socialmedia-fixed';

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - Hotel Maya Regency Bhimtal</title>
                <meta name="description" content="Get in touch with Hotel Maya Regency Bhimtal. Find our contact details, address, phone number, and email to make reservations or inquire about services." />
                <meta name="keywords" content="Contact Hotel Maya Regency Bhimtal, hotel reservations Bhimtal, Hotel Maya Regency contact details, Bhimtal hotel address, get in touch with Hotel Maya Regency" />
                <link rel="canonical" href="https://hotelmayaregency.com/contact" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Hotel Maya Regency Bhimtal",
                        "url": "https://hotelmayaregency.com/contact",
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
            <ContactUs />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default ContactPage;
