const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Prototipe Media',
    titleTemplate: "%s · Prototipe Media",
    description: "Identify the Stories. Connect the Talent. Create the Opportunity.",
    url: "https://www.prototipe.media", // No trailing slash allowed!
    image: "/asets/images/prototipemedia.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@prototipe.media",
    baseUrl: "", // used to create absolute URLs for SEO
  },
  // flags: {
  //   THE_FLAG: false
  //  // DEV_SSR: true,
  //  //  PARALLEL_SOURCING:true,
  //  //  PRESERVE_FILE_DOWNLOAD_CACHE: true,
  //  //  PRESERVE_WEBPACK_CACHE: true,
  //  //  FAST_DEV: true,
  //  //   FAST_REFRESH: true,
  //  //  QUERY_ON_DEMAND:true
  // },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@assets": path.resolve(__dirname, 'src/assets'),
          "@components": path.resolve(__dirname, 'src/components'),
          "@auth": path.resolve(__dirname, 'src/components/Auth'),
          "@footer": path.resolve(__dirname, 'src/components/Footer'),
          "@forms": path.resolve(__dirname, 'src/components/Forms'),
          "@layout": path.resolve(__dirname, 'src/components/Layout'),
          "@nav": path.resolve(__dirname, 'src/components/Nav'),
          "@pages": path.resolve(__dirname, 'src/components/Pages'),
          "@app": path.resolve(__dirname, 'src/components/Pages/App'),
          // "@register": path.resolve(__dirname, 'src/components/Pages/Register'),
          "@hooks": path.resolve(__dirname, 'src/hooks'),
          "@graphql": path.resolve(__dirname, 'src/graphql'),
        },
        extensions: [
          "js",
        ],
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `page-docs`,
        path: `${__dirname}/content/pages`,
        ignore: [`**/.js`], // ignore React page files, only MDX needed
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `component-docs`,
        path: `${__dirname}/content/definitions`,
        // ignore: [`**/.stories.js`], // ignore files starting with a dot
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /vectors/,
        },
      },
    },
    // `gatsby-plugin-netlify`,
    'gatsby-link',
    `gatsby-plugin-mdx`,
    `gatsby-plugin-less`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Inter',
            weights: [400, 500, 600, 700]
          }
        ]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Prototipe Media`,
        short_name: `Prototipe Media`,
        start_url: `/`,
        background_color: `#18191d`,
        theme_color: `#18191d`,
        display: `standalone`,
        icon: `src/assets/images/favicon-org.svg`,
        cache_busting_mode: `name`,
      },
    },
    'gatsby-plugin-react-helmet'
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-145157132-1",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0,
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: "https://authenticaysh.netlify.com/",
    //   },
    // },
  ],
}
