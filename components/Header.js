import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import Menu from "@/components/Menu";

const StyledHeader = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 300ms ease-in;
  background-color: ${props =>
    props.isSolidMenu ? "rgba(32,39,68, 1)" : "transparent"};
`;

const Logo = styled.a`padding: 0 30px;`;

const Image = styled.img`
  position: relative;
  top: 10;
  max-width: 150px;
`;

class Header extends Component {
  constructor(props) {
    super();

    this.state = {
      isSolidMenu: props.isSolidMenu
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
      this.setState({ isSolidMenu: true });
    } else {
      this.setState({ isSolidMenu: false });
    }
  };

  render() {
    const { isSolidMenu } = this.state;

    return (
      <StyledHeader isSolidMenu={isSolidMenu}>
        <Link href="/">
          <Logo>
            <Image src="static/logo-blue.png" />
          </Logo>
        </Link>
        <Menu />
      </StyledHeader>
    );
  }
}

export default Header;
