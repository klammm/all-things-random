import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <h2>About Me</h2>
    <p>
      Here's who I am so you know I'm not some crazy guy locked up in a basement. Also, since you know who I am now,
      these are my biases and my nurture environment. So whatever I say, take it with a grain of salt and keep in mind the biases
      I am conditioned to have.
    </p>
  </Layout>
)

export default AboutPage
