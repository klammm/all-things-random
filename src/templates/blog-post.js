import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import "../styles/blog.css";

export default ({ data }) => {
  const post = data.markdownRemark
  
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <div className="BlogPost-content">
        <span className="BlogPost-content-text">{post.frontmatter.date}</span>
        <span className="BlogPost-content-text">{post.wordCount.words} words</span>
        <span className="BlogPost-content-text">{post.timeToRead} min read</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      wordCount {
        words
      }
      timeToRead
    }
  }
`
