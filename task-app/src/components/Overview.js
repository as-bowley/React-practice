import { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <input type="text" />
        <button onClickBtn={this.props.onButtonClicked}>Submit</button>
      </>
    );
  }
}

export default Overview;
