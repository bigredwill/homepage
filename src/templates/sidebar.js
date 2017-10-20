import React from 'react'
import * as PropTypes from 'prop-types'
import marked from 'marked'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.contentfulProject
    const { categories, projectDescription, projectTitle } = project

    return (
      <div>
        <h1>{projectTitle}</h1>
        <ul>
          {categories.map((category, i) => (
            <li key={category.id}>{category.title}</li>
          ))}
        </ul>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(projectDescription.projectDescription),
          }}
        />
      </div>
    )
  }
}

ProjectTemplate.propTypes = propTypes

export default ProjectTemplate

export const projectQuery = graphql`
  query projectQuery($id: String!) {
    contentfulProject(id: { eq: $id }) {
      categories {
        id
        title
      }
      projectTitle
      projectDescription {
        projectDescription
      }
    }
  }
`
