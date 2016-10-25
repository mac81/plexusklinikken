import React, { Component } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';

import Layout from '../components/Layout';

import { ArticleSummary, EmployeeList, Partners } from '../components';

class About extends Component {
    render() {
        console.log(this.props)
        return (
            <Layout location={this.props.location}>
                <section>
                    <article className="article">
                        <div className="article-content">
                            <h1 className="heading-xlarge centered">{this.props.pageTitle}</h1>
                            <p className="excerpt centered">{this.props.pageSummary}</p>
                            <div className="wysiwyg">
                                <p>Plexusklinikken Ski ble startet i januar 2009 med en rekke terapeuter som allerede var godt innarbeidet i Follo og som hadde lang praksis og erfaring. Intensjonen med klinikken er å tilby de fleste behandlingstilbud under ett tak og få maksimalt utbytte av det tverrfaglige miljøet både for pasient og terapeut. Plexusklinikkens terapeuter behandler kun en klient om gangen. - Fokus er på deg!</p>
                                <p>Det finnes mange behandlingtilbud, og ofte er det vanskelig å velge. Vi hjelper deg å finne riktig behandling for din plage! Terapeuten du kommer til vil utføre en grundig undersøkelse og vurdere hvilken type behandling eller hvilke kombinasjoner av behandlinger som er mest effektiv for din helse. Plexusklinikken har mange samarbeidspartnere som er til din fordel.</p>
                                <p>I tillegg til behandling, holder våre terapeuter foredrag for klubber (utøvere/trenere) som ønsker å lære mer om: - Skadeforebygging - Kosthold og ernæring for idrettsutøvere - Restitusjon - Teipekurs- førstehjelpskurs. Plexusklinikken tilbyr også coaching for enkeltpersoner og lag.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {this.props.articles && this.props.articles.map((article, i) => (
                    <section key={article.sys.id} className="collapsed white">
                        <ArticleSummary article={article} index={i} />
                    </section>
                ))}

                <section className="section">
                    <EmployeeList title={this.props.employeeListTitle} employees={this.props.employees}/>
                </section>

                <section>
                    <Partners/>
                </section>
            </Layout>
        );
    }
}

function mapStateToProps(state, props) {
    // const service = state[state.activePage].services && state[state.activePage].services.find(service => service.sys.id === props.sys.id);
    // const assets = {
    //     image: state[state.activePage].assets && state[state.activePage].assets.find(image => image.sys.id === service.fields.image.sys.id)
    // }
    const articles = [];
    if(state.pages[state.activePage]) {
        state.pages[state.activePage].articles.map(id => {
            let entry = state.entries && values(state.entries).find(entry => entry.sys.id === id);
            articles.push(entry);
        });
    }

    const employees = [];
    if(state.pages[state.activePage]) {
        state.pages[state.activePage].employees.map(id => {
            let entry = state.entries && values(state.entries).find(entry => entry.sys.id === id);
            employees.push(entry);
        });
    }

    const partners = [];
    if(state.pages[state.activePage]) {
        state.pages[state.activePage].partners.map(id => {
            let entry = state.entries && values(state.entries).find(entry => entry.sys.id === id);
            partners.push(entry);
        });
    }

    return {
        pageTitle: state.pages[state.activePage] ? state.pages[state.activePage].title : null,
        pageSummary: state.pages[state.activePage] ? state.pages[state.activePage].summary : null,
        articles: articles,
        employees: employees,
        partners: partners,
        employeeListTitle: state.pages[state.activePage] ? state.pages[state.activePage].employeeListTitle : null,
    }
}

export default connect(mapStateToProps)(About)
