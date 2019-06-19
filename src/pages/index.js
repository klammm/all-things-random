import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import GenerateMemes from "../utils/meme-generator";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello there, fellow human</h1>
    <p>
      This is a safe space for all things random. Or at least what I deem as random.
      This will be a combination of my personal blog and an avenue for me to speak my mind and release my emotions on certain topics.
    </p>
    <GenerateMemes />
  </Layout>
);

export default IndexPage
