import React, { Component } from "react";
import Link from "next/link";
import { StyleSheet, css } from "aphrodite";
import { colors } from "../variables/colors";

class Anchor extends Component {
  render() {
    const { href, as, style: { inverted }, children } = this.props;

    return (
      <Link as={as} href={href}>
        <a
          className={css(
            styles.anchor,
            inverted ? styles.inverted : styles.normal
          )}
          data-text={children}
        >
          {children}
        </a>
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  anchor: {
    display: "inline-block",

    padding: "13px 29px",

    fontSize: "15px"
  },
  normal: {
    border: `1px solid ${colors.darkBlue}`,
    color: colors.darkBlue
  },
  inverted: {
    border: `1px solid #fff`,
    color: "#fff"
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
