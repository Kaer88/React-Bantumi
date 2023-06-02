import React, { useContext, useEffect, useState } from 'react'
import Pot from './Pot'

import { GameContext } from '../contexts/gameContext'
import Game from '../services/gameLogic'
import Hand from './Hand'

const game = new Game()

export default function GameBoard() {

    const { gameContext, setGameContext } = useContext(GameContext)
    const [gameBoard, setGameBoard] = useState([])
    const [currentPlayer, setCurrentPlayer] = useState(0)


    const handleInitBtn = () => {
      
        const newGame = game.init()
        setGameBoard(newGame)
        setGameContext({
            ...gameContext,
            currentPlayer: 1
        })
    }


    const handleChoice = (idx) => {
        game.pickAPot(idx)
        const newGameState = game.getBoardState()
        setGameBoard(newGameState)
        setGameContext(gameContext.currentPlayer === 1 ? 2 : 1)

    }


    return (
        <>
            <button onClick={handleInitBtn}>Innit</button>  
            <Hand />
            {
                gameBoard.length != 0 &&

                <div id="gameboard">
                    <div id="player1-area">
                        {
                          
                            gameBoard.map((pot, idx) =>
                            idx < 7 &&
                            (
                                !Object.keys(pot).includes("owner") ? <Pot key={`1-${idx}`} beans={pot.pot} onClick={() => handleChoice(idx)} /> : <Pot key={`2-${idx}`} beans={gameBoard[idx].pot} className="big-pot-1 big-pot"/>
                            )

                            )
                        }

                    </div>
                    <div id="player2-area">
                        {
                            gameBoard.map((pot, idx) =>
                                idx >= 7 &&

                                (
                                    !Object.keys(pot).includes("owner") ? <Pot key={`2-${idx}`} beans={pot.pot} onClick={() => handleChoice(idx)} /> : <Pot key={`2-${idx}`} beans={gameBoard[idx].pot} className="big-pot-2 big-pot" />
                                )


                            )
                        }

                    </div>

                </div>
            }
        </>
    )

}