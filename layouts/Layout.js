import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "styled-components";
import theme from "../theme";



const Layout = props => (
  <ThemeProvider theme={theme}>
    <div>
      <Header isSolidMenu={props.isSolidMenu} />
      {props.children}
      <Footer />
    </div>
  </ThemeProvider>
);

export default Layout;
