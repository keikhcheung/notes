module.exports = {
  pathPrefix: ``,
  siteMetadata: {
    title: `kei’s notes`,
    siteUrl: "https://notes.keikhcheung.com",
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/about",
        contentPath: `${__dirname}/../notes`,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**",
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: 'notes', // website title
              separator: '|', // default
              author: 'keikeckeung',
              background: require.resolve('./src/twitter-card-notes.png'), // path to 1200x630px file or hex code, defaults to black (#000000)
              fontColor: '#000000', // defaults to white (#ffffff)
              titleFontSize: 96, // default
              subtitleFontSize: 60, // default
              fontStyle: 'monospace', // default
              fontFile: require.resolve('./src/SpaceGrotesk-Regular.ttf'), // will override fontStyle - path to custom TTF font
              useFrontmatterSlug: false // default, if true it will use the slug defined in the post frontmatter
            },
          },
        ],
      },
    },
    `gatsby-plugin-favicon`
  ],
};
