import React, { Component } from "react";
import Link from "next/link";
import { StyleSheet, css } from "aphrodite";
import { colors } from "../variables/colors";
import { slide as MenuWrapper } from "react-burger-menu";

class Menu extends Component {
  render() {
    const { id, pathname, as, children } = this.props;

    let menuStyles = {
      bmBurgerButton: {
        position: "fixed",
        zIndex: 4,
        width: "86px",
        height: "30px",
        right: "36px",
        top: "25px",
        display: "flex"
      },
      bmBurgerBars: {
        background: "#fff"
      },
      bmCrossButton: {
        height: "24px",
        width: "24px"
      },
      bmCross: {
        background: "#bdc3c7"
      },
      bmMenuWrap: {
        top: 0,
        zIndex: 5
      },
      bmMorphShape: {
        fill: "#373a47"
      },
      bmOverlay: {
        background: "rgba(35, 52, 69, 0.7)"
      }
    };

    return (
      <MenuWrapper
        right
        width={"20%"}
        styles={menuStyles}
        customBurgerIcon={
          <div>
            <div className={css(styles.burgerIcon)}>
              <span className={css(styles.burgerLabel)}>Meny</span>
              <svg
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                />
              </svg>
            </div>custom
          </div>
        }
      >
        <nav className={css(styles.menuWrapper)}>
          <ul className={css(styles.menu)}>
            <li className={css(styles.menuItem)}>
              <Link href="/">
                <a className={css(styles.link)}>Forsiden</a>
              </Link>
            </li>
            <li className={css(styles.menuItem)}>
              <Link href="/treatments" as="behandlinger">
                <a className={css(styles.link)}>Behandlingstilbud</a>
              </Link>
            </li>
            <li className={css(styles.menuItem)}>
              <Link href="/legekontor">
                <a className={css(styles.link)}>Ski Legesenter</a>
              </Link>
            </li>
            <li className={css(styles.menuItem)}>
              <Link href="/trening">
                <a className={css(styles.link)}>Plexus Trening</a>
              </Link>
            </li>
            <li className={css(styles.menuItem)}>
              <Link href="/om">
                <a className={css(styles.link)}>Om oss</a>
              </Link>
            </li>
            <li className={css(styles.menuItem)}>
              <Link href="/kontakt">
                <a className={css(styles.link)}>Kontakt oss</a>
              </Link>
            </li>
          </ul>
        </nav>
      </MenuWrapper>
    );
  }
}

const styles = StyleSheet.create({
  menuWrapper: {
    height: "100%"
  },
  burgerIcon: {
    display: "flex",
    fontSize: "20px",
    justifyContent: "space-between"
  },
  burgerbarOne: {
    top: "20%"
  },
  burgerbarTwo: {
    top: "40%"
  },
  burgerbarThree: {
    top: "80%"
  },
  burgerLabel: {
    color: "#fff"
  },
  menu: {
    height: "100%",
    backgroundColor: "rgb(32,39,68)",
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  menuItem: {
    padding: "0 30px"
  },
  link: {
    color: "#fff",
    textTransform: "uppercase"
  }
});

export default Menu;
