// import { Link } from "gatsby"
import { Header, Box, Anchor, Image } from "grommet"
import PropTypes from "prop-types"
import React from "react"

import labsLogo from "../assets/svg/labs.svg"

const Head = ({ siteTitle }) => (
  <Header background="brand" pad={{ "horizontal": "xsmall" }}>
    <Box pad="small" height="xxsmall" width="xxsmall">
      <Image fit="contain" src={labsLogo} />
    </Box>
    <Box gap="small" direction="row" pad="small">
      <Anchor size="small" color="white" href="./agenda/" label="EVENTOS" />
      <Anchor size="small" color="white" href="./opensource/" label="CÓDIGO ABERTO" />
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
