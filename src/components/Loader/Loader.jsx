import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import $ from 'jquery';

import styles from './loader.scss';

class Loader extends Component {

    render() {
        // let loading = cn(styles.loading, {
        //     [styles.isLoading]: this.props.isLoading
        // });

        let objectOne = cn(styles.object, styles.objectOne);
        let objectTwo = cn(styles.object, styles.objectTwo);
        let objectThree = cn(styles.object, styles.objectThree);

        return (
            <div className={styles.loading} data-loader>
                <div className={styles.loadingCenter}>
                    <div className={styles.loadingCenterAbsolute}>
                        <div className={objectOne}></div>
                        <div className={objectTwo}></div>
                        <div className={objectThree}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        isLoading: state.isLoading
    })
)(Loader);
