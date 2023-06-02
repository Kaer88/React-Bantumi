import React, { useContext } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'
import { GameContext, GameContextProvider } from './contexts/gameContext'

function App() {


  return (
    <div className='app'>
      <GameContextProvider>
        <GameBoard />
      </GameContextProvider>

    </div>
  )
}

export default App
