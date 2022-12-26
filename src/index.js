import React from "react";
import ReactDOM from "react-dom";
import checkForWinner from "./CheckforWinner"
import Column from "./components/Column";
import "./board.css";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: Array(7).fill(Array(6).fill(null)),
      playerOnesTurn: true,
      winner: false,
      playerOneColor: "#ff0000",
      playerTwoColor: "#ffc400",
    };


  }

  handleClick(columnIndex) {
    let gameBoard = this.state.board.map((element) => element.slice());
    const column = gameBoard[columnIndex];
    const columnFull = !!column[column.length - 1];
    if (columnFull) {
      return;
    }
    for (let i = 0; i < gameBoard[columnIndex].length; i++) {
      if (gameBoard[columnIndex][i] === null) {
        gameBoard[columnIndex][i] = this.state.playerOnesTurn ? 1 : -1;
        break;
      }
    }

    const winner = checkForWinner(gameBoard);
    this.setState({board: gameBoard, playerOnesTurn: !this.state.playerOnesTurn, winner,});
  }



  render() {
    return (
        <div className="board">
          <h1>Connect 4</h1>
          <div className={`winner-announce-background${!this.state.winner ? " hidden" : ""}`}>
            <h1 className="winner-announce">{this.state.winner === "playerOne" ? "Player one wins!" : this.state.winner === "playerTwo" ? "Player two wins!" : null}</h1>
          </div>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => {
            return (
                <Column
                    key={i}
                    squares={this.state.board[i]}
                    onClick={() => {
                      this.handleClick(i);
                    }}
                />
            );
          })}
          {!this.state.winner ? (<h2 className={`turn-label${this.state.playerOnesTurn ? " player-one" : " player-two"}`}>
                {this.state.playerOnesTurn ? "Player one" : "Player two"}'s turn
              </h2>) : null}
        </div>
    );
  }
}

ReactDOM.render(<Index className="board" />, document.getElementById("root"));
