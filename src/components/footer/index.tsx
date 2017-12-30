import * as React from 'react';

interface FooterProps {
    author: {
        name: string;
    }
}

export default ({ author }: FooterProps) =>
    <footer className="section section_legal">
        <img 
            className="section_legal_brand" 
            src="brand.svg" 
            alt={`${author.name} brand logo`} />
    </footer>