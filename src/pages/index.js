import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import { Card, CardHeader, CardBody, CardFooter } from "grommet"
import { Main, Heading, Paragraph, Box, Button, Image } from "grommet"
import { Favorite, ShareOption } from "grommet-icons"

import labsOutline from "../assets/svg/labs_outline.svg"
import rocketImage from "../assets/svg/rocket.svg"
import hexagonLogo from "../assets/svg/hubpro.svg"
import dinamoImage from "../assets/svg/new.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Main>
      <Box margin="large" align="center">
        <Box height="small" width="small" align="center">
          <Image alt="Efforia Labs logo" src={labsOutline} />
        </Box>
        <Heading>A próxima inspiração começa por aqui.</Heading>
        <Paragraph>Labs é um espaço para projetos experimentais na Efforia</Paragraph>
      </Box>
    </Main>

    <Box align="center" direction="row">
      <Card margin="small" background="light-1">
        <CardHeader pad="medium">
          <Heading>Apollo</Heading>
          <Box height="small" width="small" align="center">
            <Image src={rocketImage} alt="Rocket launch" />
          </Box>
        </CardHeader>
        <CardBody pad="medium">Projeto de Landing Page e CMS.</CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">   
          <Button icon={<Favorite color="red" />} hoverIndicator />
          <Button icon={<ShareOption color="plain" />} hoverIndicator />
        </CardFooter>
      </Card>
      <Card margin="small" background="light-1">
        <CardHeader pad="medium">
          <Heading>Cursos</Heading>
          <Box height="small" width="small" align="center">
            <Image src={hexagonLogo} alt="Efforia Labs logo" />
          </Box>
        </CardHeader>
        <CardBody pad="medium">Cursos de Design e Desenvolvimento.</CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">   
          <Button icon={<Favorite color="red" />} hoverIndicator />
          <Button icon={<ShareOption color="plain" />} hoverIndicator />
        </CardFooter>
      </Card>
      <Card margin="small" background="light-1">
        <CardHeader pad="medium">
          <Heading>Dinamo</Heading>
          <Box height="small" width="small" align="center">
            <Image src={dinamoImage} alt="Dinamo figure" />
          </Box>
        </CardHeader>
        <CardBody pad="medium">Game de aventura em formato side-scrolling.</CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">   
          <Button icon={<Favorite color="red" />} hoverIndicator />
          <Button icon={<ShareOption color="plain" />} hoverIndicator />
        </CardFooter>
      </Card>
    </Box>

  </Layout>
)

export default IndexPage
