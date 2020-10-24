---
title: "Typescript with Gatsby: How to Migrate from Javascript to Typescript"
date: "2020-10-22"
keywords:
- 'typescript'

---

In this post, I will talk about:

* Intro to Typescript
* Using Typescript with Gatsby
* Typescript pros/cons
* Next Steps

### Intro to Typescript

In a few words, Typescript is a superset of Javascript. Typescript is an [open-source language built by Microsoft](https://www.typescriptlang.org/) to combat the problem of loose types within Javascript. Typescript provides static type definitions in your code which provides a way to describe the shape of your data and provide better documentation of data types within the code. What's special about Typescript is that it will compile down to basic Javascript and also perform a type check with the Typescript compiler. Therefore, type errors within your app are reduced to a minimum or even better of being completely type error free.

A basic Typescript example would be:
```
let foo: string = "foo"
foo = 123 // Error: Type 'number' is not assignable to type 'string'
```

Here, the Typescript compiler will throw an error since we are attempting to reassign a string type to a number type. In normal Javascript, this is perfectly valid code. Therefore, for better or worse, Typescript enforces types throughout your application.

### Using Typescript with Gatsby

Luckily for all us Gatsby folks, Gatsby integrates Typescript for us right out of the box. According to the [Gatsby site](https://www.gatsbyjs.com/docs/typescript/), "Gatsby natively supports Javascript and Typescript. You can change files from `.js` to `.tsx` at any point to start adding types and gaining the benefits of a type system". With that said, we are able to write valid Typescript files, however Gatsby will not provide the necessary type checking that is one of the main features of Typescript. We'll have to add that in ourselves.

1. add plugin https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript/

2. npm install devDep type definitions, typescript

3. create a tsconfig.json

4. add a type-check task in the package.json scrips 

5. Migrate first component to typescript


### Typescript pros/cons

I've heard mixed opinions about Typescript when speaking to my team about incorporating Typescript into a project.

#### Cons
"Dev buy-in is way too high"

"We aren't having a type error problem. Do we really need this?"

"We want to experiment often and ship software fast. Typescript adds more work to shipping out fast."

"Increased cognitive load on syntax"

"Barrier to entry and less approachable"

"Migrating to Typescript is going to take too long"

"Very difficult to import code from non-TS codebases"


#### Pros

"It makes working in a large codebase with many contributors a lot easier and predictable"

"Typescript is way more reliable than Javascript and easier to refactor"

"I don't have to waste time manually debugging silly bugs in the console"

"The code is a lot easier to understand now"

"I can refactor Typescript code a lot faster than JS"

"I don't have to write trivial unit tests on type checking. I can finally write business logic unit tests"
