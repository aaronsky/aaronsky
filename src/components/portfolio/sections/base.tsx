import * as React from 'react';

import * as styles from './index.module.css';

type SectionIdTypes = 'work' | 'projects' | 'education' | 'skills';

interface PortfolioSectionProps {
    id: SectionIdTypes;
    heading: string;
    children?: any;
}

const styleForId = (id: SectionIdTypes) => {
    if (id == 'work') {
        return styles.sectionWork;
    } else if (id == 'projects') {
        return styles.sectionProjects;
    } else if (id == 'education') {
        return styles.sectionEducation;
    } else if (id == 'skills') {
        return styles.sectionCert;
    }
}

export default (props: PortfolioSectionProps) =>
    <section className={[styles.section, styleForId(props.id)].join(' ')}>
        <div className={styles.sectionLink}>
            <a id={props.id}></a>
            <a href={`#${props.id}`}><i className="fa fa-link"></i></a>
        </div>
        <h2 className={styles.sectionHeading}>{props.heading}</h2>
        <div className="container">
        {props.children}
        </div>
    </section>