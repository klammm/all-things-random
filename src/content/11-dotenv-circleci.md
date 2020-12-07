---
title: "How to set and access environment variables in Gatsby using CircleCI and dotenv"
date: "2020-12-01"
keywords:
- 'dotenv'
- 'api key'
- 'CircleCI'
- 'environment variable'
- 'security'

---

In this post, I will talk about:

* Rule #1: Do NOT ever commit a key or secret to Github
* The Power of Environment Variables
* CircleCI environment variables
* dotenv
* Conclusion

### Rule #1: Do _NOT_ Ever Commit an API key or Secret to Github


Before we start off on fun stories of $20,000 to $50,000 bills in the mail for some blissfully unaware junior developer wanting to try out AWS or [even experienced developers happy little accidents](https://vertis.io/2013/12/16/unauthorised-litecoin-mining.html), we need to understand what an API key is and what it's all about. 

An API key is essentially a unique identifier that the API uses to authenticate a user or a program. It's what an API uses to determine how many times it's responding to a certain address. In real world examples, AWS bills you for each time you use any of their API services. If someone else were to get ahold of that API key, they could be using those exact AWS services for their own programs for free and you would be footing the cost. 

Therefore, committing an API key into code and pushing up to an open-source platform like Github exposes the key to the internet. 

To use these API keys and secrets in our code without exposing to the world, we have to use [environment variables](https://en.wikipedia.org/wiki/Environment_variable).

### The Power of Environment Variables

