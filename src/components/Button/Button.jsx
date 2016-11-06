import React, { Component } from 'react';
import cn from 'classnames';
import getAttributesFromProps from '../../getAttributesFromProps';

import styles from '../../scss/_button.scss';

class Button extends Component {

    constructor(props) {
        super();
        this.attributes = props.attributes && (getAttributesFromProps.getAttributesFromProps(props.attributes));
    }

    render() {
        let buttonClass = cn('button button--winona', {
            fill: this.props.mode === 'fill',
            inverted: this.props.mode === 'inverted'
        })
        return (
            <button className={buttonClass} data-text={this.props.children} {...this.attributes}>
                <span>{this.props.children}</span>
            </button>
        );
    }
}

export default Button;
