import React, { Component } from 'react';

import Layout from '../components/Layout';

import styles from '../scss/_contact.scss';

class Contact extends Component {
    render() {
        return (
            <Layout location={this.props.location}>
                <section>
                    <h1 className="heading-large centered">Kontakt oss</h1>
                    <div className={styles.wrapper}>
                        <div>
                            <h2 className="heading-medium">Plexusklinikken</h2>
                            Ta kontakt for informasjon på <a href="tel:40444410">40 44 44 10</a> eller benytt skjemaet under
                            <form>
                                <ul>
                                    <li>
                                        <label>Navn</label>
                                        <input placeholder="Test"/>
                                    </li>
                                    <li>
                                        <label>Telefon</label>
                                        <input placeholder="Test"/>
                                    </li>
                                    <li>
                                        <label>E-post</label>
                                        <input placeholder="Test"/>
                                    </li>
                                    <li>
                                        <p>Henvendelsen gjelder</p>
                                        <ul>
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
                                        <label>Beskjed</label>
                                        <textarea></textarea>
                                    </li>
                                </ul>
                            </form>

                            <h3 className="heading-small">Åpningstider</h3>
                            <p>Mandag-fredag 08.30-15.00. (Stengt i lunsjen mellom 11.30-12.00 )</p>

                            <h4>Telefonen besvares:</h4>
                            <p>Mandag-fredag kl 9-15 ( Stengt i lunsjen mellom 11.00-12.00 )</p>
                        </div>
                        <div>
                            <h2 className="heading-medium">Ski Legekontor</h2>
                            Ved henvendelse til legekontoret ring tlf: <a href="tel:64000222">64 00 02 22</a> eller send en e-post til: <a href="#">legene@plexusklinikken.no</a>
                            <h3>Åpningstider</h3>
                            <p>Mandag-fredag 08.30-15.00. (Stengt i lunsjen mellom 11.30-12.00 )</p>

                            <h4>Telefonen besvares:</h4>
                            <p>Mandag-torsdag kl 9-14 ( Stengt i lunsjen mellom 11.00-12.00 )</p>
                            <p>Fredag kl 9-13 fredag. ( Stengt i lunsjen mellom 11.00-12.00 )</p>

                            <h4>Øyeblikkelig hjelp:</h4>
                            <p>Ring 113 eller legevakt 64 87 19 30.</p>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Contact;
