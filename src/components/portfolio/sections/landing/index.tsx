import * as React from 'react';

import * as sectionStyles from '../base.module.css';
import * as styles from './index.module.css';

interface PortfolioHeaderProps {
    author: {
        name: string;
        image: string;
    };
    children?: any;
}

const getImage = (image: string) => require('./../../../../assets/site/' + image);

export default ({ author }: PortfolioHeaderProps) =>
    <header className={[sectionStyles.section, styles.sectionLanding].join(' ')} id="masthead">
        <div className="container">
            <img src={getImage(author.image)} className={styles.sectionLandingProfile} alt={`${author.name} face photo`} />
            <h1 className={styles.sectionLandingHeading}>{author.name}</h1>
            <h4 className={styles.sectionLandingDescription}>
                App &amp; Web Developer :globe_with_meridians: iOS Specialist :iphone: Wizard :sparkles:
            </h4>
        </div>
    </header>
