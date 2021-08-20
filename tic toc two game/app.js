
var playerx =document.getElementById("playerx");
var playero =document.getElementById("playero");
var wining =document.getElementById("wining");
var x =document.getElementById("x");
var o =document.getElementById("o");
var draw =document.getElementById("draw");
var tic =document.getElementById("tic");
var turns =document.getElementById("turns");
var Reset_button =document.getElementById("Reset_button");
var turn = 1;

function game(turnn) {
    

    if (turn == 1) {
        
        turnn.innerHTML = "x"
        turn = 2;
        turnn.classList.add("disable");
        turnn.id = "x";
        playerx.classList.remove("turn");
        playero.classList.add("turn");
    }

    else if (turn == 2) {
        turnn.innerHTML = "o";
        turn = 1;
        turnn.id = "o";
        turnn.classList.add("disable");
        playerx.classList.add("turn");
        playero.classList.remove("turn");
        
    }
    var col = document.getElementsByClassName("col")
    console.log(col);
    let winingcombination = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let a = 0; a <= 7; a++) {
        let b = winingcombination[a];

        if (col[b[0]].id == "" || col[b[1]].id == "" || col[b[2]].id == "") {
            continue;
        }
        else if (col[b[0]].id == "x" && col[b[1]].id == "x" && col[b[2]].id == "x") {
            wining.classList.remove("display");
            x.classList.remove("display");
            tic.classList.add("display")
            turns.classList.add("display")
            playerx.classList.add("display")
            playero.classList.add("display")
            Reset_button.classList.add("display")

        }
        else if (col[b[0]].id == "o" && col[b[1]].id == "o" && col[b[2]].id == "o") {
            wining.classList.remove("display");
            o.classList.remove("display");
            tic.classList.add("display")
            turns.classList.add("display")
            playerx.classList.add("display")
            playero.classList.add("display")
            Reset_button.classList.add("display")
        }
        else if (col[0].id != "" && col[1].id != "" && col[2].id != "" && col[3].id != "" && col[4].id != ""&& col[5].id != "" && col[6].id != "" && col[7].id != "" && col[8].id != "") {
            wining.classList.remove("display");
            draw.classList.remove("display");
            tic.classList.add("display")
            turns.classList.add("display")
            playerx.classList.add("display")
            playero.classList.add("display")
            Reset_button.classList.add("display")
        }
        else {
            continue;
        }
    }


}

function reset() {
    window.location.reload();
    // var row = document.getElementById("row");
    // var roww = document.getElementById("roww");
    // var rowww = document.getElementById("rowww");
    // row.children[0].innerHTML="";
    // row.children[1].innerHTML="";
    // row.children[2].innerHTML="";
    // roww.children[0].innerHTML="";
    // roww.children[1].innerHTML="";
    // roww.children[2].innerHTML="";
    // rowww.children[0].innerHTML="";
    // rowww.children[1].innerHTML="";
    // rowww.children[2].innerHTML="";
    // row.children[0].classList.remove("disable");
    // row.children[1].classList.remove("disable");
    // row.children[2].classList.remove("disable");
    // roww.children[0].classList.remove("disable");
    // roww.children[1].classList.remove("disable");
    // roww.children[2].classList.remove("disable");
    // rowww.children[0].classList.remove("disable");
    // rowww.children[1].classList.remove("disable");
    // rowww.children[2].classList.remove("disable");

    // var x = document.getElementById("x")
    // x.classList.add("xx")

    // var o = document.getElementById("o")
    // o.classList.add("oo")
}



// if(turn == 1){
//     playerx.classList.add("turn")
//     turn == 2;
// }
// else if(turn == 2){
//     playerx.classList.remove("turn")
//     playero.classList.add("turn")
//     turn == 1;
// }
function exit(){
    window.location.reload();
}