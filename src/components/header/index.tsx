import Link from 'gatsby-link';
import * as React from 'react';

import * as logo from '../../assets/brand/brand.svg';
import * as styles from './index.module.css';
import { SiteMetadata } from '../head/index';

const Logo = () => (
    <Link to="/">
        <img src={logo} title="Aaron Sky logo" className={styles.logo} />
    </Link>
);

const Headline = () => <h1 className={styles.headline}>Aaron Sky</h1>;

const Caption = () => (
    <div className={styles.caption}>
        <h3 className={styles.captionItem}>📱 App</h3>
        <h3 className={styles.captionItem}>🌐 Web</h3>
        <h3 className={styles.captionItem}>🎮 Game</h3>
    </div>
);

interface NavigationProps extends HeaderProps {}

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
        <Caption />
        <Navigation meta={meta} />
    </header>
);
