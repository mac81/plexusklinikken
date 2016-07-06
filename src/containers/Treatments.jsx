import React, { Component } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';

import Layout from '../components/Layout';
import TreatmentSummary from '../components/TreatmentSummary';
import { ArticleBlock, Button, ServiceSummary } from '../components';

import styles from '../scss/_treatments.scss';

class Treatments extends Component {
    render() {

        return (
            <Layout location={this.props.location}>

                <div>
                    {this.props.introArticle && (
                        <section>
                            <article className={styles.introArticle}>
                                <img src="http://i.istockimg.com/file_thumbview_approve/74483531/6/stock-photo-74483531-doctor-with-medical-ball-and-woman-patient.jpg"/>
                                <div>
                                    <h2 className="heading-large">{this.props.introArticle.fields.title}</h2>
                                    <h3 className="heading-small">{this.props.introArticle.fields.excerpt}</h3>
                                    <div>
                                        <p>{this.props.introArticle.fields.text}</p>
                                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.</p>
                                    </div>
                                    <Button>Bestill time</Button>
                                </div>
                            </article>
                        </section>
                    )}

                    <div className={styles.treatments}>
                        {this.props.treatments && this.props.treatments.map((treatment, i) => (
                            <TreatmentSummary {...treatment} index={i} key={treatment.sys.id} />
                        ))}
                    </div>

                    <section>
                        <div className="content centered">
                            <h2 className="heading-large">Vi tilbyr også</h2>
                            <ul className="boxedList list">
                                {this.props.services && this.props.services.map(service => (
                                    <ServiceSummary key={service.sys.id} {...service} />
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="collapsed">
                        {this.props.articles && this.props.articles.map((article, i) => (
                            <ArticleBlock key={article.sys.id} {...article} index={i} />
                        ))}
                    </section>

                </div>
            </Layout>
        );
    }
}

function mapStateToProps(state) {

    const introArticle = state.pages[state.activePage] && state.entries[state.pages[state.activePage].introArticle[0]];

    const treatments = [];
    if(state.pages[state.activePage]) {
        state.pages[state.activePage].treatments.map(id => {
            let treatment = state.entries && values(state.entries).find(treatment => treatment.sys.id === id);
            treatments.push(treatment);
        });
    }

    const services = [];
    if(state.pages[state.activePage]) {
        state.pages[state.activePage].services.map(id => {
            let service = state.entries && values(state.entries).find(service => service.sys.id === id);
            services.push(service);
        });
    }

    const articles = [];
    if(state.pages[state.activePage]) {
        state.pages[state.activePage].articles.map(id => {
            let article = state.entries && values(state.entries).find(article => article.sys.id === id);
            articles.push(article);
        });
    }

    return {
        introArticle: introArticle,
        treatments: treatments,
        services: services,
        articles: articles
    }
}

export default connect(mapStateToProps)(Treatments);
