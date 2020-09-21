// import { Link } from "gatsby"
import { Header, Box, Anchor, Image } from "grommet"
import PropTypes from "prop-types"
import React from "react"

import labsLogo from "../assets/svg/labs.svg"

const Head = ({ siteTitle }) => (
  <Header background="brand">
    {/* <Button hoverIndicator /> */}
    <Box pad="small" height="xxsmall" width="xxsmall"><Image src={labsLogo} /></Box>
    <Box gap="small" direction="row" pad="small">
      <Anchor href="./agenda/" label="Eventos" />
      <Anchor href="./opensource/" label="Código Aberto" />
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
