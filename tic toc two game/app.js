var turn = 1;

function game(turnn){
 
    if(turn == 1){
        turnn.innerHTML="x"
        turn = 2;
        turnn.classList.add("disable");
       turnn.id="x";
       console.log(turnn.id="x")
    }

    else if (turn == 2){
        turnn.innerHTML ="o";
        turn=1;
        turnn.id="o";
        turnn.classList.add("disable");
    }
    var col = document.getElementsByClassName("col")
    let winingcombination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let a =0;a<=7;a++){
        let b = winingcombination[a];

        if(col[b[0]].id == "" || col[b[1]].id == "" || col[b[2]].id == ""){
            continue;
        }
        else if(col[b[0]].id == "x" && col[b[1]].id == "x" && col[b[2]].id == "x"){
            var x = document.getElementById("x")
            x.classList.remove("xx")
            
        }
        else if(col[b[0]].id == "o" && col[b[1]].id == "o" && col[b[2]].id == "o"){
            var o = document.getElementById("o")
            o.classList.remove("oo")
        }
        else{
            continue;
        }
    }
   

}

function reset(){
    var row = document.getElementById("row");
    var roww = document.getElementById("roww");
    var rowww = document.getElementById("rowww");
    row.children[0].innerHTML="";
    row.children[1].innerHTML="";
    row.children[2].innerHTML="";
    roww.children[0].innerHTML="";
    roww.children[1].innerHTML="";
    roww.children[2].innerHTML="";
    rowww.children[0].innerHTML="";
    rowww.children[1].innerHTML="";
    rowww.children[2].innerHTML="";
    row.children[0].classList.remove("disable");
    row.children[1].classList.remove("disable");
    row.children[2].classList.remove("disable");
    roww.children[0].classList.remove("disable");
    roww.children[1].classList.remove("disable");
    roww.children[2].classList.remove("disable");
    rowww.children[0].classList.remove("disable");
    rowww.children[1].classList.remove("disable");
    rowww.children[2].classList.remove("disable");
    
    var x = document.getElementById("x")
    x.classList.add("xx")

    var o = document.getElementById("o")
    o.classList.add("oo")
}

let winningfunc = ()=>{
    
}
