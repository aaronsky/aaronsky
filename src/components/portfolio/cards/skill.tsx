import * as React from 'react';

import Card, { PortfolioItem, getDatesString } from './base';

interface SkillPortfolioItem extends PortfolioItem {}

interface SkillCardContentProps extends SkillCardProps {}

interface SkillCardProps {
    skill: SkillPortfolioItem
}

export default ({ skill }: SkillCardProps) =>
    <div className="project_cell-cert">
        <a href={`${skill.link}`}>
            <div className="project project_cert project-darken">
                <aside className="project_img_container">
                    <img className="project_img" src={`${skill.image}`} alt={`${skill.title} logo`} />
                </aside>
                <div className="project_content">
                    <h2 className="project_heading">{skill.title}</h2>
                    <p className="project_info_dates">{`Certified ${getDatesString(skill.start, skill.end)}`}</p>
                </div>
            </div>
        </a>
    </div>