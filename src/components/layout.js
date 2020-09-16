/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { Grommet, Footer, Heading, Paragraph } from 'grommet'
// import { useStaticQuery, graphql } from "gatsby"

import Head from "./header"

import labsLogo from "../images/labs.png"

import "./main.css"

const Layout = ({ children }) => {
  return (
    <Grommet>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={labsLogo} />
      </Helmet>
      <Head siteTitle="Efforia Labs" />
      {children}
      <Footer pad="medium" background="brand">
        <Heading className="centered white"><div className="hidden-xs inline"> </div>+55 (51) 998 485 888</Heading>
        <Heading className="centered white" style={{ "fontSize": "1.2em" }}><div className="hidden-xs inline ">E-mail: </div>labs@efforia.io</Heading>
        <Paragraph className="text-muted centered">Efforia © 2020</Paragraph>
      </Footer>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
