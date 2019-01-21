const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/angelita/code/REACT/React week website/reactweek/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/angelita/code/REACT/React week website/reactweek/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/angelita/code/REACT/React week website/reactweek/src/pages/index.js")))
}

