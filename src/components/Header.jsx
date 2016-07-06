import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import BurgerMenu from './BurgerMenu';
import Menu from './Menu';

class Header extends Component {

    render() {
        return (
            <header>
                <MediaQuery query='(max-width: 1024px)'>
                    <BurgerMenu>
                        <Menu {...this.props} pathname={this.props.pathname}/>
                    </BurgerMenu>
                </MediaQuery>

                <MediaQuery query='(min-width: 1024px)'>
                    <Menu {...this.props} pathname={this.props.pathname}/>
                </MediaQuery>
            </header>
        );
    }
}

export default Header;
