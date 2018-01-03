/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

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
`;

exports.createPages = async({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    const blogPost = path.resolve('./src/templates/blog-post/index.tsx');
    const result = await graphql(blogPostQuery);
    if (result.errors) {
        console.log(result.errors);
        throw result.errors;
    }
    // Create blog posts pages.
    result.data.allMarkdownRemark.edges.forEach((edge) => {
        const page = {
            path: edge.node.fields.slug,
            component: blogPost,
            context: {
                slug: edge.node.fields.slug,
            },
        };
        createPage(page);
    });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
    if (node.internal.type !== `MarkdownRemark`) {
        return;
    }
    const { createNodeField } = boundActionCreators;
    const value = createFilePath({
        node,
        getNode
    });
    const field = {
        name: `slug`,
        node,
        value,
    };
    createNodeField(field);
};

exports.onCreatePage = async({ page, boundActionCreators }) => {
    const { createPage, deletePage } = boundActionCreators;
    return new Promise(resolve => {
        console.log('CREATING PAGE', page.path);
        resolve();
    });
};
