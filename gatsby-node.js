/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require('gatsby-source-filesystem')
const buildResume = require('./bin/build-resume')

exports.onCreateNode = ({ node, actions, getNode }) => {
    if (node.internal.type !== `MarkdownRemark`) {
        return
    }
    const { createNodeField } = actions
    const value = createFilePath({ node, getNode })
    const field = { name: `slug`, node, value }
    createNodeField(field)
}

exports.onPostBuild = async () => {
    await buildResume()
}
