import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import 'typeface-roboto'
import 'typeface-roboto-mono'
import '../../css/reset.css'
import '../../css/syntax.css'
import Head from '../head'
import Header from '../header'
import './index.module.css'

export default ({ children }: any) => (
    <StaticQuery
        query={graphql`
            {
                site {
                    meta: siteMetadata {
                        author
                        caption
                        github
                    }
                }
            }
        `}
        render={(data: any) => (
            <div
                style={{
                    margin: '0 auto',
                    maxWidth: '80%',
                    padding: '3rem 1.5rem',
                }}
            >
                <Head meta={data.site.meta} />
                <Header meta={data.site.meta} />
                {children}
            </div>
        )}
    />
)
