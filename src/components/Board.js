import React from "react";
import Square from "./Square.js";

class Board extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return this.props.squares.map((arrayElement, index) => {
        const arrowFunction = () => this.props.handleSquareClick(index);
        return <div className="square">
        <Square 
          key={index} 
          onClick={arrowFunction}
          value={arrayElement}
        />
        {(index + 1) % 3 === 0 ? <br/> : ""}
        </div>
      });
    }
  }

export default Board;