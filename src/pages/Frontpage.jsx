import React, { Component } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Scroll from 'react-scroll';
import matchMedia from 'matchmedia';

import Layout from '../components/Layout';
import Slider from 'react-slick';
import EmployeeLink from '../components/Employees/EmployeeLink';
import { Button, ArticleBlock, ArticleSummary, PageIntro, ModalButton } from '../components';

import { Link } from 'react-router';
import styles from '../components/PageIntro/_pageIntro.scss';

var Modal = require('boron/OutlineModal');

// Styles
import modalStyles from '../components/ModalWrapper/modal.scss';
import pageIntroStyles from '../components/PageIntro/_pageIntro.scss';

class Frontpage extends Component {

    constructor() {
        super();
    }

    showModal = () => {
        this.refs.modal.show();
    }

    hideModal = () => {
        this.refs.modal.hide();
    }

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
        let otherArticles = this.props.articles.filter((article, index) => {
            return index > 0 ;
        });
        const Element = Scroll.Element;

        const modalStyle = {
            width: matchMedia('only screen and (min-width: 1024px)').matches ? '60%' : '100%',
            height: matchMedia('only screen and (max-width: 1024px)').matches ? '100%' : 'auto',
            overflow: 'scroll',
            backgroundColor: '#fff'
        };

        const backdropStyle = {
            backgroundColor: 'rgba(32, 39, 68, 0.9)'
        };

        const contentStyle = {
            height: '100%',
            padding: matchMedia('only screen and (max-width: 1024px)').matches ? '10px' : '30px',
        };

        return (
            <Layout location={this.props.location}>
                <PageIntro frontpage={true} background={this.props.pageBackgroundImage && this.props.pageBackgroundImage.fields.file.url}>
                    {this.props.pageTitle && (<h1 className={pageIntroStyles.heading}>{this.props.pageTitle}</h1>)}
                    {this.props.pageSummary && (<h2 className={pageIntroStyles.subHeading}>{this.props.pageSummary}</h2>)}
                    <ul className="list">
                        <li>
                            <ModalButton frontpage={true} text="Bestill time" target="modal" onClick={this.showModal}/>
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

                {otherArticles.map((article, index) => (
                    <section key={article.sys.id} className="collapsed inverted">
                        <ArticleSummary article={article} index={index} />
                    </section>
                ))}

                <Modal ref="modal" keyboard={this.callback} modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
                    <div className={modalStyles.container}>
                        <button onClick={this.hideModal} className={modalStyles.close}></button>
                        <h1>Bestill time</h1>
                        <div className={modalStyles.wrapper}>
                            <div>
                                <h2>Plexusklinikken</h2>
                                <p>Her kan du bestille timer hos Plexusklinikken</p>
                                <a href="https://plexusklinikken.bestille.no" className="button button--winona" target="_blank" data-text="Bestill behandling"><span>Bestill behandling</span></a>
                            </div>
                            <div>
                                <h2>Ski legesenter</h2>
                                <p>Her kan du bestille timer hos legen</p>
                                <a href="https://my.pasientsky.no/no/login" className="button button--winona" target="_blank" data-text="Bestill legetime"><span>Bestill legetime</span></a>
                            </div>
                        </div>
                        <p>{`Usikker på hvilken behandling du behøver vennligst ta kontakt på tlf: 40 44 44 10`}</p>
                    </div>
                </Modal>

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
