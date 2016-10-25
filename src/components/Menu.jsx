import React, { Component } from 'react';
import { Link } from 'react-router';
//import ReactTooltip from 'react-tooltip';

import styles from '../scss/app.scss';


var Modal = require('boron/OutlineModal');

import modalStyles from '../components/ModalWrapper/modal.scss';

import { Button, ModalButton } from '.';

class Menu extends Component {

    constructor() {
        super();
    }

    showModal = () => {
        this.refs.modal.show();
    }

    hideModal = () => {
        this.refs.modal.hide();
    }

    render() {
        let wrapperClass = this.props.mode === 'inverted' ? styles.menu_wrapper + ' ' + styles.inverted : styles.menu_wrapper;
        //let wrapperClass = styles.menu_wrapper + ' ' + styles.inverted;

        const modalStyle = {
            width: '60%'
        };

        const backdropStyle = {
            backgroundColor: 'rgba(32, 39, 68, 0.9)'
        };

        const contentStyle = {
            height: '100%',
            padding: '30px'
        };

        return (
            <div className={wrapperClass}>
                <nav>
                    <ul className={styles.nav_primary}>
                        <li><Link className={this.props.pathname === '/' ? styles.active : null} to="/">Forsiden</Link></li>
                        <li><Link className={this.props.pathname === '/behandlinger' ? styles.active : null} to="/behandlinger">Behandlingstilbud</Link></li>
                        <li><Link className={this.props.pathname === '/legekontor' ? styles.active : null} to="/legekontor">Ski Legekontor</Link></li>
                        <li><Link className={this.props.pathname === '/trening' ? styles.active : null} to="/trening">Plexus Trening</Link></li>
                        <li><Link className={this.props.pathname === '/om' ? styles.active : null} to="/om">Om oss</Link></li>
                        <li><Link className={this.props.pathname === '/kontakt' ? styles.active : null} to="/kontakt">Kontakt oss</Link></li>
                    </ul>

                </nav>
                {/*<ul className={styles.socialMedia}>
                    <li>
                        <a href="#" className={styles.facebook} data-tip data-for="facebook"></a>
                        <ReactTooltip id='facebook' effect='solid' place="bottom" offset={{bottom: -5}} class={styles.socialMediaTooltip}>
                            <span>Facebook</span>
                        </ReactTooltip>
                    </li>
                    <li>
                        <a href="#" className={styles.twitter} data-tip data-for="twitter"></a>
                        <ReactTooltip id='twitter' effect='solid' place="bottom" offset={{bottom: -5}} class={styles.socialMediaTooltip}>
                            <span>Twitter</span>
                        </ReactTooltip>
                    </li>
                    <li>
                        <a href="#" className={styles.instagram} data-tip data-for="instagram"></a>
                        <ReactTooltip id='instagram' effect='solid' place="bottom" offset={{bottom: -5}} class={styles.socialMediaTooltip}>
                            <span>Instagram</span>
                        </ReactTooltip>
                    </li>
                    <li>
                        <a href="#" className={styles.linkedin} data-tip data-for="linkedin"></a>
                        <ReactTooltip id='linkedin' effect='solid' place="bottom" offset={{bottom: -5}} class={styles.socialMediaTooltip}>
                            <span>Linkedin</span>
                        </ReactTooltip>
                    </li>

                </ul>*/}
                <div className={styles.order}>
                    <ModalButton text="Bestill time" target="modal" onClick={this.showModal}/>
                </div>

                <Modal ref="modal" keyboard={this.callback} modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
                    <div className={modalStyles.container}>
                        <button onClick={this.hideModal} className={modalStyles.close}></button>
                        <h1>Bestill time</h1>
                        <div className={modalStyles.wrapper}>
                            <div>
                                <h2>Plexusklinikken</h2>
                                <p>Her kan du bestille timer hos Plexusklinikken</p>
                                <a href="https://plexusklinikken.bestille.no" className="button button--winona" target="_blank" data-text="Bestill behandling"><span>Bestill behandling</span></a>
                            </div>
                            <div>
                                <h2>Ski legesenter</h2>
                                <p>Her kan du bestille timer hos legen</p>
                                <a href="https://my.pasientsky.no/no/login" className="button button--winona" target="_blank" data-text="Bestill legetime"><span>Bestill legetime</span></a>
                            </div>
                        </div>
                        <p>{`Usikker på hvilken behandling du behøver vennligst ta kontakt på tlf: 00 00 00 00`}</p>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Menu;
