import * as React from 'react';
import Helmet from 'react-helmet';

import * as manifest from '../../assets/site/android-chrome/manifest.json';
import * as appleTouchIcon180 from '../../assets/site/apple/apple-touch-icon/apple-touch-icon.png';
import * as safariPinnedTab from '../../assets/site/apple/safari/safari-pinned-tab.svg';
import * as profileImage from '../../assets/site/face_square.png';
import * as favicon16 from '../../assets/site/favicon/favicon-16x16.png';
import * as favicon32 from '../../assets/site/favicon/favicon-32x32.png';
import * as favicon from '../../assets/site/favicon/favicon.ico';

interface HeadProps {
    meta: SiteMetadata;
}

export default (props: HeadProps) => {
    return (
        <Helmet
            titleTemplate={`%s | ${props.meta.author}`}
            defaultTitle={`${props.meta.author} | ${props.meta.caption}`}
        >
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="cleartype" content="on" />
            <meta content={props.meta.caption} name="description" />
            <meta content={props.meta.author} name="author" />
            <link href="/static/human.txt" rel="author" />
            {/** <!--Open Graph--> */}
            <meta property="fb:app_id" content="" />
            <meta property="og:url" content={props.meta.site} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={props.meta.author} />
            <meta property="og:image" content={profileImage} />
            <meta property="og:description" content={props.meta.caption} />
            <meta property="og:site_name" content={props.meta.author} />
            <meta property="og:locale" content="en_US" />
            <meta property="article:author" content={props.meta.author} />
            {/** <!--Twitter metadata--> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@theaaronsky" />
            <meta name="twitter:creator" content="@theaaronsky" />
            <meta name="twitter:url" content={props.meta.site} />
            <meta name="twitter:title" content={props.meta.author} />
            <meta name="twitter:description" content={props.meta.caption} />
            <meta name="twitter:image" content={profileImage} />
            {/** <!-- disallow Twitter from using your site's info for personalization purposes --> */}
            <meta name="twitter:dnt" content="on" />
            {/** <!--Icons--> */}
            <link href={appleTouchIcon180} rel="apple-touch-icon" sizes="180x180" />
            <link href={favicon32} rel="icon" type="image/png" sizes="32x32" />
            <link href={favicon16} rel="icon" type="image/png" sizes="16x16" />
            <link href={manifest} rel="manifest" />
            <link href={safariPinnedTab} rel="mask-icon" color="#3d638c" />
            <link href={favicon} rel="shortcut icon" />
            <meta content="#0d3d70" name="theme-color" />
        </Helmet>
    );
};
