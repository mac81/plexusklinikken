import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import BurgerMenu from './BurgerMenu';
import Menu from './Menu';

import { Link } from 'react-router';

class Header extends Component {

    render() {
        return (
            <header className="header">
                <MediaQuery query='(max-width: 1024px)'>
                    <Link to="/" className="logo">
                        <img className="logo-image" src="/gfx/logo-blue.png" />
                    </Link>
                    <BurgerMenu>
                        <Menu {...this.props} pathname={this.props.pathname}/>
                    </BurgerMenu>
                </MediaQuery>

                <MediaQuery query='(min-width: 1024px)'>
                    <Link to="/" className="logo">
                        <img className="logo-image" src="/gfx/logo-blue.png" />
                    </Link>
                    <Menu {...this.props} pathname={this.props.pathname}/>
                </MediaQuery>
            </header>
        );
    }
}

export default Header;
