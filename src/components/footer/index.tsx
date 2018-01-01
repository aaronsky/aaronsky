import * as React from 'react';

import * as styles from './index.module.css';
import * as logo from '../../assets/brand/brand.svg';

interface FooterProps {
    author: {
        name: string;
    }
}

export default ({ author }: FooterProps) =>
    <footer className={[styles.section, styles.sectionLegal].join(' ')}>
        <img className={styles.sectionLegalBrand} src={logo} alt={`${author.name} brand logo`} />
    </footer>