export default class Game {
    constructor() {
        this.board = [
            { pot: 0 },
            { pot: 0 },
            { pot: 0 },
            { pot: 0 },
            { pot: 0 },
            { pot: 0 },
            {
                pot: 0,
                owner: 1
            },
            { pot: 0 },
            { pot: 0 },
            { pot: 0 },
            { pot: 0 },
            { pot: 0 },
            { pot: 0 },
            {
                pot: 0,
                owner: 2
            },


        ]
    }

    init() {

        for (let i = 0; i < this.board.length; i++) {
            if (!Object.keys(this.board[i]).includes("owner")) {

                this.board[i].pot = 4

            } else {
                this.board[i].pot = 0;
            }
        }
        
        return (this.board)
    }


    pickAPot(idx) {
        
        if(this.board[idx].pot === 0) return;

        let nextPotIdx = idx + 1
        let numberOfSteps = this.board[idx].pot;
        this.board[idx].pot = 0;

        while (numberOfSteps != 0) {
            if (nextPotIdx === 14) nextPotIdx = 0;
            if (!Object.keys(this.board[nextPotIdx]).includes("owner")) {
                this.board[nextPotIdx].pot++
                nextPotIdx++
                numberOfSteps-- 
            } else {
                this.board[nextPotIdx].pot++
                nextPotIdx++
                numberOfSteps-- 
            }

        }
       
    }

    getBoardState() {
        return Array.from(this.board)
    }



}