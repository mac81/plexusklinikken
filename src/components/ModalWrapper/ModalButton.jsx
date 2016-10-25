import React, { Component } from 'react';

import styles from './modal.scss';

class ModalButton extends Component {
    render() {
        const wrapperClass = this.props.frontpage ? `button button--winona inverted` : styles.order;

        return (
            <button className={wrapperClass} onClick={this.props.onClick} data-text={this.props.text}><span>{this.props.text}</span></button>
        );
    }
}

export default ModalButton;
