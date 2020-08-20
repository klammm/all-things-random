module.exports = {
  globals: {
    fetch: false
  },
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
  },
  extends: ["airbnb", "airbnb/hooks", "prettier", "prettier/react"]
};
