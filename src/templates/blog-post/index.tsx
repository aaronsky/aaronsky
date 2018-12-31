import { graphql } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import { BaseLayout } from '../../components/layouts'
import * as styles from './index.module.css'

export default ({ data }: any) => (
    <BaseLayout>
        <div className={styles.postContainer}>
            <Helmet title={data.post.frontmatter.title} />
            <h3 className={styles.postHeading}>
                {data.post.frontmatter.title}
            </h3>
            <p className={styles.postDate}>{data.post.frontmatter.date}</p>
            <div
                dangerouslySetInnerHTML={{ __html: data.post.html }}
                className={styles.postBodyContainer}
            />
            <hr />
            <footer className={styles.postFooter}>
                <h4>Questions? Feedback? Corrections?</h4>
                <p>
                    Open an{' '}
                    <a
                        href={`${
                            data.site.meta.packageJson.bugs.url
                        }/new?title=${encodeURIComponent(
                            data.post.frontmatter.title
                        )}&body=${encodeURIComponent(
                            `Comments, Questions, Feedback: ${
                                data.site.meta.site
                            }${data.post.fields.slug}`
                        )}&labels=${encodeURIComponent(
                            'blog comments & questions'
                        )}`}
                    >
                        issue
                    </a>
                    , submit a{' '}
                    <a
                        href={`${
                            data.site.meta.packageJson.repository.url
                        }/compare`}
                    >
                        pull request
                    </a>
                    , or{' '}
                    <a
                        href={`${
                            data.site.meta.packageJson.repository.url
                        }/edit/master/src/pages${
                            data.post.fields.slug
                        }/index.md`}
                    >
                        edit
                    </a>{' '}
                    this post.
                </p>
            </footer>
        </div>
    </BaseLayout>
)

export const pageQuery = graphql`
    query($slug: String!) {
        site {
            meta: siteMetadata {
                title
                author
                caption
                site
                packageJson {
                    repository {
                        url
                    }
                    bugs {
                        url
                    }
                }
            }
        }
        post: markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            timeToRead
            fields {
                slug
            }
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`
