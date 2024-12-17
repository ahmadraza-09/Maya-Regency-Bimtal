import React from 'react'
import { Helmet } from 'react-helmet-async'
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import CancellationPolicy from '../components/cancellation-policy'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'

const CancellationPolicyPage = () => {
    return (
        <>
            <Helmet>
                <title>Cancellation Policy - Hotel Maya Regency Bhimtal</title>
                <meta name="description" content="Read the cancellation policy for Hotel Maya Regency Bhimtal. Understand the terms and conditions for canceling or modifying your booking." />
                <meta name="keywords" content="Hotel Maya Regency Bhimtal cancellation policy, hotel booking cancellation, Bhimtal hotel terms and conditions, booking modification Hotel Maya Regency" />
                <link rel="canonical" href="https://hotelmayaregency.com/cancellation-policy" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Hotel Maya Regency Bhimtal",
                        "url": "https://hotelmayaregency.com/cancellation-policy",
                        "description": "Learn about the cancellation policy of Hotel Maya Regency Bhimtal. Understand booking terms and refund process for a hassle-free stay.",
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

            {<TopBanner />}
            {<Navbar />}
            {<CancellationPolicy />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default CancellationPolicyPage
