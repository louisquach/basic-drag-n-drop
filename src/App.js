import React from 'react'
import Board from './components/Board'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Board id = "board-1" className="board" >
        <Card id='card-1' className='card' draggable="true">
          <h5>Card 1</h5>
        </Card>
      </Board>

      <Board id = 'board-2' className="board" >
        <Card id='card-2' className='card' draggable="true">
          <h5>Card 2</h5>
        </Card>
      </Board>

    <Board id ='board-3' className="board" >
      <Card id='card-3' className='card' draggable="true">
        <h5>Card 3</h5>
      </Card>
    </Board>
    </div>
  );
}

export default App;
