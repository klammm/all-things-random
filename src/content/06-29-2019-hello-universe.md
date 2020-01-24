---
title: "Hello Universe!"
date: "2019-06-29"
---

In this post, I will talk about:

* Why am I even doing this?
* How I built this

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

TLDR: Gatsby.js with GraphQL querying from Markdown files. I followed Gatsby's [tutorial](https://www.gatsbyjs.org/tutorial/) listed in its docs.

I started this application with the idea of trying out [Gatsby.js](https://www.gatsbyjs.org/). Gatsby is known for its ability to generate static Single Page Application(SPA) built in with the latest web trends such as modern frameworks(React and Webpack), scalable data integration(CMS, SaaS, APIs, file system, etc), static asset generator for progressive web app capabilities, and many more developer-friendly addons.

_Spoiler alert_: Gatsby is really fast.

The entire development lifecycle was quick to get running after learning about the [Gatsby API](https://www.gatsbyjs.org/docs/api-reference/). To get up and running quickly, two files were set: [gatsby-config.js](https://www.gatsbyjs.org/docs/gatsby-config/) and [gatsby-node.js](https://www.gatsbyjs.org/docs/node-apis/). The Gatsby Config API was used for general application-wide settings such as other gatsby dependencies(called plugins) and site meta data. The Gatsby Node API was used to generate pages based on the GraphQL query. Overall, the tutorial was quick and easy to follow, and the development experience was fast and snappy, _in a good way_. 

What really sold Gatsby for me was its functionality with routing. I've had some painful experiences of implementing routing with [react-router](https://reacttraining.com/react-router/) and having to make a decision of what layout to render. A lot of that decision-making is taken out(for better or worse) when using [Gatsby's Link API](https://www.gatsbyjs.org/docs/gatsby-link/). 

### Conclusion

if you've made it this far, thanks for reading my first post. This is totally a work in progress of unapologetically testing out new technologies without any permission. Please feel free to leave any comments in my Github issues or hit me up on Twitter. You'll find how to contact me through the [about page](#about).
