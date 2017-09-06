import React, { Component } from "react";
import Link from "next/link";
import { StyleSheet, css } from "aphrodite";
import { colors } from "../variables/colors";
import Menu from "@/components/Menu";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      solidMenu: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    let scrollTop = event.srcElement.body.scrollTop;

    if (scrollTop >= 50) {
      this.setState({ solidMenu: true });
    } else {
      this.setState({ solidMenu: false });
    }
  };

  render() {
    const { id, pathname, as, children, solidMenu } = this.props;

    //const headerClass = (this.props.solidMenu || this.state.solidMenu) ? 'header solid' : 'header';

    return (
      <div
        className={css(
          styles.header,
          (solidMenu || this.state.solidMenu) && styles.headerSolid
        )}
      >
        <Link href="/">
          <a className={css(styles.logo)}>
            <img className={css(styles.image)} src="static/logo-blue.png" />
          </a>
        </Link>
        <Menu />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    position: "fixed",
    zIndex: "10",
    width: "100%",
    height: "80px",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background 300ms ease-in"
  },
  headerSolid: {
    backgroundColor: "rgba(32,39,68, 0.9)"
  },
  logo: {
    padding: "0 30px"
  },
  image: {
    position: "relative",
    top: 10,
    maxWidth: "150px"
  }
});

export default Header;
