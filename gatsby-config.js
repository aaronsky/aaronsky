module.exports = {
    siteMetadata: {
        title: 'Portfolio',
        author: 'Aaron Sky',
        caption: '📱 App • 🌐 Web • 🎮 Game',
        email: 'aaronsky@skyaaron.com',
        site: 'https://skyaaron.com',
        linkedin: 'https://www.linkedin.com/in/aaronsky/',
        github: 'https://github.com/aaronsky/',
        npm: 'https://www.npmjs.com/~aaronsky',
    },
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-json',
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
            path: `${__dirname}/src/pages`,
            name: 'pages',
          },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {},
        },
        {
            resolve: 'gatsby-plugin-nprogress',
            options: {
                color: '#3d638c',
                showSpinner: false,
            },
        },
    ]
};