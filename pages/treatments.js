import fetch from "isomorphic-unfetch";
import { createClient } from "contentful";
import Link from "next/link";
import styled from "styled-components";

import Layout from "../layouts/Layout";
import PageIntro from "@/components/PageIntro";
import Anchor from "@/components/Anchor";

/********
 * Styles
 *******/

const TreatmentList = styled.div`
  background-color: #f1f1f1;
  ul {
    margin: 0 auto;
    padding: 30px 0;
    list-style-type: none;
    max-width: 1260px;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    flex: 0 1 50%;
    border: 30px solid #f1f1f1;
    background-color: #fff;
  }

  a {
    display: block;
    padding: 30px;
  }

  h3 {
    font-size: 36px;
    margin: 0 0 10px 0;
  }
`;

/***********
 * Component
 **********/

export class Treatments extends React.Component {
  static async getInitialProps({ req }) {
    const client = createClient({
      space: "2omch4pe7no2",
      accessToken:
        "6274e3bdae4a785f1e1056c870a301b6a7d8bc893e69655354fc6ec439343fe6"
    });

    const data = await client
      .getEntries({ content_type: "sideBehandlingstilbud", include: 2 })
      .then(function(response) {
        return {
          response: response,
          title: response.items[0].fields.title,
          summary: response.items[0].fields.summary,
          backgroundImage:
            response.items[0].fields.backgroundImage.fields.file.url,
          treatments: {
            title: response.items[0].fields.treatments.fields.title,
            items: response.items[0].fields.treatments.fields.treatments
          }
        };
      });

    return data;
  }

  render() {
    console.log(this.props);

    const { title, summary, backgroundImage, treatments } = this.props;

    return (
      <Layout>
        <PageIntro
          title={title}
          summary={summary}
          backgroundImage={backgroundImage}
        />

        <TreatmentList>
          <ul>
            {treatments.items.map(treatment => (
              <li key={treatment.sys.id}>
                <Anchor
                  href={{
                    pathname: "/behandlinger",
                    query: { id: treatment.sys.id }
                  }}
                  as={`/behandlinger/${treatment.sys.id}`}
                >
                  <h3 className="heading-medium">{treatment.fields.name}</h3>
                  <p>{treatment.fields.summary}</p>
                  <button>Les mer</button>
                </Anchor>
              </li>
            ))}
          </ul>
        </TreatmentList>
      </Layout>
    );
  }
}

export default Treatments;
