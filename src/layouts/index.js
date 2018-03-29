import React from 'react'
import Link from 'gatsby-link'

import '../styles/main.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    // if (location.pathname === '/') {
    const sidebar = (
      <div className='l-sidebar'>
        <h1 className="sidebar__title">
          <Link to={'/'} >
            TIL
          </Link>
        </h1>
        <p>A microblog for my front-end misadventures.</p>

      </div>

      )
    return (
      <div className='l-wrapper'>

        {sidebar}

        <div className='l-main'>
          {children()}
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
