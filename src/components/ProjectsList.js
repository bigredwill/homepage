import React from 'react'
import * as PropTypes from 'prop-types'
import Link from 'gatsby-link'
import ProjectsListItem from './ProjectsListItem'

const ProjectsList = ({ items }) => <div>{items.map(ProjectsListItem)}</div>

const propTypes = {
  items: PropTypes.array.isRequired,
}

ProjectsList.propTypes = propTypes

export default ProjectsList
