import * as React from 'react';

import Card, { PortfolioItem, getDatesString } from './base';
import * as styles from './index.module.css';

interface SkillPortfolioItem extends PortfolioItem {}

interface SkillCardContentProps extends SkillCardProps {}

const SkillCardContent = ({ skill }: SkillCardContentProps) =>
    <div className={styles.projectContent}>
        <h2 className={styles.projectHeading}>{skill.title}</h2>
        <p className={styles.projectInfoDates}>{`Certified ${getDatesString(skill.start, skill.end)}`}</p>
    </div>

interface SkillCardProps {
    skill: SkillPortfolioItem
}

export default ({ skill }: SkillCardProps) =>
    <Card item={skill} hoverEffect="dark" cert>
        <SkillCardContent skill={skill} />
    </Card>