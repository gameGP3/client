module.exports = {
  // lintOnSave: true
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
};
