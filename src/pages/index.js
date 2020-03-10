import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { SEO_KEYWORDS } from '../constants'

import GenerateMemes from "../utils/meme-generator";

const IndexPage = () => (
  <Layout>
    <SEO title="Klam's Space" keywords={[...SEO_KEYWORDS.TECH, ...SEO_KEYWORDS.HOME]} />
    <h1>Hello there, fellow human</h1>
    <p>
      This is a safe space for all things random. Or at least what I deem as random.
      This will be a combination of my personal blog, an avenue for me to speak my mind and release my emotions on certain topics, and to try out cool stuff.
    </p>
    <GenerateMemes />
  </Layout>
);

export default IndexPage
