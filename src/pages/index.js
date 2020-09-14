import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="jumbotron">
      <div className="container text-center">
        <img className="img-fluid logo" alt="Efforia Labs logo" src="./static/svg/labs_outline.svg"></img>
        <h2>A próxima inspiração começa por aqui.</h2>
        <p>Labs é um espaço para projetos experimentais na Efforia</p>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-4 centered">
          <h2>Apollo</h2>
          <h1><span className="label label-info">12/10</span></h1>
          <img src="./static/svg/rocket.svg" alt="Rocket launch" width="90%" height="90%" className="rounded"/>
          <p></p><p>Projeto de Landing Page e CMS.</p>
        </div>
        <div className="col-md-4 centered">
          <h2>Cursos</h2>
          <h1><span className="label label-info">Em Breve</span></h1>
          <img src="./static/svg/hubpro.svg" alt="Efforia Labs logo" width="90%" height="90%" className="rounded"/>
          <p></p><p>Cursos de Design e Desenvolvimento.</p>
        </div>
        <div className="col-md-4 centered">
          <h2>Dinamo</h2>
          <h1><span className="label label-info">Em Breve</span></h1>
          <img src="./static/svg/new.svg" alt="Dinamo figure" width="90%" height="90%" className="rounded"/>
          <p></p><p>Game de aventura em formato side-scrolling.</p>
        </div>
      </div>
    </div>
    <p></p><br/>


  </Layout>
)

export default IndexPage
