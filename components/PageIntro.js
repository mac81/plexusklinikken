// import Scroll from 'react-scroll';
import styled from "styled-components";

// Components
//import { Button } from '../';

// Styles
//import styles from './_pageIntro.scss';

// Class
const PageIntro = ({ title, summary, children, className }) => {
  //const ScrollTo = Scroll.Link;
  //const bgClass = styles.bg + ' ' + styles[this.props.background];

  //const pageIntroClass = this.props.frontpage ? `${styles.pageIntro} ${styles.frontpage}` : styles.pageIntro;

  return (
    <div className={className}>
      <div>
        <div>
          <h1 className="display-4">{title}</h1>
          <h2>{summary}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export const StyledPageIntro = styled(PageIntro)`
  display: block;
  text-align: ${props => (props.cover ? "center" : "left")};
  position: relative;
  height: ${props => (props.cover ? "100vh" : "auto")};
  > div {
    width: 100%;
    height: ${props => (props.cover ? "100%" : "600px")};
    overflow-x: hidden;
    padding: 30px;
    background-size: cover;
    background-position: 50%;
    background-image: ${props =>
      `linear-gradient(180deg, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${props.backgroundImage})`};
    > div {
      position: absolute;
      top: ${props => (props.cover ? "30vh" : "40%")};
      left: 50%;
      width: 100%;
      max-width: 1200px;
      transform: translateX(-50%);
    }
  }
  h1 {
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.typography.display4.fontSize};
    line-height: ${props => props.theme.typography.display4.lineHeight};
    font-weight: ${props => props.theme.typography.display4.fontWeight};
  }
  h2 {
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.typography.display2.fontSize};
    line-height: ${props => props.theme.typography.display2.lineHeight};
    font-weight: ${props => props.theme.typography.display2.fontWeight};
    margin: 0 0 30px 0;
  }
`;

export default StyledPageIntro;
