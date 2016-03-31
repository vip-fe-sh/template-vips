module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // add plugins here
  plugins: [],
  // add your custom rules here
  rules: {
    // must need Semicolons
    // alternate is semistandard from https://github.com/Flet/semistandard
    'semi': [2, 'always'],
    // allow use new
    'no-new': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
