/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { SEO_KEYWORDS } from '../constants';

import '../styles/blog.css';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  const seoKeywords = post.frontmatter.keywords || [];

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        keywords={[...SEO_KEYWORDS.TECH, ...seoKeywords]}
      />
      <h1>{post.frontmatter.title}</h1>
      <div className="BlogPost-content">
        <span className="BlogPost-content-text">{post.frontmatter.date}</span>
        <span className="BlogPost-content-text">
          {post.wordCount.words}
          &npbs;words
        </span>
        <span className="BlogPost-content-text">
          {post.timeToRead}
          &npbs;min read
        </span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        keywords: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string,
        date: PropTypes.string,
      }),
      wordCount: PropTypes.shape({
        words: PropTypes.number,
      }),
      timeToRead: PropTypes.number,
      html: PropTypes.node,
    }),
  }).isRequired,
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        keywords
      }
      wordCount {
        words
      }
      timeToRead
    }
  }
`;
