import React, { useContext, useState } from 'react'
import Pot from './Pot'
import BigPot from './BigPot'
import { GameContext } from '../contexts/gameContext'
import Game from '../services/gameLogic'

const game = new Game()

export default function GameBoard() {

    const { gameContext, setGameContext } = useContext(GameContext)
    const [gameBoard, setGameBoard] = useState([])

    const handleInitBtn = () => {

        setGameBoard(game.init())
    }
    console.log("gameboard: ", gameBoard)

    const handleChoice = (idx) => {



    }


    return (
        <>
            <button onClick={handleInitBtn}>Innit</button>
            {
                gameBoard.length != 0 &&

                <div id="gameboard">
                    <div id="player1-area">
                        {
                            gameBoard.map((pot, idx) => {
                                if (idx < 7) {
                                    return (
                                        !Object.keys(pot).includes("owner") ? <Pot beans={pot.pot} onClick={() => handleChoice(idx)} /> : <BigPot beans={pot.bigPot} />
                                    )
                                }

                            })
                        }

                    </div>
                    <div id="player2-area">
                        {
                            gameBoard.map((pot, idx) => {
                                if (idx >= 7) {
                                    return (
                                        !Object.keys(pot).includes("owner") ? <Pot beans={pot.pot} onClick={() => handleChoice(idx)} /> : <BigPot beans={pot.bigPot} />
                                    )
                                }

                            })
                        }

                    </div>


                </div>
            }
        </>
    )

}