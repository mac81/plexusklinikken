import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';


import { Menu, BurgerMenu} from './';

import { Link } from 'react-router';

class Header extends Component {

    constructor() {
        super();

        this.state = {
            solidMenu: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = event.srcElement.body.scrollTop;

        if(scrollTop >= 50) {
            this.setState({solidMenu: true})
        } else {
            this.setState({solidMenu: false})
        }
    }

    render() {

        const headerClass = (this.props.solidMenu || this.state.solidMenu) ? 'header solid' : 'header';

        return (
            <header className={headerClass}>
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

function mapStateToProps(state) {
    return {
        solidMenu: state.solidMenu
    }
}

export default connect(mapStateToProps)(Header);
