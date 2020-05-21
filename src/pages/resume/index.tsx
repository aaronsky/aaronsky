import { graphql } from 'gatsby'
import moment from 'moment'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import * as brandOutline from '../../assets/brand/outline.svg'
import '../../css/reset.css'
import '../../css/syntax.css'
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

const jobsToResumeItems = (work: any): any | any[] => {
    if (Array.isArray(work.roles)) {
        return work.roles.map((role: any) => (
            <ResumeItem
                item={{
                    type: work.type,
                    start: role.start,
                    end: role.end,
                    description: role.description,
                    title: role.title,
                    employer: work.employer,
                    link: work.link,
                }}
            />
        ))
    }
    return <ResumeItem item={work} />
}

const ResumeSection = (props: any) => (
    <section className={styles.resumeSection}>
        <h2 className={styles.resumeSectionHeading}>{props.heading}</h2>
        {props.children}
    </section>
)

const ResumeItem = ({ item }: any) => {
    const isProject = !!item.type
    let heading
    let description
    if (isProject) {
        heading = `${item.title} (${getDatesString(
            item.start,
            item.end,
            false
        )})`
        description = `${item.description} (${item.type})`
    } else {
        heading = `${item.title}, ${item.employer} – ${getDatesString(
            item.start,
            item.end,
            true
        )}`
        description = item.description
    }

    return (
        <div>
            <h3 className={styles.resumeProjectHeading}>
                <a href={item.link}>{heading}</a>
            </h3>
            <p className={styles.resumeProjectDescription}>{description}</p>
        </div>
    )
}

export default ({ data }: any) => {
    const { jobs = [] } = data.allWorkYaml || {}
    const { projects = [] } = data.allProjectsYaml || {}

    return (
        <div className={styles.resume}>
            <Helmet title="Resume" />
            <header>
                <span>
                    <h1 className={styles.resumeHeaderHeading}>Aaron Sky</h1>
                </span>
                <span>
                    <h2 className={styles.resumeHeaderSubheading}>
                        <a href={`mailto:${data.site.meta.email}`}>
                            {data.site.meta.email}
                        </a>{' '}
                        •&nbsp;
                        <a href={data.site.meta.site}>
                            {data.site.meta.site.replace(/(^\w+:|^)\/\//, '')}
                        </a>{' '}
                        •&nbsp;
                        <a href={data.site.meta.github}>
                            {data.site.meta.github.replace(/(^\w+:|^)\/\//, '')}
                        </a>
                    </h2>
                </span>
                <hr className={styles.resumeHeaderLine} />
            </header>
            <ResumeSection heading="Experience">
                {jobs.map(({ work }: any) => jobsToResumeItems(work))}
            </ResumeSection>
            <ResumeSection heading="Projects">
                {projects.map(({ project }: any) => (
                    <ResumeItem item={project} />
                ))}
            </ResumeSection>
            <ResumeSection heading="Skills">
                <h4 className={styles.resumeProjectHeading}>
                    Selected by relevance and order of current confidence
                </h4>
                <div className={styles.resumeProjectDescription}>
                    {data.allSkillsYaml.edges.map(
                        ({ skill: { skill } }: any) => (
                            <span
                                className={styles.resumeSkillItem}
                                key={skill}
                            >
                                <strong>{skill}</strong>
                            </span>
                        )
                    )}
                </div>
            </ResumeSection>
            <ResumeSection heading="Education">
                <p
                    className={styles.resumeProjectDescription}
                >{`${data.allPortfolioYaml.edges[0].education.school}, ${data.allPortfolioYaml.edges[0].education.location}`}</p>
                <p
                    className={styles.resumeProjectDescription}
                >{`${data.allPortfolioYaml.edges[0].education.degree}, ${data.allPortfolioYaml.edges[0].education.date}`}</p>
            </ResumeSection>
            <footer className={styles.resumeFooter}>
                <hr className={styles.resumeFooterLine} />
                <img
                    className={styles.resumeFooterLogo}
                    src={brandOutline}
                    alt={`${data.site.meta.author} brand logo`}
                />
            </footer>
        </div>
    )
}

export const query = graphql`
    fragment Work on WorkYaml {
        id
        title
        employer
        image
        link
        start
        end
        description
        languages
        roles {
            title
            description
            start
            end
        }
    }

    fragment Project on ProjectsYaml {
        id
        title
        image
        link
        type
        start
        end
        roles
        languages
        description
    }

    fragment Education on PortfolioYaml {
        image
        school
        location
        degree
        date
    }

    query ResumeQuery {
        site {
            meta: siteMetadata {
                author
                site
                email
                github
            }
        }
        allWorkYaml(
            sort: { fields: [start], order: DESC }
            filter: { resume: { eq: true } }
        ) {
            jobs: edges {
                work: node {
                    ...Work
                }
            }
        }
        allProjectsYaml(
            sort: { fields: [start], order: DESC }
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
`
