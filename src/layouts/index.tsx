import Link from 'gatsby-link';
import * as React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';

import Head, { SiteMetadata } from '../components/head';
import Header from '../components/header';

import '../css/reset.css';
import '../css/syntax.css';

import './index.module.css';

interface IndexTemplateProps {
    data: {
        site: {
            siteMetadata: SiteMetadata;
        };
    };
    children: () => any;
}

export default ({ data, children }: IndexTemplateProps) =>
    <div style={{
        margin: '0 auto',
        maxWidth: '80%',
        padding: '3rem 1.5rem',
    }}>
        <Head meta={data.site.siteMetadata} />
        <Header meta={data.site.siteMetadata} />
        {children()}
    </div>;

export const pageQuery = graphql`
    query LayoutIndexQuery {
        site {
            siteMetadata {
                author
                caption
                github
            }
        }
    }
`;
