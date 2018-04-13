const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@slider-rail-background-color": "#e1e1e1",
      "@slider-rail-background-color-hover": "#ccc9c9",
      "@zindex-modal": "1100"
      },
  })(config, env);
    return config;
  };