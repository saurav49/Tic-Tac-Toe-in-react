import React, {useState} from "react";
import Square from "../Square/Square";

// Board
const Board = () => {
    // BoardState
    const [boardSquare, setBoardSquare] = useState(Array(9).fill(null));
    // TurnState
    const [isXturn, setIsXturn] = useState(true);

  // Create a handleClick Function
  const handleClick = (index) => {
      // mutate the state 
      const newBoard = [...boardSquare];

      // if value is already there then return
      if(winner || newBoard[index]) return;
      // put x or o in it
      newBoard[index] = isXturn ? "X" : "O";
      // setstate the board state
      setBoardSquare(newBoard);
      // setstate the next turn
      setIsXturn(!isXturn);
  }

  const renderSquare = (index) => {
      return(
          <Square value={boardSquare[index]} onclick = {() => handleClick(index)}/>
      )
  }

  const calculateWinner = (board) => {
      const winningCombo = [
          [0, 1, 2],
          [3, 4, 5], 
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 7],
          [2, 4, 6]
      ]

      for(let index=0; index<winningCombo.length; index++) {
          const [a, b, c] = winningCombo[index];

          if(board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
          }
        }
        return null;
  }

  let winner = calculateWinner(boardSquare);
  
//   console.log(winner);
  let whoseTurn = winner ? `Winner is ${winner}` : `Next Player : ${isXturn ? "X" : "O"}`;
  
  return(
      <React.Fragment>
        <div className="board">
            <div className="status">
                {whoseTurn}
            </div>
            <div className="boardRow">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
            <div className="boardRow">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
            <div className="boardRow">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
    </React.Fragment>

  )
}

export default Board;