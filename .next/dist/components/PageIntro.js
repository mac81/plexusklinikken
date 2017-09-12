"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPageIntro = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ThomasW/lab/plexusklinikken/components/PageIntro.js";
// import Scroll from 'react-scroll';


// Components
//import { Button } from '../';

// Styles
//import styles from './_pageIntro.scss';

// Class
var PageIntro = function PageIntro(_ref) {
  var title = _ref.title,
      summary = _ref.summary,
      children = _ref.children,
      className = _ref.className;

  //const ScrollTo = Scroll.Link;
  //const bgClass = styles.bg + ' ' + styles[this.props.background];

  //const pageIntroClass = this.props.frontpage ? `${styles.pageIntro} ${styles.frontpage}` : styles.pageIntro;

  return _react2.default.createElement("div", { className: className, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, title), _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, summary), children)));
};

var StyledPageIntro = exports.StyledPageIntro = (0, _styledComponents2.default)(PageIntro).withConfig({
  displayName: "PageIntro__StyledPageIntro",
  componentId: "u6ggzs-0"
})(["display:block;text-align:", ";position:relative;height:", ";> div{width:100%;height:", ";overflow-x:hidden;padding:30px;background-size:cover;background-position:50%;background-image:", ";> div{position:absolute;top:", ";left:50%;width:100%;max-width:1200px;transform:translateX(-50%);}}h1{color:#fff;font-size:110px;margin:0 0 10px 0;}h2{color:#fff;font-size:34px;margin:0 0 30px 0;}"], function (props) {
  return props.cover ? "center" : "left";
}, function (props) {
  return props.cover ? "100vh" : "auto";
}, function (props) {
  return props.cover ? "100%" : "600px";
}, function (props) {
  return "linear-gradient(180deg, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(" + props.backgroundImage + ")";
}, function (props) {
  return props.cover ? "30vh" : "40%";
});

exports.default = StyledPageIntro;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnZUludHJvLmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsIlBhZ2VJbnRybyIsInRpdGxlIiwic3VtbWFyeSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiU3R5bGVkUGFnZUludHJvIiwicHJvcHMiLCJjb3ZlciIsImJhY2tncm91bmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxBQUFPOzs7Ozs7O0FBRFA7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQU0sWUFBWSxTQUFaLEFBQVksZ0JBQTZDO01BQTFDLEFBQTBDLGFBQTFDLEFBQTBDO01BQW5DLEFBQW1DLGVBQW5DLEFBQW1DO01BQTFCLEFBQTBCLGdCQUExQixBQUEwQjtNQUFoQixBQUFnQixpQkFBaEIsQUFBZ0IsQUFDN0Q7O0FBQ0E7QUFFQTs7QUFFQTs7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZ0I7Z0JBQWhCO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUs7QUFBTDtBQUFBLEtBREYsQUFDRSxBQUNBLHdCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUs7QUFBTDtBQUFBLEtBRkYsQUFFRSxBQUNDLFVBTlQsQUFDRSxBQUNFLEFBQ0UsQUFRUDtBQWpCRCxBQW1CQTs7QUFBTyxJQUFNLDRFQUFBLEFBQWtCLEFBQU87ZUFBekI7ZUFBQTtBQUFBLENBQWtCLHdZQUVmLGlCQUFBO1NBQVUsTUFBQSxBQUFNLFFBQU4sQUFBYyxXQUF4QixBQUFtQztBQUZ0QyxHQUlELGlCQUFBO1NBQVUsTUFBQSxBQUFNLFFBQU4sQUFBYyxVQUF4QixBQUFrQztBQUpqQyxHQU9DLGlCQUFBO1NBQVUsTUFBQSxBQUFNLFFBQU4sQUFBYyxTQUF4QixBQUFpQztBQVBsQyxHQVlXLGlCQUFBO3VGQUMwRCxNQUQxRCxBQUNnRSxrQkFEaEU7QUFaWCxHQWdCQSxpQkFBQTtTQUFVLE1BQUEsQUFBTSxRQUFOLEFBQWMsU0FBeEIsQUFBaUM7QUFoQnZDLEFBQU0sQUFtQ2I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUGFnZUludHJvLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9UaG9tYXNXL2xhYi9wbGV4dXNrbGluaWtrZW4ifQ==