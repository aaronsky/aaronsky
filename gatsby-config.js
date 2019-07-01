const packageJson = require('./package.json')

module.exports = {
    siteMetadata: {
        title: 'Portfolio',
        author: 'Aaron Sky',
        caption: 'Tools and Build Engineer for Apps, Web, Games',
        email: 'aaronsky@skyaaron.com',
        site: 'https://skyaaron.com',
        linkedin: 'https://www.linkedin.com/in/aaronsky/',
        github: 'https://github.com/aaronsky/',
        npm: 'https://www.npmjs.com/~aaronsky',
        packageJson,
    },
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-yaml',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: `${__dirname}/data/`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`,
            },
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-remove-trailing-slashes',
        {
            resolve: 'gatsby-plugin-favicon',
            options: {
                logo: './src/assets/site/favicon.png',
                injectHTML: true,
                icons: {
                    android: { background: '#053a71' },
                    appleIcon: { background: '#053a71' },
                    appleStartup: { background: '#053a71' },
                    coast: false,
                    favicons: true,
                    firefox: false,
                    twitter: false,
                    yandex: false,
                    windows: true,
                },
            },
        },
    ],
}
