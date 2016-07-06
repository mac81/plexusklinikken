import React, { Component } from 'react';

class Partner extends Component {


    render() {
        return (
            <li>
                <h3 className="heading-small"><a href={this.props.fields.url}>{this.props.fields.name}</a></h3>
                <p>{this.props.fields.summary}</p>
                <a href={this.props.fields.url}>Les mer</a>
            </li>
        );
    }
}

export default Partner;
