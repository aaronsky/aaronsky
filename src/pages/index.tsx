import { graphql } from 'gatsby'
import * as React from 'react'
import { BlogPostExcerpt } from '../components/blog'
import Layout from '../components/layouts'

const renderBlogPost = ({ node }: any) => (
    <BlogPostExcerpt meta={node} key={node.fields.slug} />
)

export default ({ data }: any) => (
    <Layout>
        <div>{data.allMarkdownRemark.edges.map(renderBlogPost)}</div>
    </Layout>
)

export const pageQuery = graphql`
    {
        site {
            meta: siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "DD MMMM, YYYY")
                        title
                    }
                }
            }
        }
    }
`
