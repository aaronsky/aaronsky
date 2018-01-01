import * as React from 'react';

import Card, { PortfolioItem, getDatesString } from './base';
import * as styles from './index.module.css';

interface ProjectPortfolioItem extends PortfolioItem {
    languages: string[];
    type: string;
    roles: string[];
}

interface ProjectCardContentProps extends ProjectCardProps {}

const ProjectCardContent = ({ project }: ProjectCardContentProps) =>
    <div className={styles.projectContent}>
        <h2 className={styles.projectHeading}>{project.title}</h2>
        <h3 className={styles.projectInfoDates}>{getDatesString(project.start, project.end)}</h3>
        <p className={styles.projectInfoLanguages}>{project.languages.join(' • ')}</p>
        <p className={styles.projectInfoDescription}>{project.type}</p>
        <p className={styles.projectInfoDescription}>{project.roles.join(' • ')}</p>
    </div>

interface ProjectCardProps {
    project: ProjectPortfolioItem;
}

export default ({ project }: ProjectCardProps) =>
    <Card item={project} hoverEffect="dark">
        <ProjectCardContent project={project} />
    </Card>