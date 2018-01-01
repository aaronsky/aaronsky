import * as React from 'react';
import Link from 'gatsby-link';

import * as styles from './index.module.css';

interface NavigationOptionsProps {
    author: {
        github: string;
    }
}

export default ({ author }: NavigationOptionsProps) =>
    <nav className={styles.navCollapse}>
        <ul className={styles.navCollapseList}>
            <li className={styles.navCollapseItem}>
                <a href="#work">Work</a>
            </li>
            <li className={styles.navCollapseItem}>
                <a href="#projects">Projects</a>
            </li>
            <li className={styles.navCollapseItem}>
                <a href="#certification">Certification</a>
            </li>
            <li className={styles.navCollapseItem}>
                <a href="#education">Education</a>
            </li>
            <li className={styles.navCollapseItemDivider}></li>
            <li className={styles.navCollapseItem}>
                <Link to="/blog/">Blog</Link>
            </li>
            <li className={styles.navCollapseItem}><a href="resume.pdf">Resume</a></li>
            <li className={styles.navCollapseItem}>
                <a 
                    href={`https://github.com/${ author.github }`} 
                    title="Find me on GitHub"
                >
                    <i className="fa fa-github"></i>
                </a>
            </li>
        </ul>
    </nav>
