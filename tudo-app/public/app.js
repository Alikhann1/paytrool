var orderlist = document.getElementById("orderlist");

function insert(){
    var input = document.getElementById("inputtext");
    var li = document.createElement("li");
    var litext = document.createTextNode(input.value);
    li.appendChild(litext);
    orderlist.appendChild(li);
    var divv = document.createElement("div");
    var editbutton = document.createElement("button");
    var editbuttontext = document.createTextNode("Edit Text");
    editbutton.appendChild(editbuttontext);
    divv.appendChild(editbutton);
    // li.appendChild(editbutton);
    var deletbutton = document.createElement("button");
    var deletbuttontext = document.createTextNode("Delet Raw");
    deletbutton.appendChild(deletbuttontext);
    divv.appendChild(deletbutton);
    // li.appendChild(deletbutton);
     
    
   
     li.appendChild(divv);
     console.log(document.body.innerHTML);

   


    input.value=""
    deletbutton.setAttribute("onclick","delet(this)");
    editbutton.setAttribute("onclick","edit(this)");

    editbutton.setAttribute("class","editbtn")
    divv.setAttribute("class","divv")
    
}

function deletall(){
    orderlist.innerHTML=""
}

function delet(e){
    console.log(e)
e.parentNode.parentNode.remove();
}

function edit(f){
    var reedit = prompt("Enter New Text");
    var editt = reedit.charAt(0).toUpperCase() + reedit.slice(1);
    f.parentNode.parentNode.firstChild.nodeValue = editt;
}




