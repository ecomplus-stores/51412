// storefront.webpack.js

const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './sections': path.resolve(__dirname, 'template/js/custom-js/cms/sections.js'),
      './html/APrices.html': path.resolve(__dirname, 'template/js/custom-js/components/html/APrices.html')
    }
  }
})
