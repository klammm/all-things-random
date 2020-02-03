import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const TwitchPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>Here's me potentially playing video games and heavily procrastinating</p>
    <iframe
      src="https://player.twitch.tv/?channel=smokymcbear"
      height="720"
      width="880"
      frameborder="0"
      scrolling="no"
      allowfullscreen="true">
    </iframe>
  </Layout>
);

export default TwitchPage
