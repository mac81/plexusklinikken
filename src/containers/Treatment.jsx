import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

import Layout from '../components/Layout';
import { Button, EmployeeList } from '../components';


class Treatment extends Component {

    render() {

        if(!this.props.treatment) return (<div>No treatment</div>);

        let { treatment } = this.props;
        //let treatment = this.props.entries.find(treatment => treatment.fields.treatmentType == this.props.activeTreatment);

        // No treatment found
        //if(!treatment) return (<div>No treatment</div>);

        return (
            <Layout location={this.props.location}>
                <section>
                    <article className="article">
                        <div className="article-content">
                            <h1 className="heading-xlarge centered">{treatment.fields.name}</h1>
                            <p className="excerpt centered">{treatment.fields.summary}</p>
                            {treatment.fields.body && (<div className="wysiwyg" dangerouslySetInnerHTML={{__html: marked(treatment.fields.body)}} />)}
                        </div>
                    </article>
                </section>
                {treatment.fields.employees && (
                    <section className="section">
                        <EmployeeList employees={treatment.fields.employees} />
                    </section>
                )}
            </Layout>
        );
    }
}

export default connect(
        state => ({
            treatment: state.entries[state.activeEntry]
        })
    )(Treatment)
