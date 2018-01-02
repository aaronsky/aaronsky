import Link from 'gatsby-link';
import * as React from 'react';
import { SiteMetadata } from '../components/head/index';

import * as styles from './index.module.css';
import * as resumePdf from '../assets/portfolio/files/resume.pdf'

interface AboutPageProps {
  data: {
    site: {
      meta: SiteMetadata;
    }
  }
}

export default ({ data }: AboutPageProps) => (
  <div>
    <h3 className={styles.aboutHeading}>Hello!</h3>
    <p className={styles.aboutBody}>I'm a software developer based in Boston, Massachusetts. My primary focus is iOS development, though I have experience developing in Android and WinRT/UWP as well. I have been developing apps since 2010 and have been working in apps professionally since 2015. My work experience can be found on <a href={data.site.meta.linkedin} className={styles.aboutLink}>LinkedIn</a>. My open source contributions can be found on <a href={data.site.meta.github} className={styles.aboutLink}>GitHub</a> and on <a href={data.site.meta.npm} className={styles.aboutLink}>NPM</a>. I'm currently an iOS developer at <a href="https://www.wayfair.com/" className={styles.aboutLink}>Wayfair</a>. Previously, I've worked extensively on React Native apps at <a href="https://www.sapientrazorfish.com/" className={styles.aboutLink}>SapientRazorfish</a> and as a QA engineer at <a href="https://www.xamarin.com/" className={styles.aboutLink}>Xamarin</a>.</p>
    <p className={styles.aboutBody}>Outside of programming, I enjoy cooking, baking, pickling, and exploring the City of Boston. I am always working on some game project on the side, though I'm mainly just a hobbyist. You can usually find me in Amory Park in the summer and autumn, or trying to stay warm in the winter.</p>
    <p className={styles.aboutBody}>My full resume <a href={resumePdf} className={styles.aboutLink}>can be found here</a>. You can <Link to="/contact/" className={styles.aboutLink}>contact me here</Link>.</p>
  </div>
);

export const query = graphql`
  query AboutPageQuery {
    site {
      meta: siteMetadata {
        linkedin
        github
        npm
      }
    }
  }
`;
