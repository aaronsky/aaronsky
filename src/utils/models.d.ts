interface SiteMetadata {
    title: string;
    author: string;
    caption: string;
    site: string;
    email: string;
    linkedin: string;
    github: string;
    npm: string;
}

interface ResumeItem {
    title: string;
    link: string;
    image: string;
    start: string;
    end?: string;
}

interface Work extends ResumeItem {
    description: string;
    employer: string;
    languages: string[];
}

interface Project extends ResumeItem {
    languages: string[];
    type: string;
    roles: string[];
}