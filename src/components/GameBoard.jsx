import React, { useContext, useEffect, useState } from 'react'
import Pot from './Pot'

import { GameContext } from '../contexts/gameContext'
import Game from '../services/gameLogic'

const game = new Game()

export default function GameBoard() {

    const { gameContext, setGameContext } = useContext(GameContext)
    const [gameBoard, setGameBoard] = useState([])
 
    const handleInitBtn = () => {

        const newGame = game.init()
        setGameBoard(newGame)
        setGameContext(game.getGameVars())
    }


    const handleChoice = (idx) => {
        game.pickAPot(idx, gameContext.currentPlayer)
        const newBoardState = game.getBoardState()
        const newGameVars = game.getGameVars()
        setGameBoard(newBoardState)
        setGameContext(newGameVars)

    }
    console.log(gameContext)

    return (
        <div>
            <button onClick={handleInitBtn}>Innit</button>
            
         
            {

                gameBoard.length != 0 &&
                <>

                    <div id="gameboard">

                        <div id="player1-area">
                            {

                                gameBoard.map((pot, idx) =>
                                    idx < 7 &&
                                    (
                                        !Object.keys(pot).includes("scorePot")
                                            ?
                                            <Pot key={`1-${idx}`} beans={pot.pot} onClick={() => handleChoice(idx)} className={`pot ${gameContext.currentPlayer === 0 && "active"}`} />
                                            :
                                            <Pot key={`2-${idx}`} beans={pot.pot} className="big-pot-1 big-pot" />
                                    )

                                )
                            }

                        </div>
                        <div id="player2-area">

                            {
                                gameBoard.map((pot, idx) =>
                                    idx >= 7 &&

                                    (
                                        !Object.keys(pot).includes("scorePot")
                                            ?
                                            <Pot key={`2-${idx}`} beans={pot.pot} onClick={() => handleChoice(idx)} className={`pot ${gameContext.currentPlayer === 1 && "active"}`} />
                                            :
                                            <Pot key={`2-${idx}`} beans={pot.pot} className="big-pot-2 big-pot" />
                                    )


                                )
                            }

                        </div>

                    </div>
                </>
            }
        </div>
    )

}