/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { Grommet, Footer, /*Heading,*/ Paragraph } from 'grommet'

import Head from "./header"

import labsLogo from "../images/labs.png"

import "./main.css"

const landingTheme = {
  global: {
    font: {
      family: 'Roboto',
    },
  },
};

const Layout = ({ children }) => {
  return (
    <Grommet theme={landingTheme}>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={labsLogo} />
      </Helmet>
      <Head siteTitle="Labs" />
      {children}
      <Footer pad="medium" direction="column" justify="center" background="dark-1">
        <Heading level={2} margin="xxsmall">+351 913 077 480</Heading>
        <Heading level={3} margin="xxsmall">william.lagos@icloud.com</Heading>
        <Paragraph margin="xxsmall">Labs © 2021</Paragraph>
      </Footer>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
