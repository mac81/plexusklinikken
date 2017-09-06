import fetch from "isomorphic-unfetch";
import { createClient } from "contentful";
import Link from "next/link";
import { StyleSheet, css } from "aphrodite";

import Layout from "../layouts/Layout";
import PageIntro from "@/components/PageIntro";
import ArticleSummary from "@/components/ArticleSummary";

export class Index extends React.Component {
  static async getInitialProps({ req }) {
    const client = createClient({
      space: "2omch4pe7no2",
      accessToken:
        "6274e3bdae4a785f1e1056c870a301b6a7d8bc893e69655354fc6ec439343fe6"
    });

    const data = await client
      .getEntries({ content_type: "pageIndex", include: 2 })
      .then(function(response) {
        return {
          response: response,
          title: response.items[0].fields.title,
          summary: response.items[0].fields.summary,
          backgroundImage:
            response.items[0].fields.backgroundImage.fields.file.url,
          articles: response.items[0].fields.articles.filter(
            article => article.fields
          )
        };
      });

    return data;
  }

  render() {
    console.log(this.props);

    const { title, summary, backgroundImage, articles } = this.props;

    return (
      <Layout>
        <PageIntro backgroundImage={backgroundImage}>
          <h1 className={css(styles.heading)}>{title}</h1>
          <h2 className={css(styles.subHeading)}>{summary}</h2>
          <ul className={css(styles.actions)}>
            <li className={css(styles.actionItem)}>
              Bestill time
              {/*<ModalButton frontpage={true} text="Bestill time" target="modal" onClick={this.showModal}/>*/}
            </li>
            <li className={css(styles.actionItem)}>
              <Link
                href="/behandlinger"
                className="button button--winona inverted"
                data-text="Behandlingstilbud"
              >
                <a>Behandlingstilbud</a>
              </Link>
            </li>
            <li className={css(styles.actionItem)}>
              <Link
                href="/trening"
                className="button button--winona inverted"
                data-text="Plexus Trening"
              >
                <a>Plexus Trening</a>
              </Link>
            </li>
          </ul>
        </PageIntro>

        <div>
          {articles.map((article, index) => (
            <ArticleSummary
              key={article.sys.id}
              index={index}
              article={article}
            />
          ))}
        </div>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: "112px",
    color: "#fff",
    margin: "0 0 10px 0"
  },
  subHeading: {
    fontSize: "34px",
    color: "#fff",
    margin: "0 0 30px 0"
  },
  actions: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  actionItem: {
    padding: "0 30px"
  }
});

export default Index;
