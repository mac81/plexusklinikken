import React, { Component } from "react";
import Link from "next/link";
import { StyleSheet, css } from "aphrodite";
import { colors } from "../theme/colors";

class Anchor extends Component {
  render() {
    const { href, as, children } = this.props;

    return (
      <Link as={as} href={href}>
        <a data-text={children}>{children}</a>
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
