import { graphql, Link } from 'gatsby'
import * as React from 'react'
import * as resumePdf from '../assets/portfolio/files/resume.pdf'
import { BaseLayout } from '../components/layouts'
import * as styles from './index.module.css'

export default ({ data }: any) => (
    <BaseLayout>
        <div className={styles.about}>
            <div
                dangerouslySetInnerHTML={{
                    __html: data.markdownRemark.html,
                }}
            />
            <p>
                My full resume{' '}
                <a href={resumePdf} className={styles.aboutLink}>
                    can be found here
                </a>
                . You can contact me by emailing me at <strong>aaronsky</strong>{' '}
                [at] <em>this domain</em>.
            </p>
        </div>
    </BaseLayout>
)

export const query = graphql`
    {
        site {
            meta: siteMetadata {
                linkedin
                github
                npm
            }
        }
        markdownRemark(fields: { slug: { eq: "/index/copy/" } }) {
            html
        }
    }
`
