import Link from 'gatsby-link';
import * as React from 'react';

import * as styles from './index.module.css';
import { BlogPostModel } from './models';

interface BlogPostProps {
    meta: BlogPostModel;
}

export default ({ meta }: BlogPostProps) => (
    <div className={styles.excerpt}>
        <h3 className={styles.excerptHeading}>
            <Link to={meta.fields.slug}>
                {meta.frontmatter.title}
            </Link>
        </h3>
        <h4 className={styles.excerptDate}>{meta.frontmatter.date}</h4>
        <p dangerouslySetInnerHTML={{ __html: meta.excerpt }} className={styles.excerptBody} />
    </div>
);
