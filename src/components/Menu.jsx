import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactTooltip from 'react-tooltip';

import styles from '../scss/app.scss';

import { Button, Modal } from '.';

class Menu extends Component {

    render() {
        let wrapperClass = this.props.mode === 'inverted' ? styles.menu_wrapper + ' ' + styles.inverted : styles.menu_wrapper;
        //let wrapperClass = styles.menu_wrapper + ' ' + styles.inverted;

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
                    <Modal/>
                </div>
            </div>
        );
    }
}

export default Menu;
