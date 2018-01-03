export interface BlogPostModel {
    id?: string;
    html?: string;
    excerpt?: string;
    fields?: {
        slug: string;
    };
    frontmatter: {
        date: string;
        title: string;
    };
}
