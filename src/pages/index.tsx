import Link from 'gatsby-link';
import * as React from 'react';

import { ProjectPortfolioCard, SkillPortfolioCard, WorkPortfolioCard } from '../components/portfolio/cards';
import { PortfolioLanding, PortfolioSection } from '../components/portfolio/sections';

interface IndexPageProps {
    data: {
        site: {
            siteMetadata: {
                author: {
                    name: string;
                    image: string;
                },
            },
        }
        allWorkJson: {
            jobs: Array<{
                work: {
                    id: string;
                    title: string;
                    employer: string;
                    image: string;
                    link: string;
                    start: string;
                    end: string;
                    description: string;
                    languages: string[];
                },
            }>,
        }
        allProjectsJson: {
            projects: Array<{
                project: {
                    id: string;
                    title: string;
                    image: string;
                    link: string;
                    type: string;
                    start: string;
                    end: string;
                    roles: string[];
                    languages: string[];
                },
            }>,
        }
        allCertificationJson: {
            skills: Array<{
                skill: {
                    id: string;
                    title: string;
                    image: string;
                    link: string;
                    start: string;
                    end: string;
                },
            }>,
        }
        allPortfolioJson: {
            edges: Array<{
                education: {
                    image: string;
                    school: string;
                    location: string;
                    degree: string;
                    date: string;
                },
            }>,
        },
    };
}

export default ({ data }: IndexPageProps) =>
    <div>
        <PortfolioLanding author={data.site.siteMetadata.author} />
        <PortfolioSection id="work" heading="Experience">
            {data.allWorkJson.jobs.map((work) => <WorkPortfolioCard key={work.work.id} work={work.work} />)}
        </PortfolioSection>
        <PortfolioSection id="projects" heading="Projects">
            {data.allProjectsJson.projects.map((project) => <ProjectPortfolioCard key={project.project.id} project={project.project} />)}
        </PortfolioSection>
        <PortfolioSection id="skills" heading="Certifications">
            {data.allCertificationJson.skills.map((skill) => <SkillPortfolioCard key={skill.skill.id} skill={skill.skill} />)}
        </PortfolioSection>
        <PortfolioSection id="education" heading="Education">
            <aside className="section_img_container">
                <img
                    className="section_img"
                    src={`${data.allPortfolioJson.edges[0].education.image}`}
                    alt={`${data.allPortfolioJson.edges[0].education.school} logo`} />
            </aside>
            <p className="section_description">{data.allPortfolioJson.edges[0].education.school}</p>
            <p className="section_description">{data.allPortfolioJson.edges[0].education.degree}</p>
            <p className="section_description">{data.allPortfolioJson.edges[0].education.date}</p>
        </PortfolioSection>
    </div>;

export const pageQuery = graphql`
    fragment Work on WorkJson {
        id
        title
        employer
        image
        link
        start
        end
        description
        languages
    }

    fragment Project on ProjectsJson {
        id
        title
        image
        link
        type
        start
        end
        roles
        languages
    }

    fragment Skill on CertificationJson {
        id
        title
        image
        link
        start
        end
    }

    fragment Education on PortfolioJson {
        image
        school
        location
        degree
        date
    }

    query IndexPageQuery {
        site {
            siteMetadata {
                author {
                    name
                    image
                }
            }
        }
        allWorkJson(
            sort: { fields: [start], order: DESC },
            filter: { ignore: { eq: false } }
        ) {
            jobs: edges {
                work: node {
                    ...Work
                }
            }
        }
        allProjectsJson(
            sort: { fields: [start], order: DESC },
            filter: { ignore: { eq: false } }
        ) {
            projects: edges {
                project: node {
                    ...Project
                }
            }
        }
        allCertificationJson(
            sort: { fields: [start], order: DESC },
            filter: { ignore: { eq: false } }
        ) {
            skills: edges {
                skill: node {
                    ...Skill
                }
            }
        }
        allPortfolioJson {
            edges {
                education: node {
                    ...Education
                }
            }
        }
    }
`;
