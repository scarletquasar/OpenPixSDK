"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChargeAsync = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _sources = require("../sources/sources.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getChargeAsync = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request) {
    var baseUrl, route, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            baseUrl = _sources.sources[request.callType]["baseUrl"];
            route = _sources.sources[request.callType]["charge"];
            result = {};
            result[request.id] = null;

            if (!request.id) {
              _context.next = 9;
              break;
            }

            _context.next = 7;
            return _axios["default"].get(baseUrl + route + "/".concat(request.id), {
              headers: request.callHeaders
            });

          case 7:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 9:
            _context.next = 11;
            return _axios["default"].get(baseUrl + route, {
              headers: request.callHeaders
            });

          case 11:
            result[request.id] = _context.sent;
            return _context.abrupt("return", result);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getChargeAsync(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getChargeAsync = getChargeAsync;