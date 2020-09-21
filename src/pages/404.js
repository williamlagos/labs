import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Heading, Paragraph } from "grommet"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Não encontrado" />
    <Heading>Não encontrado</Heading>
    <Paragraph>Você chegou a uma rota que não existe.</Paragraph>
  </Layout>
)

export default NotFoundPage
