import React, { Component } from 'react';
import Scroll from 'react-scroll';

import { Button } from '../components';

import styles from '../scss/_pageIntro.scss';

class PageIntro extends Component {

    render() {
        const Link = Scroll.Link;
        return (
            <div className={styles.pageIntro}>
                <div className={styles.bg}>
                    <div className={styles.content}>
                        <h1 className="heading-xlarge">Hva kan vi hjelpe deg med?</h1>
                        <h2 className="heading-medium">Personlig trening er noe som passer for alle, uavhengig av hvilken form du er i og hvilken erfaring du har. Uansett om du trenger hjelp til å komme i gang med trening eller om du har en bestemt målsetning, så kan våre personlige trenere hjelpe deg. Vi legger vekt på personlig tilrettelegging, kompetanse og oppfølging.</h2>
                        <ul className="list">
                            <li>
                                <a href="#" className={styles.introBox}>
                                    <p className={styles.box1}>Bestill time</p>
                                    <p>Her kan du bestille time til alle våre behandlingsformer</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={styles.introBox}>
                                    <p className={styles.box2}>Behandlingstilbud</p>
                                    <p>Finn riktig behandlingsform for din plage</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={styles.introBox}>
                                    <p className={styles.box3}>Plexus Trening</p>
                                    <p>Kom i form med Plexus Trening</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <Link className={styles.scroll} to="test1" spy={true} smooth={true} offset={50} duration={500} />
                </div>
            </div>
        );
    }
}

export default PageIntro;
