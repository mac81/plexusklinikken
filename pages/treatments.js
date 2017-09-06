import fetch from "isomorphic-unfetch";
import { createClient } from "contentful";
import Link from "next/link";

import Layout from "../layouts/Layout";

export class Treatments extends React.Component {
  // static async getInitialProps({req}) {
  //   const client = createClient({
  //     space: '2omch4pe7no2',
  //     accessToken: '6274e3bdae4a785f1e1056c870a301b6a7d8bc893e69655354fc6ec439343fe6'
  //   });
  //
  //   const data = await client.getEntries({content_type: 'sideBehandlingstilbud', include: 2})
  //     .then(function (response) {
  //
  //       return {
  //         response: response,
  //         treatments: {
  //           title: response.items[0].fields.treatments.fields.title,
  //           items: response.items[0].fields.treatments.fields.treatments
  //         }
  //       };
  //     });
  //
  //   return data;
  // }

  render() {
    console.log(this.props);

    const { treatments } = this.props;

    return (
      <Layout>
        <h1>{treatments.title}</h1>
        <ul>
          {treatments.items.map(treatment => (
            <li>
              <Link href={`/behandlinger/${treatment.sys.id}`}>
                <a>
                  <h3 className="heading-medium">{treatment.fields.name}</h3>
                  <p>{treatment.fields.summary}</p>
                  <button>Les mer</button>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}

export default Treatments;
