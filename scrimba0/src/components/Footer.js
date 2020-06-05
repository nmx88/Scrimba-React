import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <footer>
        <div>
          <address>
            Created by John Lagos{" "}
            <span>Aegaleo, Athens Greece All rights reserved</span>
          </address>
          <div>
            <p>
              Date/Time:
              <span id="datetime"> {this.state.date.toLocaleTimeString()}</span>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
