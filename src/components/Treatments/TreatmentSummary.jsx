import React, { Component } from 'react';
import { Link } from 'react-router';

import ScrollReveal from 'scrollreveal';

import styles from './treatments.scss';

import { Button } from '../../components';

class TreatmentSummary extends Component {

    componentWillMount() {
        //window.sr = ScrollReveal({duration: 400});
    }

    componentDidMount() {
        // window.sr.reveal('.block-0', {delay: 0});
        // window.sr.reveal('.block-1', {delay: 200});
        // window.sr.reveal('.block-2', {delay: 300});
        // window.sr.reveal('.block-3', {delay: 400});
    }

    render() {
        //let className = 'block block-' + this.props.index;
        let url = this.props.fields.name.toLowerCase();

        return (
            <Link to={`/behandlinger/${this.props.sys.id}`}>
                <h3 className="heading-medium">{this.props.fields.name}</h3>
                <p>{this.props.fields.summary}</p>
                <Button>Les mer</Button>
            </Link>
        );
    }
}

export default TreatmentSummary;
