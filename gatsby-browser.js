const React = require('react')
const { theme } = require('./src/config/theme')
const { Fragment } = require('react')
const { ThemeProvider } = require('styled-components')
require('bootstrap/dist/css/bootstrap.min.css')
require('shards-ui/dist/css/shards.min.css')

exports.wrapRootElement = ({ element }) => {
    return (
        <Fragment>
            <ThemeProvider theme={theme}>{element}</ThemeProvider>
        </Fragment>
    )
}
