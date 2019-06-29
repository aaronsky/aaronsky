/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require('fs')
const { createFilePath } = require('gatsby-source-filesystem')
const pdf = require('html-pdf')
const path = require('path')
const { promisify } = require('util')

const readdirAsync = promisify(fs.readdir)
const readFileAsync = promisify(fs.readFile)
const statAsync = promisify(fs.stat)

const blogPostQuery = `
{
  allMarkdownRemark(limit: 1000) {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}
`

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplatePath = path.resolve(
        './src/templates/blog-post/index.tsx'
    )
    const result = await graphql(blogPostQuery)
    if (result.errors) {
        throw result.errors
    }
    // Create blog posts pages.
    result.data.allMarkdownRemark.edges.forEach(edge => {
        const page = {
            path: edge.node.fields.slug,
            component: blogPostTemplatePath,
            context: {
                slug: edge.node.fields.slug,
            },
        }
        createPage(page)
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    if (node.internal.type !== `MarkdownRemark`) {
        return
    }
    const { createNodeField } = actions
    const value = createFilePath({
        node,
        getNode,
    })
    const field = {
        name: `slug`,
        node,
        value,
    }
    createNodeField(field)
}

exports.onPostBuild = async () => {
    const publicDir = path.resolve(__dirname, 'public')

    const pdfFilePath = await getResumePath(publicDir)
    const resumeHtml = await getResumeHtml(publicDir)
    await writePdfToFile(resumeHtml, pdfFilePath)
}

const getResumePath = async publicDir => {
    const staticDir = path.resolve(publicDir, 'static')

    console.log('Reading', staticDir, 'to find an existing resume.(.*).pdf...')

    const files = await readdirAsync(staticDir)
    const matches = files.filter(
        file => file.includes('resume') && path.extname(file) == '.pdf'
    )
    const matchesWithStats = await Promise.all(
        matches.map(
            async file =>
                await createFileWithStats(file, path.resolve(staticDir, file))
        )
    )
    const sortedMatches = matchesWithStats.sort(
        (left, right) => left.mtime.getTime() - right.mtime.getTime()
    )
    const firstMatch = sortedMatches[0]
    const filename = firstMatch.file

    if (!filename) {
        throw new Error("No file path containing 'resume(.*).pdf' was found")
    }

    const filepath = path.resolve(staticDir, filename)
    console.log('Found', filename, 'at', filepath)

    return filepath
}

const createFileWithStats = async (file, path) => {
    const stats = await statAsync(path)
    return {
        file,
        path,
        ...stats,
    }
}

const getResumeHtml = async publicDir => {
    const resumeHtml = path.resolve(publicDir, 'about', 'resume', 'index.html')
    console.log('Reading', resumeHtml, '...')

    const html = await readFileAsync(resumeHtml, 'utf-8')
    console.log('Successfully loaded', resumeHtml)

    const scrubbedHtml = html.replace(/url\(\//gi, `url(file://${publicDir}/`)

    return scrubbedHtml
}

const writePdfToFile = async (html, filepath) => {
    console.log('Writing new PDF to', filepath)
    const options = {
        border: {
            top: '0.30in',
            left: '0.65in',
            bottom: '0.30in',
            right: '0.65in',
        },
    }

    const result = pdf.create(html, options)

    return new Promise((resolve, reject) => {
        result.toFile(filepath, (err, _info) => {
            if (err) {
                reject(err)
                return
            }
            console.log('Successfully wrote', filepath, 'to disk!')
            resolve()
        })
    })
}
