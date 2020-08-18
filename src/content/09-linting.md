---
title: "Linting: The assistance we need, but don't deserve. Integrating Airbnb's ESLint rules with Gatsby and Prettier"
date: "2020-06-02"
keywords:
- 'linting'
- 'airbnb'
- 'eslint'
- 'prettier'

---

In this post, I will talk about:

* Intro to Linting. What is this and why is this even a thing?
* Getting Started with ESLint
* ESLint Integration with Gatsby
* Airbnb ESLint Style Guide
* ESLint Integration with Prettier
* Gotchas
* Next Steps

### Intro to Linting. What is this and why is this even a thing?

So you want to lint your code, eh? Having trouble maintaining a consistent style guide across your codebase while working with multiple contributors? Too lazy to fix your own poorly formatted code? Not feeling good about another contributor's suspicious code that just got checked in?

These are some of the problems that the beautiful tool of [linting](https://en.wikipedia.org/wiki/Lint_(software)) solves. A linter is a tool that analyzes static code to flag down any potential programming errors, bugs, stylistic errors, common errors such as syntactic errors, and suspicious areas of your codebase such as deprecated functions, misuse of scope, undeclared or undefined variables, and many more.

As developers, it is valuable to spend more of our time and energy on solving more of the difficult, challenging problems instead of expending our mental energy towards more mundane tasks as stylistic formatting or catching common errors/bugs. With the introduction of linting, developers are able to concentrate on the initial stage of their program development lifecycle by tending to the algorithmic structure of their program, the correctness of it, and the integration/implementation feasibility of their program. After the program is working as intended, the developer can later retrofit their program using linters to achieve a certain level of modularity.

You could think of a linter as the finishing touches to a masterpiece. As an analogy, compare this to the sculpting of Michelangelo's marble masterpieces.  The initial phase of development that involves algorithms and data structures would be the actual sculpting, while the linting would be the finishing touches of cleaning up any dust off.

### Getting Started with ESLint

__TLDR__: Here's the official [ESLint Getting Started Documentation](https://eslint.org/docs/user-guide/getting-started).

To get started with ESLint, there are only two things to do:
1. install ESLint as a `devDependency`
2. create and configure the `.eslintrc.js` file

First, we're going to install ESLint as a `devDependency` since the linter will only run during the development lifecycle.

`npm install eslint --save-dev`

or

`yarn add eslint --dev`

Second, we'll create our ESLint configuration file. Go ahed and create a new file named `.eslintrc.js` within the root directory of our project.

Here within our newly created `.eslintrc.js` file, we are able to set our desired configuration.

Here's my example configuration that I'm using for this Gatsby application:

`.eslintrc.js`
```
module.exports = {
  "globals": {
    "fetch": false
  },
  "env"" {
    "browser": true,
    "node": true,
  }
  "extends": ["airbnb", "airbnb/hooks", "prettier", "prettier/react"]
};
```

In this configuration going from top to bottom, I am setting as part of my global variables the `fetch` variable as `fetch` is a global method as part of the Browser API. Therefore, `fetch` does not need to be defined so we are silencing the ESLint warning([no undefined variables rules](https://eslint.org/docs/rules/no-undef)).

Next up within the `env` key, we are specifying which environments that are script is designed to run in. As stated from the [ESLint docs](https://eslint.org/docs/user-guide/configuring), "Each environment brings with it a certain set of predefined global variables". With that said, we are pulling in the global variables defined by the Browser API and also Node's global variables.

Next up within the `extends` key, we are specifying which third-party rules to use from. For more advanced users, we are not using the `plugins` key because plugins are resolved relative to the config file while `extends` are relative to the __derived__ config file. For example, ESLint will load the plugin for `plugins` similar to how node will retrieve a package by running `require('eslint-plugin-foo')`, whereas ESLint will load the plugin for `extends` by resolving nested plugins at the root level of `node_modules`. An example from the [ESLint docs](https://eslint.org/docs/user-guide/configuring#configuring-plugins) shows this: "For example, if `./.eslintrc` has `extends: ["foo"]` and the `eslint-config-foo` has `plugins: ["bar"]`, ESLint finds the `eslint-plugin-bar` from `./node_modules/` (rather than `./node_modules/eslint-config-foo/node_modules/`) or ancestor directories."

So for my case here, I am extending from [airbnb's eslint plugin](https://www.npmjs.com/package/eslint-config-airbnb), [airbnb's hooks eslint plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks), [prettier's eslint plugin](https://github.com/prettier/eslint-config-prettier), and [prettier's react eslint plugin](https://github.com/yannickcr/eslint-plugin-react).


### ESLint Integration with Gatsby
