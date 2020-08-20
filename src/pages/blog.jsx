import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { SEO_KEYWORDS } from '../constants';

import '../styles/blog.css';

const BlogPage = ({ data }) => {
  const renderBlogPosts = (edges) =>
    edges.map(({ node }) => (
      <div className="BlogPost-container" key={node.id}>
        <Link to={node.fields.slug} className="BlogPost-title">
          <h3 className="BlogPost-titleText">{node.frontmatter.title}</h3>
        </Link>
        <div className="BlogPost-card">
          <span className="BlogPost-card-text">{node.frontmatter.date}</span>
          <span className="BlogPost-card-text">
            {node.wordCount.words}
            &nbps;words
          </span>
          <span className="BlogPost-card-text">
            {node.timeToRead}
            &nbps;min read
          </span>
        </div>
        <p>{node.excerpt}</p>
      </div>
    ));

  return (
    <Layout>
      <SEO
        title="Blog"
        keywords={[...SEO_KEYWORDS.TECH, ...SEO_KEYWORDS.BLOG]}
      />
      <h2>
        {data.allMarkdownRemark.totalCount}
        &nbps;Random Blog Posts
      </h2>
      {renderBlogPosts(data.allMarkdownRemark.edges)}
    </Layout>
  );
};

export default BlogPage;

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.string,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          excerpt: PropTypes.string,
          timeToRead: PropTypes.string,
          fields: PropTypes.shape({
            slug: PropTypes.string,
          }),
          frontmatter: PropTypes.shape({
            title: PropTypes.string,
            date: PropTypes.string,
          }),
          wordCount: PropTypes.shape({
            words: PropTypes.number,
          }),
        })
      ),
    }),
  }).isRequired,
};

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
`;
