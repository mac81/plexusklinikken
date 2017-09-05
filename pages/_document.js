import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";
import { StyleSheetServer } from "aphrodite";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    //const { html, head, errorHtml, chunks } = renderPage();
    const { html, css } = StyleSheetServer.renderStatic(() => renderPage());
    //const styles = flush();
    //return { html, head, errorHtml, chunks, styles };
    return { ...html, css };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Plexusklinikken</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <style
            dangerouslySetInnerHTML={{ __html: this.props.css.content }}
            data-aphrodite=""
          />
          <link rel="stylesheet" type="text/css" href="/static/app.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
