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
    cert?: boolean;
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

const getImage = (image: string) => require(`../../../assets/portfolio/${image}`);

export default (props: CardProps) =>
    <div className={props.cert ? styles.projectCellCert : styles.projectCell}>
        <a href={props.item.link}>
            <div className={[styles.project, props.cert ? styles.projectCert : '', styleForHoverEffect(props.hoverEffect)].join(' ')}>
                <aside className={styles.projectImgContainer}>
                    <img className={styles.projectImg} src={getImage(props.item.image)} alt={`${props.item.title} logo`} />
                </aside>
                {props.children}
            </div>
        </a>
    </div>