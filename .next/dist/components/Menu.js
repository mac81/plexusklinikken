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

var _reactBurgerMenu = require("react-burger-menu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ThomasW/lab/plexusklinikken/components/Menu.js";


var Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu() {
    (0, _classCallCheck3.default)(this, Menu);

    return (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).apply(this, arguments));
  }

  (0, _createClass3.default)(Menu, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          id = _props.id,
          pathname = _props.pathname,
          as = _props.as,
          children = _props.children;

      var menuStyles = {
        bmBurgerButton: {
          position: "fixed",
          zIndex: 4,
          width: "86px",
          height: "30px",
          right: "36px",
          top: "25px",
          display: "flex"
        },
        bmBurgerBars: {
          background: "#fff"
        },
        bmCrossButton: {
          height: "24px",
          width: "24px"
        },
        bmCross: {
          background: "#bdc3c7"
        },
        bmMenuWrap: {
          top: 0,
          zIndex: 5
        },
        bmMorphShape: {
          fill: "#373a47"
        },
        bmOverlay: {
          background: "rgba(35, 52, 69, 0.7)"
        }
      };

      return _react2.default.createElement(_reactBurgerMenu.slide, {
        right: true,
        width: "20%",
        styles: menuStyles,
        customBurgerIcon: _react2.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, _react2.default.createElement("div", { className: (0, _aphrodite.css)(styles.burgerIcon), __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, _react2.default.createElement("span", { className: (0, _aphrodite.css)(styles.burgerLabel), __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, "Meny"), _react2.default.createElement("svg", {
          style: { width: "24px", height: "24px" },
          viewBox: "0 0 24 24",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, _react2.default.createElement("path", {
          fill: "#fff",
          d: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }))), "custom"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement("nav", { className: (0, _aphrodite.css)(styles.menuWrapper), __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement("ul", { className: (0, _aphrodite.css)(styles.menu), __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement("li", { className: (0, _aphrodite.css)(styles.menuItem), __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_link2.default, { href: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement("a", { className: (0, _aphrodite.css)(styles.link), __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Forsiden"))), _react2.default.createElement("li", { className: (0, _aphrodite.css)(styles.menuItem), __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_link2.default, { href: "/treatments", as: "behandlinger", __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement("a", { className: (0, _aphrodite.css)(styles.link), __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Behandlingstilbud"))), _react2.default.createElement("li", { className: (0, _aphrodite.css)(styles.menuItem), __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_link2.default, { href: "/legekontor", __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement("a", { className: (0, _aphrodite.css)(styles.link), __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Ski Legesenter"))), _react2.default.createElement("li", { className: (0, _aphrodite.css)(styles.menuItem), __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_link2.default, { href: "/trening", __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement("a", { className: (0, _aphrodite.css)(styles.link), __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Plexus Trening"))), _react2.default.createElement("li", { className: (0, _aphrodite.css)(styles.menuItem), __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_link2.default, { href: "/om", __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement("a", { className: (0, _aphrodite.css)(styles.link), __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Om oss"))), _react2.default.createElement("li", { className: (0, _aphrodite.css)(styles.menuItem), __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(_link2.default, { href: "/kontakt", __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement("a", { className: (0, _aphrodite.css)(styles.link), __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Kontakt oss"))))));
    }
  }]);

  return Menu;
}(_react.Component);

var styles = _aphrodite.StyleSheet.create({
  menuWrapper: {
    height: "100%"
  },
  burgerIcon: {
    display: "flex",
    fontSize: "20px",
    justifyContent: "space-between"
  },
  burgerbarOne: {
    top: "20%"
  },
  burgerbarTwo: {
    top: "40%"
  },
  burgerbarThree: {
    top: "80%"
  },
  burgerLabel: {
    color: "#fff"
  },
  menu: {
    height: "100%",
    backgroundColor: "rgb(32,39,68)",
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  menuItem: {
    padding: "0 30px"
  },
  link: {
    color: "#fff",
    textTransform: "uppercase"
  }
});

exports.default = Menu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxpbmsiLCJTdHlsZVNoZWV0IiwiY3NzIiwiY29sb3JzIiwic2xpZGUiLCJNZW51V3JhcHBlciIsIk1lbnUiLCJwcm9wcyIsImlkIiwicGF0aG5hbWUiLCJhcyIsImNoaWxkcmVuIiwibWVudVN0eWxlcyIsImJtQnVyZ2VyQnV0dG9uIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ3aWR0aCIsImhlaWdodCIsInJpZ2h0IiwidG9wIiwiZGlzcGxheSIsImJtQnVyZ2VyQmFycyIsImJhY2tncm91bmQiLCJibUNyb3NzQnV0dG9uIiwiYm1Dcm9zcyIsImJtTWVudVdyYXAiLCJibU1vcnBoU2hhcGUiLCJmaWxsIiwiYm1PdmVybGF5Iiwic3R5bGVzIiwiYnVyZ2VySWNvbiIsImJ1cmdlckxhYmVsIiwibWVudVdyYXBwZXIiLCJtZW51IiwibWVudUl0ZW0iLCJsaW5rIiwiY3JlYXRlIiwiZm9udFNpemUiLCJqdXN0aWZ5Q29udGVudCIsImJ1cmdlcmJhck9uZSIsImJ1cmdlcmJhclR3byIsImJ1cmdlcmJhclRocmVlIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iLCJwYWRkaW5nIiwibGlzdFN0eWxlVHlwZSIsInRleHRUcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVk7O0FBQ3JCLEFBQVM7O0FBQ1QsQUFBUyxBQUFTOzs7Ozs7O0ksQUFFWjs7Ozs7Ozs7Ozs7NkJBQ0s7bUJBQ2dDLEtBRGhDLEFBQ3FDO1VBRHJDLEFBQ0MsWUFERCxBQUNDO1VBREQsQUFDSyxrQkFETCxBQUNLO1VBREwsQUFDZSxZQURmLEFBQ2U7VUFEZixBQUNtQixrQkFEbkIsQUFDbUIsQUFFMUI7O1VBQUk7O29CQUNjLEFBQ0osQUFDVjtrQkFGYyxBQUVOLEFBQ1I7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