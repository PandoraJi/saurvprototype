/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
// You can delete this file if you're not using it
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = `/*`
    // Update the page.
    createPage(page)
  }
}
//
// const { createFilePath } = require("gatsby-source-filesystem")
//
// // Create slugs for MDX pages
//   exports.onCreateNode = ({ node, actions, getNode }) => {
//     const { createNodeField } = actions
//     // We only want to operate on `Mdx` nodes. If we had content from a
//     // remote CMS we could also check to see if the parent node was a
//       // `File` node here
//         if (node.internal.type === "Mdx") {
//         const value = createFilePath({ node, getNode })
//           createNodeField({
//               // Name of the field you are adding
//               name: "slug",
//             // Individual MDX node
//               node,
//             // Generated value based on filepath with "blog" prefix. We
//               // don't need a separating "/" before the value because
//                 // createFilePath returns a path with the leading "/".
//                   value: node.frontmatter.path,
//           })
//       }
//   }
//
//   // Create pages for MDX
//     exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions
//     return new Promise((resolve, reject) => {
//           resolve(
//               graphql(
//                   `
//           {
//             allMdx {
//               edges {
//                 node {
//                   id
//                   frontmatter {
//                     title
//                   }
//                   fields {
//                     slug
//                   }
//                   body
//                 }
//               }
//             }
//           }
//         `
//                 ).then(result => {
//                   if (result.errors) {
//                       console.log(result.errors)
//                       reject(result.errors)
//                     }
//                   // Create blog posts pages.
//                     result.data.allMdx.edges.forEach(async ({ node }) => {
//                         createPage({
//                             path: node.fields.slug,
//                             component: path.resolve("./src/templates/posts.js"),
//                             context: {
//                               id: node.id,
//                               },
//                         })
//                       })
//                 })
//             )
//         })
//     }
//
//   /**
//     * Custom Webpack config
//     * */
//
//       exports.onCreateWebpackConfig = ({
//                                    stage,
//                                      rules,
//                                      loaders,
//                                      plugins,
//                                      actions,
//                                    }) => {
//
//
//
//     actions.setWebpackConfig({
//         /**
//           * Adds aliases for paths (like components)
//           * so you don't get lost in relative hell > '../../../'
//           */
//         resolve: {
//           alias: {
//               "@templatescomponent": path.join(__dirname, "src/templates/components"),
//                 "@images": path.join(__dirname, "src/templates/images"),
//                 "@tools": path.join(__dirname, "src/tools"),
//                 "@templates": path.join(__dirname, "src/templates"),
//               },
//         },
//       /**
//         * Allows importing of HTML files.
//         * */
//         module: {
//           rules: [
//             {
//               test: /bad-module/,
//               use: loaders.null(),
//             },{
//                 test: /\.(html)$/,
//                 use: {
//                   loader: "htmlloader",
//                   },
//             },
//           ],
//         },
//       plugins: [
//           plugins.define({
//               __DEVELOPMENT__: stage === `develop` || stage === `develophtml`,
//           }),
//       ],
//     })
//   }
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
    const config = getConfig()
      if (stage.startsWith('develop') && config.resolve) {
          config.resolve.alias = {
              ...config.resolve.alias,
                'react-dom': '@hot-loader/react-dom',
                }
                }
                }

