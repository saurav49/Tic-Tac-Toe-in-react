import React, {useState} from "react";
import "../../App.css";
import Square from "../Square/Square";

const BoardGame = () => {

    let randomTurn = Math.floor(Math.random()*10);
    // var whoseTurn = "";
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXturn] = useState((randomTurn%2 === 0) ? "X" : "O");
    const [isSinglePlayer, setIsSinglePlayer] = useState(true);
    const [playerName, setPlayerName] = useState("");
    
    const handleClick = (index) => {
        let newBoard = [...board];
        if(newBoard[index]) return;

        if(isSinglePlayer) {
            newBoard[index] = isXTurn;
            setBoard(newBoard);
            setIsXturn(newBoard[index] === "X" ? "O" : "X")

            // bot player
            let randomPlace = Math.floor(Math.random() * (Math.floor(9)));
            newBoard[randomPlace] = isXTurn;
        }

        
        setBoard(newBoard);
        setIsXturn(newBoard[index] === "X" ? "O" : "X")
    }

    const renderSquare = (index) =>{
        return(
            <Square value={board[index]} onclick={() => handleClick(index)} />
        )
    };

    const handlePlayerName = (e) => {
        if(isSinglePlayer) {
            setPlayerName(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleSinglePlayer = () => {
        
        setIsSinglePlayer(true);

        let players  = [];
        
        <div className="formDiv">
            <form onSubmit={handleSubmit}>
                <input type="text" value={playerName} onChange={handlePlayerName}  name="player" id="player"/>
                <button>Submit</button>
            </form>
        </div>

        // let player = isXTurn;
        // let bot = isXTurn === "X" ? "O" : "X";

        // players.push(player);
        // players.push(bot);

    }

    const handleMultiPlayer = () => {

        setIsSinglePlayer(false);

        <form>
            <input type="text" name="player1" id="player1"/>
            <input type="text" name="player2" id="player2"/>
            <button>Submit</button>
        </form>
    }

    const winningAlgo = (board) => {

        const winningCombo = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for(let index=0; index < winningCombo.length; index+1) {
            const [a, b, c] = winningCombo[index];

            if(board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        return null;
    }

    let winner = winningAlgo(board);

    return(
        <div className="board">
            <h1>Tic-Tac-Toe</h1>
            <h2>{winner ? `Winner is {winner}` : ""}</h2>
            <div className="player-type">
                <button onclick={() => handleSinglePlayer()}>Single Player</button>
                <button onclick={() => handleMultiPlayer()}>Multiplayer</button>
            </div>
            <div className="board">
                <div className="boardRow">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
                <div className="boardRow">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
                <div className="boardRow">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
            </div>
        </div>
    )
};

export default BoardGame;