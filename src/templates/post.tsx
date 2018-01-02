import * as React from 'react';
import Helmet from 'react-helmet';

import { BlogPostModel } from '../components/blog/models';
import Header from '../components/header';

interface BlogPostTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        author: string;
      };
    };
    post: BlogPostModel;
  }
}

export default ({ data }: BlogPostTemplateProps) => (
      <div>
        <Helmet title={`${data.post.frontmatter.title} | ${data.site.siteMetadata.title}`} />
        <h1>{data.post.frontmatter.title}</h1>
        <p>
          {data.post.frontmatter.date}
        </p>
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
