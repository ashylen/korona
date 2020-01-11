const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Korona - Pomoc Drogowa`,
    description: `Pomoc drogowa w Rzeszowie, Łańcucie, Leżajsku, Żolyni, Jarosławiu, Przeworsku.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: 'babel-plugin-styled-components',
      options: {
        displayName: true,
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            subsets: [`latin-ext`],
            variants: [`300`, `600`],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        templates: path.join(__dirname, 'src/templates'),
        views: path.join(__dirname, 'src/views'),
        utils: path.join(__dirname, 'src/utils'),
        src: path.join(__dirname, 'src'),
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-stylelint',
      options: {
        files: ['**/*.js'],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Korona - Pomoc drogowa - Przemysław Pac`,
        short_name: `korona`,
        start_url: `/`,
        background_color: `#f9e242`,
        theme_color: `#f9e242`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
