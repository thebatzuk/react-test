
const projectName = 'test';

// COMPONENTS:
function Box2(props) {
    return (
      <div className="box2" onClick={props.clickHandler}>
        <h2 id={props.box_id}>click count: {props.clickcount}</h2>
      </div>
    );
}

function ResetButton(props) {
    return (
      <div className="reset" onClick={props.clickHandler}>
        <h2 id={props.box_id}>reset</h2>
      </div>
    );
}

class Box1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickcount: Array(3).fill(0)
    };
    this.clickCounter = this.clickCounter.bind(this);
  }
  clickCounter(i) {
    const clicks = this.state.clickcount.slice();
    clicks[i] += 1;
    this.setState(prevState => ({
      clickcount: clicks
    }));
  }

  reset() {
    this.setState(prevState => ({
      clickcount: Array(3).fill(0)
    }));
  }

  renderBox2(i) {
    return (
      <Box2 box_id="boxtitlemain"
            clickcount={this.state.clickcount[i]}
            clickHandler={() => this.clickCounter(i)}
          />
    )
  }

  renderReset() {
    return (
      <ResetButton box_id="boxtitlesub"
            clickHandler={() => this.reset()}
          />
    )
  }

  render() {
    return (
      <div>
        <h1>react tests</h1>
        <div className="box1">
          {this.renderBox2(0)}
          {this.renderBox2(1)}
          {this.renderBox2(2)}
        </div>
        <div className="box1">
          {this.renderReset()}
        </div>
      </div>
    );
  }
}

const domContainer = document.getElementById('app');
ReactDOM.render(<Box1 />, domContainer);
