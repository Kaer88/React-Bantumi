

const players = {
    "player1": {
        score: 0,
    },
    "player2": {
        score: 0,
    }
}

const board = [
    {
        beans: 4
    },
    {
        beans: 4
    },
    {
        beans: 4
    },
    {
        beans: 4
    },
    {
        beans: 4
    },
    {
        beans: 4
    },
    {
        owner: 0,
        beans: 0
    },
]


function init() {
    let app = document.querySelector("#app");
    const container1 = document.createElement("div")
    container1.classList.add("player1-area")
    const container2 = document.createElement("div")
    container2.classList.add("player2-area")

    board.map(pot => {


        const div = document.createElement("div");
        div.innerHTML = pot.beans;
        !pot.owner ? div.classList.add("pot") : div.classList.add("player1-big-pot")
        if (pot.owner) pot.owner = 1
        container1.append(div)


    })
    board.map(pot => {

        const div = document.createElement("div");
        div.innerHTML = pot.beans;
        !pot.owner ? div.classList.add("pot") : div.classList.add("player2-big-pot")
        if (pot.owner) pot.owner = 2
        container2.append(div)
        

    })
    app.append(container2)
    app.append(container1)
    
}
init()