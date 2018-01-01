import Link from 'gatsby-link';
import * as React from 'react';
import * as FaGithub from 'react-icons/lib/fa/github';

import * as styles from './index.module.css';

interface NavigationOptionsProps {
    author: {
        github: string;
    };
}

interface NavigationItemMeta {
    link: string;
    text: string;
    isDivider?: boolean;
    children?: any;
}

const makeNavigationItem = (item: NavigationItemMeta) => {
    if (item.isDivider) {
        return <li className={styles.navCollapseItemDivider} />;
    }

    let innerComponent;
    if (item.children) {
        innerComponent = item.children;
    } else if (item.link.startsWith('/') && item.link.endsWith('/')) {
        innerComponent = <Link to={item.link}>{item.text}</Link>;
    } else {
        innerComponent = <a href={item.link}>{item.text}</a>;
    }
    return (
        <li className={styles.navCollapseItem} key={item.link}>
            {innerComponent}
        </li>
    );
};

export default ({ author }: NavigationOptionsProps) =>
    <nav className={styles.navCollapse}>
        <ul className={styles.navCollapseList}>
            {[
                ...items,
                {
                    children: (
                        <a href={`https://github.com/${author.github}`} title="Find me on GitHub">
                            <FaGithub size={28} />
                        </a>
                    ),
                },
            ].map(makeNavigationItem)}
        </ul>
    </nav>;

const items = [
    {
        link: '#work',
        text: 'Work',
    },
    {
        link: '#projects',
        text: 'Projects',
    },
    {
        link: '#skills',
        text: 'Certification',
    },
    {
        link: '#education',
        text: 'Education',
    },
    {
        isDivider: true,
    },
    {
        link: '/blog/',
        text: 'Blog',
    },
    {
        link: 'resume.pdf',
        text: 'Resume',
    },
];
