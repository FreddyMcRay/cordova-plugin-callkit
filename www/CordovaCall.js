"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var exec = require('cordova/exec');

var CordovaCall = /*#__PURE__*/function () {
  function CordovaCall() {
    var _this = this;

    _classCallCheck(this, CordovaCall);

    this.handlers = {};

    var success = function success(result) {
      if (!result) {
        return;
      }

      _this.emit(result.action, result.data);
    };

    var fail = function fail(result) {
      console.error(result);
    };

    setTimeout(function () {
      exec(success, fail, 'CordovaCall', 'init');
    }, 10);
  }

  _createClass(CordovaCall, [{
    key: "emit",
    value: function emit() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var eventName = args.shift();

      if (!this.handlers.hasOwnProperty(eventName)) {
        return false;
      }

      for (var i = 0, length = this.handlers[eventName].length; i < length; i++) {
        var callback = this.handlers[eventName][i];

        if (typeof callback === 'function') {
          callback.apply(undefined, args);
        } else {
          console.log("event handler: ".concat(eventName, " must be a function"));
        }
      }

      return true;
    }
  }, {
    key: "on",
    value: function on(eventName, callback) {
      if (!this.handlers.hasOwnProperty(eventName)) {
        this.handlers[eventName] = [];
      }

      this.handlers[eventName].push(callback);
    }
  }]);

  return CordovaCall;
}();

exports.init = function () {
  return new CordovaCall();
};

exports.setAppName = function (appName, success, error) {
  exec(success, error, "CordovaCall", "setAppName", [appName]);
};

exports.setIcon = function (iconName, success, error) {
  exec(success, error, "CordovaCall", "setIcon", [iconName]);
};

exports.setRingtone = function (ringtoneName, success, error) {
  exec(success, error, "CordovaCall", "setRingtone", [ringtoneName]);
};

exports.setIncludeInRecents = function (value, success, error) {
  if (typeof value == "boolean") {
    exec(success, error, "CordovaCall", "setIncludeInRecents", [value]);
  } else {
    error("Value Must Be True Or False");
  }
};

exports.setDTMFState = function (value, success, error) {
  if (typeof value == "boolean") {
    exec(success, error, "CordovaCall", "setDTMFState", [value]);
  } else {
    error("Value Must Be True Or False");
  }
};

exports.setVideo = function (value, success, error) {
  if (typeof value == "boolean") {
    exec(success, error, "CordovaCall", "setVideo", [value]);
  } else {
    error("Value Must Be True Or False");
  }
};

exports.receiveCall = function (call, success, error) {
  if (typeof id == "function") {
    error = success;
    success = id;
    id = undefined;
  } else if (id) {
    id = id.toString();
  }

  exec(success, error, "CordovaCall", "receiveCall", [call]);
};

exports.sendCall = function (call, success, error) {
  if (typeof id == "function") {
    error = success;
    success = id;
    id = undefined;
  } else if (id) {
    id = id.toString();
  }

  exec(success, error, "CordovaCall", "sendCall", [call]);
};

exports.connectCall = function (success, error) {
  exec(success, error, "CordovaCall", "connectCall", []);
};

exports.endCall = function (success, error) {
  exec(success, error, "CordovaCall", "endCall", []);
};

exports.mute = function (success, error) {
  exec(success, error, "CordovaCall", "mute", []);
};

exports.unmute = function (success, error) {
  exec(success, error, "CordovaCall", "unmute", []);
};

exports.speakerOn = function (success, error) {
  exec(success, error, "CordovaCall", "speakerOn", []);
};

exports.speakerOff = function (success, error) {
  exec(success, error, "CordovaCall", "speakerOff", []);
};

exports.callNumber = function (to, success, error) {
  exec(success, error, "CordovaCall", "callNumber", [to]);
};