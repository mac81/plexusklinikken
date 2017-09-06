// import Scroll from 'react-scroll';
import { StyleSheet, css } from "aphrodite";

// Components
//import { Button } from '../';

// Styles
//import styles from './_pageIntro.scss';

// Class
class PageIntro extends React.Component {
  render() {
    const { backgroundImage } = this.props;
    //const ScrollTo = Scroll.Link;
    //const bgClass = styles.bg + ' ' + styles[this.props.background];

    //const pageIntroClass = this.props.frontpage ? `${styles.pageIntro} ${styles.frontpage}` : styles.pageIntro;

    const backgroundStyles = {
      backgroundImage: `-moz-linear-gradient(top, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${backgroundImage})`,
      backgroundImage: `-ms-linear-gradient(top, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${backgroundImage})`,
      backgroundImage: `-webkit-linear-gradient(top, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${backgroundImage})`,
      backgroundImage: `linear-gradient(180deg, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${backgroundImage})`
    };

    return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.background)} style={backgroundStyles}>
          <div className={css(styles.content)}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "block",
    textAlign: "center",
    position: "relative",
    height: "100vh"
  },
  background: {
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    padding: "30px",
    backgroundSize: "cover",
    backgroundPosition: "50%"
  },
  content: {
    position: "absolute",
    top: "30vh",
    left: "50%",
    width: "100%",
    maxWidth: "1200px",
    transform: "translateX(-50%)"
  }
});

export default PageIntro;
