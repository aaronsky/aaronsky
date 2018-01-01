import * as React from 'react';

import * as logo from '../../assets/brand/brand.svg';
import * as styles from './index.module.css';

interface FooterProps {
    author: {
        name: string;
    };
}

export default ({ author }: FooterProps) =>
    <footer className={[styles.section, styles.sectionLegal].join(' ')}>
        <img className={styles.sectionLegalBrand} src={logo} alt={`${author.name} brand logo`} />
    </footer>;
