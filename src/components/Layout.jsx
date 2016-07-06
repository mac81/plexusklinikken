import React, { Component } from 'react';
import { RouteTransition } from 'react-router-transition';

import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header pathname={this.props.location.pathname}/>

                <main>
                    <RouteTransition
                        pathname={this.props.location.pathname}
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                      >
                        {this.props.children}
                    </RouteTransition>
                </main>

                <Footer/>
            </div>
        );
    }
}

export default Layout;
