import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  const _renderBlogPosts = (edges) => {
    return edges.map(({ node }) => (
      <Link to={node.fields.slug} key={node.id}>
        <div>
          <h3>
            {node.frontmatter.title}
            <span>
              --- {node.frontmatter.date}
            </span>
          </h3>
          <p>
            {node.excerpt}
          </p>
          <p>
            {node.words} words
          </p>
          <p>
            {node.timeToRead} time to read
          </p>
        </div>
      </Link>
    ));
  };

  console.log('>>>', data);
  return (
    <Layout>
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`, `blog`]} />
      <h2>
        {data.allMarkdownRemark.totalCount} Blog posts
      </h2>
      {_renderBlogPosts(data.allMarkdownRemark.edges)}
    </Layout>
  );
}

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        next {
          id
        }
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          wordCount {
            paragraphs
            sentences
            words
          }
          timeToRead
        }
      }
    }
  }
`
