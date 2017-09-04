import fetch from 'isomorphic-unfetch';
import {createClient} from 'contentful';
import Link from 'next/link';

import Layout from '../layouts/Layout';
import PageIntro from '../components/PageIntro';
import ArticleSummary from '../components/ArticleSummary';

export class Index extends React.Component {

  static async getInitialProps({req}) {
    const client = createClient({
      space: '2omch4pe7no2',
      accessToken: '6274e3bdae4a785f1e1056c870a301b6a7d8bc893e69655354fc6ec439343fe6'
    });

    const data = await client.getEntries({content_type: 'pageIndex', include: 2})
      .then(function (response) {

        return {
          response: response,
          // title: response.items[0].fields.title,
          // backgroundImage: response.items[0].fields.backgroundImage.fields.file.url,
          articles: response.items[0].fields.articles.filter(article => article.fields)
        };
      });

    return data;
  }

  render() {
    console.log(this.props);

    const {title, backgroundImage, articles} = this.props;

    return (
      <Layout>
        <PageIntro backgroundImage={backgroundImage}>
          {title && (<h1>{title}</h1>)}
          {this.props.pageSummary && (<h2>{this.props.pageSummary}</h2>)}
          <ul className="list">
            <li>
              {/*<ModalButton frontpage={true} text="Bestill time" target="modal" onClick={this.showModal}/>*/}
            </li>
            <li>
              <Link href="/behandlinger" className="button button--winona inverted" data-text="Behandlingstilbud"><a>Behandlingstilbud</a></Link>
            </li>
            <li>
              <Link href="/trening" className="button button--winona inverted" data-text="Plexus Trening"><a>Plexus Trening</a></Link>
            </li>
          </ul>
        </PageIntro>

        <div>
          {articles.map(article => (
            <ArticleSummary key={article.sys.id} article={article} />
          ))}
        </div>
      </Layout>
    )
  }
}

export default Index;