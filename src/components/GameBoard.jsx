import React, { useContext, useEffect, useState } from 'react'
import Pot from './Pot'
import woodBG from '../assets/stock-photo-rustic-wood-wall-texture-background.jpeg'
import { GameContext } from '../contexts/gameContext'
import Game from '../services/gameLogic'

const game = new Game()

export default function GameBoard() {

    const { gameContext, setGameContext } = useContext(GameContext)
    const [gameBoard, setGameBoard] = useState([])
    const [singlePlayer, setSinglePlayer] = useState(true)


    const handleInitBtn = () => {

        const newGame = game.init()
        setGameBoard(newGame)
        setGameContext(game.getGameVars())
    }

    useEffect(() => {
        setGameBoard(game.board)
    }, [])

    useEffect(() => {
        if (gameContext.currentPlayer === 1 && gameContext.gameEnd === false && singlePlayer) {
            setTimeout(() => {
                console.log("hemár")

                let choice = Math.floor(Math.random() * (13 - 7) + 7)
                while (gameBoard[choice].pot === 0) {

                    choice = Math.floor(Math.random() * (13 - 7) + 7)
                }

                game.pickAPot(choice, gameContext.currentPlayer)
                const newBoardState = game.getBoardState()
                const newGameVars = game.getGameVars()
                setGameBoard(newBoardState)
                setGameContext(newGameVars)
            }, 1000)
        }
    })

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
            <div id="game-controls">
                <button className='start-btn' onClick={handleInitBtn}>Start!</button>
                <button onClick={() => { setSinglePlayer(!singlePlayer) }} disabled={gameContext.gameEnd ? false : true}>Játékmód váltása</button>
                <p>{singlePlayer ? "1 játékos mód" : "2 játékos mód"}</p>
            </div>
            {

                gameBoard.length != 0 &&
                <>

                    <div id="gameboard">

                        <div id="player1-area" className={`${gameContext.currentPlayer === 0 && "active2"}`} >
                            <span className='player1-tag'>1. Játékos</span>

                            {

                                gameBoard.map((pot, idx) =>
                                    idx < 7 &&
                                    (
                                        !Object.keys(pot).includes("scorePot")
                                            ?
                                            <Pot key={`1-${idx}`} beans={pot.pot} onClick={() => handleChoice(idx)} className={`pot ${gameContext.currentPlayer === 0 && "active"}`} />
                                            :
                                            <Pot key={`2-${idx}`} beans={pot.pot} className={`big-pot-1 big-pot ${gameContext.currentPlayer === 0 && "active"}`} />
                                    )

                                )
                            }

                        </div>
                        <div id="player2-area" className={`${gameContext.currentPlayer === 1 && "active2"}`}>
                            <span className='player2-tag'>2. Játékos</span>
                            {
                                gameBoard.map((pot, idx) =>
                                    idx >= 7 &&

                                    (
                                        !Object.keys(pot).includes("scorePot")
                                            ?
                                            <Pot key={`2-${idx}`} beans={pot.pot} onClick={!singlePlayer ? () => handleChoice(idx) : null} className={`pot ${gameContext.currentPlayer === 1 && "active"}`} />
                                            :
                                            <Pot key={`2-${idx}`} beans={pot.pot} className={`big-pot-2 big-pot ${gameContext.currentPlayer === 1 && "active"}`} />
                                    )


                                )
                            }

                        </div>

                    </div>
                </>
            }

            {
                (gameContext.gameEnd && gameContext.player1SumOfBeans != 0) &&
                <div id="win-message">
                    {game.getWinner() === 0 ? <p>Az első játékos nyert!</p> : <p>A második játékos nyert!</p>}
                    <p>Nyomd meg a Startot egy új játékhoz!</p>
                </div>
            }

        </div>
    )

}