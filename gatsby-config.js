module.exports = {
  siteMetadata: {
    title: `Will Simons' Homepage`,
  },
  plugins: [
  	`gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
  	{
  		resolve: `gatsby-source-contentful`,
  		options: {
  			spaceId: `llavk06my5ky`,
  			accessToken: `3a0155f430cfcbd3dc684bfcd99e0c41875b2b41ea7cff5d092a4a67a26af01e`,
  		},
  	},
  ],
}
