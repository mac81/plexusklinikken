import {createClient} from 'contentful';
import marked from 'marked';

import {articleStyles, headerStyles, summaryStyles, bodyStyles} from '../styles/article';

import Layout from '../layouts/Layout';

export class Article extends React.Component {

  static async getInitialProps({query}) {

    const client = createClient({
      space: '2omch4pe7no2',
      accessToken: '6274e3bdae4a785f1e1056c870a301b6a7d8bc893e69655354fc6ec439343fe6'
    });

    const entry = await client.getEntry(query.id)
    .then(response => {
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

    const {title, summary, body} = this.props;

    return (
      <Layout>
        <article>
        <style jsx>{articleStyles}</style>
          <h1>{title}</h1>
          <style jsx>{headerStyles}</style>
          <p className="test">{summary}</p>
          <style jsx>{summaryStyles}</style>
          <div dangerouslySetInnerHTML={{__html: marked(body)}}></div>
          <style jsx>{bodyStyles}</style>
        </article>
      </Layout>
    )
  }
}

export default Article