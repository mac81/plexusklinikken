import React, { Component } from 'react';

import { Button } from '../';

import styles from './modal.scss';

class Modal extends Component {

    render () {
        return (
            <div>
                <Button attributes={{dataRemodalTarget: 'modal'}} mode="fill">Bestill time</Button>
                <div className="remodal" data-remodal-id="modal">
                    <button data-remodal-action="close" className="remodal-close"></button>
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
                    {/*<button data-remodal-action="cancel" className="remodal-cancel">Avbryt</button>*/}
                </div>
            </div>
        )
    }
}

export default Modal;
