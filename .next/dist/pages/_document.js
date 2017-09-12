"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _document = require("next/dist/server/document.js");

var _document2 = _interopRequireDefault(_document);

var _aphrodite = require("aphrodite");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ThomasW/lab/plexusklinikken/pages/_document.js?entry";
// import flush from "styled-jsx/server";


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: "render",
    value: function render() {
      var sheet = new _styledComponents.ServerStyleSheet();
      var main = sheet.collectStyles(_react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }));
      var styleTags = sheet.getStyleElement();

      return _react2.default.createElement("html", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "Plexusklinikken"), _react2.default.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement("link", { rel: "stylesheet", type: "text/css", href: "/static/app.css", __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), styleTags), _react2.default.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, main, _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      //const { html, head, errorHtml, chunks } = renderPage();
      var _StyleSheetServer$ren = _aphrodite.StyleSheetServer.renderStatic(function () {
        return renderPage();
      }),
          html = _StyleSheetServer$ren.html,
          css = _StyleSheetServer$ren.css;
      // //const styles = flush();
      //return { html, head, errorHtml, chunks };


      return (0, _extends3.default)({}, html, { css: css });
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIlN0eWxlU2hlZXRTZXJ2ZXIiLCJTZXJ2ZXJTdHlsZVNoZWV0IiwiTXlEb2N1bWVudCIsInNoZWV0IiwibWFpbiIsImNvbGxlY3RTdHlsZXMiLCJzdHlsZVRhZ3MiLCJnZXRTdHlsZUVsZW1lbnQiLCJyZW5kZXJQYWdlIiwicmVuZGVyU3RhdGljIiwiaHRtbCIsImNzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWSxBQUFNLEFBQU07Ozs7QUFFL0IsQUFBUzs7QUFDVCxBQUFTOzs7OztBQUZUOzs7SUFJcUIsQTs7Ozs7Ozs7Ozs7NkJBU1YsQUFDUDtVQUFNLFFBQU4sQUFBYyxBQUFJLEFBQ2xCO1VBQU0sYUFBTyxBQUFNLDhCQUFjLEFBQUM7O29CQUFEO3NCQUFqQyxBQUFhLEFBQW9CLEFBQ2pDO0FBRGlDO0FBQUEsT0FBQSxDQUFwQjtVQUNQLFlBQVksTUFBbEIsQUFBa0IsQUFBTSxBQUV4Qjs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0E7Y0FBQSxBQUNPLEFBQ0w7aUJBRkYsQUFFVTs7b0JBRlY7c0JBRkYsQUFFRSxBQUlBO0FBSkE7QUFDRSxrREFHSSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QixZQUFXLE1BQXZDLEFBQTRDO29CQUE1QztzQkFORixBQU1FLEFBQ0M7QUFERDtVQVBKLEFBQ0UsQUFTQSw0QkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxTQUFBLEFBRUUsc0JBQUEsQUFBQzs7b0JBQUQ7c0JBYk4sQUFDRSxBQVVFLEFBRUUsQUFJUDtBQUpPO0FBQUE7Ozs7MENBMUIrQjtVQUFkLEFBQWMsa0JBQWQsQUFBYyxBQUNyQzs7QUFEcUM7OERBRWYsQUFBaUIsYUFBYSxZQUFBO2VBQUEsQUFBTTtBQUZyQixBQUVmLE9BQUE7VUFGZSxBQUU3Qiw2QkFGNkIsQUFFN0I7VUFGNkIsQUFFdkIsNEJBRnVCLEFBRXZCLEFBQ2Q7QUFDQTtBQUNBOzs7d0NBQUEsQUFBWSxRQUFNLEtBQWxCLEFBQ0Q7Ozs7O0FBUHFDLEE7O2tCQUFuQixBIiwiZmlsZSI6Il9kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVGhvbWFzVy9sYWIvcGxleHVza2xpbmlra2VuIn0=