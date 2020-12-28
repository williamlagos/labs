import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Box, Heading, Paragraph } from "grommet"
import { Github } from "grommet-icons"

const OpensourcePage = () => (
    <Layout>
      <SEO />
      <Box align="center" pad="medium">
        <Heading>Iniciativa Open Source</Heading>
        <Paragraph fill>
          Nós acreditamos que para qualquer atividade é melhor executada quando coletivamente. Por isso 
          somos incentivadores e contribuidores de projetos de Software Livre, mantendo um perfil 
          próprio no GitHub e divulgando os projetos open source existentes para seus membros. A 
          iniciativa torna-se completa com a existência de promoção de hackathons e 
          dojos de forma a fomentar o código aberto.
        </Paragraph>
        <Box pad="medium" size="large" align="center" direction="row" gap="small" onClick={() => window.location = 'https://github.com/efforia'}>
          <Github size="large" color="dark-1" />
          <Heading level={2} margin="none">GitHub</Heading>
        </Box>
      </Box>
    </Layout>
);

export default OpensourcePage;