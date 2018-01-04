import * as React from 'react';
import Helmet from 'react-helmet';

interface NotFoundPageProps { }

export default (props: NotFoundPageProps) =>
    <div>
        <Helmet title="Not Found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>;
