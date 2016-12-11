import React, { Component } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import matchMedia from 'matchmedia';

// Layout
import Layout from '../components/Layout';

// Components
import { ArticleSummary, EmployeeList, Partners, Text } from '../components';

class Prices extends Component {

    render() {
        return (
            <Layout location={this.props.location}>
                <section className="first section-prices">
                    <article className="container">
                        <div className="article-content">
                            <h1 className="heading-xlarge centered">{this.props.pageTitle}</h1>
                            {this.props.pageSummary && (<p className="excerpt centered">{this.props.pageSummary}</p>)}
                        </div>
                        <div className="prices">
                            {values(this.props.entries).map((entry, i) => (
                                <div key={i} className="price-item">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="price-treatment">{(matchMedia('only screen and (max-width: 580px)').matches && entry.fields.treatment.indexOf('Trykk') !== -1) ? entry.fields.treatment.substring(0, 10) + '-' + entry.fields.treatment.substring(10, entry.fields.treatment.length) : entry.fields.treatment}</th>
                                                <th className="price-header">Ordinær</th>
                                                <th className="price-header">Medlemmer</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {entry.fields.priceText && entry.fields.priceText.map((pt, i) => (
                                                <tr key={i}>
                                                    <td className="price-text">{(matchMedia('only screen and (max-width: 580px)').matches && pt.indexOf('konsultasjon') !== -1) ? pt.substring(0, 11) + '-' + pt.substring(11, pt.length) : pt}</td>
                                                    <td className="price">{`${entry.fields.prices[i]},-`}</td>
                                                    {entry.fields.memberPrice && (
                                                        <td className="member-price">{`${entry.fields.memberPrice[i]},-`}</td>
                                                    )}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>

                    </article>
                </section>
            </Layout>
        );
    }
}

function mapStateToProps(state, props) {

    const entries = [];
    if(state.pages[state.activePage]) {
        state.pages[state.activePage].prices.map(id => {
            let entry = state.entries && values(state.entries).find(entry => entry.sys.id === id);
            entries.push(entry);
        });
    }

    return {
        pageTitle: state.pages[state.activePage] ? state.pages[state.activePage].title : null,
        pageSummary: state.pages[state.activePage] ? state.pages[state.activePage].summary : null,
        pageBody: state.pages[state.activePage] ? state.pages[state.activePage].body : null,
        entries: entries
    }
}

export default connect(mapStateToProps)(Prices)
