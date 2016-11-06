import React, { Component } from 'react';

import styles from './_sectionHeader.scss';

class SectionHeader extends Component {
    render() {

        let sectionHeaderClass = this.props.inverted ? `${styles.sectionHeader} ${styles.inverted}` : styles.sectionHeader;

        return (
            <div className={sectionHeaderClass}>
                <h2 className={styles.title}>{this.props.title}</h2>
                {this.props.summary && (<p className={styles.summary}>{this.props.summary}</p>)}
                <div className={styles.seperator}></div>
            </div>
        );
    }
}

export default SectionHeader;
