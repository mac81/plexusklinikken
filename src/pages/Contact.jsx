import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

import Layout from '../components/Layout';

import styles from '../scss/_contact.scss';

class Contact extends Component {

    render() {
        return (
            <Layout location={this.props.location}>
                <section className="first">
                    <div className="container">
                        <h1 className="heading-large centered">{this.props.title}</h1>
                        <div className={styles.wrapper}>
                            <div>
                                <h2 className="heading-medium">{this.props.titleClinic}</h2>
                                <ul className="list">
                                    <li>Telefon: <a href="tel:40444410">{this.props.phoneClinic}</a></li>
                                    <li>E-post: <a href="#">{this.props.emailClinic}</a></li>
                                </ul>
                                {this.props.bodyClinic && (
                                    <div className="wysiwyg" dangerouslySetInnerHTML={{__html: marked(this.props.bodyClinic)}} />
                                )}
                            </div>
                            <div>
                                <h2 className="heading-medium">{this.props.titleDoctor}</h2>
                                <ul className="list">
                                    <li>Telefon: <a href="tel:64000222">{this.props.phoneDoctor}</a></li>
                                    <li>E-post: <a href="#">{this.props.emailDoctor}</a></li>
                                </ul>
                                {this.props.bodyDoctor && (
                                    <div className="wysiwyg" dangerouslySetInnerHTML={{__html: marked(this.props.bodyDoctor)}} />
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default connect(
    state => ({
        title: state.pages[state.activePage] && state.pages[state.activePage].title,
        titleClinic: state.pages[state.activePage] && state.pages[state.activePage].titleClinic,
        phoneClinic: state.pages[state.activePage] && state.pages[state.activePage].phoneClinic,
        emailClinic: state.pages[state.activePage] && state.pages[state.activePage].emailClinic,
        bodyClinic: state.pages[state.activePage] && state.pages[state.activePage].bodyClinic,
        titleDoctor: state.pages[state.activePage] && state.pages[state.activePage].titleDoctor,
        phoneDoctor: state.pages[state.activePage] && state.pages[state.activePage].phoneDoctor,
        emailDoctor: state.pages[state.activePage] && state.pages[state.activePage].emailDoctor,
        bodyDoctor: state.pages[state.activePage] && state.pages[state.activePage].bodyDoctor
    })
)(Contact);
