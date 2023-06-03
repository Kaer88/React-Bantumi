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

        // this.board = [
        //     {
        //         pot: 0,
        //         owner: 0
        //     },
        //     {
        //         pot: 0,
        //         owner: 0
        //     },
        //     {
        //         pot: 0,
        //         owner: 0
        //     },
        //     {
        //         pot: 0,
        //         owner: 0
        //     },
        //     {
        //         pot: 0,
        //         owner: 0
        //     },
        //     {
        //         pot: 5,
        //         owner: 0
        //     },
        //     {
        //         pot: 0,
        //         owner: 0,
        //         scorePot: true
        //     },
        //     {
        //         pot: 0,
        //         owner: 1
        //     },
        //     {
        //         pot: 0,
        //         owner: 1
        //     },
        //     {
        //         pot: 0,
        //         owner: 1
        //     },
        //     {
        //         pot: 0,
        //         owner: 1
        //     },
        //     {
        //         pot: 0,
        //         owner: 1
        //     },
        //     {
        //         pot: 9,
        //         owner: 1
        //     },
        //     {
        //         pot: 0,
        //         owner: 1,
        //         scorePot: true
        //     },


        // ]


        for (let i = 0; i < this.board.length; i++) {
            if (!Object.keys(this.board[i]).includes("scorePot")) {

                this.board[i].pot = 4

            } else {
                this.board[i].pot = 0;
            }
        }

        this.gameVars = {
            handIndex: 0,
            currentPlayer: 0,
            player1SumOfBeans: 0,
            player2SumOfBeans: 0,
            gameEnd: false
        }

        return (this.board)
    }


    getBoardState() {
        return Array.from(this.board)
    }

    getGameVars() {
        return this.gameVars
    }

    getWinner() {
        if (this.gameVars.gameEnd) {
            return this.gameVars.player1SumOfBeans > this.gameVars.player2SumOfBeans ? 0 : 1
        }
    }


    pickAPot(idx, player) {

        if (this.gameVars.gameEnd) return
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

            const indexOfLastPot = nextPotIdx - 1

            console.log(this.board[indexOfLastPot])

            if (Object.keys(this.board[indexOfLastPot]).includes("scorePot") && this.board[indexOfLastPot].owner === player) {
                return

            } else if (
                !Object.keys(this.board[indexOfLastPot]).includes("scorePot") && this.board[indexOfLastPot].pot === 1 && this.board[indexOfLastPot].owner === player
            ) {
                const currenPlayerPot = this.board[this.board.findIndex(pot => pot.scorePot && pot.owner === player)]

                currenPlayerPot.pot += this.board[this.board.length - 2 - indexOfLastPot].pot + this.board[indexOfLastPot].pot
                this.board[this.board.length - 2 - indexOfLastPot].pot = 0
                this.board[indexOfLastPot].pot = 0;
                this.gameVars.currentPlayer = this.gameVars.currentPlayer === 0 ? 1 : 0;

            } else {

                this.gameVars.currentPlayer = this.gameVars.currentPlayer === 0 ? 1 : 0;

            }


        }


        // lépés utáni vizsgálatok - van-e olyan oldal, ahol 0? 
        let gameEnder = false;

        const player1Pots = this.board.slice(0, 6)
        const player2Pots = this.board.slice(7, 13)

        const player1BeansRemaining = player1Pots.reduce((acc, curr) => acc += curr.pot, 0)
        const player2BeansRemaining = player2Pots.reduce((acc, curr) => acc += curr.pot, 0)


        if (player1BeansRemaining === 0 || player2BeansRemaining === 0) {


            gameEnder = true;


            for (let i = 0; i < player1Pots.length; i++) {
                player1Pots[i].pot = 0
            }
            this.board[6].pot += player1BeansRemaining



            for (let i = 0; i < player2Pots.length; i++) {
                player2Pots[i].pot = 0
            }
            this.board[13].pot += player2BeansRemaining

        }

        this.gameVars.player1SumOfBeans = this.board[6].pot
        this.gameVars.player2SumOfBeans = this.board[13].pot

        this.gameVars.gameEnd = gameEnder;

    }





}