import * as React from 'react';

import { BlogPostModel } from '../components/blog/models';
import Header from '../components/header';
import { SiteMetadata } from '../components/head/index';

interface BlogPostTemplateProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    post: BlogPostModel;
  }
}

export default ({ data }: BlogPostTemplateProps) => (
      <div>
        <h3>{data.post.frontmatter.title}</h3>
        <p>{data.post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: data.post.html }} />
      </div>
  );

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
