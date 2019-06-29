---
title: "Hello Universe!"
date: "2019-06-29"
---

# Hello Universe!

In this post, I will talk about:

* [Why am I even doing this?](04-09-2019-hello-universe.md#why-am-i-even-doing-this?)
* [How I built this](04-09-2019-hello-universe.md#how-i-built-this)

### Why am I even doing this?

Is this the start of something beautiful? I hope so. Anyways, welcome to my space!

I built and am continuing to build this application out with the intention of having this be my digital and mental playground.

Potential topics I will write about:
- Javascript topics and concepts
- Software engineering and more computer sciency topics
- Specific mathematical theorems of interest
- Philosophy and micro/macro psychology
- Culture and memes because why not?
- Any other topics that I might grow into and have interest towards

Mostly, this will be used as a training ground. There's a chance I might never write about a certain topic above. In the past, my writing style was considered tasteless, biased, and even downright stagnant. It's even possible that, you as the reader, may consider this boring as of now. However if you're daring enough to read this far, I thank you from the bottom of my heart to taking the time to understand who I am and where my biases come from.

### How I built this

TLDR: Gatsby.js with GraphQL querying from Markdown files.

I started this application with the idea of trying out [Gatsby.js](https://www.gatsbyjs.org/). Gatsby is known for its ability to generate static Single Page Application(SPA) built in with the latest web trends such as modern frameworks(React and Webpack), easy data integration(CMS, SaaS, APIs, file system, etc), progressive web app, and more.

_Spoiler alert_: Gatsby is really fast.

The entire development lifecycle was quick to get running after learning about the [Gatsby API](https://www.gatsbyjs.org/docs/api-reference/). To get up and running quickly, two files were set: [gatsby-config.js](https://www.gatsbyjs.org/docs/gatsby-config/) and [gatsby-node.js](https://www.gatsbyjs.org/docs/node-apis/). The Gatsby Config API was used for general application-wide settings such as other gatsby dependencies(called plugins) and site meta data. The Gatsby Node API was used to generate pages based on the GraphQL query. Overall, the [tutorial](https://www.gatsbyjs.org/tutorial/) was quick and easy to follow and the development experience was fast and snappy, _in a good way_.
