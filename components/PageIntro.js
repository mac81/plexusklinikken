// import React, { Component } from 'react';
// import Scroll from 'react-scroll';

// Components
//import { Button } from '../';

// Styles
//import styles from './_pageIntro.scss';

// Class
class PageIntro extends React.Component {
  render() {

    const {backgroundImage} = this.props;
    //const ScrollTo = Scroll.Link;
    //const bgClass = styles.bg + ' ' + styles[this.props.background];

    //const pageIntroClass = this.props.frontpage ? `${styles.pageIntro} ${styles.frontpage}` : styles.pageIntro;

    const pageIntroStyles = {
        display: 'block',
        textAlign: 'center',
        position: 'relative',
      height: '100%'
      };


    const backgroundStyles = {
      width: '100%',
      height: '100%',
      overflowX: 'hidden',
      padding: '30px',
      backgroundColor: 'rgba(32, 39, 68, 0.8)',
      backgroundImage: `-moz-linear-gradient(top, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${backgroundImage})`,
      backgroundImage: `-ms-linear-gradient(top, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${backgroundImage})`,
      backgroundImage: `-webkit-linear-gradient(top, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${backgroundImage})`,
      backgroundImage: `linear-gradient(180deg, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: '50%'
    }

    return (
      <div style={pageIntroStyles}>
        <div style={backgroundStyles}>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default PageIntro;