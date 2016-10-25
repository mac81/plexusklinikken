import React, { Component } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Scroll from 'react-scroll';

import Layout from '../components/Layout';
import Slider from 'react-slick';
import EmployeeLink from '../components/Employees/EmployeeLink';
import { Button, ArticleBlock, ArticleSummary, PageIntro } from '../components';

import { Link } from 'react-router';
import styles from '../components/PageIntro/_pageIntro.scss';

class Frontpage extends Component {
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
                <PageIntro background={this.props.pageBackgroundImage && this.props.pageBackgroundImage.fields.file.url}>
                    <h1 className="pageintro-heading">{this.props.pageTitle}</h1>
                    <h2 className="pageintro-subheading">{this.props.pageSummary}</h2>
                    <ul className="list">
                        <li>
                            <Link to="/" className="button button--winona inverted" data-text="Bestill time"><span>Bestill time</span></Link>
                        </li>
                        <li>
                            <Link to="/behandlinger" className="button button--winona inverted" data-text="Behandlingstilbud"><span>Behandlingstilbud</span></Link>
                        </li>
                        <li>
                            <Link to="/trening" className="button button--winona inverted" data-text="Plexus Trening"><span>Plexus Trening</span></Link>
                        </li>
                    </ul>
                </PageIntro>

                {firstArticle && (
                    <Element name="scrollTo">
                        <section key={firstArticle.sys.id} className="collapsed white">
                            <ArticleSummary article={firstArticle} index={0} />
                        </section>
                    </Element>
                )}

                {/*<section className="collapsed">
                    {this.props.articles && this.props.articles.map((article, i) => (
                        <ArticleSummary article={article} index={i} />
                    ))}
                </section>

                {this.props.employees && this.props.employees.length && (
                    <section className="section">
                        <div className="slider-wrapper">
                            <h2 className="heading-medium centered">Våre terapeuter</h2>
                            <Slider {...settings}>
                                {this.props.employees.map(e => (
                                    <div key={e.sys.id}>
                                        <EmployeeLink id={e.sys.id} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </section>
                )*/}
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
        pageBackgroundImage: state.pages[state.activePage] ? state.pages[state.activePage].backgroundImage : null,
        articles: entries
    }
}

export default connect(mapStateToProps)(Frontpage);
//export default (mapStateToProps)(Index)
