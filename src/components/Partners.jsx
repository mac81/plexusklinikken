import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import Partner from './Partner';

import styles from '../scss/_partners.scss';

class Partners extends Component {

    render() {
        let className = cn('list', styles.partners);

        return (
            <div className="content centered">
                <div className="header-group">
                    <h2 className="heading-large">Våre samarbeidspartnere</h2>
                    <h3 className="heading-small">Plexusklinikken samarbeider med en rekke aktører i nærmiljøet bla bla bla</h3>
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

export default connect(
        state => ({
            partners: state[state.activePage].partners
        })
    )(Partners)
