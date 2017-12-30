import * as React from 'react';

import Card, { PortfolioItem, getDatesString } from './base';

interface ProjectPortfolioItem extends PortfolioItem {
    languages: string[];
    type: string;
    roles: string[];
}

interface ProjectCardContentProps extends ProjectCardProps {}

const ProjectCardContent = ({ project }: ProjectCardContentProps) =>
    <div className="project_content">
        <h2 className="project_heading">{project.title}</h2>
        <h3 className="project_info_dates">{getDatesString(project.start, project.end)}</h3>
        <p className="project_info_languages">{project.languages.join(' • ')}</p>
        <p className="project_info_description">{project.type}</p>
        <p className="project_info_description">{project.roles}</p>
    </div>

interface ProjectCardProps {
    project: ProjectPortfolioItem;
}

export default ({ project }: ProjectCardProps) =>
    <Card item={project}>
        <ProjectCardContent project={project} />
    </Card>