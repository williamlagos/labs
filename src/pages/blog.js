import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Box, Heading, Paragraph, /* Image */ } from "grommet"

const BlogPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => setPosts((await (await fetch('https://technologielabor.herokuapp.com/v1/contents/')).json()).objects)
    fetchPosts()
  })
  return (
    <Layout>
      <SEO title="Blog" />
      <Box align="center" pad="medium">
        <Heading>Blog do Labs</Heading>
        <Paragraph fill>
          Aqui surgirão conteúdos de todas as utilidades no campo de programação e design.
        </Paragraph>
        {
          posts.map((post) => {
            return (
              <Box key={post.id} align="center">
                <Heading level={2} > {post.name} </Heading>
                <Heading level={3}> Publicado em {post.date} </Heading>
                <Heading level={4}> Escrito por {post.user.username} </Heading>
                <Paragraph fill> {post.content} </Paragraph>
              </Box>
            )
          })
        }
      </Box>
    </Layout>
  )
}

export default BlogPage