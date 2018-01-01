import * as React from 'react';
import * as moment from 'moment';

import * as styles from './index.module.css';

type HoverEffect = 'dark' | 'light';

export interface PortfolioItem {
    title: string;
    link: string;
    image: string;
    start: string;
    end?: string;
}

interface CardProps {
    item: PortfolioItem;
    hoverEffect: HoverEffect;
    children?: any;
}

export const getDatesString = (start: string, end?: string) => {
    const dateFormat = 'MMM YYYY';
    const startDate = moment(start).format(dateFormat);
    if (end) {
        const endDate = moment(end).format(dateFormat)
        return `${startDate} to ${endDate}`;
    }
    return startDate;
};

const styleForHoverEffect = (hoverEffect: HoverEffect) => {
    if (hoverEffect == 'dark') {
        return styles.projectDarken;
    } else if (hoverEffect == 'light') {
        return styles.projectLighten;
    }
}

export default (props: CardProps) =>
    <div className={styles.projectCell}>
        <a href={props.item.link}>
            <div className={[styles.project, styleForHoverEffect(props.hoverEffect)].join(' ')}>
                <aside className={styles.projectImgContainer}>
                    <img className={styles.projectImg} src="" alt={`${props.item.title} logo`} />
                </aside>
                {props.children}
            </div>
        </a>
    </div>