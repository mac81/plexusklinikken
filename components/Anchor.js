import React, { Component } from "react";
import Link from "next/link";
import { StyleSheet, css } from "aphrodite";
import { colors } from "../variables/colors";

class Anchor extends Component {
  render() {
    const { id, pathname, as, children } = this.props;

    return (
      <Link
        as={`/${as}/${id}`}
        href={{ pathname: `/${pathname}`, query: { id: id } }}
      >
        <a className={css(styles.anchor)} data-text={children}>
          {children}
        </a>
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  anchor: {
    display: "inline-block",
    border: `1px solid ${colors.darkBlue}`,
    padding: "13px 29px",
    color: colors.darkBlue,
    fontSize: "15px"
  },
  articleContent: {
    padding: "30px",
    maxWidth: "800px",
    margin: "0 auto"
  },
  image: {
    //maxWidth: "400px"
  },
  even: {
    backgroundColor: colors.darkBlue
  },
  header: {},
  light: {
    color: "#fff"
  }
});

export default Anchor;
