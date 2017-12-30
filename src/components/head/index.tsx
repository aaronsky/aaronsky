import * as React from 'react';
import Helmet from 'react-helmet';

interface HeadProps {
    author: {
        name: string;
    };
}

export default (props: HeadProps) => {
    return (
        <Helmet
            title="The latest of Aaron Sky"
            meta={[
                { name: 'author', content: props.author.name }
            ]}
        />
    );
}
