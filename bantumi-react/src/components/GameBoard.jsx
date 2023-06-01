import React, { useContext } from 'react'
import Pot from './Pot'
import BigPot from './BigPot'

export default function GameBoard() {



    return (
        <>
            <div id="player1">
                <Pot beans={3} />
                <Pot beans={3} />
                <Pot beans={3} />
                <Pot beans={3} />
                <Pot beans={3} />
                <Pot beans={3} />
                <BigPot beans={0} />
            </div>
            <div id="player2">
                <Pot beans={3} />
                <Pot beans={3} />
                <Pot beans={3} />
                <Pot beans={3} />
                <Pot beans={3} />
                <Pot beans={3} />
                <BigPot beans={0} />
            </div>
        </>
    )

}