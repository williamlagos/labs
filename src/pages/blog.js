import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Box, Heading, Paragraph, Image } from "grommet"
// import { Github } from "grommet-icons"

const BlogPage = () => (
    <Layout>
      <SEO />
      <Box align="center" pad="medium">
        <Heading>Blog da Efforia Labs</Heading>
        <Paragraph fill>
          Nós acreditamos que para qualquer atividade é melhor executada quando coletivamente. Por isso 
          a Efforia é incentivadora e contribuidora de projetos de Software Livre, mantendo um perfil 
          próprio no GitHub e divulgando os projetos open source existentes para seus membros. A 
          iniciativa torna-se completa com a existência da Efforia Labs, promovendo hackathons e 
          dojos de forma a fomentar o código aberto.
        </Paragraph>
        <Box pad="medium" size="large" align="center" direction="row" gap="small" onClick={() => window.location = 'https://github.com/efforia'}>
          {/* <Github size="large" color="dark-1" /> */}
          <Heading level={2} margin="none">GitHub da Efforia</Heading>
        </Box>
      </Box>
    </Layout>
);

export default BlogPage;