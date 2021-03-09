import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render(){
        return (
          <>
            <Link to="/">State</Link>
						<Link to="/effect">Effect</Link>
						<Link to="/callback">Callback</Link>
          </>
        );
    }
}

export default Nav;
