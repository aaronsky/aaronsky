import * as React from 'react';

interface PortfolioSectionProps {
    id: string;
    heading: string;
    children?: any;
}

export default (props: PortfolioSectionProps) =>
    <section className="section section_work">
        <div className="section_link">
            <a name={ props.id }></a>
            <a href={`#${props.id}`}><i className="fa fa-link"></i></a>
        </div>
        <h2 className="section_heading">{props.heading}</h2>
        <div className="container">
        {props.children}
        </div>
    </section>