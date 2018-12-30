import * as React from 'react'
import Helmet from 'react-helmet'
import * as profileImage from '../../assets/site/face_square.png'
import * as safariPinnedTab from '../../assets/site/safari-pinned-tab.svg'

interface HeadProps {
    meta: siteMetadata_2
}

export default (props: HeadProps) => {
    return (
        <Helmet
            titleTemplate={`%s | ${props.meta.author}`}
            defaultTitle={`${props.meta.author} | ${props.meta.caption}`}
        >
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
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
            <link href={safariPinnedTab} rel="mask-icon" color="#053a71" />
            <meta content="#053a71" name="theme-color" />
        </Helmet>
    )
}
