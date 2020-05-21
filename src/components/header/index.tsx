import { Link } from 'gatsby'
import * as React from 'react'
import { FaGithub } from 'react-icons/fa'
import * as logo from '../../assets/brand/brand.svg'
import * as animationStyles from '../../css/animations.module.css'
import * as styles from './index.module.css'

const join = (...classes: string[]) => classes.join(' ')

const Logo = () => (
    <Link to="/">
        <img
            src={logo}
            title="Home"
            className={join(styles.logo, animationStyles.animated)}
        />
    </Link>
)

const Title = ({ meta }: any) => (
    <Link to="/" className={join(styles.navigationItem, styles.navigation)}>
        <h1 className={styles.author}>{meta.author}</h1>
        <h3 className={styles.caption}>{meta.caption}</h3>
    </Link>
)

const Navigation = ({ meta }: any) => (
    <div className={styles.navigation}>
        <a href={meta.github} className={styles.navigationItem}>
            <FaGithub size={'2em'} />
        </a>
    </div>
)

export default ({ meta }: any) => (
    <div>
        <Logo />
        <header className={styles.header}>
            <Title meta={meta} />
            <Navigation meta={meta} />
        </header>
    </div>
)
