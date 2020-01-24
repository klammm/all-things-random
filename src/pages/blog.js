import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/blog.css";

const BlogPage = ({ data }) => {
  const _renderBlogPosts = (edges) => {
    return edges.map(({ node }) => (
      <div className="BlogPost-container">
        <Link to={node.fields.slug} key={node.id} className="BlogPost-title">
          <h3 className="BlogPost-titleText">
            {node.frontmatter.title}
          </h3>
        </Link>
        <div className="BlogPost-card">
          <span className="BlogPost-card-text">{node.frontmatter.date}</span>
          <span className="BlogPost-card-text">{node.wordCount.words} words</span>
          <span className="BlogPost-card-text">{node.timeToRead} min read</span>
        </div>
        <p>
          {node.excerpt}
        </p>
      </div>
    ));
  };

  return (
    <Layout>
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`, `blog`]} />
      <h2>
        {data.allMarkdownRemark.totalCount} Random Blog Posts
      </h2>
      {_renderBlogPosts(data.allMarkdownRemark.edges)}
    </Layout>
  );
}

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
