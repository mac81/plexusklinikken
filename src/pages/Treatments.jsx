import React, { Component } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import marked from 'marked';
import Scroll from 'react-scroll';

import Layout from '../components/Layout';
import { ArticleBlock, Button, Services, TreatmentList, PageIntro } from '../components';

import test from '../scss/_training.scss';

class Treatments extends Component {
    render() {
        const Element = Scroll.Element;
        return (
            <Layout location={this.props.location}>
                {/*<div className={test.header}>
                    <div className={test.bg}>
                        <div>
                            <h1 className="heading-xlarge">{this.props.introArticle.fields.title}</h1>
                            <h2 className="heading-medium">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.</h2>
                        </div>
                    </div>
                </div>*/}
                <div>
                    {this.props.introArticle && (
                        <PageIntro background={this.props.pageBackgroundImage && this.props.pageBackgroundImage.fields.file.url}>
                            <h1 className="pageintro-heading">{this.props.pageTitle}</h1>
                            <h2 className="pageintro-subheading">{this.props.pageSummary}</h2>
                            <div className="pageintro-content" dangerouslySetInnerHTML={{__html: marked(this.props.pageText)}} />
                        </PageIntro>
                    )}

                    <Element name="scrollTo">
                        <TreatmentList/>
                    </Element>

                    <section>
                        <div className="content centered">
                            <Services/>
                        </div>
                    </section>

                    {/*<section className="collapsed">
                        {this.props.articles && this.props.articles.map((article, i) => (
                            <ArticleBlock key={article.sys.id} {...article} index={i} />
                        ))}
                    </section>*/}

                </div>
            </Layout>
        );
    }
}

function mapStateToProps(state) {

    const introArticle = state.pages[state.activePage] && state.entries[state.pages[state.activePage].introArticle[0]];

    const articles = [];
    if(state.pages[state.activePage]) {
        state.pages[state.activePage].articles.map(id => {
            let article = state.entries && values(state.entries).find(article => article.sys.id === id);
            articles.push(article);
        });
    }

    return {
        pageTitle: state.pages[state.activePage] ? state.pages[state.activePage].title : null,
        pageSummary: state.pages[state.activePage] ? state.pages[state.activePage].summary : null,
        pageBackgroundImage: state.pages[state.activePage] ? state.pages[state.activePage].backgroundImage : null,
        pageText: state.pages[state.activePage] ? state.pages[state.activePage].text : null,
        introArticle: introArticle,
        articles: articles
    }
}

export default connect(mapStateToProps)(Treatments);
