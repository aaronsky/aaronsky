import * as React from 'react';
import * as moment from 'moment';

export interface PortfolioItem {
    title: string;
    link: string;
    image: string;
    start: string;
    end?: string;
}

interface CardProps {
    item: PortfolioItem;
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

export default ({ item, children }: CardProps) =>
    <div className="project_cell">
        <a href={item.link}>
            <div className="project project-darken project-lighten">
                <aside className="project_img_container">
                    <img className="project_img" src="" alt={`${item.title} logo`} />
                </aside>
                {children}
            </div>
        </a>
    </div>