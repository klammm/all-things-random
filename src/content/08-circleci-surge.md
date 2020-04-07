---
title: "Deploying Merged Pull Requests Automatically with CirleCI"
date: "2020-04-07"
keywords:
- 'CircleCI'
- 'Deploy'
- 'pull request'
- 'Surge'

---

In this post, I will talk about:

* Recall: Deploying with Surge
* Intro to Continuous Integration
* Getting Started with CircleCI
* What did I do?
* Challenges I faced
* Next steps


### Recall: Deploying with Surge

Let's recall what we've done so far earlier this 2020 year. In terms of workflow automation, I am able to [deploy my project using surge](http://klam.space/content/03-deploy-surge/). On top of that, I am automatically deploying every time a commit was pushed to a branch using the `pre-push` [git hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks). We've been able to solve interesting challenges with that, however this automation also brings a new set of problems and challenges with it.

> How can I not automatically deploy when I am pushing to a feature branch?

> How can I stop the deployment if the lint and tests do not pass?

> How can I only and automatically deploy when merged a pull request into master?

These are all questions I asked myself after finishing the [git hooks integration](http://klam.space/content/05-github-integration/).

Queue the drumroll 🥁

### Intro to Continuous Integration

Voila! We can solve this set of problems using [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration).  

> Continuous Integration (CI) is the practice of merging all developers' working copies to a shared mainline several times a day. - Wikipedia

Although I am the only contributor to this application for now, it doesn't mean that I can smoothen out the workflow for myself and for any future contributors. Using the practice of continuous integration, we are able to run tests, compile code, and even deploy automatically to ensure that any deviation from the original copy(in most cases, it'll be `master` branch) does not break any existing code.

This type of practice is incredibly helpful and almost necessary in this day and age for a large organization with multiple engineers working on the same codebase and all wanting to eventually integrate their changes into one main branch. There are [many CI tools out there today](https://www.katalon.com/resources-center/blog/ci-cd-tools/). The one we'll be going with today will be [CircleCI](https://circleci.com/).

### Getting Started with CircleCI
