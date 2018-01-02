module.exports = {
    siteMetadata: {
        title: 'Portfolio',
        author: 'Aaron Sky',
        image: 'face.png',
        site: 'https://skyaaron.com',
        email: 'aaronsky@skyaaron.com',
        github: 'aaronsky',
    },
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-json',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/data/`,
            },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/src/pages`,
            name: 'pages',
          },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {},
        },
    ]
};