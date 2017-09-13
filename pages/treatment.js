import { createClient } from "contentful";
import marked from "marked";

import Layout from "../layouts/Layout";

export class Treatment extends React.Component {
  static async getInitialProps({ query }) {
    const client = createClient({
      space: "2omch4pe7no2",
      accessToken:
        "6274e3bdae4a785f1e1056c870a301b6a7d8bc893e69655354fc6ec439343fe6"
    });

    const entry = await client.getEntry(query.id).then(response => {
      return {
        response: response,
        name: response.fields.name,
        summary: response.fields.summary,
        body: response.fields.body
      };
    });

    return entry;
  }

  render() {
    const { name, summary, body } = this.props;

    return (
      <Layout isSolidMenu>
        <h1>{name}</h1>
        <p>{summary}</p>
        <div dangerouslySetInnerHTML={{ __html: marked(body) }} />
      </Layout>
    );
  }
}

export default Treatment;
