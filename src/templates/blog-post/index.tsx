import * as React from 'react';
import Helmet from 'react-helmet';

import { BlogPostModel } from '../components/blog/models';
import { SiteMetadata } from '../components/head/index';
import Header from '../components/header';

import * as styles from './index.module.css';

interface BlogPostTemplateProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    post: BlogPostModel;
  };
}

export default ({ data }: BlogPostTemplateProps) => (
      <div className={styles.postContainer}>
        <Helmet title={data.post.frontmatter.title} />
        <h3 className={styles.postHeading}>{data.post.frontmatter.title}</h3>
        <p className={styles.postDate}>{data.post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: data.post.html }} className={styles.postBodyContainer} />
      </div>
  );

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        caption
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
