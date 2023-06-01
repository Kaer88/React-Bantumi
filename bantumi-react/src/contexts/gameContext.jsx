import { createContext, useState } from "react";
import React from 'react'

export const GameContext = createContext({})

export function GameContextProvider({ children }) {
    const [gameContext, setGameContext] = useState({
        handposition: 0,
        currentPlayer: 0,
        player1SumOfBeans: 0,
        player2SumOfBeans:0,
        
    })

    return (
        <GameContext.Provider value={{ gameContext, setGameContext }}>
            {children}
        </GameContext.Provider>
    )

}