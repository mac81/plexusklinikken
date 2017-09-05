import { createClient } from "contentful";
import marked from "marked";
import { StyleSheet, css } from "aphrodite";

import Layout from "../layouts/Layout";

export class Article extends React.Component {
  static async getInitialProps({ query }) {
    const client = createClient({
      space: "2omch4pe7no2",
      accessToken:
        "6274e3bdae4a785f1e1056c870a301b6a7d8bc893e69655354fc6ec439343fe6"
    });

    const entry = await client.getEntry(query.id).then(response => {
      return {
        response: response,
        title: response.fields.title,
        summary: response.fields.summary,
        body: response.fields.body
      };
    });

    return entry;
  }

  render() {
    marked.setOptions({
      breaks: true
    });

    const { title, summary, body } = this.props;

    return (
      <Layout>
        <article className={css(styles.article)}>
          <h1 className={css(styles.header)}>{title}</h1>
          <p className={css(styles.summary)}>{summary}</p>
          <div
            className={css(styles.body)}
            dangerouslySetInnerHTML={{ __html: marked(body) }}
          />
        </article>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  article: {
    backgroundColor: "#f1f1f1",
    padding: "80px"
  },
  header: {
    fontWeight: 300,
    color: "#202744",
    lineHeight: 1,
    margin: "0 0 40px",
    fontSize: "112px",
    textAlign: "center"
  },
  summary: {
    fontSize: "20px",
    margin: "0 auto 40px auto",
    textAlign: "center",
    fontSize: "24px",
    maxWidth: "600px",
    margin: "0 auto 80px auto"
  },
  body: {
    maxWidth: "800px",
    margin: "0 auto",
    fontSize: "15px"
  }
});

export default Article;
