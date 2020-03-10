import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { SEO_KEYWORDS } from '../constants'

import "../styles/blog.css";

const BlogPage = ({ data }) => {
  const _renderBlogPosts = (edges) => {
    return edges.map(({ node }) => (
      <div className="BlogPost-container" key={node.id}>
        <Link to={node.fields.slug} className="BlogPost-title">
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
      <SEO title="Blog" keywords={[...SEO_KEYWORDS.TECH, ...SEO_KEYWORDS.BLOG]} />
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
            date(formatString: "MMMM DD, YYYY")
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
