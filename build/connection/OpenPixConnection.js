"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenPixConnection = void 0;

var _chargeRestCaller = require("../utils/chargeRestCaller.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OpenPixConnection = /*#__PURE__*/_createClass(function OpenPixConnection(authorization) {
  var _this = this;

  var _type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "production";

  _classCallCheck(this, OpenPixConnection);

  _defineProperty(this, "_type", null);

  _defineProperty(this, "_cache", {});

  _defineProperty(this, "setupConnection", function (newAuth) {
    typeof newAuth === 'string' ? _this._authorization = newAuth : {};
    _this._headers = {
      'Authorization': _this._authorization,
      'Cache-Control': 'no-cache'
    };
    _this._type = type;
  });

  _defineProperty(this, "getCharge", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(chargeId) {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this._cache[chargeId]) {
                _context.next = 8;
                break;
              }

              _context.next = 3;
              return (0, _chargeRestCaller.getChargeAsync)({
                id: chargeId,
                callType: _this._type,
                callHeaders: _this._headers
              });

            case 3:
              result = _context.sent;
              result instanceof 'Object' ? _this._cache = _objectSpread(_objectSpread({}, _this._cache), result) : {};

              if (!chargeId) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", result[chargeId]);

            case 7:
              return _context.abrupt("return", result);

            case 8:
              return _context.abrupt("return", _this._cache[chargeId]);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  setupConnection(authorization);
});

exports.OpenPixConnection = OpenPixConnection;