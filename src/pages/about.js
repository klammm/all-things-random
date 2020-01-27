import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import githubLogo from "../images/Github-Mark-32px.png";
import linkedinLogo from "../images/In-Blue-34.png";
import twitterLogo from "../images/Twitter_Social_Icon_Rounded_Square_Color.png";

import "../styles/about.css";

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <h2>About Me</h2>
    <p>
      Here's who I am so you know I'm not some crazy guy locked up in a basement. Also, since you know who I am now,
      these are my biases and my nurture environment. So whatever I say, take it with a grain of salt and keep in mind the biases
      I am conditioned to have.
    </p>
    <p>
      My name is Kevin Lam, born and raised in the San Francisco Bay Area. I'm currently a Software Engineer, looking for new opportunities in the Los Angeles area. I previously worked at WalmartLabs and recently a startup called Next Trucking. I have an interest in infrastructure,
      developer productivity, and documenting things.
    </p>
    <h2>Contacting me</h2>
    <p>
      Feel free to contact me if you want to talk about life or if you want to hang out.
      I don't really support comments in this space for the meantime. If you have a question or comment, I'm on <a href="https://twitter.com/klammm93">Twitter</a> so don't be shy
      and give a shoutout to me! Or if you have an issue, please raise it up&nbsp;
      <a href="https://github.com/klammm/all-things-random/issues">
        here
      </a>
      &nbsp;since that's really what you have. An issue.
    </p>
    <div>
      <a href="https://github.com/klammm">
        <img class="About-socialIcon" src={githubLogo} alt="Link to my Github profile" width="32" height="32" />
      </a>
      <a href="https://www.linkedin.com/in/klam1993/">
        <img class="About-socialIcon" src={linkedinLogo} alt="Link to my LinkedIn profile" width="32" height="32" />
      </a>
      <a href="https://twitter.com/klammm93">
        <img class="About-socialIcon" src={twitterLogo} alt="Link to my Twitter profile" width="32" height="32" />
      </a>
    </div>
  </Layout>
)

export default AboutPage
