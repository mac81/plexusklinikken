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

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Menu = require("./Menu");

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ThomasW/lab/plexusklinikken/components/Header.js";


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this));

    _this.handleScroll = function (event) {
      var scrollTop = event.srcElement.body.scrollTop;

      if (scrollTop >= 50) {
        _this.setState({ solidMenu: true });
      } else {
        _this.setState({ solidMenu: false });
      }
    };

    _this.state = {
      solidMenu: false
    };
    return _this;
  }

  (0, _createClass3.default)(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var solidMenu = this.state.solidMenu;

      var StyledHeader = _styledComponents2.default.div.withConfig({
        displayName: "Header__StyledHeader",
        componentId: "s12h6t8w-0"
      })(["position:fixed;z-index:10;width:100%;height:80px;top:0;left:0;display:flex;justify-content:space-between;align-items:center;transition:background 300ms ease-in;background:", ";"], function (props) {
        return props.solidMenu || solidMenu ? "rgba(32,39,68, 1)" : "transparent";
      });

      var Logo = _styledComponents2.default.a.withConfig({
        displayName: "Header__Logo",
        componentId: "s12h6t8w-1"
      })(["padding:0 30px;"]);

      var Image = _styledComponents2.default.img.withConfig({
        displayName: "Header__Image",
        componentId: "s12h6t8w-2"
      })(["position:relative;top:10;max-width:150px;"]);

      return _react2.default.createElement(StyledHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_link2.default, { href: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(Logo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(Image, { src: "static/logo-blue.png", __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }))), _react2.default.createElement(_Menu2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsInN0eWxlZCIsIk1lbnUiLCJIZWFkZXIiLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxUb3AiLCJldmVudCIsInNyY0VsZW1lbnQiLCJib2R5Iiwic2V0U3RhdGUiLCJzb2xpZE1lbnUiLCJzdGF0ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJTdHlsZWRIZWFkZXIiLCJkaXYiLCJMb2dvIiwiYSIsIkltYWdlIiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJQUVELEE7a0NBQ0o7O29CQUFjO3dDQUFBOztnSUFBQTs7VUFBQSxBQWdCZCxlQUFlLGlCQUFTLEFBQ3RCO1VBQUksWUFBWSxNQUFBLEFBQU0sV0FBTixBQUFpQixLQUFqQyxBQUFzQyxBQUV0Qzs7VUFBSSxhQUFKLEFBQWlCLElBQUksQUFDbkI7Y0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFoQixBQUFjLEFBQWEsQUFDNUI7QUFGRCxhQUVPLEFBQ0w7Y0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFoQixBQUFjLEFBQWEsQUFDNUI7QUFDRjtBQXhCYSxBQUdaOztVQUFBLEFBQUs7aUJBSE8sQUFHWixBQUFhLEFBQ0E7QUFEQSxBQUNYO1dBRUg7Ozs7O3dDQUVtQixBQUNsQjthQUFBLEFBQU8saUJBQVAsQUFBd0IsVUFBVSxLQUFsQyxBQUF1QyxBQUN4Qzs7OzsyQ0FFc0IsQUFDckI7YUFBQSxBQUFPLG9CQUFQLEFBQTJCLFVBQVUsS0FBckMsQUFBMEMsQUFDM0M7Ozs7NkJBWVE7VUFBQSxBQUNDLFlBQWMsS0FEZixBQUNvQixNQURwQixBQUNDO1VBREQsQUFFQyxZQUFjLEtBRmYsQUFFb0IsTUFGcEIsQUFFQyxBQUVSOztVQUFNLDBDQUFBLEFBQXNCO3FCQUF0QjtxQkFBQTtBQUFBLE9BQWUsd0xBV0wsaUJBQUE7ZUFDWixNQUFBLEFBQU0sYUFBTixBQUFtQixZQUFuQixBQUErQixzQkFEbkIsQUFDeUM7QUFaekQsQUFBTSxBQWVOOztVQUFNLGtDQUFBLEFBQWM7cUJBQWQ7cUJBQUE7QUFBQSxPQUFPLEdBQWIsQUFFQTs7VUFBTSxtQ0FBQSxBQUFlO3FCQUFmO3FCQUFBO0FBQUEsT0FBUSxHQUFkLEFBTUE7OzZCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHVDQUNFLEFBQUMsU0FBTSxLQUFQLEFBQVc7b0JBQVg7c0JBSE4sQUFDRSxBQUNFLEFBQ0UsQUFHSjtBQUhJOzRCQUdKLEFBQUM7O29CQUFEO3NCQVBKLEFBQ0UsQUFNRSxBQUdMO0FBSEs7QUFBQTs7Ozs7QUE3RGEsQSxBQW1FckI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9UaG9tYXNXL2xhYi9wbGV4dXNrbGluaWtrZW4ifQ==