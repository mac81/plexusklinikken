import React, { Component } from 'react';

class Partner extends Component {


    render() {

        if(!this.props.fields) {
            return null;
        }

        const { url, name, summary } = this.props.fields;

        return (
            <li>
                {url && (
                    <h3 className="heading-small">
                        <a href={url}>{name}</a>
                    </h3>
                )}
                <p>{summary}</p>
                {url && (
                    <a href={url}>Les mer</a>
                )}
            </li>
        );
    }
}

export default Partner;
