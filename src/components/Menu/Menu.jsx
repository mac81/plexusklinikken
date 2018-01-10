import React, { Component } from "react";
import { Link } from "react-router";
import matchMedia from "matchmedia";
//import ReactTooltip from 'react-tooltip';

import styles from "../../scss/app.scss";

var Modal = require("boron/OutlineModal");

import modalStyles from "../ModalWrapper/modal.scss";

import { Button, ModalButton } from "../";

class Menu extends Component {
  showModal = () => {
    this.refs.modal.show();
  };

  hideModal = () => {
    this.refs.modal.hide();
  };

  render() {
    let wrapperClass =
      this.props.mode === "inverted"
        ? styles.menu_wrapper + " " + styles.inverted
        : styles.menu_wrapper;
    //let wrapperClass = styles.menu_wrapper + ' ' + styles.inverted;

    const modalStyle = {
      width: matchMedia("only screen and (min-width: 1280px)").matches
        ? "60%"
        : "100%",
      height: matchMedia("only screen and (max-width: 1279px)").matches
        ? "100%"
        : "auto",
      overflow: "scroll",
      backgroundColor: "#fff"
    };

    const backdropStyle = {
      backgroundColor: "rgba(32, 39, 68, 0.9)"
    };

    const contentStyle = {
      height: "100%",
      padding: matchMedia("only screen and (max-width: 1279px)").matches
        ? "10px"
        : "30px"
    };

    return (
      <div className={wrapperClass}>
        <nav>
          <ul className={styles.nav_primary}>
            <li>
              <Link
                className={this.props.pathname === "/" ? styles.active : null}
                to="/"
              >
                Forsiden
              </Link>
            </li>
            <li>
              <Link
                className={
                  this.props.pathname === "/behandlinger" ? styles.active : null
                }
                to="/behandlinger"
              >
                Behandlingstilbud
              </Link>
            </li>
            <li>
              <Link
                className={
                  this.props.pathname === "/legekontor" ? styles.active : null
                }
                to="/legekontor"
              >
                Ski Legesenter
              </Link>
            </li>
            <li>
              <Link
                className={
                  this.props.pathname === "/trening" ? styles.active : null
                }
                to="/trening"
              >
                Plexus Trening
              </Link>
            </li>
            <li>
              <Link
                className={
                  this.props.pathname === "/morogbarn" ? styles.active : null
                }
                to="/morogbarn"
              >
                Mor & Barn
              </Link>
            </li>
            <li>
              <Link
                className={
                  this.props.pathname === "/priser" ? styles.active : null
                }
                to="/priser"
              >
                Priser
              </Link>
            </li>
            <li>
              <Link
                className={this.props.pathname === "/om" ? styles.active : null}
                to="/om"
              >
                Om oss
              </Link>
            </li>
            <li>
              <Link
                className={
                  this.props.pathname === "/kontakt" ? styles.active : null
                }
                to="/kontakt"
              >
                Kontakt oss
              </Link>
            </li>
          </ul>
        </nav>
        {/*<ul className={styles.socialMedia}>
                    <li>
                        <a href="#" className={styles.facebook} data-tip data-for="facebook"></a>
                        <ReactTooltip id='facebook' effect='solid' place="bottom" offset={{bottom: -5}} class={styles.socialMediaTooltip}>
                            <span>Facebook</span>
                        </ReactTooltip>
                    </li>
                    <li>
                        <a href="#" className={styles.twitter} data-tip data-for="twitter"></a>
                        <ReactTooltip id='twitter' effect='solid' place="bottom" offset={{bottom: -5}} class={styles.socialMediaTooltip}>
                            <span>Twitter</span>
                        </ReactTooltip>
                    </li>
                    <li>
                        <a href="#" className={styles.instagram} data-tip data-for="instagram"></a>
                        <ReactTooltip id='instagram' effect='solid' place="bottom" offset={{bottom: -5}} class={styles.socialMediaTooltip}>
                            <span>Instagram</span>
                        </ReactTooltip>
                    </li>
                    <li>
                        <a href="#" className={styles.linkedin} data-tip data-for="linkedin"></a>
                        <ReactTooltip id='linkedin' effect='solid' place="bottom" offset={{bottom: -5}} class={styles.socialMediaTooltip}>
                            <span>Linkedin</span>
                        </ReactTooltip>
                    </li>

                </ul>*/}
        <div className={styles.order}>
          <ModalButton
            text="Bestill time"
            target="modal"
            onClick={this.showModal}
          />
        </div>

        <Modal
          ref="modal"
          keyboard={this.callback}
          modalStyle={modalStyle}
          backdropStyle={backdropStyle}
          contentStyle={contentStyle}
        >
          <div className={modalStyles.container}>
            <button onClick={this.hideModal} className={modalStyles.close} />
            <h1>Bestill time</h1>
            <div className={modalStyles.wrapper}>
              <div>
                <h2>Plexusklinikken</h2>
                <p>Her kan du bestille timer hos Plexusklinikken</p>
                <a
                  href="https://plexusklinikken.bestille.no"
                  className="button button--winona"
                  target="_blank"
                  data-text="Bestill behandling"
                >
                  <span>Bestill behandling</span>
                </a>
                <a
                  href="https://plexusklinikken.bestille.no/Course/"
                  className={`button button--winona ${modalStyles.orderGroup}`}
                  target="_blank"
                  data-text="Bestill gruppetime"
                >
                  <span>Bestill gruppetime</span>
                </a>
              </div>
              <div>
                <h2>Ski legesenter</h2>
                <p>Her kan du bestille timer hos legen</p>
                <a
                  href="https://my.pasientsky.no/no/login"
                  className="button button--winona"
                  target="_blank"
                  data-text="Bestill legetime"
                >
                  <span>Bestill legetime</span>
                </a>
              </div>
            </div>
            <p
            >{`Usikker på hvilken behandling du behøver vennligst ta kontakt på tlf: 40 44 44 10`}</p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Menu;
