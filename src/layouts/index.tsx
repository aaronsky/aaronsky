import Link from 'gatsby-link';
import * as React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';

import Head from '../components/head';
import Header from '../components/header';

import '../css/reset.css';
import '../css/syntax.css';

import './index.module.css';

interface IndexTemplateProps {
    data: {
        site: {
            meta: SiteMetadata;
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
        <Head meta={data.site.meta} />
        <Header meta={data.site.meta} />
        {children()}
    </div>;

export const pageQuery = graphql`
    query LayoutIndexQuery {
        site {
            meta: siteMetadata {
                author
                caption
                github
            }
        }
    }
`;
