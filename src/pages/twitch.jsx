import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { SEO_KEYWORDS } from "../constants";

const TwitchPage = () => (
  <Layout>
    <SEO
      title="Twitch"
      keywords={[...SEO_KEYWORDS.TECH, ...SEO_KEYWORDS.TWITCH]}
    />
    <p>
      Here&apos;s me potentially playing video games and heavily procrastinating
    </p>
    <iframe
      src="https://player.twitch.tv/?channel=smokymcbear"
      height="720"
      width="880"
      frameBorder="0"
      scrolling="no"
      allowFullScreen
      title="Twitch stream Smokymcbear"
    />
  </Layout>
);

export default TwitchPage;
