import * as React from 'react';
import Link from 'gatsby-link';

interface NavigationOptionsProps {
    author: {
        github: string;
    }
}

export default ({ author }: NavigationOptionsProps) =>
    <nav>
        <ul>
            <li>
                <a href="#work">Work</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#certification">Certification</a>
            </li>
            <li>
                <a href="#education">Education</a>
            </li>
            <li></li>
            <li>
                <Link to="/blog/">Blog</Link>
            </li>
            <li><a href="resume.pdf">Resume</a></li>
            <li>
                <a 
                    href={`https://github.com/${ author.github }`} 
                    title="Find me on GitHub"
                >
                    <i className="fa fa-github"></i>
                </a>
            </li>
        </ul>
    </nav>
