import React from "react";
import Board from "./Board.js";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        squares: Array(9).fill(mark),
        nextSymbol: markX,
        gameWon: false
    }
    this.handleSquareClick = this.handleSquareClick.bind(this)
  }

  handleSquareClick(index) {
    const stateSquares = this.state.squares;
    if (stateSquares[index] !== mark || this.state.gameWon) {
      return;
    }
    stateSquares[index] = this.state.nextSymbol;
    let winningCombination = this.checkWin(stateSquares);
    if (winningCombination) {
      console.log(`Win ${winningCombination}`);
      this.setState({gameWon: true});
    }
    const nextSymbol = this.state.nextSymbol === markX ? markO : markX;
    this.setState ({squares: stateSquares, nextSymbol: nextSymbol });
  };

  checkWin(grid) {
    const winningCombination = [
      [0, 1, 2], 
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 8]]
      for (let i=0; i<winningCombination.length; i++) {
        let [a, b, c] = winningCombination[i];
        if((grid[a] === markX || grid[a] ===markO) && grid[a] == grid[b] && grid[a] === grid[c]) {
          return winningCombination[i];
        }
      }
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
