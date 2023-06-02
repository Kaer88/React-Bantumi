import React, { useContext, useEffect, useState } from 'react'
import Pot from './Pot'
import BigPot from './BigPot'
import { GameContext } from '../contexts/gameContext'
import Game from '../services/gameLogic'

const game = new Game()

export default function GameBoard() {

    const { gameContext, setGameContext } = useContext(GameContext)
    const [gameBoard, setGameBoard] = useState([])



    const handleInitBtn = () => {
        const newGame = game.init()


        setGameBoard(newGame)
    }


    const handleChoice = (idx) => {
        game.pickAPot(idx)
        const newGameState = game.getBoardState()

        console.log(newGameState)
        setGameBoard(newGameState)


    }


    return (
        <>
            <button onClick={handleInitBtn}>Innit</button>
            {
                gameBoard.length != 0 &&

                <div id="gameboard">
                    <div id="player1-area">
                        {
                          
                            gameBoard.map((pot, idx) =>
                            idx < 7 &&
                            (
                                !Object.keys(pot).includes("owner") ? <Pot key={`1-${idx}`} beans={pot.pot} onClick={() => handleChoice(idx)} /> : <BigPot key={`2-${idx}`} beans={gameBoard[idx].bigPot} />
                            )

                            )
                        }

                    </div>
                    <div id="player2-area">
                        {
                            gameBoard.map((pot, idx) =>
                                idx >= 7 &&

                                (
                                    !Object.keys(pot).includes("owner") ? <Pot key={`2-${idx}`} beans={pot.pot} onClick={() => handleChoice(idx)} /> : <BigPot key={`2-${idx}`} beans={gameBoard[idx].bigPot} />
                                )


                            )
                        }

                    </div>

                </div>
            }
        </>
    )

}