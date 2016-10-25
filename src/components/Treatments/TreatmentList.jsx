import React, { Component } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';

import TreatmentSummary from './TreatmentSummary';

import styles from './treatments.scss';

class TreatmentList extends Component {
    render() {

        return (
            <div className={styles.treatments}>
                {this.props.treatments && this.props.treatments.map((treatment, i) => (
                    <TreatmentSummary {...treatment} index={i} key={treatment.sys.id} />
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {

    // const introArticle = state.pages[state.activePage] && state.entries[state.pages[state.activePage].introArticle[0]];
    //
    const treatments = [];
    if(state.pages[state.activePage]) {
        state.pages[state.activePage].treatments.map(id => {
            let treatment = state.entries && values(state.entries).find(treatment => treatment.sys.id === id);
            treatments.push(treatment);
        });
    }
    //
    // const articles = [];
    // if(state.pages[state.activePage]) {
    //     state.pages[state.activePage].articles.map(id => {
    //         let article = state.entries && values(state.entries).find(article => article.sys.id === id);
    //         articles.push(article);
    //     });
    // }

    return {
        // introArticle: introArticle,
        treatments: treatments
        // articles: articles
    }
}

export default connect(mapStateToProps)(TreatmentList);
