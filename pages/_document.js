import Document, { Head, Main, NextScript } from "next/document";
// import flush from "styled-jsx/server";
import { StyleSheetServer } from "aphrodite";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    //const { html, head, errorHtml, chunks } = renderPage();
    const { html, css } = StyleSheetServer.renderStatic(() => renderPage());
    // //const styles = flush();
    //return { html, head, errorHtml, chunks };
    return { ...html, css };
  }

  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();

    return (
      <html>
        <Head>
          <title>Plexusklinikken</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="stylesheet" type="text/css" href="/static/app.css" />
          {styleTags}
        </Head>
        <body>
          {main}
          <NextScript />
        </body>
      </html>
    );
  }
}
