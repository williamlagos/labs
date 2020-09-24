import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Box, Heading, Paragraph, Image } from "grommet"

const BlogPage = () => (
    <Layout>
      <SEO />
      <Box align="center" pad="medium">
        <Heading>Blog da Efforia Labs</Heading>
        <Paragraph fill>
          Aqui surgirão conteúdos de todas as utilidades no campo de programação e design.
        </Paragraph>
      </Box>
    </Layout>
);

export default BlogPage;