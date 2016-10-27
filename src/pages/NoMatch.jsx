import React, { Component } from 'react';

import Layout from '../components/Layout';

class NoMatch extends Component {
    render() {
        return (
            <Layout location={this.props.location}>
                404
            </Layout>
        );
    }
}

export default NoMatch;
