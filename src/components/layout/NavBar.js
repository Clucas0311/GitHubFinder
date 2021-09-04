import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NavBar extends Component {
    // We use defualtProps when as a way of having props incase props were not passed in
    static defaultProps = {
        title :'Github Finder',
        icon : 'fab fa-github'
    }
    // PropTypes are used as a type checker
    static propTypes = {
        title: PropTypes.string.isRequired, 
        icon: PropTypes.string.isRequired
    }
    render() {
        const {title, icon} = this.props
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon} /> {title}
                </h1>
            </nav>
        )
    }
}

export default NavBar
