import React, { Component } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';

// Layout
import Layout from '../components/Layout';

// Components
import { ArticleSummary, EmployeeList, Partners, Text } from '../components';

class About extends Component {
    render() {
        return (
            <Layout location={this.props.location}>
                <section className="first">
                    <article className="container-small">
                        <div className="article-content">
                            <h1 className="heading-xlarge centered">{this.props.pageTitle}</h1>
                            {this.props.pageSummary && (<p className="excerpt centered">{this.props.pageSummary}</p>)}
                            <Text>{this.props.pageBody}</Text>
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
        pageBody: state.pages[state.activePage] ? state.pages[state.activePage].body : null,
        articles: articles,
        employees: employees,
        partners: partners,
        employeeListTitle: state.pages[state.activePage] ? state.pages[state.activePage].employeeListTitle : null,
    }
}

export default connect(mapStateToProps)(About)
