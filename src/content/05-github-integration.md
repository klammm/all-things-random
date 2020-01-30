---
title: "Continuous Deployment with Git Hooks"
date: "2019-01-30"
---

In this post, I will talk about:

* Different ways to achieve Continuous Deployment
* Git Hooks with Surge
* What if I want more with my Continuous Deployment?

This post is more of a follow-up to last week's [Deploy to Surge](http://klam.space/content/03-deploy-surge/) article. Now that I have several articles in my blog. It's getting a bit tedious to manually deploy each time I've finished writing an article. What I want is for a continuous integration workflow. I want to be able to deploy to surge every time I push or merge my changes to master.

### Different ways to achieve Continuous Deployment

As with most things in life, there's more than one approach to solving a problem. There are many ways to automatically deploy. In my opinion, here are some ways from easiest to hardest in terms of level of effort and time: [Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks), [Git actions](https://help.github.com/en/actions) or [CircleCI](https://circleci.com/), or using a bot such as [Hubot](https://hubot.github.com/) to run our own surge script. For the purposes of this article and to get some sort of automatic deployment up and running as fast as possible, I will be going with the route of Git hooks following the [surge tutorial](https://surge.sh/help/deploying-continuously-using-git-hooks) using Git hooks.

### Git Hooks with Surge

__TLDR__: I followed this [Surge-Git Hooks tutorial](https://surge.sh/help/deploying-continuously-using-git-hooks).

__First__: Install `git-scripts` and `surge` into your dev-dependencies with the command: `npm install --save-dev surge git-scripts`. We are installing this into our `devDependencies` because these packages will not be used in production, but will be used for development.

__Second__(Optional): After installing `git-scripts` and `surge`, I ran across some security vulnerabilities with my dependencies so I ran `npm audit fix`, which ran an audit on my dependency tree and proceeded to fix those certain dependencies. By fix here, it's actually just upgrading to a higher, more stable version of the dependency.

__Third__: I created 2 new scripts in my [package.json](https://github.com/klammm/all-things-random/blob/master/package.json) file.

1.
```
"scripts": {
      "surge-deploy": "surge --project ./public --domain klam.space"
},
```
Here, I am choosing to deploy my project from the path `./public` because gatsby bundles our JS and CSS into a minified version in the `public/` directory. Also here, I am deploying to my custom domain of `klam.space`.

2.
```
"git": {
      "scripts": {
        "pre-push": "npm build && npm surge-deploy"
      }
},
```
On the same level as `dependencies` and `devDependencies`, I created a new `"git"` key.
Here, I am choosing the git hook of `pre-push` with the intention of running this script after a push has been made to my feature branch. It will execute `gatsby build` followed by a `surge-deploy` script we just created above. I use `&&` as a short-circuit evaluation so if there are any errors with `gatsby bulid` in the build compilation, it will not deploy to surge.

__Fourth__: Make sure you have proper JSON syntax by pasting your JSON into a [JSON prettifier](https://jsonlint.com/).

Boom, that's it!

### What if I want more with my Continuous Deployment?

I deemed this approach with Git hooks to be the easiest as it did not require Surge or any deployment workflow access to my repository. With gaining access to your repository, there is a whole flow of authentication that follows with accessing my Surge token, storing them in secrets, and so forth. I opted to save that hassle for another day. I know that I will eventually use CircleCI for more customization power in the Continuous Deployment flow.

Github actions seemed very powerful in customizing and adding more to a workflow. I saw capabilities of integrating with AWS, testing a NodeJS project, and more.

In the future, we will need more processes to be automated such as running unit tests, linting, and building a production bundle. That is all possible with either Github Actions, CircleCI, Jenkins, TravisCI, etc. There are many CI/CD pipelines in the industry today so we have options!
