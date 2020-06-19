module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        // basePath defaults to `/`
        basePath: `/`,
        rootNote: `/about`,
        contentPath: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: "gatsby-remark-smartypants",
            options: {
              dashes: "oldschool",
            },
          },
        ],
      },
    },
    `gatsby-plugin-favicon`
  ],
  siteMetadata: {
    title: `kei's notes`,
  },
};