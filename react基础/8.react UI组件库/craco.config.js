const CracoLessPlugin = require('craco-less')

module.exports = {
  babel: {
    plugins: [
      ['import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      }]
    ],
  },
  plugins: [{
    plugin: CracoLessPlugin,
    options: {
      lessLoaderOptions: {
        lessOptions: {
          modifyVars: {
            '@primary-color': 'orange'
          },
          javascriptEnabled: true,
        },
      },
    },
  }, ],
};