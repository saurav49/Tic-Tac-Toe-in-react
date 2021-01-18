import React, {useState} from "react";
import Square from "../Square/Square";

// Board
const Board = () => {
    //state
    // BoardState
    const [boardSquare, setBoardSquare] = useState([Array(9).fill(null)]);
    // TurnState
    const [isXturn, setIsXturn] = useState(true);

  // Create a handleClick Function
  const handleClick = (index) => {
      // mutate the state 
      let newBoard = [...boardSquare]

      // if value is already there then return
      if(newBoard[index]) {
          return
      }
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
  
  return(
    <div>
        <div></div>
        <div>{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
        <div>{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
        <div>{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
    </div>
  )
}

export default Board;