// import Scroll from 'react-scroll';
import styled from "styled-components";

// Components
//import { Button } from '../';

// Styles
//import styles from './_pageIntro.scss';

// Class
const PageIntro = ({ children, className }) => {
  //const ScrollTo = Scroll.Link;
  //const bgClass = styles.bg + ' ' + styles[this.props.background];

  //const pageIntroClass = this.props.frontpage ? `${styles.pageIntro} ${styles.frontpage}` : styles.pageIntro;

  return (
    <div className={className}>
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export const StyledPageIntro = styled(PageIntro)`
  display: block;
  text-align: center;
  position: relative;
  height: 100vh;
  > div {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    padding: 30px;
    background-size: cover;
    background-position: 50%;
    background-image: ${props =>
      `linear-gradient(180deg, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${props.backgroundImage})`};
    > div {
      position: absolute;
      top: 30vh;
      left: 50%;
      width: 100%;
      max-width: 1200px;
      transform: translateX(-50%);
    }
  }
`;

export default StyledPageIntro;
