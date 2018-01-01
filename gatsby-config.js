module.exports = {
    siteMetadata: {
        title: 'Portfolio',
        author: {
            name: 'Aaron Sky',
            image: 'face.png',
            github: 'aaronsky',
        },
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
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],
}