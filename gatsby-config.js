module.exports = {
  siteMetadata: {
    title: `Holiday Blog`,
    description: `A blog about different holidays.`,
    author: `@awesome-developer`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogPosts`,
        path: `${__dirname}/content/blog-posts`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Awesome Material UI Starter`,
        short_name: `AMUIS`,
        start_url: `/`,
        background_color: `#033FB4`, // Electric Blue
        theme_color: `#66BA8A`, // Calm Green
        display: `standalone`,
        icon: `static/favicon.ico`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      // make sure to configure your editor for typescript
      resolve: 'gatsby-plugin-ts-checker',
      // More info on the options: https://www.npmjs.com/package/fork-ts-checker-webpack-plugin
      options: {
        typescript: {
          memoryLimit: 4096,
          mode: 'write-tsbuildinfo',
        },
        eslint: {
          enabled: true,
          files: './src/**/*.{ts,tsx,js,jsx}',
        },
      },
    },
    // this plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
