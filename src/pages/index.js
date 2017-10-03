import React from 'react'
import Link from 'gatsby-link'

const ProjectItem = ({ node }) => (
	<div>
		<Link to={`project/${node.slug}`}>
			<h3>{node.projectTitle}</h3>
		</Link>
	</div>
);

class IndexPage extends React.Component {
 	render() {
 		const projectEdges = this.props.data.allContentfulProject.edges;
 		return (
 			<div>
		    <h1>His old site is available at <Link to="http://bigredwill.github.io">bigredwill.github.io</Link></h1>
		    {projectEdges.map(({ node }, i) => (
		    	<ProjectItem node={node} key={node.id} />
	    	))}
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