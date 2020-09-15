// import { Link } from "gatsby"
import { Header, Anchor, Image } from "grommet"
import PropTypes from "prop-types"
import React from "react"

import labsLogo from "../assets/svg/labs.svg"

const Head = ({ siteTitle }) => (
  <Header background="brand">
    {/* <Button hoverIndicator /> */}
    <Anchor href="/" icon={<Image src={labsLogo} />} />
    <Anchor href="./agenda/" label="Eventos" />
    <Anchor href="./opensource/" label="Código Aberto" />
  </Header>
)

Head.propTypes = {
  siteTitle: PropTypes.string,
}

Head.defaultProps = {
  siteTitle: ``,
}

export default Head
