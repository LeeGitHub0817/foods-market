module.exports = {
  plugins: {
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: "vw",
      selectorBlackList: [".ignore", ".hairlines"],
      minPixelValue: 1,
      mediaQuery: false
    },
    "cssnano": {
      "cssnano-preset-advanced": {
        zindex: false, //这个必须设置false，不然你的z-index的值跟你设置的不一样
        autoprefixer: false
      }
    }
  }
}
