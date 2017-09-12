"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Treatments = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _isomorphicUnfetch = require("isomorphic-unfetch");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _contentful = require("contentful");

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Layout = require("../layouts/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _PageIntro = require("../components/PageIntro");

var _PageIntro2 = _interopRequireDefault(_PageIntro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ThomasW/lab/plexusklinikken/pages/treatments.js?entry";


/********
 * Styles
 *******/

var TreatmentContainer = _styledComponents2.default.div.withConfig({
  displayName: "treatments__TreatmentContainer",
  componentId: "s6vb7of-0"
})(["background-color:#f1f1f1;"]);

var TreatmentsList = _styledComponents2.default.ul.withConfig({
  displayName: "treatments__TreatmentsList",
  componentId: "s6vb7of-1"
})(["margin:0 auto;padding:30px 0;list-style-type:none;max-width:1260px;display:flex;flex-wrap:wrap;"]);

var Treatment = _styledComponents2.default.li.withConfig({
  displayName: "treatments__Treatment",
  componentId: "s6vb7of-2"
})(["flex:0 1 50%;border:30px solid #f1f1f1;background-color:#fff;a{display:block;padding:30px;}h3{font-size:36px;margin:0 0 10px 0;}"]);

/***********
 * Component
 **********/

var Treatments = exports.Treatments = function (_React$Component) {
  (0, _inherits3.default)(Treatments, _React$Component);

  function Treatments() {
    (0, _classCallCheck3.default)(this, Treatments);

    return (0, _possibleConstructorReturn3.default)(this, (Treatments.__proto__ || (0, _getPrototypeOf2.default)(Treatments)).apply(this, arguments));
  }

  (0, _createClass3.default)(Treatments, [{
    key: "render",
    value: function render() {
      console.log(this.props);

      var _props = this.props,
          title = _props.title,
          summary = _props.summary,
          backgroundImage = _props.backgroundImage,
          treatments = _props.treatments;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_PageIntro2.default, {
        title: title,
        summary: summary,
        backgroundImage: backgroundImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react2.default.createElement(TreatmentContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(TreatmentsList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, treatments.items.map(function (treatment) {
        return _react2.default.createElement(Treatment, { key: treatment.sys.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, _react2.default.createElement(_link2.default, { href: "/behandlinger/" + treatment.sys.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, _react2.default.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, _react2.default.createElement("h3", { className: "heading-medium", __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, treatment.fields.name), _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, treatment.fields.summary), _react2.default.createElement("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, "Les mer"))));
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;
        var client, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                client = (0, _contentful.createClient)({
                  space: "2omch4pe7no2",
                  accessToken: "6274e3bdae4a785f1e1056c870a301b6a7d8bc893e69655354fc6ec439343fe6"
                });
                _context.next = 3;
                return client.getEntries({ content_type: "sideBehandlingstilbud", include: 2 }).then(function (response) {
                  return {
                    response: response,
                    title: response.items[0].fields.title,
                    summary: response.items[0].fields.summary,
                    backgroundImage: response.items[0].fields.backgroundImage.fields.file.url,
                    treatments: {
                      title: response.items[0].fields.treatments.fields.title,
                      items: response.items[0].fields.treatments.fields.treatments
                    }
                  };
                });

              case 3:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Treatments;
}(_react2.default.Component);

exports.default = Treatments;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3RyZWF0bWVudHMuanMiXSwibmFtZXMiOlsiZmV0Y2giLCJjcmVhdGVDbGllbnQiLCJMaW5rIiwic3R5bGVkIiwiTGF5b3V0IiwiUGFnZUludHJvIiwiVHJlYXRtZW50Q29udGFpbmVyIiwiZGl2IiwiVHJlYXRtZW50c0xpc3QiLCJ1bCIsIlRyZWF0bWVudCIsImxpIiwiVHJlYXRtZW50cyIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsInRpdGxlIiwic3VtbWFyeSIsImJhY2tncm91bmRJbWFnZSIsInRyZWF0bWVudHMiLCJpdGVtcyIsIm1hcCIsInRyZWF0bWVudCIsInN5cyIsImlkIiwiZmllbGRzIiwibmFtZSIsInJlcSIsImNsaWVudCIsInNwYWNlIiwiYWNjZXNzVG9rZW4iLCJnZXRFbnRyaWVzIiwiY29udGVudF90eXBlIiwiaW5jbHVkZSIsInRoZW4iLCJyZXNwb25zZSIsImZpbGUiLCJ1cmwiLCJkYXRhIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQOzs7O0FBSUEsSUFBTSxnREFBQSxBQUE0QjtlQUE1QjtlQUFBO0FBQUEsQ0FBcUIsR0FBM0I7O0FBRUEsSUFBTSw0Q0FBQSxBQUF3QjtlQUF4QjtlQUFBO0FBQUEsQ0FBaUIsR0FBdkI7O0FBU0EsSUFBTSx1Q0FBQSxBQUFtQjtlQUFuQjtlQUFBO0FBQUEsQ0FBWSxHQUFsQjs7QUFnQkEsQUFJQTs7OztJQUFBLEFBQWEsOERBQWI7c0NBQUE7O3dCQUFBO3dDQUFBOzswSUFBQTtBQUFBOzs7U0FBQTs2QkEyQlcsQUFDUDtjQUFBLEFBQVEsSUFBSSxLQURMLEFBQ1AsQUFBaUI7O21CQUV1QyxLQUhqRCxBQUdzRDtVQUh0RCxBQUdDLGVBSEQsQUFHQztVQUhELEFBR1EsaUJBSFIsQUFHUTtVQUhSLEFBR2lCLHlCQUhqQixBQUdpQjtVQUhqQixBQUdrQyxvQkFIbEMsQUFHa0MsQUFFekM7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQztlQUFELEFBQ1MsQUFDUDtpQkFGRixBQUVXLEFBQ1Q7eUJBSEYsQUFHbUI7O29CQUhuQjtzQkFERixBQUNFLEFBTUE7QUFOQTtBQUNFLDBCQUtELGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLG9CQUNHLEFBQVcsTUFBWCxBQUFpQixJQUFJLHFCQUFBOytCQUNuQixjQUFELGFBQVcsS0FBSyxVQUFBLEFBQVUsSUFBMUIsQUFBOEI7c0JBQTlCO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLEFBQUMsZ0NBQUsseUJBQXVCLFVBQUEsQUFBVSxJQUF2QyxBQUEyQztzQkFBM0M7d0JBQUEsQUFDRTtBQURGOzJCQUNFLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7c0JBQWQ7d0JBQUEsQUFBZ0M7QUFBaEM7cUJBQWdDLEFBQVUsT0FENUMsQUFDRSxBQUFpRCxBQUNqRCx1QkFBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxBQUFVLE9BRmhCLEFBRUUsQUFBcUIsQUFDckIsMEJBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFdBTmMsQUFDcEIsQUFDRSxBQUNFLEFBR0U7QUFoQmhCLEFBQ0UsQUFPRSxBQUNFLEFBQ0csQUFlVjtBQXpESDtBQUFBO1NBQUE7dUJBQUE7a0hBQUE7WUFBQSxBQUNpQyxXQURqQyxBQUNpQztvQkFEakM7c0VBQUE7b0JBQUE7NkNBQUE7bUJBRVU7QUFGVjt5QkFFZ0MsQUFDbkIsQUFDUDsrQkFKTixBQUVtQixBQUFhLEFBR3hCO0FBSHdCLEFBQzFCLGlCQURhO2dDQUZuQjs4QkFRdUIsQUFDaEIsV0FBVyxFQUFFLGNBQUYsQUFBZ0IseUJBQXlCLFNBRHBDLEFBQ0wsQUFBa0QsS0FEN0MsQUFFaEIsS0FBSyxVQUFBLEFBQVMsVUFBVSxBQUN2Qjs7OEJBQU8sQUFDSyxBQUNWOzJCQUFPLFNBQUEsQUFBUyxNQUFULEFBQWUsR0FBZixBQUFrQixPQUZwQixBQUUyQixBQUNoQzs2QkFBUyxTQUFBLEFBQVMsTUFBVCxBQUFlLEdBQWYsQUFBa0IsT0FIdEIsQUFHNkIsQUFDbEM7cUNBQ0UsU0FBQSxBQUFTLE1BQVQsQUFBZSxHQUFmLEFBQWtCLE9BQWxCLEFBQXlCLGdCQUF6QixBQUF5QyxPQUF6QyxBQUFnRCxLQUw3QyxBQUtrRCxBQUN2RDs7NkJBQ1MsU0FBQSxBQUFTLE1BQVQsQUFBZSxHQUFmLEFBQWtCLE9BQWxCLEFBQXlCLFdBQXpCLEFBQW9DLE9BRGpDLEFBQ3dDLEFBQ2xEOzZCQUFPLFNBQUEsQUFBUyxNQUFULEFBQWUsR0FBZixBQUFrQixPQUFsQixBQUF5QixXQUF6QixBQUFvQyxPQVIvQyxBQUFPLEFBTU8sQUFFd0MsQUFHdkQ7QUFMZSxBQUNWO0FBUEcsQUFDTDtBQVpWLEFBUXVCLGlCQUFBOzttQkFBYjtBQVJWLGdDQUFBO2lEQUFBLEFBd0JXOzttQkF4Qlg7bUJBQUE7Z0NBQUE7O0FBQUE7b0JBQUE7QUFBQTs7bUNBQUE7aUNBQUE7QUFBQTs7YUFBQTtBQUFBO0FBQUE7O1NBQUE7RUFBZ0MsZ0JBQWhDLEFBQXNDLEFBNER0Qzs7a0JBQUEsQUFBZSIsImZpbGUiOiJ0cmVhdG1lbnRzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9UaG9tYXNXL2xhYi9wbGV4dXNrbGluaWtrZW4ifQ==