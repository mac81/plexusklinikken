import React, { Component } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';

import Layout from '../components/Layout';
import EmployeeLink from '../components/Employees/EmployeeLink';
import { EmployeeList, ArticleSummary, ArticleBlock } from '../components';



import Scroll from 'react-scroll';

import styles from '../scss/_training.scss';

import { PageIntro } from '../components';

class Training extends Component {
    render() {
        const ScrollTo = Scroll.Link;
        const Element = Scroll.Element;
        let { pageTitle, pageSummary } = this.props;
        console.log(this.props.articles)
        return (
            <Layout location={this.props.location}>

                <PageIntro background="training">
                    <h1 className="pageintro-heading">{pageTitle}</h1>
                    <h2 className="pageintro-subheading">{pageSummary}</h2>
                </PageIntro>

                <Element name="scrollTo">
                    <section className="collapsed">
                        {this.props.articles.map((article, index) => (
                            <ArticleBlock article={article} index={index} />
                        ))}
                    </section>

                    <section className="section">
                        <EmployeeList title="Personlig trenere" summary="Våre personlig trenere har høyskoleutdanning innen personlig trening, osteopati og naprapati. De har bred erfaring med ulike treningsformer, og spesialkompetanse til å tilrettelegge individuelle treningsprogram." employees={this.props.employees} />
                    </section>
                </Element>


            </Layout>
        );
    }
}

function mapStateToProps(state, props) {

    const employees = [];
    if(state.pages[state.activePage]) {
        state.pages[state.activePage].employees.map(id => {
            let entry = state.entries && values(state.entries).find(entry => entry.sys.id === id);
            employees.push(entry);
        });
    }

    const entries = [];
    if(state.pages[state.activePage]) {
        state.pages[state.activePage].articles.map(id => {
            let entry = state.entries && values(state.entries).find(entry => entry.sys.id === id);
            entries.push(entry);
        });
    }

    return {
        pageTitle: state.pages[state.activePage] ? state.pages[state.activePage].title : null,
        pageSummary: state.pages[state.activePage] ? state.pages[state.activePage].summary : null,
        articles: entries,
        employees
    }
}

export default connect(mapStateToProps)(Training);
