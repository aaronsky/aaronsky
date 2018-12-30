import { Link } from 'gatsby'
import * as React from 'react'
import * as logo from '../../assets/brand/brand.svg'
import * as animationStyles from '../../css/animations.module.css'
import * as styles from './index.module.css'

const Logo = () => (
    <Link to="/">
        <img
            src={logo}
            title="Home"
            className={[styles.logo, animationStyles.animated].join(' ')}
        />
    </Link>
)

const Headline = () => <h1 className={styles.headline}>Aaron Sky</h1>

const Caption = ({ items }: any) => (
    <div className={styles.caption}>
        {items.map((item: any) => (
            <h3 className={styles.captionItem} key={item}>
                {item}
            </h3>
        ))}
    </div>
)

const Navigation = ({ meta }: any) => (
    <div className={styles.navigation}>
        <Link to="/" className={styles.navigationItem}>
            Blog
        </Link>
        <a href={meta.github} className={styles.navigationItem}>
            Github
        </a>
        <Link to="/about/" className={styles.navigationItem}>
            About
        </Link>
    </div>
)

export default ({ meta }: any) => (
    <header className={styles.header}>
        <Logo />
        <Headline />
        <Caption items={meta.caption.split(' • ')} />
        <Navigation meta={meta} />
    </header>
)
