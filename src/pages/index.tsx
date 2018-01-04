import Link from 'gatsby-link';
import * as React from 'react';

import { BlogPostExcerpt, BlogPostModel } from '../components/blog';

interface MarkdownEdge {
    node: BlogPostModel;
}

interface IndexPageProps {
    data: {
        site: {
            siteMetadata: {
                title: string;
            };
        };
        allMarkdownRemark: {
            edges: MarkdownEdge[];
        };
    };
}

const renderBlogPost = ({ node }: MarkdownEdge) => <BlogPostExcerpt meta={node} key={node.fields.slug} />;

export default ({ data }: IndexPageProps) => (
    <div>
        {data.allMarkdownRemark.edges.map(renderBlogPost)}
    </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
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
`;