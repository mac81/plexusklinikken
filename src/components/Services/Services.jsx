import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';

import ServiceSummary from './ServiceSummary';

import { SectionHeader } from '../';

import styles from './_services.scss';

class Services extends Component {

    render() {
        let { title, services } = this.props;
        return (
            <div className={styles.services}>
                <SectionHeader title={title} inverted={true}/>
                <ul className="list">
                    {services && services.map(service => (
                        <ServiceSummary key={service.sys.id} {...service} />
                    ))}
                </ul>
            </div>
        );
    }
}

Services.propTypes = {
    title: PropTypes.string,
    services: PropTypes.array
}

function mapStateToProps(state, props) {
    const services = [];
    if(state.pages[state.activePage]) {
        state.pages[state.activePage].services.items.map(id => {
            let service = state.entries && values(state.entries).find(service => service.sys.id === id);
            services.push(service);
        });
    }

    return {
        title: state.pages[state.activePage] && state.pages[state.activePage].services.title,
        services: services
    }
}

export default connect(mapStateToProps)(Services);
