import Link from 'gatsby-link';
import * as React from 'react';

import Footer from '../components/footer';
import Head from '../components/head';
import NavigationMenu from '../components/navigation/menu';

import '../css/reset.css';

interface IndexTemplateProps {
    data: {
        site: {
            siteMetadata: {
                author: {
                    name: string;
                    github: string;
                };
            },
        },
    };
    children: () => any;
}

export default ({ data, children }: IndexTemplateProps) =>
    <div>
        <Head author={data.site.siteMetadata.author} />
        <NavigationMenu siteMetadata={data.site.siteMetadata} />
        {children()}
        <Footer author={data.site.siteMetadata.author} />
    </div>;

export const pageQuery = graphql`
    query LayoutIndexQuery {
        site {
            siteMetadata {
                author {
                    name
                    github
                }
            }
        }
    }
`;
