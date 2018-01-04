import * as React from 'react';
import Helmet from 'react-helmet';

interface ContactPageProps { }

export default (props: ContactPageProps) => (
    <div>
        <Helmet title="Contact" />
        <h3>Contact</h3>
        <p>You can contact me by emailing me at <strong>aaronsky</strong> [at] <em>this domain</em></p>
    </div>
);
