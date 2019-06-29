import { Link } from 'gatsby'
import * as React from 'react'
import { FaGithub } from 'react-icons/fa'
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

const Headline = () => (
    <Link to="/" className={styles.navigationItem}>
        <h1 className={styles.headline}>Aaron Sky</h1>
    </Link>
)

const Caption = ({ caption }: any) => (
    <div className={styles.caption}>
        <h3 className={styles.captionItem} key={caption}>
            {caption}
        </h3>
    </div>
)

const Navigation = ({ meta }: any) => (
    <div className={styles.navigation}>
        <a href={meta.github} className={styles.navigationItem}>
            <FaGithub size={'2em'} />
        </a>
    </div>
)

export default ({ meta }: any) => (
    <header className={styles.header}>
        <Logo />
        <Headline />
        <Caption caption={meta.caption} />
        <Navigation meta={meta} />
    </header>
)
