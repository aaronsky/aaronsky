import * as React from 'react';

import NavigationMenuButton from './button';
import NavigationMenuOptions from './options';

import * as styles from './index.module.css';
import * as logo from '../../../assets/brand/brand.svg';

interface NavigationMenuProps {
    siteMetadata: {
        author: {
            github: string;
        }
    }
}

export default ({ siteMetadata }: NavigationMenuProps) => 
    <header id="nav" className={styles.nav}>
        <a href="">
            <img className={styles.navLogo} src={logo} alt="" />
        </a>
        <NavigationMenuButton />
        <NavigationMenuOptions author={ siteMetadata.author } />
    </header>