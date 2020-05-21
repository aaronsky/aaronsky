import { graphql } from 'gatsby'
import moment from 'moment'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import * as brandOutline from '../../assets/brand/outline.svg'
import * as styles from './index.module.css'

export const getDatesString = (
    start: string,
    end?: string,
    noEndMeansActive?: boolean
) => {
    const dateFormat = 'MMMM YYYY'
    const startDate = moment(start).format(dateFormat)
    if (end) {
        const endDate = moment(end).format(dateFormat)
        return `${startDate} to ${endDate}`
    } else if (noEndMeansActive) {
        return `${startDate} to Present`
    }
    return startDate
}

const ResumeHeader = ({ meta }: { meta: SiteMetadata }) => {
    return (
        <header>
            <span>
                <h1 className={styles.resumeHeaderHeading}>Aaron Sky</h1>
            </span>
            <span>
                <h2 className={styles.resumeHeaderSubheading}>
                    <a href={`mailto:${meta.email}`}>{meta.email}</a> •&nbsp;
                    <a href={meta.site}>
                        {meta.site.replace(/(^\w+:|^)\/\//, '')}
                    </a>{' '}
                    •&nbsp;
                    <a href={meta.github}>
                        {meta.github.replace(/(^\w+:|^)\/\//, '')}
                    </a>
                </h2>
            </span>
            <hr className={styles.resumeHeaderLine} />
        </header>
    )
}

const ResumeFooter = ({ meta }: { meta: SiteMetadata }) => {
    return (
        <footer className={styles.resumeFooter}>
            <hr className={styles.resumeFooterLine} />
            <img
                className={styles.resumeFooterLogo}
                src={brandOutline}
                alt={`${meta.author} brand logo`}
            />
        </footer>
    )
}

const ResumeSection = (props: { heading: string; children?: any }) => (
    <section className={styles.resumeSection}>
        <h2 className={styles.resumeSectionHeading}>{props.heading}</h2>
        {props.children}
    </section>
)

const isExperience = (item: Experience | Project): item is Experience =>
    (item as Experience).roles !== undefined

const ResumeItem = ({ item }: { item: Experience | Project }) => {
    const headingElement = (
        <h2 className={styles.resumeProjectHeading}>
            <a href={item.link}>{item.name}</a>
        </h2>
    )
    if (isExperience(item)) {
        return (
            <>
                {headingElement}
                {item.roles.map((role) => (
                    <>
                        <h3 className={styles.resumeProjectHeading}>
                            {`${role.title} – ${getDatesString(
                                role.start,
                                role.end,
                                true
                            )}`}
                        </h3>
                        <p className={styles.resumeProjectDescription}>
                            {role.description}
                        </p>
                    </>
                ))}
            </>
        )
    }
    return (
        <>
            {headingElement}
            <p className={styles.resumeProjectDescription}>
                {item.description}
            </p>
        </>
    )
}

export default ({ data }: { data: GraphQLQuery }) => {
    const { experiences = [] } = data.allExperienceYaml || {}
    const { projects = [] } = data.allProjectsYaml || {}
    const education = data.allPortfolioYaml.edges[0].education

    return (
        <div className={styles.resume}>
            <Helmet title="Resume" />
            <ResumeHeader meta={data.site.meta} />
            <ResumeSection heading="Experience">
                {experiences.map(({ experience }) => (
                    <ResumeItem item={experience} />
                ))}
            </ResumeSection>
            <ResumeSection heading="Projects">
                {projects.map(({ project }) => (
                    <ResumeItem item={project} />
                ))}
            </ResumeSection>
            <ResumeSection heading="Skills">
                <h4 className={styles.resumeProjectHeading}>
                    Selected by relevance and order of current confidence
                </h4>
                <div className={styles.resumeProjectDescription}>
                    {data.allSkillsYaml.edges.map(({ skill: { skill } }) => (
                        <span className={styles.resumeSkillItem} key={skill}>
                            <strong>{skill}</strong>
                        </span>
                    ))}
                </div>
            </ResumeSection>
            <ResumeSection heading="Education">
                <p
                    className={styles.resumeProjectDescription}
                >{`${education.school}, ${education.location}`}</p>
                <p
                    className={styles.resumeProjectDescription}
                >{`${education.degree}, ${education.date}`}</p>
            </ResumeSection>
            <ResumeFooter meta={data.site.meta} />
        </div>
    )
}

interface GraphQLQuery {
    site: {
        meta: SiteMetadata
    }
    allExperienceYaml: {
        experiences: {
            experience: Experience
        }[]
    }
    allProjectsYaml: {
        projects: {
            project: Project
        }[]
    }
    allPortfolioYaml: {
        edges: {
            education: Education
        }[]
    }
    allSkillsYaml: {
        edges: {
            skill: {
                skill: string
            }
        }[]
    }
}

interface SiteMetadata {
    author: string
    site: string
    email: string
    github: string
}

interface Experience {
    id: string
    name: string
    link: string
    roles: {
        title: string
        description: string
        start: string
        end?: string
    }[]
}

interface Project {
    id: string
    name: string
    link: string
    description: string
}

interface Education {
    school: string
    location: string
    degree: string
    date: string
}

export const query = graphql`
    query ResumeQuery {
        site {
            meta: siteMetadata {
                author
                site
                email
                github
            }
        }
        allExperienceYaml(
            sort: { fields: roles___start, order: DESC }
            filter: { resume: { eq: true } }
        ) {
            experiences: edges {
                experience: node {
                    ...Experience
                }
            }
        }
        allProjectsYaml(
            sort: { fields: name, order: ASC }
            filter: { resume: { eq: true } }
        ) {
            projects: edges {
                project: node {
                    ...Project
                }
            }
        }
        allPortfolioYaml {
            edges {
                education: node {
                    ...Education
                }
            }
        }
        allSkillsYaml {
            edges {
                skill: node {
                    skill
                }
            }
        }
    }

    fragment Experience on ExperienceYaml {
        id
        name
        link
        roles {
            title
            description
            start
            end
        }
    }

    fragment Project on ProjectsYaml {
        id
        name
        link
        description
    }

    fragment Education on PortfolioYaml {
        school
        location
        degree
        date
    }
`
