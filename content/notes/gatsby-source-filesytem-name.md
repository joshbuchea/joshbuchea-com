---
slug: gatsby-source-filesystem-name
date: 2020-02-23
title: 'Query Gatsby nodes based on gatsby-source-filesystem name'
published: false
# banner: './banner.png'
---

## Create Node Field

```js
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    // Grab the parent node
    const parent = getNode(node.parent)

    // Create a field on this node for the "collection" of the parent
    // NOTE: This is necessary so we can filter nodes by "collection"
    // otherwise there is no way to filter for only markdown
    // documents of type `post` or `note` or `whatever`.
    // https://github.com/gatsbyjs/gatsby/issues/1634#issuecomment-388899348
    createNodeField({
      name: 'collection',
      node,
      value: parent.sourceInstanceName,
    })

    // create remaining node fields here...
  }
}
```

## Query by Node Field

Here's the `pageQuery` for the [notes](/notes) page on this site:

```js
export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      # limit: 5
      filter: {
        fields: { collection: { eq: "notes" } }
        frontmatter: { published: { ne: false } }
      }
      # sort: { fields: [frontmatter___date], order: DESC }
      sort: { fields: [frontmatter___slug], order: ASC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
            collection
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
            categories
          }
        }
      }
    }
  }
`
```