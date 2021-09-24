var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var projectName = 'test';

// COMPONENTS:
function Box2(props) {
  return React.createElement(
    "div",
    { className: "box2", onClick: props.clickHandler },
    React.createElement(
      "h2",
      { id: props.box_id },
      "click count: ",
      props.clickcount
    )
  );
}

function ResetButton(props) {
  return React.createElement(
    "div",
    { className: "reset", onClick: props.clickHandler },
    React.createElement(
      "h2",
      { id: props.box_id },
      "reset"
    )
  );
}

var Box1 = function (_React$Component) {
  _inherits(Box1, _React$Component);

  function Box1(props) {
    _classCallCheck(this, Box1);

    var _this = _possibleConstructorReturn(this, (Box1.__proto__ || Object.getPrototypeOf(Box1)).call(this, props));

    _this.state = {
      clickcount: Array(3).fill(0)
    };
    _this.clickCounter = _this.clickCounter.bind(_this);
    return _this;
  }

  _createClass(Box1, [{
    key: "clickCounter",
    value: function clickCounter(i) {
      var clicks = this.state.clickcount.slice();
      clicks[i] += 1;
      this.setState(function (prevState) {
        return {
          clickcount: clicks
        };
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState(function (prevState) {
        return {
          clickcount: Array(3).fill(0)
        };
      });
    }
  }, {
    key: "renderBox2",
    value: function renderBox2(i) {
      var _this2 = this;

      return React.createElement(Box2, { box_id: "boxtitlemain",
        clickcount: this.state.clickcount[i],
        clickHandler: function clickHandler() {
          return _this2.clickCounter(i);
        }
      });
    }
  }, {
    key: "renderReset",
    value: function renderReset() {
      var _this3 = this;

      return React.createElement(ResetButton, { box_id: "boxtitlesub",
        clickHandler: function clickHandler() {
          return _this3.reset();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "react tests"
        ),
        React.createElement(
          "div",
          { className: "box1" },
          this.renderBox2(0),
          this.renderBox2(1),
          this.renderBox2(2)
        ),
        React.createElement(
          "div",
          { className: "box1" },
          this.renderReset()
        )
      );
    }
  }]);

  return Box1;
}(React.Component);

var domContainer = document.getElementById('app');
ReactDOM.render(React.createElement(Box1, null), domContainer);