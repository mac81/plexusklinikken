import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

import Layout from '../components/Layout';

import styles from '../scss/_contact.scss';

class Contact extends Component {

    constructor() {
        super();

        this.state = {
            name: {
                text: "",
                hidden: false
            },
            phone: {
                text: "",
                hidden: false
            },
            email: {
                text: "",
                hidden: false
            },
            message: {
                text: "",
                hidden: false
            }
        }

        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.id]: {
                text: e.target.value
            }
        });
    }

    onBlur(e) {
        if(e.target.value.length) {
            this.setState({
                [e.target.id]: {
                    hidden: true
                }
            });
        }
    }

    render() {
        return (
            <Layout location={this.props.location}>
                <section>
                    <h1 className="heading-large centered">{this.props.title}</h1>
                    <div className={styles.wrapper}>
                        <div>
                            <h2 className="heading-medium">{this.props.titleClinic}</h2>
                            <ul className="list">
                                <li>Telefon: <a href="tel:40444410">{this.props.phoneClinic}</a></li>
                                <li>E-post: <a href="#">{this.props.emailClinic}</a></li>
                            </ul>
                            <form>
                                <ul className="list">
                                    <li>
                                        <span className="input input--kohana">
                                            <input className="input__field input__field--kohana" id="name" type="text" onChange={this.onChange} onBlur={this.onBlur} />
                                            {!this.state.name.hidden && (
                                                <label className="input__label input__label--kohana" htmlFor="name">
                                                    <span className="icon icon--kohana">Icon</span>
                                                    <span className="input__label-content input__label-content--kohana">Navn</span>
                                                </label>
                                            )}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="input input--kohana">
                                            <input className="input__field input__field--kohana" id="phone" type="text" onChange={this.onChange} onBlur={this.onBlur} />

                                                <label className="input__label input__label--kohana" htmlFor="phone">
                                                    <span className="icon icon--kohana">Icon</span>
                                                    {!this.state.phone.hidden && (<span className="input__label-content input__label-content--kohana">Telefon</span>)}
                                                </label>

                                        </span>
                                    </li>
                                    <li>
                                        <span className="input input--kohana">
                                            <input className="input__field input__field--kohana" id="email" type="text" onChange={this.onChange} onBlur={this.onBlur} />
                                            {!this.state.email.hidden && (
                                                <label className="input__label input__label--kohana" htmlFor="email">
                                                    <span className="icon icon--kohana">Icon</span>
                                                    <span className="input__label-content input__label-content--kohana">E-post</span>
                                                </label>
                                            )}
                                        </span>
                                    </li>
                                    <li>
                                        <p>Henvendelsen gjelder</p>
                                        <ul className="list">
                                            <li>
                                                <input type="checkbox"/>
                                                <label>Timebestilling</label>
                                            </li>
                                            <li>
                                                <input type="checkbox"/>
                                                <label>Medlemskap</label>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="input input--kohana">
                                            <textarea className="textarea input__field input__field--kohana" id="message" onChange={this.onChange} onBlur={this.onBlur} rows="4"></textarea>
                                            {!this.state.message.hidden && (
                                                <label className="input__label input__label--kohana" htmlFor="message">
                                                    <span className="icon icon--kohana">Icon</span>
                                                    <span className="input__label-content input__label-content--kohana">Beskjed</span>
                                                </label>
                                            )}
                                        </span>
                                    </li>
                                </ul>
                            </form>
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
