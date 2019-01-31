import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet"></link>
          {this.props.headComponents}
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-132930830-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-132930830-1');})()`
            }}
          >
          </script> */}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>
          <noscript><a href="https://react-week-medellin.eventbrite.com" rel="noopener noreferrer" target="_blank" /></noscript>
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
