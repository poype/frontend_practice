import React from "react";
import Square from "./Square";
import "./Board.css"

class Board extends React.Component {

    constructor() {
        super();

        this.xIsNext = true;

        this.state = {
            squareValues: Array(9).fill(null),
            winer: null
        }
    }

    calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    handleSquareClick(i) {
        if(this.state.squareValues[i] || this.state.winer) {
            // 该square已经设置过值了，或游戏已经结束，都不能再修改值
            return;
        }

        // React官方极力推荐不要直接修改原来的数组，而是创建一个数组的copy，在新的copy上去修改。
        const nextSquares = this.state.squareValues.slice();
        
        if(this.xIsNext) {
            nextSquares[i] = "X";
            this.xIsNext = false;
        } else {
            nextSquares[i] = "O";
            this.xIsNext = true;
        }
        
        this.setState({
            squareValues: nextSquares,
            winer: this.calculateWinner(nextSquares)
        });
    }

    render() {
        return (
            // 可以使用<></>包裹多个jsx元素，不是必须在最外层使用div标签。
            // 这样生成的html代码就不会在外层多一个div了。
            <>
                <div className="board-row">
                    <Square value={this.state.squareValues[0]} 
                            onSquareClick={() => {this.handleSquareClick(0)}}
                    />
                    <Square value={this.state.squareValues[1]}
                            onSquareClick={() => {this.handleSquareClick(1)}}
                    />
                    <Square value={this.state.squareValues[2]}
                            onSquareClick={() => {this.handleSquareClick(2)}}
                    />
                </div>
                <div className="board-row">
                    <Square value={this.state.squareValues[3]}
                            onSquareClick={() => {this.handleSquareClick(3)}}
                    />
                    <Square value={this.state.squareValues[4]}
                            onSquareClick={() => {this.handleSquareClick(4)}}
                    />
                    <Square value={this.state.squareValues[5]}
                            onSquareClick={() => {this.handleSquareClick(5)}}
                    />
                </div>
                <div className="board-row">
                    <Square value={this.state.squareValues[6]}
                            onSquareClick={() => {this.handleSquareClick(6)}}
                    />
                    <Square value={this.state.squareValues[7]}
                            onSquareClick={() => {this.handleSquareClick(7)}}
                    />
                    <Square value={this.state.squareValues[8]}
                            onSquareClick={() => {this.handleSquareClick(8)}}
                    />
                </div>
                <br/>
                <h3 style={{color: 'blue'}}>Winer is {this.state.winer}</h3>
            </>
        )
    }
}

export default Board;