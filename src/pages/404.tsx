import * as React from 'react'
import Helmet from 'react-helmet'
import { BaseLayout } from '../components/layouts'

export default (props: any) => (
    <BaseLayout>
        <div>
            <Helmet title="Not Found" />
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist.</p>
        </div>
    </BaseLayout>
)
