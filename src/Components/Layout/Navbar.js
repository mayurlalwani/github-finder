import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    state = {  }
    render() { 
        return ( 
            <nav className="navbar bg-primary">
                <h1>{this.props.title}</h1>
            </nav>
        )
    }
}
 
export default Navbar;