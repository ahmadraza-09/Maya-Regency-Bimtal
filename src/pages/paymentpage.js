import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import TopBanner from '../components/top-banner';
import Footer from '../components/footer';
import Payment from '../components/payment';
import SocialMediaFixed from '../components/socialmedia-fixed';

const PaymentPage = () => {
    return (
        <>
            <Helmet>
                <title>Payment | Corbett Aroma Park Resort, Ramnagar Dhikuli</title>
                <meta name="description" content="Complete your booking at Corbett Aroma Park Resort with our secure and hassle-free payment process. Enjoy a luxurious stay in Ramnagar Dhikuli with peace of mind." />
                <meta name="keywords" content="Corbett Aroma Park payment, secure booking Ramnagar, resort payment options, book Corbett Aroma Park, Jim Corbett stay payment, online payment resort Ramnagar Dhikuli" />
                <link rel="canonical" href="https://www.aromaparkcorbett.com/payment" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Resort",
                        "name": "Payment | Corbett Aroma Park Resort, Ramnagar Dhikuli",
                        "url": "https://www.aromaparkcorbett.com/payment",
                        "telephone": "+91-9958866101"
                    })}
                </script>
            </Helmet>




            <TopBanner />
            <Navbar />
            <Payment />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default PaymentPage;
