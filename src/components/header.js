// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { Header, Box, Anchor, Image } from "grommet"

import labsLogo from "../assets/svg/labs.svg"

const Head = ({ siteTitle }) => (
  <Header background="brand" pad={{ "horizontal": "xsmall" }}>
    <Box pad="small" height="xxsmall" width="xxsmall">
      <Link to="/"><Image fit="contain" src={labsLogo} /></Link>
    </Box>
    <Box gap="small" direction="row" pad="small">
      <Anchor href="/blog" size="small" color="white" label="BLOG" />
      <Anchor href="/opensource/" size="small" color="white" label="OPEN SOURCE" />
    </Box>
  </Header>
)

Head.propTypes = {
  siteTitle: PropTypes.string,
}

Head.defaultProps = {
  siteTitle: ``,
}

export default Head
