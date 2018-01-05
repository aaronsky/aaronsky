interface SiteMetadata {
    title: string;
    author: string;
    caption: string;
    site: string;
    email: string;
    linkedin: string;
    github: string;
    npm: string;
    packageJson: {
        repository: {
            url: string;
        };
        bugs: {
            url: string;
        };
    };
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

interface BlogPostModel {
    id?: string;
    html?: string;
    excerpt?: string;
    timeToRead: number;
    fields?: {
        slug: string;
    };
    frontmatter: {
        date: string;
        title: string;
    };
}
