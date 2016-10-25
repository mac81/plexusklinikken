import React, { Component } from 'react';
import Scroll from 'react-scroll';

// Components
import { Button } from '../';

// Styles
import styles from './_pageIntro.scss';

// Class
class PageIntro extends Component {
    render() {
        const ScrollTo = Scroll.Link;
        const bgClass = styles.bg + ' ' + styles[this.props.background];

        const style = {
            backgroundColor: 'rgba(32, 39, 68, 0.8)',
            backgroundImage: `-moz-linear-gradient(top, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${this.props.background})`,
            backgroundImage: `-ms-linear-gradient(top, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${this.props.background})`,
            backgroundImage: `-webkit-linear-gradient(top, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${this.props.background})`,
            backgroundSize: 'cover',
            backgroundPosition: '50%'
        }

        return (
            <div className={styles.pageIntro}>
                <div className={bgClass} style={style}>
                    <div className={styles.content}>
                        {this.props.children}
                    </div>
                    <ScrollTo className={styles.scroll} to="scrollTo" spy={true} smooth={true} offset={-80} duration={500} />
                </div>
            </div>
        );
    }
}

export default PageIntro;
