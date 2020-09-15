import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import { Card, CardHeader, CardBody, CardFooter } from "grommet"
import { Main, Heading, Paragraph, Box, Button, Image } from "grommet"
import { Favorite, ShareOption } from "grommet-icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Main>
      <Box align="center">
        <Image alt="Efforia Labs logo" src="./static/svg/labs_outline.svg" />
        <Heading>A próxima inspiração começa por aqui.</Heading>
        <Paragraph>Labs é um espaço para projetos experimentais na Efforia</Paragraph>
      </Box>
    </Main>

    <Box align="center" direction="row">
      <Card margin="small" background="light-1">
        <CardHeader pad="medium">
          <Heading>Apollo</Heading>
          <Image src="../assets/svg/rocket.svg" alt="Rocket launch" />
        </CardHeader>
        <CardBody pad="medium">Projeto de Landing Page e CMS.</CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">   
          <Button icon={<Favorite color="red" />} hoverIndicator />
          <Button icon={<ShareOption color="plain" />} hoverIndicator />
        </CardFooter>
      </Card>
      <Card background="light-1">
        <CardHeader pad="medium">
          <Heading>Cursos</Heading>
          <Image src="./static/svg/hubpro.svg" alt="Efforia Labs logo" />
        </CardHeader>
        <CardBody pad="medium">Cursos de Design e Desenvolvimento.</CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">   
          <Button icon={<Favorite color="red" />} hoverIndicator />
          <Button icon={<ShareOption color="plain" />} hoverIndicator />
        </CardFooter>
      </Card>
      <Card background="light-1">
        <CardHeader>
          <Heading>Dinamo</Heading>
          <Image src="./static/svg/new.svg" alt="Dinamo figure" />
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
