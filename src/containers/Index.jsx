import React, { Component } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Scroll from 'react-scroll';

import Layout from '../components/Layout';
import Slider from 'react-slick';
import Employee from '../components/Employees/Employee';
import { Button, ArticleBlock, ArticleSummary, PageIntro } from '../components';

import styles from '../scss/_treatments.scss';

class Index extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            adaptiveHeight: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1,
            centerMode: true,
            centerPadding: 100
        };

        let firstArticle = this.props.articles ? this.props.articles[0] : null;
        const Element = Scroll.Element;

        return (
            <Layout location={this.props.location}>
                <PageIntro/>

                    <Element name="test1" className="element">
              test 1
            </Element>
                {firstArticle && (
                    <section key={firstArticle.sys.id}>xxx
                        <ArticleSummary article={firstArticle} />
                    </section>
                )}

                <section className="collapsed">
                    <ul className="list">
                        {this.props.articles && this.props.articles.map((article, i) => (
                            i > 0 && (
                                <li key={i}>
                                    <ArticleBlock {...article} index={i} />
                                </li>
                            )
                        ))}
                    </ul>
                </section>

                {this.props.employees && this.props.employees.length && (
                    <section className="section">
                        <div className="slider-wrapper">
                            <h2 className="heading-medium centered">Våre terapeuter</h2>
                            <Slider {...settings}>
                                {this.props.employees.map(e => (
                                    <div key={e.sys.id}>
                                        <Employee id={e.sys.id} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </section>
                )}
            </Layout>
        );
    }
}

function mapStateToProps(state, props) {
    // const service = state[state.activePage].services && state[state.activePage].services.find(service => service.sys.id === props.sys.id);
    // const assets = {
    //     image: state[state.activePage].assets && state[state.activePage].assets.find(image => image.sys.id === service.fields.image.sys.id)
    // }
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
        articles: entries
    }
}

export default connect(mapStateToProps)(Index);
//export default (mapStateToProps)(Index)
