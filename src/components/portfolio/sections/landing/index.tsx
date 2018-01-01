import * as React from 'react';

import * as sectionStyles from '../index.module.css';
import * as styles from './index.module.css';

interface PortfolioHeaderProps {
    author: {
        name: string;
        image: string;
    };
    children?: any;
}

export default ({ author }: PortfolioHeaderProps) =>
    <header className={[sectionStyles.section, styles.sectionLanding].join(' ')} id="masthead">
        <div className="container">
            <img src={author.image} className={styles.sectionLandingProfile} alt={`${author.name} face photo`} />
            <h1 className={styles.sectionLandingHeading}>{author.name}</h1>
            <h4 className={styles.sectionLandingDescription}><span>App &amp; Web Developer :globe_with_meridians:</span> <span>iOS Specialist :iphone:</span> <span>Wizard :sparkles:</span> </h4>
        </div>
    </header>
