---
title: "Deploying Merged Pull Requests Automatically with CirleCI 2.0"
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
* Deploying Merged Pull Requests with CircleCI
* Additional code changes
* Challenges I faced/Potential Errors
* Next steps


### Recall: Deploying with Surge

Let's recall what we've done so far earlier this 2020 year. In terms of workflow automation, I am able to [deploy my project using surge](http://klam.space/content/03-deploy-surge/). On top of that, I am automatically deploying every time a commit was pushed to a branch using the `pre-push` [git hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks). We've been able to solve interesting challenges with that, however this automation also brings a new set of problems and challenges with it.

> How can I not automatically deploy when I am pushing to a feature branch?

> How can I stop the deployment if the lint and tests do not pass?

> How can I only and automatically deploy when merged a pull request into master?

These are all questions I asked myself after finishing the [git hooks integration](http://klam.space/content/05-github-integration/).

Queue the drumroll 🥁

### Intro to Continuous Integration

Da-dun 🎊! We can solve this set of problems using [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration).  

> Continuous Integration (CI) is the practice of merging all developers' working copies to a shared mainline several times a day. - Wikipedia

Although I am the only contributor to this application for now, it doesn't mean that I can smoothen out the workflow for myself and for any future contributors. Using the practice of continuous integration, we are able to run tests, compile code, and even deploy automatically to ensure that any deviation from the original copy(in most cases, it'll be `master` branch) does not break any existing code.

This type of practice is incredibly helpful and almost necessary in this day and age for a large organization with multiple engineers working on the same codebase and all wanting to eventually integrate their changes into one main branch. There are [many CI tools out there today](https://www.katalon.com/resources-center/blog/ci-cd-tools/). The one we'll be going with today will be [CircleCI](https://circleci.com/).

### Getting Started with CircleCI

__TLDR__: Create an acccount, link a repository, and create a `.circleci/config.yml` on a separate branch to see your first pipeline start building. Follow the official [CircleCI docs](https://circleci.com/docs/2.0/getting-started/).

__Zero__: Before we go any further, create a [Github](https://github.com/join) or [Bitbucket](https://bitbucket.org/account/signup/) account if you don't already have one.

__First__: Let's create a CircleCI account on their [signup page](https://circleci.com/signup/). They'll ask you to create an account using either Github or Bitbucket [Oauth](https://en.wikipedia.org/wiki/OAuth).

__Second__: Select a repository you'd like to set up CircleCI with. Once you've selected a repository, click on "Set Up Project".

__Third__: Choose a programming language from the dropdown and CircleCI will provide a pre-populated `config.yml` file with suggested best practices. In my case, I selected Node.

__Fourth__: Click on start building once you've selected a language already. Follow the prompt to add the config to a new branch CircleCI creates for us `circleci-project-setup` .

_Note_: If you'd like to do this manually, you can add a `.circleci/config.yml` to your project root and push to your own version control provider.

__Fifth__: Now, you can see your first pipeline running. Navigate to the "Pipelines" section in the CircleCI side menu.

And.... voila! We now have a basic working CirleCI project pipeline.

### Deploying Merged Pull Requests with CircleCI

__TLDR__: Check out the finished `config.yml` [here](https://github.com/klammm/all-things-random/blob/master/.circleci/config.yml). Add your Surge login and token to CircleCI's environment variables(more info [here](https://surge.sh/help/integrating-with-circleci) Note that this is slightly out of date since we are using CircleCI 2.0 now).

Before I start the steps on how to deploy merged pull requests with CirclCI, I want to give a shoutout to the resources that helped me to accomplish this in the first place. There were hurdles and challenges that I had to overcome to achieve this to be able to write about this for the internet. With that said, here they are:

- Ashley Hebler's Deploying to Surge with CircleCI 2.0 guide on Github: https://github.com/ashley-hebler/circleci-surge
- Surge's own guide to integrating with CircleCI: https://surge.sh/help/integrating-with-circleci
- And of course, the CircleCI 2.0 docs: https://circleci.com/docs/2.0/

Ok let's get this thing going. Let's break down what we'll be writing in our `config.yml` first.

__First__: If you used CircleCI's pre-populated configuration, you should already have a CircleCI version number and an [orb](https://circleci.com/orbs/) with your particular language. Without getting too deep into CircleCI orbs, you can think of it as a reusable package of YAML configuration. If not, add these to the top of your `config.yml` file.

`config.yml`

```
version: 2.1
orbs:
  node: circleci/node@1.1.6
```

__Second__: Let's start creating jobs to run during our workflow. We'll start with the building process which is one of the most important jobs that we'll run over and over again. Under the version number and orbs we just added or already had, let's add this block of code:

`config.yml`

```
jobs:
  build:
    executor:
      name: node/default
    steps:
      - checkout
      # Download and cache dependencies
      - restore_cache:
          keys:
          - v1-dependencies-{{ checksum "package.json" }}
          # fallback to using the latest cache if no exact match is found
          - v1-dependencies-

      - run: npm install
      - save_cache:
          paths:
            - ./node_modules
          key: v1-dependencies-{{ checksum "package.json" }}
      - run: npm run build
```

I'll break down to the best I can what's going on in each line.

```
jobs:
  build:
```

1. We declare what jobs we want to create. In this case, I'm declaring a new job named `build`. Feel free to name the job whatever pleases you.

```
jobs:
  build:
    executor:
      name: node/default
```

2.




### Challenges I faced/Potential Errors

When removing the executors in my `config.yml`. Seems like it's necessary to have before moving on. 

```
#!/bin/sh -eo pipefail
# ERROR IN CONFIG FILE:
# [#/jobs] 10 schema violations found
# Any string key is allowed as job name.
# 1. [#/jobs/build] 0 subschemas matched instead of one
# |   1. [#/jobs/build] only 1 subschema matches out of 2
# |   |   1. [#/jobs/build] no subschema matched out of the total 2 subschemas
# |   |   |   1. [#/jobs/build] 0 subschemas matched instead of one
# |   |   |   |   1. [#/jobs/build] required key [docker] not found
# |   |   |   |   2. [#/jobs/build] required key [machine] not found
# |   |   |   |   3. [#/jobs/build] required key [macos] not found
# |   |   |   2. [#/jobs/build] required key [executor] not found
# |   |   |   |   A job must have one of `docker`, `machine`, `macos` or `executor` (which can provide docker/machine/macos information).
# |   2. [#/jobs/build] expected type: String, found: Mapping
# |   |   Job may be a string reference to another job
# 2. [#/jobs/deploy-prod] 0 subschemas matched instead of one
# |   1. [#/jobs/deploy-prod] only 1 subschema matches out of 2
# |   |   1. [#/jobs/deploy-prod] no subschema matched out of the total 2 subschemas
# |   |   |   1. [#/jobs/deploy-prod] 0 subschemas matched instead of one
# |   |   |   |   1. [#/jobs/deploy-prod] required key [docker] not found
# |   |   |   |   2. [#/jobs/deploy-prod] required key [machine] not found
# |   |   |   |   3. [#/jobs/deploy-prod] required key [macos] not found
# |   |   |   2. [#/jobs/deploy-prod] required key [executor] not found
# |   |   |   |   A job must have one of `docker`, `machine`, `macos` or `executor` (which can provide docker/machine/macos information).
# |   2. [#/jobs/deploy-prod] expected type: String, found: Mapping
# |   |   Job may be a string reference to another job
#
# -------
# Warning: This configuration was auto-generated to show you the message above.
# Don't rerun this job. Rerunning will have no effect.
false

Exited with code exit status 1
CircleCI received exit code 1
```
