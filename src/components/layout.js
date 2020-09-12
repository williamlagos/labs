/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import "./layout.css"
import "./main.css"

import labsLogoPath from "../images/labs.png"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>Efforia Labs  </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={labsLogoPath} />
      </Helmet>
      <body>
        <Header siteTitle={data.site.siteMetadata.title} />
        <nav className="navbar navbar-blue navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Ativar navegação</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">
                <img alt="Efforia Labs" src="./static/svg/labs.svg"/>
              </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="./agenda/">Eventos</a></li>
                <li><a href="./opensource/">Código Aberto</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="container">
            <h1 className="centered white"><div className="hidden-xs inline"> </div>+55 (51) 998 485 888</h1>
            <h3 className="centered white" style={{ "font-size": "1.2em" }}><div className="hidden-xs inline ">E-mail: </div>labs@efforia.io</h3>
            <p className="text-muted centered">Efforia © 2020</p>
          </div>
        </footer>
        {/*<script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');
            </script>*/}
      </body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
