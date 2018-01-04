/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');
const pdf = require('html-pdf');
const path = require('path');

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

exports.createPages = async ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    const blogPost = path.resolve('./src/templates/blog-post/index.tsx');
    const result = await graphql(blogPostQuery);
    if (result.errors) {
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

exports.onCreatePage = async ({ page, boundActionCreators }) => {
    const { createPage, deletePage } = boundActionCreators;
    return new Promise(resolve => {
        if (page.path.match(/^\/resume/)) {
            console.log('Setting', page.path, 'layout to \'empty\'.');
            page.layout = 'empty';
            createPage(page);
        }
        resolve();
    });
};

exports.onPostBuild = async () => {
    return new Promise((resolve, reject) => {
        const publicDir = path.resolve(__dirname, 'public');
        const staticDir = path.resolve(publicDir, 'static');
        const resumeHtml = path.resolve(publicDir, 'resume', 'index.html');
        console.log('Reading', staticDir, 'to find an existing resume.(.*).pdf...');
        const files = fs.readdirSync(staticDir);
        const pdfFileName = files.filter((file => file.includes('resume') && path.extname(file) == '.pdf'))[0];
        if (!pdfFileName) {
            reject(new Error('No file path containing \'resume(.*).pdf\' was found'));
        }
        const pdfFilePath = path.resolve(staticDir, pdfFileName);
        console.log('Found', pdfFileName, 'at', pdfFilePath);
        console.log('Reading', resumeHtml, '...');
        const html = fs.readFileSync(resumeHtml, 'utf-8');
        console.log('Successfully loaded', resumeHtml);
        console.log('Writing new PDF to', pdfFilePath);
        const options = {
            border: {
                top: '0.30in',
                left: '0.65in',
                bottom: '0.30in',
                right: '0.65in',
            }
        };
        pdf.create(html, options).toFile(pdfFilePath, (err, result) => {
            if (err) {
                reject(err);
            }
            console.log('Successfully wrote', pdfFileName, 'to disk!');
            resolve();
        });
    });
}
