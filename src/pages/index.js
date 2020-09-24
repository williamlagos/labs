import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Card, CardHeader, CardBody, /* CardFooter */ } from "grommet"
import { Main, Heading, Paragraph, Box, Image, /* Button */ } from "grommet"
// import { Favorite, ShareOption } from "grommet-icons"


import labsOutline from "../assets/svg/labs_outline.svg"
import rocketImage from "../assets/svg/rocket.svg"
import hexagonLogo from "../assets/svg/hubpro.svg"
import dinamoImage from "../assets/svg/new.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Main background="#eee">
      <Box margin="large" align="center">
        <Box height="small" width="medium" align="center">
          <Image fit="contain" alt="Efforia Labs logo" src={labsOutline} />
        </Box>
        <Heading level={2} margin="small">A próxima inspiração começa por aqui.</Heading>
        <Paragraph fill margin="none">Labs é um espaço para projetos experimentais na Efforia</Paragraph>
      </Box>
    </Main>


    <Box wrap justify="center" direction="row" margin="large">
      <Card basis="medium" margin="small" background="light-1">
        <CardHeader size="medium">
          <Image fit="contain" src={rocketImage} alt="Rocket launch" />
        </CardHeader>
        <CardBody pad="medium">
          <Heading level={3} margin="none">Apollo</Heading>
          <Paragraph>Projeto de Landing Page e CMS.</Paragraph> 
        </CardBody>
        {/* <CardFooter pad={{horizontal: "small"}} background="light-2">   
          <Button icon={<Favorite color="red" />} hoverIndicator />
          <Button icon={<ShareOption color="plain" />} hoverIndicator />
        </CardFooter> */}
      </Card>
      <Card basis="medium" margin="small" background="light-1">
        <CardHeader size="medium">  
          <Image fit="contain" src={hexagonLogo} alt="Efforia Labs logo" />
        </CardHeader>
        <CardBody pad="medium">
          <Heading level={3} margin="none">Cursos</Heading>
          <Paragraph>Cursos de Design e Desenvolvimento.</Paragraph>
        </CardBody>
        {/* <CardFooter pad={{horizontal: "small"}} background="light-2">   
          <Button icon={<Favorite color="red" />} hoverIndicator />
          <Button icon={<ShareOption color="plain" />} hoverIndicator />
        </CardFooter> */}
      </Card>
      <Card basis="medium" margin="small" background="light-1">
        <CardHeader size="medium">  
          <Image fit="contain"src={dinamoImage} alt="Dinamo figure" />
        </CardHeader>
        <CardBody pad="medium">
          <Heading level={3} margin="none">Dinamo</Heading>
          <Paragraph>Game de aventura em formato side-scrolling.</Paragraph>
        </CardBody>
        {/* <CardFooter pad={{horizontal: "small"}} background="light-2">   
          <Button icon={<Favorite color="red" />} hoverIndicator />
          <Button icon={<ShareOption color="plain" />} hoverIndicator />
        </CardFooter> */}
      </Card>
    </Box>

  </Layout>
)

export default IndexPage
