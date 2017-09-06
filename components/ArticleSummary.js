import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { colors } from "../variables/colors";

// Components
import Anchor from "@/components/Anchor";

class ArticleSummary extends Component {
  render() {
    const {
      index,
      article: { sys: { id }, fields: { title, summary, image } }
    } = this.props;

    return (
      <div
        className={css(index % 2 === 1 && styles.even, styles.article)}
        // style={
        //   image && {
        //     backgroundImage: `url(${image.fields.file.url}`,
        //     backgroundSize: "contain",
        //     backgroundRepeat: "no-repeat"
        //   }
        // }
      >
        {/*{image && (*/}
        {/*<div>*/}
        {/*<img*/}
        {/*className={css(styles.image)}*/}
        {/*src={image.fields.file.url}*/}
        {/*alt={image.fields.file.fileName}*/}
        {/*/>*/}
        {/*</div>*/}
        {/*)}*/}

        <div className={css(styles.articleContent)}>
          <h2 className={css(index % 2 === 1 && styles.light, styles.header)}>
            {title}
          </h2>
          <p className={css(index % 2 === 1 && styles.light, styles.summary)}>
            {summary}
          </p>

          <Anchor
            href={{ pathname: "/article", query: { id: id } }}
            as={`/artikler/${id}`}
            style={{ inverted: index % 2 === 1 ? true : false }}
          >
            Les mer
          </Anchor>

          {/*<Link href={`/artikler/${id}`} className="button button--winona inverted" data-text="Les mer"><a>Les mer</a></Link>*/}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  article: {
    width: "100%"
  },
  articleContent: {
    padding: "60px 30px",
    maxWidth: "800px",
    margin: "0 auto"
  },
  image: {
    //maxWidth: "400px"
  },
  even: {
    backgroundColor: colors.darkBlue
  },
  header: {
    fontSize: "24px",
    margin: "0 0 20px 0"
  },
  light: {
    color: "rgba(255,255,255,0.8)"
  },
  summary: {
    margin: "0 0 20px 0"
  }
});

export default ArticleSummary;
