import * as React from 'react';

import Card, { PortfolioItem, getDatesString } from './base';

interface WorkPortfolioItem extends PortfolioItem {
    description: string;
    employer: string;
    languages: string[];
}

interface WorkCardContentProps extends WorkCardProps {}

const WorkCardContent = ({ work }: WorkCardContentProps) =>
    <div className="project_content">
        <h2 className="project_heading">{work.employer}</h2>
        <h3 className="project_info_title">{work.title}</h3>
        <h3 className="project_info_dates">{getDatesString(work.start, work.end)}</h3>
        <p className="project_info_languages">{work.languages.join(' • ')}</p>
        <p className="project_info_description">{work.description}</p>
    </div>

interface WorkCardProps {
    work: WorkPortfolioItem;
}

export default ({ work }: WorkCardProps) =>
    <Card item={work}>
        <WorkCardContent work={work} />
    </Card>