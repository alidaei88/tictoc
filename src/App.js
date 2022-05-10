import { useState } from 'react';
import './App.css';
import Square from './Components/Square/Square';

function App() {

  const [squares, setSquares] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X")
  const [winer, setWiner] = useState(null)

  const clickHandle = (index) => {

    if (!squares[index]) {
      const updatedSquares = [...squares]
      updatedSquares[index] = player
      setSquares(updatedSquares);
      setPlayer(prev => prev === "X" ? "O" : "X")
      whoWine(updatedSquares)
    }
    console.log(winer)
  }

  function whoWine(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    if (squares.every(item => item !== null)) {
      return setWiner("")
    } else {
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return setWiner(squares[a]);
        }
      }
    }
  }

  console.log(winer)
  return (
    <div className="App">
      <h1 style={{ color: 'white', fontSize: 48 }}>Tic Toc Toe</h1>
      <h3 style={{ color: "white" }}>Game turn: <span style={{ color: "green", paddingLeft: 10 }}>{player}</span></h3>
      <div className="board">
        {
          squares.map((item, index) => <Square key={index} index={index} value={item} clickHandle={clickHandle} />)
        }
      </div>
      {winer && <h3 style={{ color: "green" }}> player {winer} Wone</h3>}
    </div>
  );
}

export default App;
