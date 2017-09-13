import React, { Component } from "react";
import Link from "next/link";
import { StyleSheet, css } from "aphrodite";
import { colors } from "../theme/colors";

class Footer extends Component {
  render() {
    const { id, pathname, as, children } = this.props;

    return <footer>Footer</footer>;
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

export default Footer;
