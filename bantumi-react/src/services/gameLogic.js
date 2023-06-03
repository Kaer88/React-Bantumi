export default class Game {
    constructor() {
        this.board = [
            {
                pot: 0,
                owner: 0
            },
            {
                pot: 0,
                owner: 0
            },
            {
                pot: 0,
                owner: 0
            },
            {
                pot: 0,
                owner: 0
            },
            {
                pot: 0,
                owner: 0
            },
            {
                pot: 0,
                owner: 0
            },
            {
                pot: 0,
                owner: 0,
                scorePot: true
            },
            {
                pot: 0,
                owner: 1
            },
            {
                pot: 0,
                owner: 1
            },
            {
                pot: 0,
                owner: 1
            },
            {
                pot: 0,
                owner: 1
            },
            {
                pot: 0,
                owner: 1
            },
            {
                pot: 0,
                owner: 1
            },
            {
                pot: 0,
                owner: 1,
                scorePot: true
            },


        ]

        this.gameVars = {
            handIndex: 0,
            currentPlayer: 0,
            player1SumOfBeans: 0,
            player2SumOfBeans: 0,
        }
    }

    init() {

        for (let i = 0; i < this.board.length; i++) {
            if (!Object.keys(this.board[i]).includes("scorePot")) {

                this.board[i].pot = 9

            } else {
                this.board[i].pot = 0;
            }
        }

        this.gameVars = {
            handIndex: 0,
            currentPlayer: 0,
            player1SumOfBeans: 0,
            player2SumOfBeans: 0,
        }

        return (this.board)
    }


    pickAPot(idx, player) {
        if (this.board[idx].pot === 0) return;


        if (this.gameVars.currentPlayer === player && this.board[idx].owner === this.gameVars.currentPlayer) {
            let nextPotIdx = idx + 1
            let numberOfSteps = this.board[idx].pot;
            this.board[idx].pot = 0;

            while (numberOfSteps != 0) {

                if (nextPotIdx === 14) nextPotIdx = 0;
                if (Object.keys(this.board[nextPotIdx]).includes("scorePot") && this.board[nextPotIdx].owner != player) {
                    
                    nextPotIdx += 1

                    if (nextPotIdx >= 14) nextPotIdx = 0;
              
                    this.board[nextPotIdx].pot++
                    nextPotIdx += 1
                    numberOfSteps--
                } else {
                    this.board[nextPotIdx].pot++
                    nextPotIdx++
                    numberOfSteps--
                }

            }

            // lépés utáni vizsgálatok, következő játékos megállapítása 
            this.gameVars.currentPlayer = this.gameVars.currentPlayer === 0 ? 1 : 0;

        }


    }

    getBoardState() {
        return Array.from(this.board)
    }

    getGameVars() {
        return this.gameVars
    }



}