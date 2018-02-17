import React from 'react'
import * as PropTypes from 'prop-types'
import Link from 'gatsby-link'

const ProjectItem = item => (
  <div className="mb2 dib" key={item.slug}>
  	<p className="mb0">{item.projectDate}</p>
    <Link to={`${item.slug}`}>
      <h3 className="red mt0 mb1">{item.projectTitle}</h3>
    </Link>
    <p className="mt0">{item.projectSummary}</p>
  </div>
)

export default ProjectItem
