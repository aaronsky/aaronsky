import * as React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layouts'

export default (props: any) => (
    <Layout>
        <div>
            <Helmet title="Contact" />
            <h3>Contact</h3>
            <p>
                You can contact me by emailing me at <strong>aaronsky</strong>{' '}
                [at] <em>this domain</em>
            </p>
        </div>
    </Layout>
)
