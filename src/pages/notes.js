import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
// import styled from '@emotion/styled'
import Layout from 'components/Layout'
import Link from 'components/Link'
// import { useTheme } from 'components/Theming'
import Container from 'components/Container'
// import { rhythm } from '../lib/typography'

const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj.frontmatter[key] && obj.frontmatter[key].length ? obj.frontmatter[key][0] : 'Others'
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
    return objectsByKeyValue
  }, {})
const groupByCategory = groupBy('categories')

export default function Index({ data: { site, allMdx } }) {
  // const theme = useTheme()
  const notes = allMdx.edges.map(edge => edge.node);
  const postsByCategory = groupByCategory(notes);
  return (
    <Layout site={site}>
      {/* <Hero /> */}
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        {/* {allMdx.edges.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              margin-bottom: 24px;
            `}
          >
            <Link
              to={post.frontmatter.slug}
              aria-label={`View ${post.frontmatter.title}`}
            >
              {post.frontmatter.title}
            </Link>
          </div>
        ))} */}

        {/* <h2>notes:</h2>
        {JSON.stringify(notes)}

        <h2>postsByCategory:</h2>
        {JSON.stringify(postsByCategory)} */}

        {Object.keys(postsByCategory)
          .sort(function(a, b) {
            const nameA = a.toLowerCase() // ignore upper and lowercase
            const nameB = b.toLowerCase() // ignore upper and lowercase
            if (nameB === 'others') return -1
            if (nameA < nameB) {
              return -1
            }
            if (nameA > nameB) {
              return 1
            }

            // names must be equal
            return 0
          })
          .map(category => (
            <section key={category}>
              <h2>{category}</h2>
              <ul>
                {postsByCategory[category].map(post => (
                  <li key={post.id}>
                    <Link
                      to={`/${post.frontmatter.slug}`}
                      sx={{
                        display: 'block',
                        color: 'inherit',
                        textDecoration: 'none',
                      }}
                    >
                      {post.frontmatter.slug.replace(/\//g, '')}
                    </Link>
                    {/* {JSON.stringify(post)} */}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        <hr />
      </Container>
    </Layout>
  )
}

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
