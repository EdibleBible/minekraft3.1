import React from "react";
import Board from "./Board.js";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        squares: Array(9).fill(mark),
        nextSymbol: markX
    }
    this.handleSquareClick = this.handleSquareClick.bind(this)
  }

  handleSquareClick(index) {
    const stateSquares = this.state.squares;
    stateSquares[index] = this.state.nextSymbol;
    const nextSymbol = this.state.nextSymbol === markX ? markO : markX;
    this.setState ({squares: stateSquares, nextSymbol: nextSymbol });
  };

  render() {
    return<>
      <Board
        squares={this.state.squares}
        handleSquareClick={this.handleSquareClick}
      />
    </>
  }
}

var mark = String.fromCodePoint(0x26AB);
var markX = String.fromCodePoint(0x1F535);
var markO = String.fromCodePoint(0x1F534);
export default Game;
