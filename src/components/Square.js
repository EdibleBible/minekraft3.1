import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="square">
    <button
      onClick={() => this.props.onClick()}>
      {this.props.value}
    </button>
    </div>
  }
}

export default Square;