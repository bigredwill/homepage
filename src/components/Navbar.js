import React from 'react'
import * as PropTypes from 'prop-types'
import graphql from 'graphql'
import Link from 'gatsby-link'

const routes = [
	{
		title: 'Home',
		href: '/'
	},
	{
		title: 'Projects',
		href: '/projects'
	},
	{
		title: 'Now',
		href: '/now'
	}
]

const NavRoutes = ({activeRoute}) => {
	const styles = 'link dim green f4 f5-m f4-l dib mr3'
	return (
		<nav className="pb3 sans-serif">
			{routes.map((obj) => {
				let classNames = `${styles} ${activeRoute === obj.title ? 'b' : ''}`;
				return (
					<Link className={classNames} to={obj.href} title={obj.title} key={obj.title}>{obj.title}</Link>
				)
			})}
		</nav>
	)
}

const Navbar = ({name, tagline, route="Home"}) => (
  <div>
    <h1 className="f1 inline green">{name}</h1>
    <p className="sans-serif">{tagline}</p>
  	<NavRoutes activeRoute={route} />
  </div>
)

const propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  route: PropTypes.string,
}

Navbar.propTypes = propTypes

export default Navbar
