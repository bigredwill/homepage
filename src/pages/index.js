import React from 'react'
import Link from 'gatsby-link'

const ProjectItem = ({ node }) => (
  <div>
    <Link to={`project/${node.slug}`}>
      <h3>{node.projectTitle}</h3>
    </Link>
  </div>
)

class IndexPage extends React.Component {
  render() {
    const projectEdges = this.props.data.allContentfulProject.edges
    return (
      <div>
        <h1>Will Simons</h1>
        <p>do-er, maker, software guy ☕</p>
        <div>
          <p className="home-header">Hey</p>
        	<p>I’m Will and I'm a software developer, artist, skateboarder, and adventurer, among other things.</p>
          <p></p>
        </div>
        <div>
        	<h2>Writing</h2>
        	<ul>
          {projectEdges.map(({ node }, i) => (
            <li><ProjectItem node={node} key={node.id} /></li>
          ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulProject {
      edges {
        node {
          categories {
            id
            title
          }
          id
          projectTitle
          slug
        }
      }
    }
  }
`
