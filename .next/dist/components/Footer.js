"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _aphrodite = require("aphrodite");

var _colors = require("../variables/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ThomasW/lab/plexusklinikken/components/Footer.js";


var Footer = function (_Component) {
  (0, _inherits3.default)(Footer, _Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);

    return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Footer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          id = _props.id,
          pathname = _props.pathname,
          as = _props.as,
          children = _props.children;

      return _react2.default.createElement("footer", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "Footer");
    }
  }]);

  return Footer;
}(_react.Component);

var styles = _aphrodite.StyleSheet.create({
  anchor: {
    display: "inline-block",
    border: "1px solid " + _colors.colors.darkBlue,
    padding: "13px 29px",
    color: _colors.colors.darkBlue,
    fontSize: "15px"
  },
  articleContent: {
    padding: "30px",
    maxWidth: "800px",
    margin: "0 auto"
  },
  image: {
    //maxWidth: "400px"
  },
  even: {
    backgroundColor: _colors.colors.darkBlue
  },
  header: {},
  light: {
    color: "#fff"
  }
});

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIlN0eWxlU2hlZXQiLCJjc3MiLCJjb2xvcnMiLCJGb290ZXIiLCJwcm9wcyIsImlkIiwicGF0aG5hbWUiLCJhcyIsImNoaWxkcmVuIiwic3R5bGVzIiwiY3JlYXRlIiwiYW5jaG9yIiwiZGlzcGxheSIsImJvcmRlciIsImRhcmtCbHVlIiwicGFkZGluZyIsImNvbG9yIiwiZm9udFNpemUiLCJhcnRpY2xlQ29udGVudCIsIm1heFdpZHRoIiwibWFyZ2luIiwiaW1hZ2UiLCJldmVuIiwiYmFja2dyb3VuZENvbG9yIiwiaGVhZGVyIiwibGlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVk7O0FBQ3JCLEFBQVM7Ozs7Ozs7SUFFSCxBOzs7Ozs7Ozs7Ozs2QkFDSzttQkFDZ0MsS0FEaEMsQUFDcUM7VUFEckMsQUFDQyxZQURELEFBQ0M7VUFERCxBQUNLLGtCQURMLEFBQ0s7VUFETCxBQUNlLFlBRGYsQUFDZTtVQURmLEFBQ21CLGtCQURuQixBQUNtQixBQUUxQjs7NkJBQU8sY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLE9BQUEsRUFBUCxBQUFPLEFBQ1I7Ozs7O0FBTGtCLEE7O0FBUXJCLElBQU0sK0JBQVMsQUFBVzs7YUFDaEIsQUFDRyxBQUNUOzJCQUFxQixlQUZmLEFBRXNCLEFBQzVCO2FBSE0sQUFHRyxBQUNUO1dBQU8sZUFKRCxBQUlRLEFBQ2Q7Y0FONkIsQUFDdkIsQUFLSSxBQUVaO0FBUFEsQUFDTjs7YUFNYyxBQUNMLEFBQ1Q7Y0FGYyxBQUVKLEFBQ1Y7WUFYNkIsQUFRZixBQUdOLEFBRVY7QUFMZ0IsQUFDZDs7QUFUNkIsQUFheEIsQUFHUDtBQUhPLEFBQ0w7O3FCQUdpQixlQWpCWSxBQWdCekIsQUFDb0IsQUFFMUI7QUFITSxBQUNKO1VBakI2QixBQW1CdkIsQUFDUjs7V0FwQkYsQUFBZSxBQUFrQixBQW9CeEIsQUFDRSxBQUlYO0FBTFMsQUFDTDtBQXJCNkIsQUFDL0IsQ0FEYTs7a0JBeUJmLEFBQWUiLCJmaWxlIjoiRm9vdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9UaG9tYXNXL2xhYi9wbGV4dXNrbGluaWtrZW4ifQ==