---
title: "Search Engine Optimization(SEO): Keywords"
date: "2020-02-11"
keywords:
- 'keywords'
- 'seo'
- 'search'
- 'engine'
- 'optimization'
- 'search engine optimization'
- 'frontmatter'
- 'google'
- 'web traffic'
- 'traffic'
- 'popularity'
- 'listing'
- 'search results'
- 'internet'
- 'audience'
- 'react helmet'
- 'head'
- 'title'
- 'tags'
- ''
---

In this post, I will talk about:
* Search Engines
* Keywords. What are they? What do they do?
* What did I do?
* Gatsby + SEO
* Next Steps

Welcome to the first series of me making my website SEO-friendly.

### Search Engines

First off, Search engines. What are they? They are the internet's librarians in that search engines sift through all of the pages, websites, documents, etc to find what someone's looking for. The most famous and successful to date search engine is Google. You probably found this website via Google and, if I did this right, you should have found this blog post via Google. I might have been the first, third, or even the twenty-fifth listing from Google's search results. So how can I or anyone, for that matter, be that coveted first listing from Google's search results? We do so by optimizing our website for Google's search engine to easily pick up our website out of all the websites on the internet. Search Engine Optimization(abbreviated and otherwise known as SEO) is a technique mainly used throughout the internet to improve a website's traffic. In short, it'll make your site popular. Popularity means more growth and reaching a wider audience. For a new, budding website like mine, that's yuuuuge.

### Keywords. What are they? What do they do?



### What did I do?

__TLDR__: I added unique keywords for each blog post via frontmatter queried through GraphQL. 

1. Separate out shared or page-specific keywords into a constants file.
  - explain the importance of a constants directory

__First__: I wanted to separate out shared SEO keywords and page-specific keywords into its own constants file.

2. import them to be used in pages
3. add keywords to the frontmatter for markdown files so each blog post has their own unique keywords
4. adjust GraphQL query to include keywords in frontmatter query
5. update the SEO for blog-post template to include the unique title for each blog post and the unique keywords

### Gatsby + SEO

- Analyze the SEO component that Gatsby provides
  • Gatsby's SEO component is built off of react-helmet

### Next Steps

- leverage more of Gatsby's SEO component to include a description, lang, meta, and title
