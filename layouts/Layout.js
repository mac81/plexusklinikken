const Layout = props => (
  <div>
    {/*language=CSS*/}
    <style jsx global>{`

      @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Open+Sans|Montserrat');

      *, :after, :before {
        box-sizing: border-box;
      }

      body {
        margin: 0
        font-family: 'Open Sans';
        -webkit-font-smoothing: antialiased;
        color: #3c3f4a;
      }



    `}</style>
    {props.children}
  </div>
);

export default Layout;
