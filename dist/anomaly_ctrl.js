System.register(["app/plugins/sdk", "lodash", "./css/anomaly-panel.css"], function (_export, _context) {
  "use strict";

  var PanelCtrl, _, panelDefaults, AnomalyCtrl;

  function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  return {
    setters: [function (_appPluginsSdk) {
      PanelCtrl = _appPluginsSdk.PanelCtrl;
    }, function (_lodash) {
      _ = _lodash.default;
    }, function (_cssAnomalyPanelCss) {}],
    execute: function () {
      panelDefaults = {};

      _export("AnomalyCtrl", AnomalyCtrl = function (_PanelCtrl) {
        _inherits(AnomalyCtrl, _PanelCtrl);

        function AnomalyCtrl($scope, $injector) {
          var _this;

          _classCallCheck(this, AnomalyCtrl);

          _this = _possibleConstructorReturn(this, (AnomalyCtrl.__proto__ || Object.getPrototypeOf(AnomalyCtrl)).call(this, $scope, $injector));

          _.defaultsDeep(_this.panel, panelDefaults);

          return _this;
        }

        _createClass(AnomalyCtrl, [{
          key: "onInitEditMode",
          value: function onInitEditMode() {// TODO
          }
        }, {
          key: "onPanelTeardown",
          value: function onPanelTeardown() {// TODO
          }
        }, {
          key: "link",
          value: function link(scope, elem) {
            this.events.on('render', function () {
              var $panelContainer = elem.find('.panel-container');
              $panelContainer.css('background-color', '#00FF00');
            });
          }
        }]);

        return AnomalyCtrl;
      }(PanelCtrl));

      _export("AnomalyCtrl", AnomalyCtrl);
    }
  };
});
//# sourceMappingURL=anomaly_ctrl.js.map
