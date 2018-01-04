import Link from 'gatsby-link';
import * as React from 'react';

import * as logo from '../../assets/brand/brand.svg';
import * as styles from './index.module.css';

const Logo = () => (
    <Link to="/">
        <img src={logo} title="Aaron Sky logo" className={styles.logo} />
    </Link>
);

const Headline = () => <h1 className={styles.headline}>Aaron Sky</h1>;

interface CaptionProps {
    items: string[];
}

const Caption = ({ items }: CaptionProps) => (
    <div className={styles.caption}>
        {items.map((item) => <h3 className={styles.captionItem} key={item}>{item}</h3>)}
    </div>
);

interface NavigationProps extends HeaderProps { }

const Navigation = ({ meta }: NavigationProps) => (
    <div className={styles.navigation}>
        <Link to="/" className={styles.navigationItem}>Blog</Link>
        <a href={meta.github} className={styles.navigationItem}>Github</a>
        <Link to="/about/" className={styles.navigationItem}>About</Link>
    </div>
);

interface HeaderProps {
    meta: SiteMetadata;
}

export default ({ meta }: HeaderProps) => (
    <header className={styles.header}>
        <Logo />
        <Headline />
        <Caption items={meta.caption.split(' • ')} />
        <Navigation meta={meta} />
    </header>
);
