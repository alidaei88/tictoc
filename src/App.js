import { useState } from 'react';
import './App.css';
import Square from './Components/Square/Square';

function App() {

  const [squares, setSquares] = useState(Array(9).fill(""));
  const [player, setPlayer] = ("X")

  const clickHandle = (index) => {
    
    
    const updatedSquares = [...squares]
    updatedSquares[index] = player
    setSquares(updatedSquares);

    if (player==="x") {setPlayer("O")}
    else if (player==="O") {setPlayer("X")};
  }


  return (
    <div className="App">

      {
        squares.map((item, index) => <Square key={index} index={index} value={ item } clickHandle={  clickHandle } />)
      }

    </div>
  );
}

export default App;
