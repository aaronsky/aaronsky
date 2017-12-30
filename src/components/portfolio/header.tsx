import * as React from 'react';

interface PortfolioHeaderProps {
    author: {
        name: string;
        image: string;
    };
    children?: any;
}

export default ({ author }: PortfolioHeaderProps) =>
    <header className="section section_landing" id="masthead">
        <div className="container">
            <img src={author.image} className="section_landing_profile" alt={`${author.name} face photo`} />
            <h1 className="section_landing_heading">{author.name}</h1>
            <h4 className="section_landing_description"><span>App &amp; Web Developer :globe_with_meridians:</span> <span>iOS Specialist :iphone:</span> <span>Wizard :sparkles:</span> </h4>
        </div>
    </header>
