import * as React from 'react';

import Card, { getDatesString, PortfolioItem } from './base';
import * as styles from './index.module.css';

interface WorkPortfolioItem extends PortfolioItem {
    description: string;
    employer: string;
    languages: string[];
}

interface WorkCardContentProps extends WorkCardProps {}

const WorkCardContent = ({ work }: WorkCardContentProps) =>
    <div className={styles.projectContent}>
        <h2 className={styles.projectHeading}>{work.employer}</h2>
        <h3 className={styles.projectInfoTitle}>{work.title}</h3>
        <h3 className={styles.projectInfoDates}>{getDatesString(work.start, work.end)}</h3>
        <p className={styles.projectInfoLanguages}>{work.languages.join(' • ')}</p>
        <p className={styles.projectInfoDescription}>{work.description}</p>
    </div>;

interface WorkCardProps {
    work: WorkPortfolioItem;
}

export default ({ work }: WorkCardProps) =>
    <Card item={work} hoverEffect="light">
        <WorkCardContent work={work} />
    </Card>;
