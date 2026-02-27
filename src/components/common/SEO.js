import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type }) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title ? `${title} | Mount Zion Pentecostal Ministries` : 'Mount Zion Pentecostal Ministries'}</title>
            <meta name='description' content={description || "Welcome to Mount Zion Pentecostal Ministries Headquarters! Join us for dynamic worship, powerful sermons, and an engaging community."} />

            {/* End of standard metadata tags */}
            {/* Facebook tags */}
            <meta property="og:type" content={type || "website"} />
            <meta property="og:title" content={title || "Mount Zion Pentecostal Ministries"} />
            <meta property="og:description" content={description || "Join us at Mount Zion for worship and amazing community."} />

            {/* End of Facebook tags */}
            {/* Twitter tags */}
            <meta name="twitter:creator" content={name || "Mount Zion Ministries"} />
            <meta name="twitter:card" content={type || "summary_large_image"} />
            <meta name="twitter:title" content={title || "Mount Zion Pentecostal Ministries"} />
            <meta name="twitter:description" content={description || "Welcome to Mount Zion!"} />
            {/* End of Twitter tags */}
        </Helmet>
    );
};

export default SEO;
