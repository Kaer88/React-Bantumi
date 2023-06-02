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
                bigPot: 0,
                owner: 1
            },
            { pot: 0 },
            { pot: 0 },
            { pot: 0 },
            { pot: 0 },
            { pot: 0 },
            { pot: 0 },
            {
                bigPot: 0,
                owner: 2
            },


        ]
    }

    init() {
        
        for (let i = 0; i < this.board.length; i++) {
            if(!Object.keys(this.board[i]).includes("owner")) {
                
                this.board[i].pot = 4
              
            } else {
                this.board[i].bigPot = 0;
            }
        }
      
        return (this.board)
        }

       
       
           
    

}