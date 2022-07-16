import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log("success!");
  }

  render() {
    return (
      <div>
        <Overview onButtonClicked={this.onClickBtn} />
      </div>
    );
  }
}

export default App;
