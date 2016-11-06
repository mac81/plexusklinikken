import React, { Component } from 'react';
var Modal = require('boron/OutlineModal');

import styles from './modal.scss';

class ModalWrapper extends Component {

    constructor() {
        super();
    }

    hideModal = () => {
        this.refs.modal.hide();
    }

    render() {
        const modalStyle = {
            width: '60%'
        };

        const contentStyle = {
            height: '100%',
            padding: '30px'
        };

        return (
            <Modal ref={this.props.id} keyboard={this.callback} modalStyle={modalStyle} contentStyle={contentStyle}>
                <button onClick={this.hideModal}>Close</button>
                <h1>Bestill time</h1>
                <div className={styles.wrapper}>
                    <div>
                        <h2>Plexusklinikken</h2>
                        <p>Her kan du bestille timer hos Plexusklinikken</p>
                        <a href="https://plexusklinikken.bestille.no" className="button button--winona" target="_blank" data-text="Bestill behandling"><span>Bestill behandling</span></a>
                    </div>
                    <div>
                        <h2>Ski legekontor</h2>
                        <p>Her kan du bestille timer hos legen</p>
                        <a href="https://my.pasientsky.no/no/login" className="button button--winona" target="_blank" data-text="Bestill legetime"><span>Bestill legetime</span></a>
                    </div>
                </div>
                <p>Usikker på hvilken behandling du behøver vennligst ta kontakt på tlf: 40 44 44 10</p>
            </Modal>
        );
    }
}

export default ModalWrapper;
