module.exports = {
  coverage: true,
  threshold: 0,
  reporter: ["console", "html"],
  output: ["stdout", "coverage.html"],
  "coverage-exclude": ["babel.config.js", "es6-lab.config.js"],
};
