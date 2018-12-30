import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import 'typeface-roboto'
import 'typeface-roboto-mono'
import '../../css/reset.css'
import '../../css/syntax.css'
import Head from '../head'
import Header from '../header'
import './index.module.css'

interface IndexTemplateProps {
    children: any
}

interface IndexTemplateQuery {
    site: {
        meta: siteMetadata_2
    }
}

export default ({ children }: IndexTemplateProps) => (
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
        render={(data: IndexTemplateQuery) => (
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
