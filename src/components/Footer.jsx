import React, { Component } from 'react';
//import mapboxgl from 'mapbox-gl';

import { SimpleMap } from './';

import styles from '../scss/_footer.scss';

class Footer extends Component {

    componentDidMount() {

        // mapboxgl.accessToken = 'pk.eyJ1IjoibWFjODEiLCJhIjoiY3duelp5YyJ9.E9tIZRzD_Q_Sy_XZc3ecAg';
        // var map = new mapboxgl.Map({
        //     container: 'mapbox',
        //     style: 'mapbox://styles/mapbox/streets-v9'
        // });
    }

    render() {
        return (
            <footer className={styles.footer}>
                <SimpleMap className={styles.map} />
                <div className={styles.logo_wrapper}>
                    <img className={styles.logo} src="/public/gfx/logo-white.png" />
                </div>
                <div className={styles.address}>
                    Plexusklinikken AS, Idrettsveien 16a, 1400 Ski
                </div>
                <div className={styles.contact}>
                    <p><strong>Klinikk:</strong> 40 40 40 40</p>
                    <p><strong>Legekontor:</strong> 40 40 40 40</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
