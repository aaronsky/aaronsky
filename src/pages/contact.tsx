import * as React from 'react'
import Helmet from 'react-helmet'
import { BaseLayout } from '../components/layouts'

export default (props: any) => (
    <BaseLayout>
        <div>
            <Helmet title="Contact" />
            <h3>Contact</h3>
            <p>
                You can contact me by emailing me at <strong>aaronsky</strong>{' '}
                [at] <em>this domain</em>
            </p>
        </div>
    </BaseLayout>
)
