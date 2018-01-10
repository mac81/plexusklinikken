import React, { Component } from "react";
import { connect } from "react-redux";
import { values } from "lodash";

import Layout from "../components/Layout";
import EmployeeLink from "../components/Employees/EmployeeLink";
import { EmployeeList, ArticleSummary, ArticleBlock } from "../components";

import Scroll from "react-scroll";

// Styles
import styles from "../scss/_training.scss";
import pageIntroStyles from "../components/PageIntro/_pageIntro.scss";

import { PageIntro } from "../components";

class MotherAndChild extends Component {
  render() {
    const ScrollTo = Scroll.Link;
    const Element = Scroll.Element;

    return (
      <Layout location={this.props.location}>
        <PageIntro
          background={
            this.props.pageBackgroundImage &&
            this.props.pageBackgroundImage.fields.file.url
          }
        >
          {this.props.pageTitle && (
            <h1 className={pageIntroStyles.heading}>{this.props.pageTitle}</h1>
          )}
          {this.props.pageSummary && (
            <h2 className={pageIntroStyles.subHeading}>
              {this.props.pageSummary}
            </h2>
          )}
        </PageIntro>

        <Element name="scrollTo">
          <section className="collapsed">
            {this.props.articles.map((article, index) => (
              <ArticleBlock key={index} article={article} index={index} />
            ))}
          </section>

          <section className="section">
            <EmployeeList
              title="Våre mor og barn terapeuter"
              summary=""
              employees={this.props.employees}
            />
          </section>
        </Element>
      </Layout>
    );
  }
}

function mapStateToProps(state, props) {
  const employees = [];
  if (state.pages[state.activePage]) {
    state.pages[state.activePage].employees.map(id => {
      let entry =
        state.entries &&
        values(state.entries).find(entry => entry.sys.id === id);
      employees.push(entry);
    });
  }

  const entries = [];
  if (state.pages[state.activePage]) {
    state.pages[state.activePage].articles.map(id => {
      let entry =
        state.entries &&
        values(state.entries).find(entry => entry.sys.id === id);
      entries.push(entry);
    });
  }

  return {
    pageTitle: state.pages[state.activePage]
      ? state.pages[state.activePage].title
      : null,
    pageSummary: state.pages[state.activePage]
      ? state.pages[state.activePage].summary
      : null,
    pageBackgroundImage: state.pages[state.activePage]
      ? state.pages[state.activePage].backgroundImage
      : null,
    articles: entries,
    employees
  };
}

export default connect(mapStateToProps)(MotherAndChild);
