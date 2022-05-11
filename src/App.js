import { useState } from 'react';
import './App.css';
import Square from './Components/Square/Square';

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X")
  const [winner, setWinner] = useState(null)
  const [resultDisplay, setResultDisplay] = useState(false)
  const [xScore, setXScore] = useState(0)
  const [oScore, setOScore] = useState(0)

  const clickHandle = (index) => {

    if (!squares[index]) {
      const updatedSquares = [...squares]
      updatedSquares[index] = player
      setSquares(updatedSquares);
      setPlayer(prev => prev === "X" ? "O" : "X")
      whoWine(updatedSquares)
    }
    console.log("player turn:", player)
  }

  function whoWine(squares) {
    console.log("test")
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
      setWinner("")
      setResultDisplay(true)
      setTimeout(() => {
        setSquares(Array(9).fill(null))
        setResultDisplay(false)

      }, 500);

    } else {
      for (let i = 0; i < lines.length; i++) {
        let [a, b, c] = lines[i];
        console.log(a, b, c)
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          setWinner(squares[a]);
          squares[0] === "X" ? setXScore(() => xScore + 1) : setOScore(() => oScore + 1);
          setResultDisplay(true);
          squares[0] === "X" ? setSquares(Array(9).fill("X")) : setSquares(Array(9).fill("O"));
          setTimeout(() => {
            setSquares(Array(9).fill(null))
            setResultDisplay(false)
          }, 500);

          console.log("squares[a]:", squares[a]);
        }
      }
    }
  }

  const resetHandler = () => {
    setSquares(Array(9).fill(null));
    setResultDisplay(false);
    setOScore(0);
    setXScore(0);
  }

  console.log("winner:", winner)
  return (
    <div className="App">
      <h1 style={{ color: 'white', fontSize: 48 }}>Tic Toc Toe</h1>
      <h3 style={{ color: "white" }}>Game turn: <span style={{ color: "green", paddingLeft: 10 }}>{player}</span></h3>
      <div className="board">
        {
          squares.map((item, index) => <Square key={index} index={index} value={item} clickHandle={clickHandle} />)
        }
      </div>

      <div className={`${resultDisplay ? "show" : "hide"}`}>
        {
          winner ?
            <h3 style={{ color: "green" }}> player {winner} is Winner</h3>
            :
            <h3 style={{ color: "white" }}> DRAW! </h3>
        }
      </div>

      <dive className="score">
        <div className='xScore'>
          {xScore}
        </div>
        <div className='reset'>
          <button className='resetBtn' onClick={resetHandler}>Reset</button>
        </div>
        <div className='oScore'>
          {oScore}
        </div>
      </dive>

    </div>
  );
}

export default App;
