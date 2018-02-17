import React from 'react'
import graphql from 'graphql'
import marked from 'marked'
import ProjectsList from '../components/ProjectsList'
import Navbar from '../components/Navbar'

class ProjectsPage extends React.Component {
  render() {
    const projectEdges = this.props.data.allContentfulProject.edges
    const projectItems = projectEdges.map(node => Object.assign({}, node.node))
    const { headshot, name, tagline } = this.props.data.contentfulAbout
    return (
      <div>
        <div className="fn fl-ns w-40-ns pr4-ns">
          <Navbar route="Projects" name={name} tagline={tagline.tagline} />
        </div>
        <div className="fn fl-ns w-60-ns pt4-ns lh-copy">
          <h1 className="f1 mt0">Projects</h1>
          <ProjectsList items={projectItems} />
        </div>
      </div>
    )
  }
}

export default ProjectsPage

export const query = graphql`
  query projectsQuery {
    allContentfulProject(sort: { order: DESC, fields: [datePublished] }) {
      edges {
        node {
          categories {
            id
            title
          }
          id
          projectTitle
          projectDate
          projectSummary
          slug
        }
      }
    }
    contentfulAbout {
      name
      tagline {
        tagline
      }
    }
  }
`
