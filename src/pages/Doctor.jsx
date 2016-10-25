import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

import Layout from '../components/Layout';

class Doctor extends Component {
    render() {
        if(!this.props.pageTitle) return null;

        return (
            <Layout location={this.props.location}>
                <section>
                    <article className="article">
                        <div className="article-content">
                            <h1 className="heading-xlarge centered">{this.props.pageTitle}</h1>
                            <p className="excerpt centered">{this.props.pageSummary}</p>
                            <div className="wysiwyg" dangerouslySetInnerHTML={{__html: marked(this.props.pageBody)}} />
                        </div>
                    </article>
                </section>
            </Layout>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        pageTitle: state.pages[state.activePage] ? state.pages[state.activePage].title : null,
        pageSummary: state.pages[state.activePage] ? state.pages[state.activePage].summary : null,
        pageBody: state.pages[state.activePage] ? state.pages[state.activePage].body : null
    }
}

export default connect(mapStateToProps)(Doctor)
