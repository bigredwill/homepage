const _ = require('lodash');
const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;
	return new Promise((resolve, reject) => {
		// chain and run graphql queries to construct pages
		graphql(
			`
				{
					allContentfulProject {
						edges {
							node {
								id
								slug
							}
						}
					}
				}
			`
		)
		.then(result => {
			if (result.errors) {
				reject(result.errors);
			}
			const projectTemplate = path.resolve(`./src/templates/Project.js`);
			_.each(result.data.allContentfulProject.edges, edge => {
				createPage({
					path: `/${edge.node.slug}/`,
					component: slash(projectTemplate),
					context: {
						id: edge.node.id,
					},
				});
			});
		});
		resolve();
	});
}