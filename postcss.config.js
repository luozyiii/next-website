module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 750,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      // exclude: [/src[\\/].*index\.module\.scss/, /src[\\/]styles[\\/].*/],
      exclude: [/node_modules/, /src(?![\\/].*\/h5\.module\.scss$)[\\/].*/],
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568,
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
