const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#761bea',
              '@success-color': '#7fa86a',
              '@warning-color': '#e8b95a',
              '@error-color': '#d63c44',
              '@layout-header-background': '#1c1331',
              '@border-radius-base': '4px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
