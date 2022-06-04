const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const _ = require("lodash")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: 'content' })

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
        {
            postsRemark: allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }

            tagsGroup: allMarkdownRemark(limit: 2000) {
                group(field: frontmatter___tags) {
                    fieldValue
                }
            }
        }
    `)

  const posts = result.data.postsRemark.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/project.js'),
      context: {
        slug: node.fields.slug,
      },
    })
  });

  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: path.resolve('./src/templates/tag.js'),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
