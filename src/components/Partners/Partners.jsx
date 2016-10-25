import React, { Component } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import cn from 'classnames';

import Partner from './Partner';

import styles from './partners.scss';

class Partners extends Component {

    render() {
        let className = cn('list', styles.partners);

        return (
            <div className="content centered">
                <div className="header-group">
                    <h2 className="heading-large">{this.props.title}</h2>
                    <h3 className="heading-small">{this.props.summary}</h3>
                </div>
                <ul className={className}>
                    {this.props.partners && this.props.partners.map(partner => (
                        <Partner {...partner} />
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state, props) {

    const partners = [];
    if(state.pages[state.activePage]) {
        state.pages[state.activePage].partners && state.pages[state.activePage].partners.map(id => {
            let entry = state.entries && values(state.entries).find(entry => entry.sys.id === id);
            partners.push(entry);
        });
    }

    return {
        title: state.pages[state.activePage] && state.pages[state.activePage].titlePartners,
        summary: state.pages[state.activePage] && state.pages[state.activePage].summaryPartners,
        partners: partners
    }
}

export default connect(mapStateToProps)(Partners)
