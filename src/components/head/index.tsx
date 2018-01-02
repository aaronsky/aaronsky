import * as React from 'react';
import Helmet from 'react-helmet';

export interface SiteMetadata {
    title: string;
    author: string;
    site: string;
    linkedin: string;
    github: string;
    npm: string;
}

interface HeadProps {
    meta: SiteMetadata;
}

export default ({ meta }: HeadProps) => {
    return (
        <Helmet
            title="The latest of Aaron Sky"
            meta={[
                { name: 'author', content: meta.author },
            ]}
        />
    );
};
