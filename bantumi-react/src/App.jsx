import React, { useContext } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'
import { GameContext, GameContextProvider } from './contexts/gameContext'
import Textbox from './components/Textbox'

function App() {


  return (
    <div className='app'>
      <GameContextProvider>
        <Textbox />
        <GameBoard />

      </GameContextProvider>

    </div>
  )
}

export default App
